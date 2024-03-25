import { MongoClient, ServerApiVersion } from "mongodb";

const uri = 'mongodb+srv://resto-view-db.apwp3jy.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority&appName=resto-view-db';
const credentials = 'X509-cert-8037683491231527563.pem';
export const client = new MongoClient('mongodb+srv://resto-view-db.apwp3jy.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority&appName=resto-view-db', {
    tlsCertificateKeyFile: credentials,
    serverApi: ServerApiVersion.v1
  });