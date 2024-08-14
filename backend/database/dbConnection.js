import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose.connect(process.env.MONGO_URI, { dbName:"MERN_DONATION_MESSAGE"})
    .then(()=> {
      console.log("Connected to database!")
    }).catch((err) => {
      console.log("Some Error Occured While Connecting To Database: ", err);
    });
};