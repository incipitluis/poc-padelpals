import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

const LoadingCourt = () => {
  return (
    <Card className="overflow-hidden animate-fade-in">
      <Skeleton className="w-full h-48" />
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="space-y-2">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-4 w-24" />
          </div>
          <Skeleton className="h-6 w-20" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-5/6" />
        </div>
      </div>
    </Card>
  );
};

export default LoadingCourt; 