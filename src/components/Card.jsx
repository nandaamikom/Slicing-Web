
import { Card } from "flowbite-react";
import furnitureImage from "../assets/Furniture.jpg";
import { HiArchiveBox } from "react-icons/hi2";




export default function CardComponent({ showImage = true, title = "Furniture", logo = null }) {
  return (
    <Card
      className="max-w-sm"
      imgAlt={showImage ? "Furniture image" : undefined}
      imgSrc={showImage ? furnitureImage : undefined}
    >
      <div className="flex items-center justify-center space-x-2 mb-2">
        {logo}
        <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
      </div>
      <p className="text-2xl font-normal text-center text-blue-600 mb-2">
        0
      </p>
    </Card>
  );
}
