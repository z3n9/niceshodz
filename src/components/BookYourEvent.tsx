import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "../styling/BookYourEvent.css"

interface BookingSlot {
    start: string;
    end: string;
}

const BookYourEvent = () => {
    const [startDate, setStartDate] = useState<Date|null>(null);
    const [endDate, setEndDate] = useState<Date|null>(null);
    const [description, setDescription] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [bookedSlots, setBookedSlots] = useState<BookingSlot[]>([]);

    // Fetch existing bookings (this would come from a database)
    useEffect(() => {
        // Example: Fetch from backend API
        fetch("/api/bookings")
            .then(res => res.json())
            .then((data: BookingSlot[]) => setBookedSlots(data));
    }, []);

    // Handle Form Submission
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!startDate || !endDate) {
            alert("Please select both start and end dates.");
            return;
        }

        // Check if selected time is already booked
        if (bookedSlots.some(slot => 
            (new Date(slot.start).getTime() < new Date(endDate).getTime() &&
            new Date(slot.end).getTime() > new Date(startDate).getTime()))) {
            alert("Selected time slot is already booked. Please choose another.");
            return;
        }

        const bookingData = {
            start: startDate?.toISOString(),
            end: endDate?.toISOString(),
            description,
            name,
            email,
            phone,
        };

        // Send data to backend (this should be replaced with your API)
        const response = await fetch("/api/bookings", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(bookingData),
        });

        if (response.ok) {
            setBookedSlots([...bookedSlots, bookingData]); // Update local state
            alert("Booking submitted! Our team will contact you shortly.");
        }
    };

    return (
        <div className="booking-container">
            <h2>Book Your Event</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Your name:</label>
                    <input
                        aria-required
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label>Your email:</label>
                    <input
                        aria-required
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label>Your phone number (Optional):</label>
                    <input 
                        type="tel" 
                        value={phone} 
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>

                <div className="date-selection">
                    <div className="start-date">
                        <label>Start Date & Time:</label>
                        <DatePicker
                            showIcon
                            toggleCalendarOnIconClick
                            required
                            selected={startDate}
                            onChange={setStartDate}
                            showTimeSelect
                            dateFormat="Pp"
                            minDate={new Date()}
                            excludeTimes={bookedSlots.map(slot => new Date(slot.start))}
                        />
                    </div>
                    <div className="end-date">
                        <label>End Date & Time:</label>
                        <DatePicker
                            showIcon
                            toggleCalendarOnIconClick
                            required
                            selected={endDate}
                            onChange={setEndDate}
                            showTimeSelect
                            dateFormat="Pp"
                            minDate={startDate || new Date()}
                            excludeTimes={bookedSlots.map(slot => new Date(slot.end))}
                        />
                    </div>
                </div>

                <div>
                    <label>Event Description:</label>
                    <textarea 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div className="button-container">
                    <button type="submit">Submit Booking</button>
                </div>
            </form>
        </div>
    );
};

export default BookYourEvent;
