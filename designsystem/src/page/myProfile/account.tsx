import React, { useState } from "react";
import { Card, CardBody, Button } from "design-system";
import { allUsers } from "../../api/api";

export interface formProps {
  formPropsSets: formPropsSets[];
  id?: number;
  email?: string;
  username?: string;
  phone?: number;
  lastname?: string;
}
export interface formPropsSets {
  username?: string;
  email?: string;
  id?: string;
}

const Account = ({}: formProps) => {
  const [user, setUserData] = useState([]);
  console.log("first");
  console.log(user);
  React.useEffect(() => {
    allUsers().then((response) => {
      setUserData(response["data"]);
    });
  }, []);
  console.log(user);
  const [values, setValues] = useState([]);

  const handleTextChange = (event) => {
    setValues(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("form submitted");
  };
  return (
    <>
      {user.map((allUser) => (
        <Card className="flex align-center justify-center border-0 w-full">
          <CardBody>
            <div className="w-full flex flex-col">
              <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-heading mb-6 xl:mb-8">
                Account Details
              </h2>
              <form
                onSubmit={handleSubmit}
                className="w-full mx-auto flex flex-col justify-center "
              >
                <div className="flex flex-col space-y-4 sm:space-y-5">
                  <div className="flex flex-col sm:flex-row sm:space-s-3 space-y-4 sm:space-y-0">
                    <div className="w-full sm:w-1/2 mr-3">
                      <label className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder={allUser.username}
                        // value={allUser.username}
                        className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12"
                        aria-invalid="false"
                        onChange={handleTextChange}
                      />
                    </div>
                    <div className="w-full sm:w-1/2 mr-3">
                      <label className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder={allUser.lastname}
                        // value={allUser.lastname}
                        className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12"
                        aria-invalid="false"
                        onChange={handleTextChange}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:space-s-3 space-y-4 sm:space-y-0">
                    <div className="w-full sm:w-1/2 mr-3">
                      <label className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer">
                        Phone/Mobile *
                      </label>
                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder={allUser.phone}
                        // value={allUser.phone}
                        className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12"
                        aria-invalid="false"
                        onChange={handleTextChange}
                      />
                    </div>
                    <div className="w-full sm:w-1/2 mr-3">
                      <label className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder={allUser.email}
                        // value={allUser.email}
                        onChange={handleTextChange}
                        className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12"
                      />
                    </div>
                  </div>
                  <Button
                    variant="primary"
                    className="cursor-pointer"
                    type="submit"
                  >
                    edit
                  </Button>
                </div>
              </form>
            </div>
          </CardBody>
        </Card>
      ))}
    </>
  );
};

export default Account;
