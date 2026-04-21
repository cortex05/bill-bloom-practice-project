import { Types } from 'mongoose';

const u1 = new Types.ObjectId();
const u2 = new Types.ObjectId();
const u3 = new Types.ObjectId();
const u4 = new Types.ObjectId();

export const users = [
  {
    _id: u1,
    username: "lawBringer",
    email: "lawbringer@gmail.com",
    password: "abc123"
  },
  {
    _id: u2,
    username: "GarrV",
    email: "godhood@gmail.com",
    password: "abc123"
  },
  {
    _id: u3,
    username: "theShepard",
    email: "n7@gmail.com",
    password: "abc123"
  },
  {
    _id: u4,
    username: "theIllusiveMan",
    email: "tim@gmail.com",
    password: "abc123"
  }
]

const g1 = new Types.ObjectId();
const g2 = new Types.ObjectId();

export const groups = [
  {
    _id: g1,
    name: "Normandy take 2",
    members: [u3,u2],
    createdBy: u3
  },
  {
    _id: g2,
    name: "Cerberus",
    members: [u4],
    createdBy: u4
  }
]

const e1 = new Types.ObjectId();
const e2 = new Types.ObjectId();
const e3 = new Types.ObjectId();
const e4 = new Types.ObjectId();
const e5 = new Types.ObjectId();
const e6 = new Types.ObjectId();
const e7 = new Types.ObjectId();
const e8 = new Types.ObjectId();
const e9 = new Types.ObjectId();
const e10 = new Types.ObjectId();
const e11 = new Types.ObjectId();
const e12 = new Types.ObjectId();
const e13 = new Types.ObjectId();
const e14 = new Types.ObjectId();
const e15 = new Types.ObjectId();
const e16 = new Types.ObjectId();
const e17 = new Types.ObjectId();
const e18 = new Types.ObjectId();
const e19 = new Types.ObjectId();
const e20 = new Types.ObjectId();
const e21 = new Types.ObjectId();
const e22 = new Types.ObjectId();
const e23 = new Types.ObjectId();
const e24 = new Types.ObjectId();
const e25 = new Types.ObjectId();
const e26 = new Types.ObjectId();
const e27 = new Types.ObjectId();

