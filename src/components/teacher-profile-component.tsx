export const TeacherProfileComponent = () => {
  return (
    <div className="flex flex-col justify-center items-stretch">
      <div className="bg-white flex w-full flex-col pl-11 pr-20 py-12 rounded-3xl max-md:max-w-full max-md:px-5">
        <header className="text-indigo-700 text-4xl font-medium max-w-[572px] mt-11 self-start max-md:max-w-full max-md:mt-10">
          Profile
        </header>
        <p className="text-neutral-700 text-opacity-80 text-xl max-w-[628px] mt-9 self-start max-md:max-w-full">
          You can edit your data
        </p>
        <div className="shadow-sm bg-violet-50 self-center flex w-[841px] shrink-0 max-w-full h-[133px] flex-col mt-28 rounded-lg max-md:mt-10" />
        <div className="text-black text-2xl max-w-[628px] ml-28 mt-14 self-start max-md:ml-2.5 max-md:mt-10">
          <label htmlFor="fullName">Full Name :</label>
          <span id="fullName">Mirna Ahmed</span>
        </div>
        <div className="text-black text-2xl max-w-[628px] ml-28 mt-16 self-start max-md:ml-2.5 max-md:mt-10">
          <label htmlFor="email">Email :</label>
          <span id="email">AhmedM@gmail.com</span>
        </div>
        <div className="text-black text-2xl max-w-[628px] ml-28 mt-16 self-start max-md:ml-2.5 max-md:mt-10">
          <label htmlFor="password">Password :</label>
          <span id="password">1234mir</span>
        </div>
        <div className="text-black text-2xl max-w-[628px] ml-28 mt-16 mb-32 self-start max-md:ml-2.5 max-md:my-10">
          <label htmlFor="phoneNumber">Phone Number :</label>
          <span id="phoneNumber">01294949437</span>
        </div>
      </div>
    </div>
  );
}