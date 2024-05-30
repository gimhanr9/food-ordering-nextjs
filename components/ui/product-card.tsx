import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ProductCardProps {
  title: string;
  deliveryEstimate: string;
  rating: string;
}

const ProductCard = (props: ProductCardProps) => {
  return (
    <Card className="w-[350px]">
      <CardContent>
        <img src="" />
      </CardContent>
      <CardFooter className="flex justify-between">
        <div>
          <p className="text-lg font-medium leading-none">{props.title}</p>
          <p className="text-sm text-muted-foreground">
            {props.deliveryEstimate}
          </p>
        </div>
        <p className="text-lg text-muted-foreground">{props.rating}</p>
      </CardFooter>
    </Card>
  );
};
