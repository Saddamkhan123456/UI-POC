import React, { useState } from "react";
import { Card, CardBody, Button } from "design-system";
import { createUser } from "../../api/api";

export interface checkoutFormProps {
  id?: number;
  firstName?: string;
  lastName?: string;
  phoneNumber?: number;
  email?: string;
  country?: string;
  state?: string;
  flatNo?: any;
  areaStree?: any;
  pincode?: number;
  townCity?: string;
}
var fname = '';
const CheckoutForm = ({}: checkoutFormProps) => {
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [flatNo, setFlatNo] = useState("");
  const [areaStreet, setAreaStreet] = useState("");
  const [pincode, setPincode] = useState("");
  const [townCity, setTownCity] = useState("");
  

  
  function placeOrder() {
    const userData = {
      firstName,
      lastName,
      phoneNumber,
      email,
      country,
      state,
      flatNo,
      areaStreet,
      pincode,
      townCity,
    };
   

    createUser(userData);
    setFirstName("");
    setLastName("");
    setPhoneNumber("");
    setEmail("");
    setCountry("");
    setState("");
    setFlatNo("");
    setAreaStreet("");
    setPincode("");
    setTownCity("");
  }

  return (
    <>
      <Card className="w-full flex h-full items-center justify-center">
        <CardBody className="w-full flex p-0">
          <div className="w-full flex flex-col">
            <form
              className="w-full mx-auto flex flex-col justify-center"
              name="checkoutForm"
              method="post"
             
            >
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
                      value={firstName}
                      className="py-2 px-4 md:px-5 w-full appearance-none  border text-input text-xs lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-38"
                      aria-invalid="false"
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                      required
                  
                    />
                    {fname}
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
                      value={lastName}
                      className="py-2 px-4 md:px-5 w-full appearance-none border text-input text-xs lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-38"
                      aria-invalid="false"
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                      required = {true}
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
                      value={phoneNumber}
                      className="py-2 px-4 md:px-5 w-full appearance-none border text-input text-xs lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-38"
                      aria-invalid="false"
                      onChange={(e) => {
                        setPhoneNumber(e.target.value);
                      }}
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
                      value={email}
                      className="py-2 px-4 md:px-5 w-full appearance-none border text-input text-xs lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-38"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:space-s-3 space-y-4 sm:space-y-0">
                  <div className="w-full sm:w-1/2 mr-3">
                    <label className="block text-gray-600  text-sm leading-none mb-3 cursor-pointer">
                      Country *
                    </label>
                    <select
                      className="py-2 px-4 md:px-5 w-full appearance-none border text-input text-xs lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-38"
                      aria-label="Choose a country"
                      id="country"
                      value={country}
                      onChange={(e) => {
                        setCountry(e.target.value);
                      }}
                    >
                      <option selected>Choose a state</option>
                      <option value="India">India</option>
                    </select>
                  </div>
                  <div className="w-full sm:w-1/2 mr-3">
                    <label className="block text-gray-600  text-sm leading-none mb-3 cursor-pointer">
                      State *
                    </label>
                    <select
                      className="py-2 px-4 md:px-5 w-full appearance-none border text-input text-xs lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-38"
                      aria-label="Choose a state"
                      id="state"
                      value={state}
                      onChange={(e) => {
                        setState(e.target.value);
                      }}
                    >
                      <option selected>Choose a state</option>
                      <option value="Madhya Pradesh">Madhya Pradesh</option>
                      <option value="Maharashtra">Maharashtra</option>
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
                      name="flatNo"
                      placeholder="Flat, House no., Building, Company, Apartment"
                      value={flatNo}
                      className="py-2 px-4 md:px-5 w-full appearance-none border text-input text-xs lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-38"
                      aria-invalid="false"
                      onChange={(e) => {
                        setFlatNo(e.target.value);
                      }}
                    />
                  </div>
                  <div className="w-full sm:w-1/2 mr-3">
                    <label className="block text-gray-600  text-sm leading-none mb-3 cursor-pointer">
                      Area, Street, Sector, Village
                    </label>
                    <input
                      type="text"
                      id="areaStreet"
                      name="areaStreet"
                      placeholder="Area, Street, Sector, Village"
                      value={areaStreet}
                      className="py-2 px-4 md:px-5 w-full appearance-none border text-input text-xs lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-38"
                      aria-invalid="false"
                      onChange={(e) => {
                        setAreaStreet(e.target.value);
                      }}
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
                      value={pincode}
                      className="py-2 px-4 md:px-5 w-full appearance-none border text-input text-xs lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-38"
                      aria-invalid="false"
                      onChange={(e) => {
                        setPincode(e.target.value);
                      }}
                    />
                  </div>
                  <div className="w-full sm:w-1/2 mr-3">
                    <label className="block text-gray-600  text-sm leading-none mb-3 cursor-pointer">
                      Town/City
                    </label>
                    <input
                      type="text"
                      id="townCity"
                      name="townCity"
                      placeholder="Town City"
                      value={townCity}
                      className="py-2 px-4 md:px-5 w-full appearance-none  border text-input text-xs lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-38"
                      aria-invalid="false"
                      onChange={(e) => {
                        setTownCity(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:space-s-3 space-y-4 sm:space-y-0">
                  <div className="w-full  mr-3">
                    <Button
                      variant="primary"
                      className="cursor-pointer w-full font-semibold"
                      type="button"
                      onClick={placeOrder}
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
