import mongoose from 'mongoose';

const connectDB = (url: string) => {
    mongoose.connect(url)
        .then(() => console.log('Connected to MongoDB'))
        .catch(err => console.error('Failed to connect to MongoDB', err));
};

export default connectDB;
