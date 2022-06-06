require("dotenv").config();
const { MongoClient } = require('mongodb');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

async function main() {
  // we'll add code here soon

  const uri = process.env.DB_URI;
  const client = new MongoClient(uri);

  try {
    await client.connect();
    //databasesList = await client.db().apene().listDatabases();
    const database = client.db("apenedb");
    const coas = database.collection("COA");
    const query = {};
    const options = {
      sort: { acct: -1 },
      projection: { _id: 0, acct: 1, Description: 1 }
    };
    console.log("loading records.......");
    records = coas.find(query, options).limit(50);

    // print a message if no documents were found
    if ((await records.count()) === 0) {
      console.log("No documents found!");
    }

    await records.forEach(console.dir);

  } catch (e) {
    console.error(e);
  }
  finally {
    await client.close();
  }

}

main().catch(console.dir);
