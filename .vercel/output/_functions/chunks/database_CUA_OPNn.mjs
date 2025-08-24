import { MongoClient } from 'mongodb';

let client;
let db;

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://ahmedtalal:250520@cluster0.m6zuc.mongodb.net/astro-form-app';

async function connectToDatabase() {
  if (db) {
    return { client, db };
  }

  try {
    client = new MongoClient(MONGODB_URI);
    await client.connect();
    db = client.db();
    console.log('Connected to MongoDB');
    return { client, db };
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
}

async function getDatabase() {
  if (!db) {
    await connectToDatabase();
  }
  return db;
}

// Form submissions collection operations
async function insertFormData(data) {
  const database = await getDatabase();
  const collection = database.collection('submissions');
  
  const submission = {
    ...data,
    created_at: new Date(),
    updated_at: new Date()
  };
  
  const result = await collection.insertOne(submission);
  return {
    success: true,
    id: result.insertedId,
    lastInsertRowid: result.insertedId
  };
}

async function getAllSubmissions() {
  const database = await getDatabase();
  const collection = database.collection('submissions');
  
  const submissions = await collection
    .find({})
    .sort({ created_at: -1 })
    .toArray();
    
  return submissions;
}

async function getSubmissionById(id) {
  const database = await getDatabase();
  const collection = database.collection('submissions');
  
  const { ObjectId } = await import('mongodb');
  const submission = await collection.findOne({ _id: new ObjectId(id) });
  
  return submission;
}

async function updateSubmission(id, data) {
  const database = await getDatabase();
  const collection = database.collection('submissions');
  
  const { ObjectId } = await import('mongodb');
  const updateData = {
    ...data,
    updated_at: new Date()
  };
  
  const result = await collection.updateOne(
    { _id: new ObjectId(id) },
    { $set: updateData }
  );
  
  return { changes: result.modifiedCount };
}

async function deleteSubmission(id) {
  const database = await getDatabase();
  const collection = database.collection('submissions');
  
  const { ObjectId } = await import('mongodb');
  const result = await collection.deleteOne({ _id: new ObjectId(id) });
  
  return { changes: result.deletedCount };
}

// User authentication operations
async function createUser(username, hashedPassword, role = 'user') {
  const database = await getDatabase();
  const collection = database.collection('users');
  
  const user = {
    username,
    password: hashedPassword,
    role,
    created_at: new Date()
  };
  
  const result = await collection.insertOne(user);
  return result;
}

async function getUserByUsername(username) {
  const database = await getDatabase();
  const collection = database.collection('users');
  
  const user = await collection.findOne({ username });
  return user;
}

async function initializeDefaultUsers() {
  const database = await getDatabase();
  const collection = database.collection('users');
  
  const existingUsers = await collection.countDocuments();
  if (existingUsers === 0) {
    const bcrypt = await import('bcryptjs');
    
    const defaultUsers = [
      { username: 'admin', password: 'admin123', role: 'admin' },
      { username: 'twd', password: 'twd2024', role: 'admin' },
      { username: 'user', password: 'user123', role: 'user' }
    ];
    
    for (const user of defaultUsers) {
      const hashedPassword = await bcrypt.default.hash(user.password, 10);
      await createUser(user.username, hashedPassword, user.role);
    }
    
    console.log('Default users created');
  }
}

export { getUserByUsername as a, getAllSubmissions as b, insertFormData as c, deleteSubmission as d, getSubmissionById as g, initializeDefaultUsers as i, updateSubmission as u };
