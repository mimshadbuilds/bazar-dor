import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URL!, {
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
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
    
    database: mongodbAdapter(client.db('bazardor-auth-db'), {
        client,
    })
})