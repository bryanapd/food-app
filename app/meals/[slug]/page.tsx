import Image from "next/image";
import { getMeal } from "@/lib/meals";
import { Meal as MealType } from "@/types/meals";

const MealDetails = ({ params }: { params: { slug: string } }) => {
  const meal = getMeal(params.slug) as MealType;

  meal.instructions = meal.instructions.replace(/\n/g, "<br />");
  return (
    <>
      <header className="flex p-10 max-w-[80rem]">
        <div className="mr-8">
          <Image
            src={meal.image}
            width={400}
            height={400}
            alt={meal.title}
            className="relative w-full h-auto rounded-lg shadow-md animate-fade-slide-in-from-left"
            objectFit="cover"
          />
        </div>
        <div className="p-4 text-[#ddd6cb] max-w-[40rem] animate-fade-slide-in-from-right">
          <h1 className="text-6xl font-bold tracking-wide uppercase font-montserrat mb-6">
            {meal.title}
          </h1>
          <p className="text-2xl text-[#cfa69b] italic mb-6">
            by{" "}
            <a
              className="text-gradient-text bg-clip-text bg-gradient-to-tr from-[#f9572a] to-[#ff8a05]"
              href={`mailto:${meal.creator_email}`}
            >
              {meal.creator}
            </a>
          </p>
          <p className="text-2xl">{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className="text-xl leading-6 bg-[#6e6464] text-[#13120f] rounded-lg shadow-lg p-8 max-w-[60rem] my-4 mx-auto animate-fade-slide-in-from-bottom"
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        />
      </main>
    </>
  );
};

export default MealDetails;

// .loading {
//   font-size: 3rem;
//   text-align: center;
//   color: #ddd6cb;
//   font-weight: bold;
//   animation: flash 1s ease-in-out infinite alternate;
// }
