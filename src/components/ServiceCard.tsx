import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard = ({ icon: Icon, title, description, features }: ServiceCardProps) => {
  return (
    <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
      <CardHeader>
        <div className="w-12 h-12 rounded-lg bg-primary-light flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-2 text-sm">
              <span className="text-accent mt-0.5">✓</span>
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
        <Button asChild className="w-full bg-gradient-primary">
          <a href="https://bookings.vnprocleaning.com/booknow" target="_blank" rel="noopener noreferrer">
            Book This Service
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
