"use client";

import { Skeleton } from "@/components/ui/skeleton";
import Navbar from "./components/Navbar";
import CourtCalendar from "./components/CourtCalendar";
import EquipmentList from "./components/EquipmentList";
import { useState, useEffect } from 'react';

// Define the Court type
interface Court {
  id: number;
  name: string;
  type: string;
  features: string[];
  pricePerHour: number;
  image: string;
}

// Define the Equipment type
interface Equipment {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  available: boolean;
}

const Home = () => {
  const [isLoadingCourts, setIsLoadingCourts] = useState(true);
  const [isLoadingEquipment, setIsLoadingEquipment] = useState(true);
  const [courtsData, setCourtsData] = useState<Court[]>([]);
  const [equipmentData, setEquipmentData] = useState<Equipment[]>([]);

  // Simular carga de datos para las canchas
  useEffect(() => {
    console.log('Fetching courts data...');
    const timer = setTimeout(() => {
      setCourtsData([
        {
          id: 1,
          name: "Professional Court",
          type: "Indoor",
          features: ["Professional lighting", "Competition grade surface", "Climate controlled"],
          pricePerHour: 40,
          image: "/padel player.jpeg"
        },
        {
          id: 2,
          name: "Training Court",
          type: "Indoor",
          features: ["Training wall", "Basic lighting", "Beginner friendly"],
          pricePerHour: 30,
          image: "/padel player 2.jpeg"
        },
        {
          id: 3,
          name: "Outdoor Court",
          type: "Outdoor",
          features: ["Natural lighting", "Premium surface", "Covered seating area"],
          pricePerHour: 35,
          image: "/padel player 2.jpeg"
        }
      ]);
      setIsLoadingCourts(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Simular carga de datos para el equipo
  useEffect(() => {
    console.log('Fetching equipment data...');
    const timer = setTimeout(() => {
      setEquipmentData([
        {
          id: 1,
          name: "Professional Padel Racket",
          description: "High-quality padel racket suitable for all skill levels",
          price: 15,
          image: "/racket.jpeg",
          available: true,
        },
        {
          id: 2,
          name: "Premium Padel Balls (3-pack)",
          description: "Tournament-grade padel balls",
          price: 8,
          image: "/balls.jpeg",
          available: true,
        },
        {
          id: 3,
          name: "Beginner Padel Racket",
          description: "Perfect for those just starting their padel journey",
          price: 10,
          image: "/beginner.jpeg",
          available: false,
        }
      ]);
      setIsLoadingEquipment(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const LoadingCourts = () => (
    <div className="space-y-4">
      <Skeleton className="h-[50px] w-3/4" />
      <div className="space-y-3">
        <Skeleton className="h-[200px] w-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    </div>
  );

  const LoadingEquipment = () => (
    <div className="space-y-4">
      <Skeleton className="h-[50px] w-3/4" />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="space-y-3">
            <Skeleton className="h-[200px] w-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[150px]" />
              <Skeleton className="h-4 w-[100px]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="lg:col-span-1">
            {isLoadingCourts ? (
              <LoadingCourts />
            ) : (
              <CourtCalendar />
            )}
          </div>
          
          <div className="lg:col-span-2">
            {isLoadingEquipment ? (
              <LoadingEquipment />
            ) : (
              <EquipmentList />
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
