import Women from "../models/Women.js"
import AttendanceSchemaWomen from "../models/AttendenceWomen.js";
import moment from "moment";

export const registerWomanService = async (body) => {
    const { fullName, age, skill } = body;
    body.fullName = fullName.toLowerCase(); // Normalize fullName to lowercase
    if (!fullName || !age || !skill) throw new appError("Full name, age, and skill are required", 400);
    const woman = await Women.findOne({ fullName, age, skill });
    if (woman) return({success: false, message: `Woman with name ${fullName}, age ${age}, and skill ${skill} already exists`});
    const newWoman = await Women.create(body);
    return {success: true, message: "Women registered successfully", newWoman};
}

export const getWomenService = async (query) => {
    const { page = 1, limit = 10, sort = "-createdAt", ...filters } = query;

    // Clean up filters (remove empty strings or undefined)
    const filter = {};
    Object.keys(filters).forEach(key => {
        if (filters[key] !== undefined && filters[key] !== "") {
            filter[key] = filters[key];
        }
    });

    const skip = (parseInt(page) - 1) * parseInt(limit);

    const women = await Women.find(filter)
        .sort(sort)
        .skip(skip)
        .limit(parseInt(limit));

    return { success: true, message: "Women fetched successfully", women };
};

export const markAttendanceWomen = async (body) => {
    const {womanId, date, status} = body;

    if (!womanId || !date || ![0, 1].includes(status)) {
      return { success: false, message: "Invalid payload" };
    }

    const day = moment(date).format("DD"); // Extract day (01, 02, etc.)
    const month = moment(date).format("YYYY-MM"); // Extract month (YYYY-MM)

    let attendance = await AttendanceSchemaWomen.findOne({womanId, month});

    if (!attendance) {
      attendance = new AttendanceSchemaWomen({
        womanId,
        month,
        records: new Map(),
      });
    }

    attendance.records.set(day, {day: Number(day), status});

    // Count present/absent
    let present = 0,
      absent = 0,
      presentStreak = 0,
      absentStreak = 0;
    const sortedDays = Array.from(attendance.records.keys()).sort();

    for (let d of sortedDays) {
      const record = attendance.records.get(d);
      if (record.status === 1) present++;
      if (record.status === 0) absent++;
    }

    for (let i = sortedDays.length - 1; i >= 0; i--) {
      const record = attendance.records.get(sortedDays[i]);
      if (record.status === 1) {
        presentStreak++;
        absentStreak = 0;
      } else if (record.status === 0) {
        absentStreak++;
        presentStreak = 0;
      } else break;
    }

    attendance.present_days = present;
    attendance.absent_days = absent;
    attendance.current_present_streak = presentStreak;
    attendance.current_absent_streak = absentStreak;
    attendance.updatedAt = new Date();

    await attendance.save();

    return { success: true, message: "Attendance marked successfully", attendance };
};

export const getAttendanceWoman = async (query) => {
  try {
    const { womanId, month } = query;

    let filter = {};
    if (womanId) filter.womanId = womanId;
    if (month) filter.month = month;

    let attendanceData;

    if (Object.keys(filter).length > 0) {
      attendanceData = await AttendanceSchemaWomen.find(filter);
      if (attendanceData.length === 0) {
        return { success: false, message: "No matching attendance found" };
      }
    } else {
      attendanceData = await AttendanceSchemaWomen.find();
    }

    //find % of attendace = (present_days / total_days) * 100 and total_days = present_days + absent_days
    attendanceData = attendanceData.map((attendance) => {
      const totalDays = attendance.present_days + attendance.absent_days;
      const attendancePercentage =
        totalDays > 0
          ? ((attendance.present_days / totalDays) * 100).toFixed(2)
          : 0;

      return {
        ...attendance.toObject(),
        attendancePercentage,
      };
    });
    return { success: true, attendancePercentage: attendanceData };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Failed to fetch attendance" };
  }
};

export const updateWomanService = async (womanId, updateData) => {
    if (!womanId || !updateData) {
        return { success: false, message: "womanId and update data are required" };
    }

    const updatedWoman = await Women.findByIdAndUpdate(
        womanId,
        { $set: updateData },
        { new: true, runValidators: true }
    );

    if (!updatedWoman) {
        return { success: false, message: "Woman not found" };
    }

    return { success: true, message: "Woman updated successfully", updatedWoman };
};