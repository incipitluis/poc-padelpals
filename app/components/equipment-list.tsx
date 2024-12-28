import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const equipment = [
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
    image: "/beginner.webp",
    available: false,
  },
];

const EquipmentList = () => {
  return (
    <div className="grid gap-6 animate-fade-in">
      <h2 className="text-2xl font-semibold">Equipment Rental</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {equipment.map((item) => (
          <Card key={item.id} className="overflow-hidden">
            <img 
              src={item.image} 
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{item.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-semibold text-primary">${item.price}/day</span>
                <Button 
                  variant={item.available ? "default" : "outline"}
                  disabled={!item.available}
                  className={item.available ? "bg-primary hover:bg-primary-600" : ""}
                >
                  {item.available ? "Rent Now" : "Unavailable"}
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default EquipmentList; 