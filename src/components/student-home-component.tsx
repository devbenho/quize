export const StudentHomeComponent = () => {
  return (
    <div className="bg-white flex w-full flex-col pl-14 pr-20 py-12 rounded-3xl max-md:max-w-full max-md:px-5">
      <header className="header text-indigo-700 text-4xl font-medium max-w-[482px] mt-10 self-start max-md:max-w-full max-md:mt-10">
        Home Page
      </header>
      <div className="shadow-sm bg-pink-100 flex w-[564px] max-w-full flex-col ml-2.5 mt-14 pl-16 pr-20 py-11 rounded-lg self-start items-start max-md:mt-10 max-md:px-5">
        <div className="text-black text-3xl">Hi, Ahmed</div>
        <div className="text-neutral-700 text-opacity-80 text-2xl mt-6">
          How are you today?
        </div>
      </div>
      <header className="header text-indigo-700 text-3xl font-medium max-w-[628px] mt-16 self-start max-md:max-w-full max-md:mt-10">
        You can.......
      </header>
      <form className="self-center w-full max-w-[971px] mt-32 mb-36 max-md:max-w-full max-md:my-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
            <div className="shadow-sm bg-violet-50 flex grow flex-col w-full pl-16 pr-20 pb-10 rounded-lg items-start max-md:mt-10 max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d32d4859b8456e46bae84a8a0ebacdef6401b33ec7be2fc4fd02161f27aa076?apiKey=5702a4e93b5a47fca77dd658fc4bb22a&"
                className="aspect-[0.84] object-contain object-center w-[119px] overflow-hidden z-[1] mt-0"
                alt="Quiz"
              />
              <div className="text-black text-2xl font-medium mt-12 max-md:mt-10">
                Take Quiz
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="shadow-sm bg-purple-100 flex grow flex-col w-full pl-16 pr-20 pb-10 rounded-lg items-start max-md:mt-10 max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d32d4859b8456e46bae84a8a0ebacdef6401b33ec7be2fc4fd02161f27aa076?apiKey=5702a4e93b5a47fca77dd658fc4bb22a&"
                className="aspect-[0.84] object-contain object-center w-[119px] overflow-hidden z-[1] mt-0"
                alt="View Quiz"
              />
              <div className="text-black text-2xl font-medium mt-12 max-md:mt-10">
                View Your Quiz
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="shadow-sm bg-pink-100 flex grow flex-col w-full pl-16 pr-20 pb-10 rounded-lg items-start max-md:mt-10 max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d32d4859b8456e46bae84a8a0ebacdef6401b33ec7be2fc4fd02161f27aa076?apiKey=5702a4e93b5a47fca77dd658fc4bb22a&"
                className="aspect-[0.84] object-contain object-center w-[119px] overflow-hidden z-[1] mt-0"
                alt="View Result"
              />
              <div className="text-black text-2xl font-medium ml-0 my-12 pb-px max-md:mt-10">
                <span className="text-2xl not-italic font-medium">
                  View Result
                </span>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

