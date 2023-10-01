import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDB = async (data: IUser) => {
  try {
    const user = new User(data);
    await user.save();
    return user;
  } catch (error) {}
};
