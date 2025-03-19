import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
.catch(err => console.error("MongoDB connection error:", err));

// Booking Schema
const bookingSchema = new mongoose.Schema({
    start: String,
    end: String,
    description: String,
    name: String,
    email: String,
    phone: String
});

const Booking = mongoose.model("Booking", bookingSchema);

// Fetch booked slots
app.get("/api/bookings", async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ message: "Error fetching bookings", error });
    }
});

// Submit a booking
app.post("/api/bookings", async (req, res) => {
    try {
        const { start, end, description, name, email, phone } = req.body;

        // Check if slot is already booked
        const existingBooking = await Booking.findOne({
            $or: [
                { start: { $lt: end }, end: { $gt: start } }
            ]
        });

        if (existingBooking) {
            return res.status(400).json({ message: "Selected time slot is already booked." });
        }

        const newBooking = new Booking({ start, end, description, name, email, phone });
        await newBooking.save();

        res.status(201).json({ message: "Booking successful", booking: newBooking });
    } catch (error) {
        res.status(500).json({ message: "Error submitting booking", error });
    }
});

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
