
import { Card } from "flowbite-react";
import furnitureImage from "../assets/Furniture.jpg";

export default function CardComponent() {
  return (
    <Card
      className="max-w-sm"
      imgAlt="Furniture image"
      imgSrc={furnitureImage}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Furniture Collection
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Discover our premium furniture collection with the latest designs and highest quality materials.
      </p>
    </Card>
  );
}
