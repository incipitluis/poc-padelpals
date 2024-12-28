"use client";
import { Card } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { useState, useEffect } from 'react';
import Navbar from "../components/navbar";
import LoadingBooking from "../components/loading-bookings";

const MyBookings = () => {
  const [isLoading, setIsLoading] = useState(true);
  const bookings = [
    {
      id: 1,
      type: "Court Booking",
      item: "Professional Court",
      date: "2024-03-20",
      time: "09:00 - 10:30",
      status: "Confirmed",
      price: 40
    },
    {
      id: 2,
      type: "Equipment Rental",
      item: "Professional Padel Racket",
      date: "2024-03-20",
      time: "09:00 - 10:30",
      status: "Confirmed",
      price: 15
    }
  ];

  // Simulate loading
  useEffect(() => {
    console.log("MyBookings: Starting loading simulation");
    const timer = setTimeout(() => {
      console.log("MyBookings: Finished loading");
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">My Bookings</h1>
        
        {isLoading ? (
          <LoadingBooking />
        ) : (
          <Card className="animate-fade-in">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Type</TableHead>
                  <TableHead>Item</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Price</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {bookings.map((booking) => (
                  <TableRow key={booking.id}>
                    <TableCell>{booking.type}</TableCell>
                    <TableCell>{booking.item}</TableCell>
                    <TableCell>{booking.date}</TableCell>
                    <TableCell>{booking.time}</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {booking.status}
                      </span>
                    </TableCell>
                    <TableCell>${booking.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        )}
      </main>
    </div>
  );
};

export default MyBookings; 