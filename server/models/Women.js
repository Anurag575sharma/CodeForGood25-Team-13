import mongoose from 'mongoose';

const womenSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    skill: {
        type: String,
        required: true,
        enum: ['bangle', 'stitching', 'nursing', 'phone repair']
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 10
    },
    status: {
        type: String,
        required: true,
        enum: ['active', 'inactive', 'pending'],
        default: 'active'
    },
    earning: {
        type: Number,
        required: true,
    },
    attendance: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'attendancewomans',
    },
    marital_status_dependents: {
        type: String,
        required: true,
        enum: ['Married_1-2_dependents', 'Married_3+_dependents', 'Single_no_dependents', 'Widowed_or_Divorced']
    },
    household_income: {
        type: String,
        required: true,
        enum: ['Low_income_unemployed', 'Low_income_employed', 'Middle_income', 'High_income']
    },
    motivation_level: {
        type: String,
        required: true,
        enum: ['Self_employment_goal', 'Better_job_opportunity', 'Personal_interest', 'Family_expectation']
    }
},
{
    timestamps: true,
});

const Women = mongoose.model('womens', womenSchema);

export default Women;