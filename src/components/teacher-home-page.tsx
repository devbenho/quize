export const TeacherHomePage = () => {
  return (
    <div className="flex flex-col justify-center items-stretch">
      <header className="header bg-white flex w-full flex-col pl-12 pr-20 py-12 rounded-3xl max-md:max-w-full max-md:px-5">
        <h1 className="text-indigo-700 text-4xl font-medium max-w-[482px] mt-11 self-start max-md:max-w-full max-md:mt-10">
          Home Page
        </h1>
        <div className="shadow-sm bg-pink-100 w-[564px] max-w-full mt-12 pl-10 pt-6 rounded-lg self-start max-md:mt-10 max-md:pl-5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[70%] max-md:w-full max-md:ml-0">
              <div className="flex flex-col items-stretch my-auto max-md:mt-10">
                <div className="text-black text-3xl">Hi, Teacher Mirna</div>
                <div className="text-neutral-700 text-opacity-80 text-2xl mt-6">
                  How are you today?
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[30%] ml-5 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa9e1a83588c4fe0bb84c2fcbe735eed86ed506dbe6500b0530184a99b445b93?apiKey=5702a4e93b5a47fca77dd658fc4bb22a&"
                className="aspect-[0.93] object-contain object-center w-32 overflow-hidden shrink-0 max-w-full grow max-md:mt-10"
              />
            </div>
          </div>
        </div>
        <h2 className="text-indigo-700 text-3xl font-medium max-w-[628px] mt-16 self-start max-md:max-w-full max-md:mt-10">
          You can.......
        </h2>
        <div className="self-center w-full max-w-[975px] mt-36 mb-36 px-0.5 max-md:max-w-full max-md:my-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
              <div className="shadow-sm bg-violet-50 flex grow flex-col items-center w-full pb-10 px-20 rounded-lg max-md:mt-10 max-md:px-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b835ee556a0b40c29ee49948b5cb654425748e403e497b32b9949a03107d52ca?apiKey=5702a4e93b5a47fca77dd658fc4bb22a&"
                  className="aspect-[0.68] object-contain object-center w-[97px] overflow-hidden z-[1] mt-0 max-w-full"
                />
                <div className="text-black text-2xl font-medium self-stretch whitespace-nowrap mt-11 max-md:mt-10">
                  Create Quiz
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <div className="shadow-sm bg-purple-100 flex grow flex-col w-full pb-9 px-20 rounded-lg items-end max-md:mt-10 max-md:px-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a36d4305632f56dfe3ec9177ee4e1a6002c1ec9f6900f2620f430548ac27834e?apiKey=5702a4e93b5a47fca77dd658fc4bb22a&"
                  className="aspect-[0.68] object-contain object-center w-24 overflow-hidden z-[1] mt-0 max-w-full max-md:mr-0.5"
                />
                <div className="text-black text-2xl font-medium mt-12 max-md:mt-10 max-md:mx-1">
                  View Quiz
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <div className="text-black text-2xl font-medium whitespace-nowrap shadow-sm bg-pink-100 grow justify-center w-full pt-28 pb-12 px-16 rounded-lg items-end max-md:mt-10 max-md:pl-5 max-md:pr-6 max-md:pt-10">
                View Result
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}