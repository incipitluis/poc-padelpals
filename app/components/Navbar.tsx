"use client";

import { Button } from "@/components/ui/button";
import { Home, Calendar, Package2, User } from "lucide-react";
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils";
import Link from 'next/link';

const Navbar = () => {
  const pathname = usePathname();
  
  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Navigation */}
        <div className="flex justify-between h-16">
          <nav className="hidden md:block bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
            <div className="flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-xl font-bold text-primary">PadelPro</Link>
                <div className="flex justify-between h-16">
                  <div className="flex items-center space-x-4">
                    <Link href="/courts">
                      <Button variant="ghost" className={cn("transition-colors", isActive("/courts") && "bg-primary/10 text-primary")}>Courts</Button>
                    </Link>
                    <Link href="/equipment">
                      <Button variant="ghost" className={cn("transition-colors", isActive("/equipment") && "bg-primary/10 text-primary")}>Equipment</Button>
                    </Link>
                    <Link href="/my-bookings">
                      <Button variant="ghost" className={cn("transition-colors", isActive("/bookings") && "bg-primary/10 text-primary")}>My Bookings</Button>
                    </Link>
                    <Button className="bg-primary hover:bg-primary-600">Sign In</Button>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>

        {/* Mobile Bottom Navigation */}
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.1)] z-50">
          <div className="flex justify-around items-center h-16">
            <Link 
              href="/" 
              className={cn("flex flex-col items-center justify-center w-full h-full space-y-1 text-sm transition-colors", isActive("/") ? "text-primary" : "text-gray-500 hover:text-primary")}
            >
              <Home size={24} />
              <span>Home</span>
            </Link>
            <Link 
              href="/courts" 
              className={cn("flex flex-col items-center justify-center w-full h-full space-y-1 text-sm transition-colors", isActive("/courts") ? "text-primary" : "text-gray-500 hover:text-primary")}
            >
              <Calendar size={24} />
              <span>Courts</span>
            </Link>
            <Link 
              href="/equipment" 
              className={cn("flex flex-col items-center justify-center w-full h-full space-y-1 text-sm transition-colors", isActive("/equipment") ? "text-primary" : "text-gray-500 hover:text-primary")}
            >
              <Package2 size={24} />
              <span>Equipment</span>
            </Link>
            <Link 
              href="/my-bookings" 
              className={cn("flex flex-col items-center justify-center w-full h-full space-y-1 text-sm transition-colors", isActive("/bookings") ? "text-primary" : "text-gray-500 hover:text-primary")}
            >
              <User size={24} />
              <span>Bookings</span>
            </Link>
          </div>
        </nav>
      </div>
      {/* Spacers for fixed navbars */}
      <div className="hidden md:block h-16" /> {/* Desktop top spacer */}
      <div className="block md:hidden h-16" /> {/* Mobile bottom spacer */}
    </nav>
  );
};

export default Navbar; 