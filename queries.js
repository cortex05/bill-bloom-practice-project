import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/User.js";
import Group from "./models/Group.js";
import Expense from "./models/Expense.js";

async function main() {
  try {
    dotenv.config();
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to DB");
    await runQueries();
  } catch (err) {
    console.error("DB connection failed:", err);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected from DB");
  }
}

main();