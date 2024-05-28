import mongoose from 'mongoose';

const MongoUri = process.env.MONGOURI
let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
    if (cached.conn) return cached.conn;

    if (!MongoUri) throw new Error('MongoUri is missing...');

    cached.promise = cached.promise || mongoose.connect(MongoUri, {
        dbName: 'evently',
        bufferCommands: false,
    })

    cached.conn = await cached.promise;


    return cached.conn;
}    