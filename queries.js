import mongoose from "mongoose";
import dotenv from "dotenv";

import User from "./models/User.js";
import Group from "./models/Group.js";
import Expense from "./models/Expense.js";

// 1.What is the total amount spent in a group?
const getGroupTotalExpense = async (groupId) => {
  const expenses = await Expense.find({ groupId });
  return expenses.reduce((total, expense) => total + expense.amount, 0);
}

// 2.What is the total amount paid by each user in a group?
const getUserTotalExpenseInGroup = async (groupId) => {
  const expenses = await Expense.find({ groupId });
  const userExpenses = {};  
  expenses.forEach(expense => {
    const userId = expense.paidBy.toString();
    if (!userExpenses[userId]) {
      userExpenses[userId] = 0;
    } 
    userExpenses[userId] += expense.amount;
  });
  return userExpenses;
}
 
// 3. Who were the participants of a given expense in a given group?
const getExpenseParticipants = async (expenseId) => {
  const expense = await Expense.findById(expenseId);
  if (!expense) {
    throw new Error("Expense not found");
  }

  return expense.participants;
}

//4.Find the usernames who participated in the maximum and minimum no of expenses in a group?
const getMaxMinParticipants = async (groupId) => {
  const expenses = await Expense.find({ groupId });
  const participantCount = {};

  expenses.forEach(expense => {
    expense.participants.forEach(participant => {
      const userId = participant.toString();
      if (!participantCount[userId]) {
        participantCount[userId] = 0;
      }
      participantCount[userId] += 1;
    });
  });

  let maxParticipants = [];
  let minParticipants = [];
  let maxCount = -Infinity;
  let minCount = Infinity;

  for (const userId in participantCount) {
    const count = participantCount[userId];
    if (count > maxCount) {
      maxCount = count;
      maxParticipants = [userId];
    } else if (count === maxCount) {
      maxParticipants.push(userId);
    }
    if (count < minCount) {
      minCount = count;
      minParticipants = [userId];
    } else if (count === minCount) {
      minParticipants.push(userId);
    }
  }

  return { maxParticipants, minParticipants };
}

// 5. In how many groups, a given user is a member?
const getUserGroupCount = async (userId) => {
  const groups = await Group.find({ members: userId });
  return groups.length;
}

// 6. Based on the expenses created in a group, what is the duration of the trip?

// 7. What are the top 3 highest personal expenses for every user?

// 8. What personal expenses were created within a specific date range for a given user?

// 9. What is the total personal expense for a user?

// 10. What is the total personal expense based on category for a user?

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