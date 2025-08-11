const Stepper = (props) => {
  return (
    <div className="h-43 bg-no-repeat bg-cover bg-[url('/assets/bg-sidebar-mobile.svg')] md:bg-[url('/assets/bg-sidebar-desktop.svg')] md:min-h-screen md:min-w-80 md:rounded-xl">
      <div className="flex gap-4 justify-center pt-8 md:flex-col md:items-start md:gap-6 md:px-16 md:py-12">
        <div className="md:flex flex-row gap-6 md:justify-center md:items-center ">
          <p
            className={`body-md-bold  h-8 w-8 items-center justify-center  rounded-full flex ${
              props.currentStep === 1
                ? "bg-blue-200 text-blue-950"
                : "text-white border border-white"
            }`}
          >
            1
          </p>
          <div className="hidden md:block">
            <span className="body-sm-regular text-blue-300">STEP1</span>
            <h4 className="body-md-bold text-white">YOUR INFO</h4>
          </div>
        </div>
        <div className="md:flex flex-row gap-6 md:justify-center md:items-center ">
          <p
            className={`body-md-bold  h-8 w-8 items-center justify-center  rounded-full flex ${
              props.currentStep === 2
                ? "bg-blue-200 text-blue-950"
                : "text-white border border-white"
            }`}
          >
            2
          </p>
          <div className="hidden md:block">
            <span className="body-sm-regular text-blue-300">STEP2</span>
            <h4 className="body-md-bold text-white">SELECT PLAN</h4>
          </div>
        </div>
        <div className="md:flex flex-row gap-6 md:justify-center md:items-center">
          <p
            className={`body-md-bold  h-8 w-8 items-center justify-center  rounded-full flex ${
              props.currentStep === 3
                ? "bg-blue-200 text-blue-950"
                : "text-white border border-white"
            }`}
          >
            3
          </p>
          <div className="hidden md:block">
            <span className="body-sm-regular text-blue-300">STEP3</span>
            <h4 className="body-md-bold text-white">ADD-ONS</h4>
          </div>
        </div>
        <div className="md:flex flex-row gap-6 md:justify-center md:items-center">
          <p
            className={`body-md-bold  h-8 w-8 items-center justify-center  rounded-full flex ${
              props.currentStep === 4
                ? "bg-blue-200 text-blue-950"
                : "text-white border border-white"
            }`}
          >
            4
          </p>
          <div className="hidden md:block">
            <span className="body-sm-regular text-blue-300">STEP4</span>
            <h4 className="body-md-bold text-white">SUMMARY</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stepper;
