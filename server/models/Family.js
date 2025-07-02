import mongoose from 'mongoose';

const familySchema = new mongoose.Schema({
    womenId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'womens'
    }],
    studentId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'students'
    }]
});

const FamilySchema = mongoose.model('families', familySchema);
export default Family;