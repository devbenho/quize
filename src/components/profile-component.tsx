export const ProfileComponent = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-stretch">
        <header className="bg-white flex w-full flex-col pl-11 pr-20 py-12 rounded-3xl max-md:max-w-full max-md:px-5">
          <h1 className="text-indigo-700 text-4xl font-medium max-w-[572px] mt-11 self-start max-md:max-w-full max-md:mt-10">
            Profile
          </h1>
          <p className="text-neutral-700 text-opacity-80 text-xl max-w-[628px] mt-9 self-start max-md:max-w-full">
            You can edit your data
          </p>
        </header>

        <div className="shadow-sm bg-violet-50 self-center w-[841px] max-w-full mt-28 pl-11 pr-20 pb-5 rounded-lg max-md:mt-10 max-md:px-5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-2/5 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                src="src/assets/women-svg.svg"
                className="aspect-[0.93] object-contain object-center w-44 overflow-hidden mt-0 shrink-0 max-w-full max-md:mt-0"
                alt="Profile Image"
              />
            </div>
            <div className="flex flex-col items-stretch w-3/5 ml-5 max-md:w-full max-md:ml-0">
              <div className="flex flex-col items-stretch my-auto max-md:mt-10">
                <div className="text-black text-2xl">Username: ahmed_e16</div>
                <div className="text-black text-2xl mt-8">UserId: 2020015</div>
              </div>
            </div>
          </div>
        </div>

        <div className="shadow-sm self-center w-[841px] max-w-full mt-28 pl-11 pr-20 pb-5 rounded-lg max-md:mt-10 max-md:px-5">
          <div className="flex w-[546px] max-w-full justify-between gap-5 ml-28 mt-14 self-start items-start max-md:flex-wrap max-md:mt-10">
            <div className="text-black text-2xl">Full Name: Ahmed Essam</div>
            <a
              href="#"
              className="text-black text-opacity-80 text-2xl underline"
            >
              edit
            </a>
          </div>
          <div className="bg-neutral-500 bg-opacity-30 flex w-[550px] shrink-0 max-w-full h-0.5 flex-col ml-28 mt-3 self-start" />
          <div className="flex w-[546px] max-w-full justify-between gap-5 ml-28 mt-12 self-start items-start max-md:flex-wrap max-md:mt-10">
            <div className="text-black text-2xl">Email: aessam@gmail.com</div>
            <a
              href="#"
              className="text-black text-opacity-80 text-2xl underline"
            >
              edit
            </a>
          </div>
          <div className="bg-neutral-500 bg-opacity-30 flex w-[550px] shrink-0 max-w-full h-0.5 flex-col ml-28 mt-5 self-start" />
          <div className="flex w-[550px] max-w-full justify-between gap-5 ml-28 mt-10 self-start items-start max-md:flex-wrap">
            <div className="text-black text-2xl">Password: 12345a</div>
            <a
              href="#"
              className="text-black text-opacity-80 text-2xl underline"
            >
              edit
            </a>
          </div>
          <div className="bg-neutral-500 bg-opacity-30 flex w-[550px] shrink-0 max-w-full h-0.5 flex-col ml-28 mt-5 self-start" />
          <div className="flex w-[546px] max-w-full justify-between gap-5 ml-28 mt-9 self-start items-start max-md:flex-wrap">
            <div className="text-black text-2xl">Phone Number: 01294949437</div>
            <a
              href="#"
              className="text-black text-opacity-80 text-2xl underline"
            >
              edit
            </a>
          </div>
        <div className="bg-neutral-500 bg-opacity-30 flex w-[550px] shrink-0 max-w-full h-0.5 flex-col ml-28 mt-5 mb-28 self-start max-md:mb-10" />
        </div>
      </div>{' '}
    </div>
  );
};
