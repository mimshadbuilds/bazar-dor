import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { betterAuth } from "better-auth";
import { MongoClient, Db } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URL!, {
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    connectTimeoutMS: 10000,
});

const dbProxy = new Proxy({} as Db, {
    get(_, prop) {
        const db = client.db('bazardor-auth-db');
        const value = db[prop as keyof Db];
        return typeof value === 'function' ? value.bind(db) : value;
    }
});

export const auth = betterAuth({
    emailAndPassword: { 
        enabled: true, 
    },

    socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID as string, 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string, 
        },
        
        github: { 
            clientId: process.env.GITHUB_CLIENT_ID as string, 
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string, 
        },
    },
    
    database: mongodbAdapter(dbProxy, {
        client,
    })
})