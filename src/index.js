import dotenv from "dotenv";
import connectDB from "./db/index.js";
import  app  from "./app.js";
dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT||3000, () => {
      console.log(`listening on port ${process.env.PORT}`);
    });
  })
  .catch(
    (error)=>{
        console.log("mongoDB connection failed !!!", error)
    }
    // console.error("Error:", e)
  );





