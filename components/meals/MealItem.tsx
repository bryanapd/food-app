import Link from "next/link";
import Image from "next/image";
import { Meal } from "@/types/meals";

const MealItem = ({ title, slug, image, summary, creator }: Meal) => {
  return (
    <article className="flex flex-col justify-between h-full rounded shadow-sm overflow-hidden transition-all ease-in-out text-[#ddd6cb] bg-gradient-to-r from-[#2c1e19] to-[#25200f]">
      <header>
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          className="relative h-auto w-full"
          objectFit="cover"
        />
        <div className="p-4">
          <h2 className="m-0 text-2xl font-montserrat">{title}</h2>
          <p className="text-sm italic text-[#cfa69b]">by {creator}</p>
        </div>
      </header>
      <div className="flex flex-col justify-between h-full px-4 pb-4">
        <p className="py-4">{summary}</p>
        <div className="text-right">
          <Link
            className="inline-block mt-4 px-4 py-2 rounded-lg text-white font-bold bg-gradient-text hover:bg-gradient-text-hover active:bg-gradient-text-hover"
            href={`/meals/${slug}`}
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
};

export default MealItem;

// .meal
//     background: linear-gradient(90deg, #2c1e19, #25200f);
//   }

//   .actions a {
//     display: inline-block;
//     margin-top: 1rem;
//     padding: 0.5rem 1rem;
//     border-radius: 0.5rem;
//     background: linear-gradient(90deg, #f9572a, #ff9b05);
//     color: #ffffff;
//     font-weight: bold;
//     text-decoration: none;
//   }

//   .actions a:hover,
//   .actions a:active {
//     background: linear-gradient(90deg, #fd4715, #f9b241);
//     box-shadow: 0 0 12px rgba(242, 100, 18, 0.8);
//   }
