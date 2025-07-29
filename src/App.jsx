const App = () => {
  return (
    <>
      <main className="bg-purple-200 md:bg-white min-h-screen flex flex-col md:flex-row md:items-start md:justify-center md:gap-8 p-6">
        {/* sectiunea steps-sidebar */}
        <section>
          <div className="h-43 bg-no-repeat bg-cover bg-[url('/assets/bg-sidebar-mobile.svg')] md:bg-[url('/assets/bg-sidebar-desktop.svg')] md:min-h-screen md:min-w-80 md:rounded-xl">
            <div className="flex gap-4 justify-center pt-8 md:flex-col md:items-start md:gap-6 md:px-16 md:py-12">
              <div className="md:flex flex-row gap-6 md:justify-center md:items-center ">
                <p className="body-md-bold text-blue-950 h-8 w-8 items-center justify-center bg-blue-200 rounded-full flex">
                  1
                </p>
                <div className="hidden md:block">
                  <span className="body-sm-regular text-blue-300">STEP1</span>
                  <h4 className="body-md-bold text-white">YOUR INFO</h4>
                </div>
              </div>
              <div className="md:flex flex-row gap-6 md:justify-center md:items-center ">
                <p className="body-md-bold text-white border border-white h-8 w-8 items-center justify-center  rounded-full flex">
                  2
                </p>
                <div className="hidden md:block">
                  <span className="body-sm-regular text-blue-300">STEP2</span>
                  <h4 className="body-md-bold text-white">SELECT PLAN</h4>
                </div>
              </div>
              <div className="md:flex flex-row gap-6 md:justify-center md:items-center">
                <p className="body-md-bold text-white border border-white h-8 w-8 items-center justify-center  rounded-full flex">
                  3
                </p>
                <div className="hidden md:block">
                  <span className="body-sm-regular text-blue-300">STEP3</span>
                  <h4 className="body-md-bold text-white">ADD-ONS</h4>
                </div>
              </div>
              <div className="md:flex flex-row gap-6 md:justify-center md:items-center">
                <p className="body-md-bold text-white border border-white h-8 w-8 items-center justify-center  rounded-full flex">
                  4
                </p>
                <div className="hidden md:block">
                  <span className="body-sm-regular text-blue-300">STEP4</span>
                  <h4 className="body-md-bold text-white">SUMMARY</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* sectiunea cu formular */}
        <section className="pt-8 pb-8 pl-6 pr-6 -mt-26  z-10 relative md:px-0 md:pt-0  md:flex-1  md:mt-0 ">
          <div className="bg-white p-6 rounded-xl shadow-md  md:w-auto">
            <h1 className="title-md text-blue-950 mb-2">Personal info</h1>
            <p className="body-lg-regular text-gray-500 mb-6">
              Please provide your name, email address, and phone number.
            </p>

            <form className="flex flex-col gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block body-sm-regular text-blue-950"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="e.g. Stephen King"
                  className="mt-1 block w-full rounded-md border body-md-medium placeholder:text-gray-500 text-blue-950 border-gray-300 px-3 py-2 focus:border-purple-600 focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block body-sm-regular text-blue-950"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="e.g. stephenking@lorem.com"
                  className="mt-1 block w-full rounded-md border body-md-medium placeholder:text-gray-500 text-blue-950 border-gray-300 px-3 py-2 focus:border-purple-600 focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block body-sm-regular text-blue-950"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="e.g. +1 234 567 890"
                  className="mt-1 block w-full rounded-md border body-md-medium placeholder:text-gray-500 text-blue-950 border-gray-300 px-3 py-2 focus:border-purple-600 focus:outline-none"
                />
              </div>
            </form>
          </div>
          {/* footer */}
          <footer className="flex justify-end bg-white px-4 py-4 mt-42 md:mt-0 w-full fixed bottom-0 right-0 md:max-w-[420px]">
            <button className="body-md-medium bg-blue-950 text-white px-4 py-2 rounded-md hover:bg-blue-900 transition">
              Next Step
            </button>
          </footer>
        </section>
      </main>
    </>
  );
};

export default App;
