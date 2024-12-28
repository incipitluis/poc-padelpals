"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const timeSlots = [
  "09:00", "10:30", "12:00", "13:30", "15:00", "16:30", "18:00", "19:30", "21:00"
];

const CourtCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>("");

  return (
    <Card className="p-6 animate-fade-in">
      <h2 className="text-2xl font-semibold mb-4">Book a Court</h2>
      
      <div className="grid gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Select Date</label>
          <input 
            type="date" 
            className="w-full p-2 border rounded-md"
            value={selectedDate.toISOString().split('T')[0]}
            onChange={(e) => setSelectedDate(new Date(e.target.value))}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Available Time Slots</label>
          <div className="grid grid-cols-3 gap-2">
            {timeSlots.map((time) => (
              <Button
                key={time}
                variant={selectedTime === time ? "default" : "outline"}
                className={`${
                  selectedTime === time ? 'bg-primary' : ''
                } transition-colors`}
                onClick={() => setSelectedTime(time)}
              >
                {time}
              </Button>
            ))}
          </div>
        </div>
        <Button 
          className="w-full mt-4 bg-primary hover:bg-primary-600"
          disabled={!selectedTime}
        >
          Book Court
        </Button>
      </div>
    </Card>
  );
};

export default CourtCalendar; 