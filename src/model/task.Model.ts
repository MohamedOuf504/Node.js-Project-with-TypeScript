
import mongoose, { Document, Model } from "mongoose";
const Schema = mongoose.Schema;


const UserSchema = new Schema({
  firstName: {
    type: String,
  },
  Date: {
    type: Date,
    default: Date.now,
  },
});


export interface IUser extends Document {
  id: string;
  firstName: string;
  Date: Date;
}


const User =
  (mongoose.models.User as Model<IUser>) ||
  mongoose.model<IUser>("User", UserSchema);
export default User;
