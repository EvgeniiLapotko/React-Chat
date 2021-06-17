import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema(
    {
        email: String,
        avatar: String,
        fullname: String,
        password: String,
        confirmed: Boolean,
        confirm_hash: String,
        last_seen: Date,
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("User", UserSchema);

export default User;
