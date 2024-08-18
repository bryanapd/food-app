import React from "react";

const ShareMealPage = () => {
  return (
    <>
      <header className="my-12 mx-auto w-[90%] max-w-[75rem] text-[#ddd6cb]">
        <h1 className="text-4xl font-bold font-montserrat mb-6">
          Share your{" "}
          <span className="bg-gradient-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent">
            favorite meal
          </span>
        </h1>
        <p className="font-montserrat text-xl font-medium">
          Or any other meal you feel needs sharing!
        </p>
      </header>
      <main className="w-[90%] max-w-[75rem] my-12 mx-auto text-white">
        <form className="max-w-[50rem]">
          <div className="flex gap-4">
            <p className="w-full">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-montserrat uppercase text-[#b3aea5] font-bold"
              >
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-2 mb-5 rounded border border-[#454952] bg-[#1c2027] text-lg font-montserrat text-[#ddd6cb] focus:outline-none focus:outline-[#f99f2a] focus:bg-[#1f252d]"
              />
            </p>
            <p className="w-full">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-montserrat uppercase text-[#b3aea5] font-bold"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-2 mb-5 rounded border border-[#454952] bg-[#1c2027] text-lg font-montserrat text-[#ddd6cb] focus:outline-none focus:outline-[#f99f2a] focus:bg-[#1f252d]"
              />
            </p>
          </div>
          <p>
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-montserrat uppercase text-[#b3aea5] font-bold"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              className="w-full p-2 mb-5 rounded border border-[#454952] bg-[#1c2027] text-lg font-montserrat text-[#ddd6cb] focus:outline-none focus:outline-[#f99f2a] focus:bg-[#1f252d]"
            />
          </p>
          <p>
            <label
              htmlFor="summary"
              className="block mb-2 text-sm font-montserrat uppercase text-[#b3aea5] font-bold"
            >
              Short Summary
            </label>
            <input
              type="text"
              id="summary"
              name="summary"
              required
              className="w-full p-2 mb-5 rounded border border-[#454952] bg-[#1c2027] text-lg font-montserrat text-[#ddd6cb] focus:outline-none focus:outline-[#f99f2a] focus:bg-[#1f252d]"
            />
          </p>
          <p>
            <label
              htmlFor="instructions"
              className="block mb-2 text-sm font-montserrat uppercase text-[#b3aea5] font-bold"
            >
              Instructions
            </label>
            <textarea
              id="instructions"
              name="instructions"
              rows={10}
              required
              className="w-full p-2 mb-5 rounded border border-[#454952] bg-[#1c2027] text-lg font-montserrat text-[#ddd6cb] focus:outline-none focus:outline-[#f99f2a] focus:bg-[#1f252d]"
            ></textarea>
          </p>
          IMAGE PICKER
          <p className="text-right">
            <button
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-[#f9572a] to-[#ff9b05] text-white rounded shadow-md text-lg font-inherit hover:bg-gradient-to-r hover:from-[#fd4715] hover:to-[#f9b241] focus:bg-gradient-to-r focus:from-[#fd4715] focus:to-[#f9b241] disabled:bg-[#ccc] disabled:text-[#979797] disabled:cursor-not-allowed"
            >
              Share Meal
            </button>
          </p>
        </form>
      </main>
    </>
  );
};

export default ShareMealPage;
