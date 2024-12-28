"use client";

import Navbar from '../components/Navbar';
import EquipmentList from '../components/EquipmentList';

const Equipment = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Equipment Rental</h1>
        <EquipmentList />
      </main>
    </div>
  );
};

export default Equipment; 