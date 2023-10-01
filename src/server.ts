import http from "http";
import mongoose from "mongoose";
import app from "./app";

const port: number = 5000;
const server = http.createServer(app);
async function makeDBconnect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/for-practice");
    console.log(`DB connected successful`);
  } catch (error) {
    console.log(`Failed to connect DB ${error}`);
  }
}
makeDBconnect();

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
