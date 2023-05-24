import { Schema, model, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  isUserVerified: boolean;
  verfiyToken: string;
  photo?: string;
}

const UserSchema: Schema = new Schema({
  name: { type: String },
  email: { type: String, unique: true },
  password: { type: String },
  isUserVerified: { type: Boolean, default: false },
  verfiyToken: { type: String },
  photo: { type: String, required: false }, 
});

export default model<IUser>("User", UserSchema);