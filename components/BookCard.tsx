import type React from "react";
import Link from "next/link";
import { Card, CardContent } from "./ui/card";

interface Review {
  reviewer: string;
  comment: string;
  rating: number;
}

interface BookCardProps {
  title: string;
  author: string;
  imgURL: string;
  reviews: Review[];
  index: number;
}

const BookCard: React.FC<BookCardProps> = ({
  title,
  author,
  imgURL,
  reviews,
  index,
}) => {
  return (
    <Card className="m-2 w-64">
      <CardContent className="p-4">
        <img
          src={imgURL || "/placeholder.svg"}
          alt={title}
          className="w-full h-48 object-cover rounded mb-4"
        />
        <Link href={`/recommendations/${index}`}>
          <h2 className="text-xl font-bold hover:underline">{title}</h2>
        </Link>
        <p className="text-muted-foreground">by {author}</p>

        <div className="mt-4">
          <h3 className="font-semibold mb-2">Reviews:</h3>
          {reviews.map((review, idx) => (
            <div key={idx} className="border-t mt-2 pt-2">
              <p className="font-medium">{review.reviewer}</p>
              <p className="text-sm text-muted-foreground">{review.comment}</p>
              <p className="text-yellow-500">Rating: {review.rating} / 5</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default BookCard;