export const expenses = [
  {
    _id: e1,
    description: "Standard stock groceries",
    amount: 50,
    paidBy: u3,
    participants: [u3, u2],
    category: "Food",
    type: "group",
    groupId: g1,
    date: "2024-06-01T12:00:00Z"
  },
  {
    _id: e2,
    description: "Fuel for the Normandy",
    amount: 1500,
    paidBy: u3,
    participants: [u3, u2, u1],
    category: "Travel",
    type: "group",
    groupId: g1,
    date: "2024-06-01T16:00:00Z"
  },
  {
    _id: e3,
    description: "Structural integrity repairs",
    amount: 2000,
    paidBy: u3,
    participants: [u3, u2, u1],
    category: "Travel",
    type: "group",
    groupId: g1,
    date: "2024-06-01T18:00:00Z"
  },
  {
    _id: e4,
    description: "Poker supplies",
    amount: 70,
    paidBy: u3,
    participants: [u3, u2],
    category: "Entertainment",
    type: "group",
    groupId: g1,
    date: "2024-06-01T18:00:00Z"
  },
  {
    _id: e5,
    description: "Reconnaissance services",
    amount: 10000,
    paidBy: u4,
    participants: [u4],
    category: "Travel",
    type: "group",
    groupId: g2,
    date: "2024-06-05T18:00:00Z"
  },
  {
    _id: e6,
    description: "Gala dinner",
    amount: 7000,
    paidBy: u4,
    participants: [u4],
    category: "Food",
    type: "group",
    groupId: g2,
    date: "2024-06-08T18:00:00Z"
  },
  {
    _id: e7,
    description: "Company health insurance",
    amount: 5,
    paidBy: u4,
    participants: [u4],
    category: "Health",
    type: "group",
    groupId: g2,
    date: "2024-06-08T18:00:00Z"
  },
  {
    _id: e8,
    description: "Company dental insurance",
    amount: 6,
    paidBy: u4,
    participants: [u4],
    category: "Health",
    type: "group",
    groupId: g2,
    date: "2024-06-08T18:00:00Z"
  },
  {
    _id: e9,
    description: "Steaks",
    amount: 100,
    paidBy: u1,
    participants: [u1],
    category: "Food",
    type: "personal",
    groupId: null,
    date: "2024-06-06T18:00:00Z"
  },
  {
    _id: e10,
    description: "Luxury car rental",
    amount: 500,
    paidBy: u1,
    participants: [u1],
    category: "Travel",
    type: "personal",
    groupId: null,
    date: "2024-06-07T18:00:00Z"
  },
  {
    _id: e11,
    description: "High-end gaming console",
    amount: 300,
    paidBy: u1,
    participants: [u1],
    category: "Entertainment",
    type: "personal",
    groupId: null,
    date: "2024-06-08T18:00:00Z"
  },
  {
    _id: e12,
    description: "Designer clothes",
    amount: 1000,
    paidBy: u1,
    participants: [u1],
    category: "Clothing",
    type: "personal",
    groupId: null,
    date: "2024-06-09T18:00:00Z"
  },
  {
    _id: e13,
    description: "Luxury watch",
    amount: 5000,
    paidBy: u1,
    participants: [u1],
    category: "Accessories",
    type: "personal",
    groupId: null,
    date: "2024-06-10T18:00:00Z"
  },
  {
    _id: e14,
    description: "Turian literature",
    amount: 100,
    paidBy: u2,
    participants: [u2],
    category: "Books",
    type: "personal",
    groupId: null,
    date: "2024-06-10T18:00:00Z"
  },
  {
    _id: e15,
    description: "Quarian art",
    amount: 200,
    paidBy: u2,
    participants: [u2],
    category: "Art",
    type: "personal",
    groupId: null,
    date: "2024-06-11T18:00:00Z"
  },
  {
    _id: e16,
    description: "Geth technology",
    amount: 10000,
    paidBy: u2,
    participants: [u2],
    category: "Technology",
    type: "personal",
    groupId: null,
    date: "2024-06-12T18:00:00Z"
  },
  {
    _id: e17,
    description: "Prothean artifacts",
    amount: 50000,
    paidBy: u2,
    participants: [u2],
    category: "Collectibles",
    type: "personal",
    groupId: null,
    date: "2024-06-13T18:00:00Z"
  },
  {
    _id: e18,
    description: "Reaper technology",
    amount: 100000,
    paidBy: u2,
    participants: [u2],
    category: "Technology",
    type: "personal",
    groupId: null,
    date: "2024-06-14T18:00:00Z"
  },
  {
    _id: e19,
    description: "Reaper technology",
    amount: 100000,
    paidBy: u3,
    participants: [u3],
    category: "Technology",
    type: "personal",
    groupId: null,
    date: "2024-06-14T18:00:00Z"
  },
  {
    _id: e20,
    description: "Reaper technology",
    amount: 100000,
    paidBy: u3,
    participants: [u3],
    category: "Technology",
    type: "personal",
    groupId: null,
    date: "2024-06-14T18:00:00Z"
  },
  {
    _id: e21,
    description: "Spare parts",
    amount: 100,
    paidBy: u3,
    participants: [u3],
    category: "Technology",
    type: "personal",
    groupId: null,
    date: "2024-06-14T18:00:00Z"
  },
  {
    _id: e22,
    description: "Discounted parts",
    amount: 50,
    paidBy: u3,
    participants: [u3],
    category: "Technology",
    type: "personal",
    groupId: null,
    date: "2024-06-14T18:00:00Z"
  },
  {
    _id: e23,
    description: "Used parts",
    amount: 75,
    paidBy: u3,
    participants: [u3],
    category: "Technology",
    type: "personal",
    groupId: null,
    date: "2024-06-14T18:00:00Z"
  },
  {
    _id: e24,
    description: "Used parts",
    amount: 75,
    paidBy: u4,
    participants: [u4],
    category: "Technology",
    type: "personal",
    groupId: null,
    date: "2024-06-14T18:00:00Z"
  },
  {
    _id: e25,
    description: "Turian literature",
    amount: 75,
    paidBy: u4,
    participants: [u4],
    category: "Books",
    type: "personal",
    groupId: null,
    date: "2024-06-14T18:00:00Z"
  },
  {
    _id: e26,
    description: "Quarian art",
    amount: 75,
    paidBy: u4,
    participants: [u4],
    category: "Art",
    type: "personal",
    groupId: null,
    date: "2024-06-14T18:00:00Z"
  },
  {
    _id: e27,
    description: "Geth technology",
    amount: 75,
    paidBy: u4,
    participants: [u4],
    category: "Technology",
    type: "personal",
    groupId: null,
    date: "2024-06-14T18:00:00Z"
  }
]