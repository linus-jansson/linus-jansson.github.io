import mongoose from 'mongoose';

const user = new mongoose.Schema({
    user_id: String,
    name: String,
    email: String,
})

const clipboard = new mongoose.Schema({
    id: String,
    author: mongoose.Schema.Types.ObjectId,
    content: String,
    date: Date,
});

class Database {


    constructor() {
        this.url = process.env.MONGO_URL;

    }

    create_user() { }

    // ...
}