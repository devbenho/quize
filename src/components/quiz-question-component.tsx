export interface msq {
  question: string;
  options: string[];
}

export const QuizQuestionComponent = () => {
  const courseQuizName = '01- Type of UI?';
  const question: msq = {
    question: '01- Type of UI?',
    options: ['Command UI', 'Graphic UI', 'Touch UI', 'All of the above'],
  };

  return (
    <>
      <div className="bg-white flex w-full flex-col pl-11 pr-20 py-12 rounded-3xl max-md:max-w-full max-md:px-5">
        <header className="header text-indigo-700 text-4xl font-medium max-w-[482px] mt-11 self-start max-md:mt-10">
          Quiz - {courseQuizName}
        </header>
        <div className="text-neutral-700 text-opacity-80 text-xl max-w-[628px] mt-9 self-start">
          You begin the quiz
        </div>
        <form className="flex w-[336px] max-w-full flex-col mt-20 pl-20 pr-6 self-start max-md:mt-10 max-md:px-5">
          <div className="text-black text-2xl font-medium self-stretch max-md:ml-1 mb-4">
            01- {question.question}?
          </div>

          {question.options.map((option, index) => (
            <div className="flex gap-2 text-black text-xl my-3 ">
              <input
                type="radio"
                id={`option-${index}`}
                name="ui-type"
                aria-label="Command UI"
                role="radio"
              />
              <label htmlFor={`option-${index}`}>{option}</label>
                
            </div>
          ))}
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
