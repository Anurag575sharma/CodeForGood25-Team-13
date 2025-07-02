import mongoose from 'mongoose';
import Women from './Women.js';
const attendanceSchemaWomen = new mongoose.Schema({
    womanId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'womens',
        required: true
    },
    month: {
        type: String, // yyyy-mm format
        required: true
    },
    records: {
        type: Map,
        of: {
            day: {
                type: Number,
                required: true
            },
            status: {
                type: String,
                enum: [0, 1],
                required: true
            }
        },
    },
    present_days: {
        type: Number,
        default: 0
    },
    absent_days: {
        type: Number,
        default: 0
    },
    current_absent_streak: {
        type: Number,
        default: 0
    },
    current_present_streak: {
        type: Number,
        default: 0
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    }
});

const AttendanceSchemaWomen = mongoose.model('attendancewomans', attendanceSchemaWomen);

export default AttendanceSchemaWomen;


