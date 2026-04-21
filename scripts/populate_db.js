// scripts/populate_db.js

import mongoose from 'mongoose';
import dotenv from 'dotenv';

import User from '../models/User.js';
import Group from '../models/Group.js';
import Expense from '../models/Expense.js';

import { users, groups, expenses } from './seed.js'

dotenv.config();

// Connect to DB
async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1);
  }
}

// Clear collections
async function clearDatabase() {
  try {
    await Promise.all([
      User.deleteMany({}),
      Group.deleteMany({}),
      Expense.deleteMany({})
    ]);
    console.log(' Cleared existing data');
  } catch (error) {
    console.error('Error clearing data:', error);
    throw error;
  }
}

// Insert users
async function insertUsers() {
  try {
    const createdUsers = await User.insertMany(users);
    console.log(`Inserted ${createdUsers.length} users`);
    return createdUsers;
  } catch (error) {
    console.error(' Error inserting users:', error);
    throw error;
  }
}

// Insert groups
async function insertGroups() {
  try {
    const createdGroups = await Group.insertMany(groups);
    console.log(` Inserted ${createdGroups.length} groups`);
    return createdGroups;
  } catch (error) {
    console.error(' Error inserting groups:', error);
    throw error;
  }
}

// Insert expenses
async function insertExpenses() {
  try {
    const createdExpenses = await Expense.insertMany(expenses);
    console.log(`Inserted ${createdExpenses.length} expenses`);
    return createdExpenses;
  } catch (error) {
    console.error(' Error inserting expenses:', error);
    throw error;
  }
}

// Main seeding function
async function seedDatabase() {
  try {
    await connectToDatabase();
    await clearDatabase();

    await insertUsers();
    await insertGroups();
    await insertExpenses();

    console.log('Database seeded successfully!');
  } catch (error) {
    console.error(' Seeding failed:', error);
  } finally {
    await mongoose.disconnect();
    console.log('MongoDB disconnected');
  }
}

seedDatabase();