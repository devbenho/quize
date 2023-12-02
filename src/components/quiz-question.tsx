export const QuizQuestion = () => {
  return (
    <>
      <div className="bg-white flex w-full flex-col pl-11 pr-20 py-12 rounded-3xl max-md:max-w-full max-md:px-5">
        <header className="header text-indigo-700 text-4xl font-medium max-w-[482px] mt-11 self-start max-md:mt-10">
          Quiz - User Interface
        </header>
        <div className="text-neutral-700 text-opacity-80 text-xl max-w-[628px] mt-9 self-start">
          You begin the quiz
        </div>
        <form className="flex w-[336px] max-w-full flex-col mt-20 pl-20 pr-6 self-start max-md:mt-10 max-md:px-5">
          <div className="text-black text-2xl font-medium self-stretch max-md:ml-1">
            01- Type of UI?
          </div>

          <div className="flex items-stretch gap-3 mr-9 mt-10 self-end max-md:mr-2.5">
            <input
              type="radio"
              id="command-ui"
              name="ui-type"
              aria-label="Command UI"
              role="radio"
            />
            <div className="text-black text-2xl self-center my-auto">
              Command UI
            </div>
          </div>

          <div className="self-center flex gap-3 mt-7 items-start">
            <input
              type="radio"
              id="graphic-ui"
              name="ui-type"
              aria-label="Graphic UI"
              role="radio"
            />
            <div className="border bg-white flex shrink-0 h-2.5 flex-col rounded-[50%] border-solid border-indigo-700" />
            <div className="text-black text-2xl">Graphic UI</div>
          </div>

          <div className="self-center flex items-stretch gap-3 mt-6">
            <input
              type="radio"
              id="touch-ui"
              name="ui-type"
              aria-label="Touch UI"
              role="radio"
            />
            <div className="border bg-white flex shrink-0 h-2.5 flex-col rounded-[50%] border-solid border-indigo-700" />
            <div className="text-black text-2xl self-center my-auto">
              Touch UI
            </div>
          </div>

          <div className="flex items-stretch gap-3 mt-7 self-end">
            <input
              type="radio"
              id="all-ui"
              name="ui-type"
              aria-label="All of the above"
              role="radio"
            />
            <div className="border bg-white flex shrink-0 h-2.5 flex-col rounded-[50%] border-solid border-indigo-700" />
            <div className="text-black text-2xl self-start">
              All of the above
            </div>
          </div>
        </form>

        <div className="flex w-[392px] max-w-full items-stretch justify-between gap-5 mr-6 mt-32 mb-56 self-end max-md:mr-2.5 max-md:my-10">
          <button className="text-indigo-700 text-opacity-70 text-2xl border bg-white grow justify-center items-stretch pl-10 pr-14 py-3.5 rounded-lg border-solid border-indigo-700 max-md:px-5">
            Previous
          </button>
          <button className="text-white text-2xl bg-indigo-700 grow justify-center pl-16 pr-16 py-3.5 rounded-lg items-start max-md:px-5">
            Next
          </button>
        </div>
      </div>
    </>
  );
};
