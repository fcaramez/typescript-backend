import { model, Schema } from "mongoose";

export default interface IUserModel {
  username?: string | object;
  email: string | object;
  password: string | object;
}

const userSchema: Schema = new Schema<IUserModel>({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    match:
      "/^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:. [a-zA-Z0-9-]+)*$/",
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User: object = model<IUserModel>("User", userSchema);

module.exports = User;
