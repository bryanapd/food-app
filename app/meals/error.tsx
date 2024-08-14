"use client";

const Error = ({ error }: { error: string }) => (
  <main className="mt-20 text-center">
    <h1 className="text-[5rem] mb-5 font-black text-[#262626] uppercase bg-gradient-text text-gradient font-montserrat">
      An error occured!
    </h1>
    <p className="text-2xl font-medium text-[#ddd8d8]">
      Failed to fetch meal data. Please try again later.
    </p>
  </main>
);
export default Error;
