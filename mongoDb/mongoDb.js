require('dotenv').config();
const { MongoClient } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;

const uri = process.env.MONGODB_CONNECTION_STRING;
const dbName = process.env.DB_NAME;
const collectionName = process.env.COLLECTION_NAME;

const mongoClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const database = mongoClient.db(dbName);
const usersCollection = database.collection(collectionName);

module.exports = { mongoClient, usersCollection, ObjectId };
