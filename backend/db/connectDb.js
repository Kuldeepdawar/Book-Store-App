import mongoose from "mongoose";

const connectDbDatabase = async () => {
  try {
    const conn = mongoose.connect(process.env.MONGO_URI);
    console.log("Data base is connected");
  } catch (error) {
    console.error("error in db", error);
    process.exit(1);
  }
};

export default connectDbDatabase;
