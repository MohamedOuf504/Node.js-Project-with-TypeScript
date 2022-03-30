import mongoose, { Document, Model } from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  Name: new Schema<Names>({ firstName: String }),
  Date: {
    type: Date,
    default: Date.now,
  },
});
interface Names {
  firstName: string;
}
export interface IUser extends Document {
  Name: Names;
  Date: Date;
}

const User =
  (mongoose.models.User as Model<IUser>) ||
  mongoose.model<IUser>("User", UserSchema);
export default User;
