import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
export const dbConnect = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    console.log(
      "MongoDB Connected on Host: ",
      connectionInstance.connection.host
    );
   
  } catch (error) {
    console.log("Error: ", error);
    process.exit(1);
  }
};
