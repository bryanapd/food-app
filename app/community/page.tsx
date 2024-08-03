import Image from "next/image";

import mealIcon from "@/assets/icons/meal.png";
import communityIcon from "@/assets/icons/community.png";
import eventsIcon from "@/assets/icons/events.png";

const Community = () => {
  return (
    <>
      <header className="w-full my-12 text-[#ddd6cb] text-2xl text-center">
        <h1 className="text-5xl font-extrabold font-montserrat mb-8">
          One shared passion: <span className="bg-gradient-text text-gradient">Food</span>
        </h1>
        <p>Join our community and share your favorite recipes!</p>
      </header>
      <main className="w-[90%] max-w-[40rem] my-0 mx-auto text-center">
        <h2 className="font-montserrat text-3xl font-bold mb-12 text-[#ddd6cb]">
          Community Perks
        </h2>

        <ul className="list-none my-12 mx-0 p-0">
          <li className="flex flex-col items-center gap-8">
            <Image
              src={mealIcon}
              width={100}
              height={100}
              alt="A delicious meal"
              className="w-32 h-32 object-contain"
            />
            <p className="font-montserrat text-2xl font-bold m-0 text-[#ddd6cb]">
              Share & discover recipes
            </p>
          </li>
          <li className="flex flex-col items-center gap-8">
            <Image
              src={communityIcon}
              width={100}
              height={100}
              alt="A crowd of people, cooking"
              className="w-32 h-32 object-contain"
            />
            <p className="font-montserrat text-2xl font-bold m-0 text-[#ddd6cb]">
              Find new friends & like-minded people
            </p>
          </li>
          <li className="flex flex-col items-center gap-8">
            <Image
              src={eventsIcon}
              width={100}
              height={100}
              alt="A crowd of people at a cooking event"
              className="w-32 h-32 object-contain"
            />
            <p className="font-montserrat text-2xl font-bold m-0 text-[#ddd6cb]">
              Participate in exclusive events
            </p>
          </li>
        </ul>
      </main>
    </>
  );
};

export default Community;
