import { useState } from "react";
import Stepper from "./components/Stepper";
import PaymentPlan from "./components/payment-plan";

const App = () => {
  const [errors, setErrors] = useState({});
  const [currentStep, setCurrentStep] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    // validari pentru input-uri
    const nameInput = data.get("name");
    const emailInput = data.get("email");
    const phoneInput = data.get("phone");

    const formErrors = {};

    if (nameInput.length === 0) {
      formErrors.name = "This field is required";
    } else if (nameInput.length < 3) {
      formErrors.name = "Name must contain at least 3 characters";
    }
    const forbiddenCharacters = [
      "!",
      "@",
      "#",
      "$",
      "%",
      "^",
      "&",
      "*",
      "(",
      ")",
      "1",
      "2",
      "3",
    ];
    for (let i = 0; i < forbiddenCharacters.length; i++) {
      if (nameInput.includes(forbiddenCharacters[i])) {
        formErrors.name = "Name must contain only letters";
        break;
      }
    }

    if (emailInput.length === 0) {
      formErrors.email = "This field is required";
    } else if (!emailInput.includes("@")) {
      formErrors.email = "Email must contain `@`";
    } else if (emailInput.indexOf("@") === 0) {
      formErrors.email = "`@` cannot be the first character";
    }

    if (phoneInput.length === 0) {
      formErrors.phone = "Phone number is required";
    } else if (phoneInput.length !== 10) {
      formErrors.phone = "Phone number must be 10 digits long";
    }

    console.log("Email input:", emailInput);
    console.log("Form errors:", formErrors);

    if (Object.keys(formErrors).length > 0) {
      // extragem cheile din formErrors - ["name", "email"]  in cazul in care avem erori in cele doua inputuri - length = 2
      setErrors(formErrors); // daca exista errori se modifica state-ul cu valorile din formErrors
      return;
    }

    setErrors({});

    // daca validarile au fost cu success, trecem pe pasul urmator
    setCurrentStep(2);
  };

  return (
    <>
      <main className="bg-purple-200 md:bg-white min-h-screen flex flex-col md:flex-row md:items-start md:justify-center md:gap-8 p-6">
        {/* sectiunea steps-sidebar */}
        <section>
          <Stepper currentStep={currentStep} />
        </section>
        {/* sectiunea cu formular */}
        <section className="pt-8 pb-8 pl-6 pr-6 -mt-26  z-10 relative md:px-0 md:pt-0  md:flex-1  md:mt-0 ">
          {currentStep === 1 && (
            <div className="bg-white p-6 rounded-xl shadow-md  md:w-auto">
              <h1 className="title-md text-blue-950 mb-2">Personal info</h1>
              <p className="body-lg-regular text-gray-500 mb-6">
                Please provide your name, email address, and phone number.
              </p>

              <form
                id="personal-info-form"
                onSubmit={handleSubmit}
                className="flex flex-col gap-4"
              >
                <div>
                  <div className="flex justify-between items-center">
                    <label
                      htmlFor="name"
                      className="block body-sm-regular text-blue-950"
                    >
                      Name
                    </label>
                    {errors.name && (
                      <p className="text-red-500 body-md-bold mt-1">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="e.g. Stephen King"
                    className="mt-1 block w-full rounded-md border body-md-medium placeholder:text-gray-500 text-blue-950 border-purple-200 px-3 py-2 focus:border-purple-600 focus:outline-none"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <label
                      htmlFor="email"
                      className="block body-sm-regular text-blue-950"
                    >
                      Email Address
                    </label>
                    {errors.email && (
                      <p className="text-red-500 body-md-bold mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <input
                    type="text" //  schimbat din "email" - type="email" folosește validarea internă a browserului și blochează formularul înainte de handleSubmit
                    id="email"
                    name="email"
                    placeholder="e.g. stephenking@lorem.com"
                    className="mt-1 block w-full rounded-md border body-md-medium placeholder:text-gray-500 text-blue-950 border-purple-200 px-3 py-2 focus:border-purple-500 focus:outline-none"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <label
                      htmlFor="phone"
                      className="block body-sm-regular text-blue-950"
                    >
                      Phone Number
                    </label>
                    {errors.phone && (
                      <p className="text-red-500 body-md-bold mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="e.g. +1 234 567 890"
                    className="mt-1 block w-full rounded-md border body-md-medium placeholder:text-gray-500 text-blue-950 border-purple-200 px-3 py-2 focus:border-purple-500 focus:outline-none"
                  />
                </div>
              </form>
            </div>
          )}
          {/* Payment - Plan */}
          {currentStep === 2 && (
            <div className="bg-white p-6 rounded-xl shadow-md md:w-auto">
              <PaymentPlan />
            </div>
          )}

          {/* footer */}
          <footer className="flex justify-between bg-white w-full px-4 py-4  md:mt-0  fixed bottom-0 right-0 md:max-w-1/2 lg:max-w-6/10 xl:max-w-7/10 ">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={() => setCurrentStep((prev) => prev - 1)}
                className="body-md-medium text-gray-500 hover:text-blue-950 transition flex justify-start "
              >
                Go Back
              </button>
            ) : (
              <div /> // spațiu placeholder pentru aliniere
            )}
            <button
              form="personal-info-form"
              className="body-md-medium bg-blue-950 text-white px-4 py-2 rounded-md hover:bg-blue-900 transition cursor-pointer"
            >
              Next Step
            </button>
          </footer>
        </section>
      </main>
    </>
  );
};

export default App;
