export const AvailableQuizsComponent = () => {
  return (
    <div className="bg-white flex w-full flex-col items-stretch pl-14 pr-16 py-12 rounded-3xl max-md:max-w-full max-md:px-5">
      <header className="header text-indigo-700 text-4xl font-medium mt-10 max-md:max-w-full">
        Available Quizes
      </header>
      <form
        className="shadow-sm bg-violet-50 flex w-full items-center justify-between gap-5 mt-16 mb-96 pl-8 pr-9 pt-4 pb-4 rounded-lg max-md:max-w-full max-md:flex-wrap max-md:my-10 max-md:px-5"
        aria-label="Quiz Form"
      >
        <div className="my-auto max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[51%] max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/929d5c41e9f2c793000e84b914e6115f09af701045456f7d72086312e26f8f8a?apiKey=5702a4e93b5a47fca77dd658fc4bb22a&"
                className="aspect-[0.96] object-contain object-center w-full justify-center items-center overflow-hidden grow max-w-[476px] ml-0 max-md:mt-10"
                alt="Quiz Image"
              />
            </div>
            <div className="flex flex-col items-stretch w-[49%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex flex-col items-stretch ml-0 my-auto max-md:mt-10">
                <div className="text-black text-2xl font-medium">
                  User Interface
                </div>
                <div className="text-neutral-700 text-opacity-80 text-xl -mr-0.5 mt-9">
                  Created by: Amira Eltohamy
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="text-white text-2xl bg-indigo-700 justify-center items-stretch mt-28 px-10 py-3.5 rounded-lg self-end max-md:mt-10 max-md:px-5"
          aria-label="Start Quiz"
        >
          Start
        </button>
      </form>
    </div>
  );
}
