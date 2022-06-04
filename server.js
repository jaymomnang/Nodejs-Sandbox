require("dotenv").config();
const {MongoClient} = require('mongodb');
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";

async function main() {
	// we'll add code here soon

  const uri = process.env.DB_URI;
  const client = new MongoClient(uri);

  try {
    await client.connect();
  } catch (e) {
    console.error(e);
  }
  finally {
    await client.close();
  }

}

main().catch(console.error);
