import mongoose from 'mongoose';

const GroupSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    members: [String],
	createdBy: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true
	}
})

const Group = mongoose.model('Group', GroupSchema)

export default Group