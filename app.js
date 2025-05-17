const { MongoClient } = require('mongodb');

const url = "mongodb://localhost:27017";
const dbName = "nodemongo";

async function main() {
  const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection("customers");

    // Update the address of the customer named 'Amy'
    const result = await collection.updateOne(
      { name: "Amy" },                            // Filter
      { $set: { address: "Updated Apple Street" } } // Update
    );

    console.log(`${result.modifiedCount} document updated`);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

main();
