'use client'

import Image from "next/image";
import Link from "next/link";
import InteractiveCard from "./InteractiveCard";
import { Rating } from "@mui/material";

interface CardProps {
  vid: string;
  venueName: string;
  imgSrc: string;
  rating: number;
  onRatingChange: (rating: number) => void;
}

export default function Card({ vid, venueName, imgSrc, rating, onRatingChange }: CardProps) {
  return (
    <InteractiveCard>
      <Link href={`/venue/${vid}`}>
        <Image
          src={imgSrc}
          alt={venueName}
          width={288}
          height={200}
          className="object-cover w-full"
        />
        <div className="px-4 pt-4">
          <h3 className="text-lg font-bold text-blue-600">{venueName}</h3>
        </div>
      </Link>
      <div className="px-4 pb-4">
        <Rating
          id={venueName}
          name={venueName}
          data-testid={`${venueName} Rating`}
          value={rating}
          onChange={(_, newValue) => onRatingChange(newValue ?? 0)}
        />
      </div>
    </InteractiveCard>
  );
}
