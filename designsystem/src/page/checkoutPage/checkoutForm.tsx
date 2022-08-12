import React, { useEffect, useState } from "react";
import { Card, CardBody, Button } from "design-system";


export interface checkoutFormProps {
  id?: number;
  email?: string;
  firstName?: string;
  phone?: number;
  lastName?: string;
}
export interface checkoutFormPropsSets {
  username?: string;
  email?: string;
  id?: string;
}

const CheckoutForm = ({}: checkoutFormProps) => {
  //   const [firstName, setFirstName] = useState("");
  //   const [lastName, setLastName] = useState("");
  //   const [phone, setPhone] = useState("");
  //   const [email, setEmail] = useState("");

  return (
    <>
      <Card className="w-full flex h-full items-center justify-center">
        <CardBody className="w-full flex p-0">
          <div className="w-full flex flex-col">
            <form className="w-full mx-auto flex flex-col justify-center ">
              <div className="flex flex-col space-y-4 sm:space-y-5">
                <div className="flex flex-col sm:flex-row sm:space-s-3 space-y-4 sm:space-y-0">
                  <div className="w-full sm:w-1/2 mr-3">
                    <label className="block text-gray-600  text-sm leading-none mb-3 cursor-pointer">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="First Name"
                      //   value={firstName}
                      className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12"
                      aria-invalid="false"
                    />
                  </div>
                  <div className="w-full sm:w-1/2 mr-3">
                    <label className="block text-gray-600 text-sm leading-none mb-3 cursor-pointer">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Last Name"
                      //   value={lastName}
                      className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12"
                      aria-invalid="false"
                    />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:space-s-3 space-y-4 sm:space-y-0">
                  <div className="w-full sm:w-1/2 mr-3">
                    <label className="block text-gray-600  text-sm leading-none mb-3 cursor-pointer">
                      Phone/Mobile *
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      placeholder="Mobile No."
                      //   value={phoneNumber}
                      className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12"
                      aria-invalid="false"
                    />
                  </div>
                  <div className="w-full sm:w-1/2 mr-3">
                    <label className="block text-gray-600 text-sm leading-none mb-3 cursor-pointer">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="E-mail"
                      //   value={email}
                      className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12"
                    />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:space-s-3 space-y-4 sm:space-y-0">
                  <div className="w-full sm:w-1/2 mr-3">
                    <label className="block text-gray-600  text-sm leading-none mb-3 cursor-pointer">
                      Country *
                    </label>
                    <select
                      className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12"
                      aria-label="Choose a country"
                      id="country"
                    >
                      <option selected> Choose a country </option>
                      <option value="0">India</option>
                      <option value="1">Afghanistan</option>
                      <option value="2">Aland Islands</option>
                    </select>
                  </div>
                  <div className="w-full sm:w-1/2 mr-3">
                    <label className="block text-gray-600  text-sm leading-none mb-3 cursor-pointer">
                      State *
                    </label>
                    <select
                      className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12"
                      aria-label="Choose a state"
                      id="state"
                    >
                      <option selected>Choose a state</option>
                      <option value="1">Madhya Pradesh</option>
                      <option value="2">Maharashtra</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:space-s-3 space-y-4 sm:space-y-0">
                  <div className="w-full sm:w-1/2 mr-3">
                    <label className="block text-gray-600  text-sm leading-none mb-3 cursor-pointer">
                    Flat, House no., Building, Company, Apartment
                    </label>
                    <input
                      type="text"
                      id="flatNo"
                      name="faltno"
                      placeholder="Flat, House no., Building, Company, Apartment"
                      //   value={faltNo}
                      className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12"
                      aria-invalid="false"
                    />
                  </div>
                  <div className="w-full sm:w-1/2 mr-3">
                    <label className="block text-gray-600  text-sm leading-none mb-3 cursor-pointer">
                    Area, Street, Sector, Village
                    </label>
                    <input
                      type="text"
                      id="areaStreet"
                      name="areastreet"
                      placeholder="Area, Street, Sector, Village"
                      //   value={areaStreet}
                      className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12"
                      aria-invalid="false"
                    />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:space-s-3 space-y-4 sm:space-y-0">
                  <div className="w-full sm:w-1/2 mr-3">
                    <label className="block text-gray-600  text-sm leading-none mb-3 cursor-pointer">
                    Pincode
                    </label>
                    <input
                      type="number"
                      id="pincode"
                      name="pincode"
                      placeholder="6 digits [0-9] PIN code"
                      //   value={pincode}
                      className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12"
                      aria-invalid="false"
                    />
                  </div>
                  <div className="w-full sm:w-1/2 mr-3">
                    <label className="block text-gray-600  text-sm leading-none mb-3 cursor-pointer">
                    Town/City
                    </label>
                    <input
                      type="text"
                      id="townCity"
                      name="areastreet"
                      placeholder="Town City"
                      //   value={townCity}
                      className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12"
                      aria-invalid="false"
                    />
                  </div>
                </div>
                
               <div className="flex flex-col sm:flex-row sm:space-s-3 space-y-4 sm:space-y-0">
                <div className="w-full  mr-3">
                <Button
                  variant="primary"
                  className="cursor-pointer w-full font-semibold"
                  type="submit"
                >
                  Place Order
                </Button>
                </div>
                </div>
              </div>
            </form>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default CheckoutForm;
