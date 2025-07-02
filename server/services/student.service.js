import Student from "../models/Student.js";
import AttendanceStudent from "../models/AttendenceStudent.js";
import Result from "../models/Result.js";
import moment from "moment";

export const registerStudent = async (body) => {
  const {fullname, age, gender} = body;

  const existingStudent = await Student.findOne({
    fullName: fullname.tolowerCase(),
    age,
    gender,
  });
  if (existingStudent) {
    return {success: false, message: "Student already exists"};
  }

  try {
    const student = await Student.create({fullName: fullname, age, gender});
    return {success: true, message: "Student registered successfully", student};
  } catch (err) {
    console.error(err);
    return {success: false, message: "Student registration failed"};
  }
};

export const getAllStudents = async (query) => {
  try {
    const filter = {};
    if (query.fullName) filter.fullName = query.fullName;
    if (query.age) filter.age = query.age;
    if (query.gender) filter.gender = query.gender;
    if (query.status) filter.status = query.status;

    const students = await Student.find(filter).lean();
    return {success: true, students};
  } catch (error) {
    console.error(error);
    return {success: false, message: "Failed to fetch students"};
  }
};

export const markAttendance = async ({studentId, date, status}) => {
  try {
    if (!studentId || !date || ![0, 1].includes(status)) {
      return {success: false, message: "Invalid payload"};
    }

    const day = moment(date).format("DD");
    const month = moment(date).format("YYYY-MM");

    let attendance = await AttendanceStudent.findOne({studentId, month});
    if (!attendance) {
      attendance = new AttendanceStudent({
        studentId,
        month,
        records: new Map(),
      });
    }

    attendance.records.set(day, {day: Number(day), status});

    const sortedDays = Array.from(attendance.records.keys()).sort();
    let present = 0,
      absent = 0,
      presentStreak = 0,
      absentStreak = 0;

    for (let d of sortedDays) {
      const record = attendance.records.get(d);
      if (record.status === "1") present++;
      if (record.status === "0") absent++;
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

    return {success: true, attendance};
  } catch (err) {
    console.error(err);
    return {success: false, message: "Server error"};
  }
};

export const getAttendance = async (query) => {
  try {
    const filter = {};
    if (query.studentId) filter.studentId = query.studentId;
    if (query.month) filter.month = query.month;

    const attendanceData = await AttendanceStudent.find(filter).lean();
    if (attendanceData.length === 0) {
      return {success: false, message: "No matching attendance found"};
    }

    const formattedData = attendanceData.map((attendance) => {
      const totalDays = attendance.present_days + attendance.absent_days;
      const attendancePercentage =
        totalDays > 0
          ? ((attendance.present_days / totalDays) * 100).toFixed(2)
          : 0;
      return {...attendance, attendancePercentage};
    });

    return {success: true, attendance: formattedData};
  } catch (error) {
    console.error(error);
    return {success: false, message: "Failed to fetch attendance"};
  }
};

export const addMarks = async ({studentId, english, maths}) => {
  try {
    if (!studentId || !english || !maths) {
      return {success: false, message: "Invalid payload"};
    }

    await Result.create({studentId, english, testDate: new Date(), maths});
    return {success: true, message: "Result added successfully"};
  } catch (error) {
    console.error(error);
    return {success: false, message: "Failed to add result"};
  }
};

export const getPerformance = async (studentId) => {
  try {
    const results = await Result.find({studentId});
    if (!results || results.length === 0) {
      return {success: false, message: "No results found for this student"};
    }

    const totalEnglish = results.reduce((sum, r) => sum + r.english, 0);
    const totalMaths = results.reduce((sum, r) => sum + r.maths, 0);

    const averageEnglish = totalEnglish / results.length;
    const averageMaths = totalMaths / results.length;

    const overallPerformance = {
      studentId,
      averageEnglish: averageEnglish.toFixed(2),
      averageMaths: averageMaths.toFixed(2),
      finalResult: ((averageEnglish + averageMaths) / 2).toFixed(2),
      remarks:
        averageEnglish > averageMaths ? "English is better" : "Maths is better",
    };

    return {success: true, performance: overallPerformance};
  } catch (error) {
    console.error(error);
    return {success: false, message: "Failed to fetch performance"};
  }
};
