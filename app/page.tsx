import ImageSlideshow from "@/components/ImageSlideshow";
import Link from "next/link";

const Home = () => (
  <>
    <header className="flex gap-12 my-12 mx-auto w-[90%] max-w-[75rem]">
      <div className="w-[40rem] h-[25rem]">
        <ImageSlideshow />
      </div>
      <div>
        <div className="text-[#ddd6cb] text-2xl">
          <h1 className="text-3xl font-bold tracking-wider uppercase font-montserrat bg-gradient-text text-gradient">
            NextLevel Food for NextLevel Foodies
          </h1>
          <p className="mt-4">Taste & share food from all over the world.</p>
        </div>
        <div className="mt-2 flex gap-4 text-2xl [&>:first-child]:bg-transparent [&>:first-child]:font-normal [&>:first-child]:text-[#ff9b05] [&>:first-child]:active:hover:bg-transparent [&>:first-child]:pl-0 [&>:first-child]:active:hover:text-[#f9b241]">
          <Link
            href="/community"
            className="inline-block mt-4 py-2 px-4 rounded-lg text-white font-bold"
          >
            Join the Community
          </Link>
          <Link
            href="/meals"
            className="inline-block mt-4 py-2 px-4 rounded-lg text-white font-bold bg-gradient-text hover:bg-gradient-text-hover active:bg-gradient-text-hover"
          >
            Explore Meals
          </Link>
        </div>
      </div>
    </header>
    <main>
      <section className="flex flex-col text-[#ddd6cb] text-2xl max-w-[50rem] w-[90%] my-8 mx-auto text-center">
        <h2>How it works</h2>
        <p>
          NextLevel Food is a platform for foodies to share their favorite
          recipes with the world. It&apos;s a place to discover new dishes, and
          to connect with other food lovers.
        </p>
        <p>
          NextLevel Food is a place to discover new dishes, and to connect with
          other food lovers.
        </p>
      </section>

      <section className="flex flex-col text-[#ddd6cb] text-2xl max-w-[50rem] w-[90%] my-8 mx-auto text-center">
        <h2>Why NextLevel Food?</h2>
        <p>
          NextLevel Food is a platform for foodies to share their favorite
          recipes with the world. It&apos;s a place to discover new dishes, and
          to connect with other food lovers.
        </p>
        <p>
          NextLevel Food is a place to discover new dishes, and to connect with
          other food lovers.
        </p>
      </section>
    </main>
  </>
);

export default Home;
