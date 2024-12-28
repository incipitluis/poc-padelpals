"use client";

import Navbar from '../components/Navbar';
import CourtCalendar from '../components/CourtCalendar';
import { Card } from "@/components/ui/card";
import LoadingCourt from '../components/LoadingCourt';
import { useState, useEffect } from 'react';

const Courts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const courts = [
    {
      id: 1,
      name: "Professional Court",
      type: "Indoor",
      features: ["Professional lighting", "Competition grade surface", "Climate controlled"],
      pricePerHour: 40,
      image: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Training Court",
      type: "Indoor",
      features: ["Training wall", "Basic lighting", "Beginner friendly"],
      pricePerHour: 30,
      image: "/placeholder.svg"
    },
    {
      id: 3,
      name: "Outdoor Court",
      type: "Outdoor",
      features: ["Natural lighting", "Premium surface", "Covered seating area"],
      pricePerHour: 35,
      image: "/placeholder.svg"
    }
  ];

  // Simulate loading
  useEffect(() => {
    console.log("Courts: Starting loading simulation");
    const timer = setTimeout(() => {
      console.log("Courts: Finished loading");
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Available Courts</h1>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Court List */}
          <div className="space-y-6">
            {isLoading ? (
              <>
                <LoadingCourt />
                <LoadingCourt />
                <LoadingCourt />
              </>
            ) : (
              courts.map((court) => (
                <Card key={court.id} className="overflow-hidden animate-fade-in">
                  <img 
                    src={court.image} 
                    alt={court.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{court.name}</h3>
                        <p className="text-sm text-gray-500">{court.type}</p>
                      </div>
                      <span className="text-primary font-semibold">${court.pricePerHour}/hour</span>
                    </div>
                    <ul className="space-y-2">
                      {court.features.map((feature, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-center">
                          <span className="mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))
            )}
          </div>

          {/* Booking Calendar */}
          <div className="lg:sticky lg:top-8">
            <CourtCalendar />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Courts; 