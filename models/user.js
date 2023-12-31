import mongoose, { Schema, models } from 'mongoose';

const userSchema = new Schema(
    {
        email: { type: 'string', required: true },
        name: { type: 'string', required: true },
        source: { type: 'string', required: true },
    },
    { timestamps: true },
);
const User = models.User || mongoose.model('User', userSchema);
export default User;
