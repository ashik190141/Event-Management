const express = require("express");
const app = express();
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri =
  `mongodb+srv://${process.env.db_name}:${process.env.db_pass}@cluster0.nhg2oh1.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    // Send a ping to confirm a successful connection
      
      const servicesCollection = client.db("event_management").collection("services");
      const eventsCollection = client.db("event_management").collection("events");
      const recentEventsCollection = client.db("event_management").collection("recent");

      app.post("/create-services", async (req, res) => {
          const body = req.body;
          const result = await servicesCollection.insertOne(body);
          res.send(result);
      })

      app.get("/getAllServices", async (req, res) => {
          const result = await servicesCollection.find().toArray();
          res.send(result);
      });

      app.delete("/delete-service/:id", async (req, res) => {
          const id = req.params.id;
          const query = { _id: new ObjectId(id) };
          const result = await servicesCollection.deleteOne(query);
          res.send(result);
      });

      app.get("/getSingleServices/:id", async (req, res) => {
          const id = req.params.id;
          const query = { _id: new ObjectId(id) };
          const result = await servicesCollection.findOne(query);
          res.send(result);
      });

      app.put("/updateServices/:id", async (req, res) => {
          const id = req.params.id;
          const body = req.body;
          const query = { _id: new ObjectId(id) };
          const options = { upsert: true };
          const updatedDoc = {
            $set: {
              serviceName: body.serviceName,
              facilities1: body.facilities1,
              facilities2: body.facilities2,
              facilities3: body.facilities3,
              facilities4: body.facilities4,
              facilities5: body.facilities5,
            }
          };
          const result = await servicesCollection.updateOne(query, updatedDoc, options);
          res.send(result);
      });
      
      //event
    
      app.post("/create-event", async(req,res)=>{
        const body = req.body;
        const result = await eventsCollection.insertOne(body);
        res.send(result);
      })
    
      app.get("/getAllEvents", async (req, res) => {
        const result = await eventsCollection.find().toArray();
        res.send(result);
      });
    
      app.delete("/delete-event/:id", async (req, res) => {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const result = await eventsCollection.deleteOne(query);
        res.send(result);
      });
    
      app.get("/getSingleEvents/:id", async (req, res) => {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const result = await eventsCollection.findOne(query);
        res.send(result);
      });
    
      app.put("/updateEvents/:id", async (req, res) => {
        const id = req.params.id;
        const body = req.body;
        const query = { _id: new ObjectId(id) };
        const options = { upsert: true };
        const updatedDoc = {
          $set: {
            eventName: body.eventName,
          },
        };
        const result = await eventsCollection.updateOne(
          query,
          updatedDoc,
          options
        );
        res.send(result);
      });
    
    // recent event
      app.post("/create-recent-event", async(req,res)=>{
        const body = req.body;
        const result = await recentEventsCollection.insertOne(body);
        res.send(result);
      });
    
      app.get("/getAllRecentEvents", async (req, res) => {
        const result = await recentEventsCollection.find().toArray();
        res.send(result);
      });

      app.delete("/delete-recent-event/:id", async (req, res) => {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const result = await recentEventsCollection.deleteOne(query);
        res.send(result);
      });

      app.get("/getSingleRecentEvents/:id", async (req, res) => {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const result = await recentEventsCollection.findOne(query);
        res.send(result);
      });
    
      app.put("/updateRecentEvents/:id", async (req, res) => {
        const id = req.params.id;
        const body = req.body;
        const query = { _id: new ObjectId(id) };
        const options = { upsert: true };
        const updatedDoc = {
          $set: {
            eventName: body.eventName,
            creator: body.creator,
          },
        };
        const result = await recentEventsCollection.updateOne(
          query,
          updatedDoc,
          options
        );
        res.send(result);
      });
    
    // await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Event Management Running");
});

app.listen(port, () => {
  console.log("port no", port);
});