import React, { useEffect, useState } from "react";
import { Card, CardBody, Button } from "design-system";
import { allUsers } from "../../api/api";

export interface formProps {
  formPropsSets?: formPropsSets[];
  id?: number;
  email?: string;
  firstName?: string;
  phone?: number;
  lastName?: string;
}
export interface formPropsSets {
  username?: string;
  email?: string;
  id?: string;
}

const Account = ({}: formProps) => {
  //
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  function saveUser() {
    console.warn({ firstName, lastName, phone, email });
    let data = { firstName, lastName, phone, email };
    fetch("http://localhost:8000/Users", {
      method: "post",
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((result) => {
      console.log(result, result);
    });
  }
  return (
    <>
      <Card className="grow flex h-full items-center justify-center">
        <CardBody>
          <div className="w-full flex flex-col">
            <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-heading mb-6 xl:mb-8">
              Account Details
            </h2>
            <form className="w-full mx-auto flex flex-col justify-center ">
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
                      placeholder="First Name"
                      value={firstName}
                      className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12"
                      aria-invalid="false"
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
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
                      placeholder="Last Name"
                      value={lastName}
                      className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12"
                      aria-invalid="false"
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
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
                      placeholder="Mobile No."
                      value={phone}
                      className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12"
                      aria-invalid="false"
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
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
                      placeholder="mail"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12"
                    />
                  </div>
                </div>
                <Button
                  variant="primary"
                  className="cursor-pointer"
                  type="submit"
                  onClick={saveUser}
                >
                  save
                </Button>
              </div>
            </form>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default Account;
