import { Client, Account, Databases } from "appwrite";

const client = new Client()
  .setEndpoint("https://nyc.cloud.appwrite.io/v1")
  .setProject("6a13522b0016a57b69ed");

const account = new Account(client);
const databases = new Databases(client);

export { client, account, databases };