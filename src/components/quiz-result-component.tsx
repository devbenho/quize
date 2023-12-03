export const QuizResultComponent = () => {
  return (
    <div className="flex flex-col justify-center items-stretch">
      <header className="bg-white flex w-full flex-col pl-11 pr-20 py-12 rounded-3xl items-start max-md:max-w-full max-md:px-5">
        <h1 className="text-indigo-700 text-4xl font-medium max-w-[572px] mt-11 max-md:max-w-full max-md:mt-10">
          Quiz Result{" "}
        </h1>
        <p className="text-neutral-700 text-opacity-80 text-xl max-w-[628px] mt-9 max-md:max-w-full">
          You finished this quiz
        </p>
        <div
          className="shadow-sm bg-violet-50 flex w-[490px] max-w-full flex-col ml-11 mt-16 mb-96 pl-10 pr-20 py-11 rounded-lg items-start max-md:my-10 max-md:px-5"
          role="group"
          aria-label="User Interface Quiz"
        >
          <h2 className="text-black text-4xl font-medium">
            User Interface Quiz
          </h2>
          <div className="flex items-stretch justify-between gap-5 mt-8">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1dbab9ae6da1d96faeb4169c1f9fbc5fab4d92000765e9dfcdaee78b9a5e7b94?apiKey=5702a4e93b5a47fca77dd658fc4bb22a&"
              className="aspect-[1.13] object-contain object-center w-11 overflow-hidden shrink-0 max-w-full"
              alt="Quiz Result"
            />
            <div className="text-blue-500 text-3xl font-bold my-auto">3/4</div>
          </div>
        </div>
      </header>
    </div>
  );
}
