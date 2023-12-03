export const QuizCreationComponent = () => {
  return (
    <form className="flex flex-col justify-center items-stretch">
      <header className="bg-white flex w-full flex-col pl-11 pr-20 py-12 rounded-3xl items-start max-md:max-w-full max-md:px-5">
        <h1 className="text-indigo-700 text-4xl font-medium max-w-[572px] mt-11 max-md:max-w-full max-md:mt-10">
          New Quiz
        </h1>
        <p className="text-neutral-700 text-opacity-80 text-xl max-w-[628px] mt-9 max-md:max-w-full">
          Create new quiz
        </p>
        <div className="flex w-[584px] max-w-full justify-between gap-5 ml-32 mt-20 items-start max-md:flex-wrap max-md:mt-10">
          <div className="text-black text-2xl font-medium">Quiz Name</div>
          <a href="#" className="text-black text-opacity-80 text-2xl underline">
            edit
          </a>
        </div>
        <div className="bg-neutral-500 bg-opacity-30 flex w-[584px] shrink-0 max-w-full h-0.5 flex-col ml-32 mt-3.5" />
        <div className="flex w-[584px] max-w-full items-stretch justify-between gap-5 ml-32 mt-7 mb-96 max-md:flex-wrap max-md:justify-center max-md:mb-10">
          <div className="text-black text-2xl self-center my-auto">01 |</div>
          <div className="text-black text-2xl max-w-[352px] bg-zinc-400 bg-opacity-30 grow justify-center pl-3.5 pr-16 py-7 items-start max-md:max-w-full max-md:pr-5">
            -----
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f387cb4cb16851da1f0782dd2efa5e214e97e140c0d1e00afc25b703842b0f6?apiKey=5702a4e93b5a47fca77dd658fc4bb22a&"
            className="aspect-[1.03] object-contain object-center w-8 fill-zinc-800 overflow-hidden self-center shrink-0 max-w-full my-auto"
          />
        </div>
      </header>
    </form>
  );
};
