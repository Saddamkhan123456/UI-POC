import React, { useState } from "react";
import { Card, CardBody, Button } from "design-system";
import { createUser } from "../../api/api";
import { useNavigate } from "react-router-dom";

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

const CheckoutForm = ({}: checkoutFormProps) => {
  const navigate = useNavigate();
  const [chekoutData, setchekoutData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
  });
  
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    //  console.log(name + value);
    setchekoutData({ ...chekoutData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkoutDetails = { ...chekoutData };
    console.log(checkoutDetails);
    createUser(checkoutDetails);
    navigate("/thankyou");
  };

  return (
    <>
      <Card className="w-full flex h-full items-center justify-center">
        <CardBody className="w-full flex p-0">
          <div className="w-full flex flex-col">
            <form
              className="w-full mx-auto flex flex-col justify-center"
              onSubmit={handleSubmit}
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
                      value={chekoutData.firstName}
                      className="py-2 px-4 md:px-5 w-full appearance-none  border text-input text-xs lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-38"
                      aria-invalid="false"
                      onChange={handleInput}
                      required
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
                      value={chekoutData.lastName}
                      className="py-2 px-4 md:px-5 w-full appearance-none border text-input text-xs lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-38"
                      aria-invalid="false"
                      onChange={handleInput}
                      required
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
                      value={chekoutData.phoneNumber}
                      className="py-2 px-4 md:px-5 w-full appearance-none border text-input text-xs lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-38"
                      aria-invalid="false"
                      onChange={handleInput}
                      maxLength={10}
                      required
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
                      value={chekoutData.email}
                      className="py-2 px-4 md:px-5 w-full appearance-none border text-input text-xs lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-38"
                      onChange={handleInput}
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:space-s-3 space-y-4 sm:space-y-0">
                  <div className="w-full  mr-3">
                    <Button
                      variant="primary"
                      className="cursor-pointer w-full font-semi"
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
