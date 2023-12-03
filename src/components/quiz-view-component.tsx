export const QuizViewComponent = () => {
  return (
    <div className="flex flex-col justify-center items-stretch">
      <header className="bg-white flex w-full flex-col pl-11 pr-20 py-12 rounded-3xl items-start max-md:max-w-full max-md:px-5">
        <h1 className="text-indigo-700 text-4xl font-medium max-w-[572px] mt-11 max-md:max-w-full max-md:mt-10">
          View Quiz{" "}
        </h1>
        <p className="text-neutral-700 text-opacity-80 text-xl max-w-[628px] mt-9 max-md:max-w-full">
          Contains all quizzes you finished
        </p>
      </header>
      <form className="shadow-sm bg-violet-50 flex w-[490px] max-w-full flex-col ml-11 mt-16 pl-10 pr-20 py-11 rounded-lg items-start max-md:mt-10 max-md:px-5">
        <h2 className="text-black text-4xl font-medium">User Interface Quiz</h2>
        <div className="flex items-stretch justify-between gap-5 mt-8">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9ddc5656a6eb590db06c7560de244ef8c9a7abc4343f9018b58b4a18a9bd137?apiKey=5702a4e93b5a47fca77dd658fc4bb22a&"
            className="aspect-[1.13] object-contain object-center w-11 overflow-hidden shrink-0 max-w-full"
            alt="Quiz Image"
          />
          <div className="text-blue-500 text-3xl font-bold my-auto">3/4</div>
        </div>
      </form>
      <div className="text-black text-4xl max-w-[572px] ml-14 mt-16 max-md:ml-2.5 max-md:mt-10">
        Questions
      </div>
      <div className="bg-neutral-500 bg-opacity-30 flex w-[171px] shrink-0 h-0.5 flex-col ml-14 mt-4 max-md:ml-2.5" />
      <div className="text-black text-2xl max-w-[628px] ml-20 mt-10 max-md:ml-2.5">
        01- Type of UI?
      </div>
      <div className="text-black text-2xl max-w-[628px] ml-20 mt-7 max-md:ml-2.5">
        02- Benefits of good UI?
      </div>
      <div className="text-black text-2xl max-w-[628px] ml-20 mt-7 max-md:ml-2.5">
        03-Interface component....
      </div>
      <div className="text-black text-2xl max-w-[799px] ml-20 mt-7 mb-32 max-md:max-w-full max-md:mb-10">
        04- Accept input and provide output by generating voice is......
      </div>
    </div>
  );
}
