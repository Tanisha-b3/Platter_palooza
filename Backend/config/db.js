import mongoose from "mongoose";

export const connecttdb = async () => {
    try {
        await mongoose.connect("mongodb+srv://tanishab:jZfM.UK7pgsuhS$@cluster0.mpz6ovf.mongodb.net/FOOD");
        console.log("DB Connected");
    } catch (error) {
        console.error("DB Connection Error:", error);
    }
};
