import React, { useEffect, useState } from "react";
import { Card, CardBody, Button } from "design-system";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { RootState } from "../../store/configureStore";
import { useSelector, useDispatch } from "react-redux";
import {
  addOrderProducts,
  getCartProducts,
} from "../../redux/actions/ActionsCreators";
export interface checkoutFormProps {
  id?: number;
  name?: string;
  phoneNumber?: number;
  email?: string;
  address?: string;
}

const CheckoutForm = (checkoutFormProps) => {
  const [cartData, setCartData] = useState([]);

  const cartlist = useSelector((state: RootState) => state.getCart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<any>(getCartProducts());
  }, []);

  useEffect(() => {
    setCartData(cartlist?.products?.products);
  }, [cartlist?.products]);

  let cartTotalValue = 0,
    orderTotalValue = 0,
    cartTotalTax = 0;

  const cartValue = () => {
    cartData?.forEach((item) => {
      if (item !== undefined) {
        cartTotalValue += item.quantity * item.price;
        cartTotalTax += (item.price / 100) * 12 * item.quantity;
      }
    });
  };
  cartValue();

  orderTotalValue = cartTotalValue + cartTotalTax;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<checkoutFormProps>();

  const handleEdit = (data: checkoutFormProps) => {
    const newCheckoutData = {
      ...data,
      orderTotalValue: orderTotalValue,
      cartTotalValue: cartTotalValue,
      cartTotalTax: cartTotalTax,
    };
    dispatch<any>(addOrderProducts(newCheckoutData));
    navigate("/thankyou");
  }; // your form submit function which will invoke after successful validation

  //
  const navigate = useNavigate();
  const [chekoutData, setChekoutData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    address: "",
    checkoutItems: [],
    orderTotal: 0,
    id: uuidv4(),
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setChekoutData({ ...chekoutData, [name]: value });
  };

  return (
    <>
      <Card className="flex h-full items-center justify-center w-full">
        <CardBody className="w-full flex p-0">
          <div className="w-full flex flex-col">
            <form
              className="w-full mx-auto flex flex-col justify-center"
              onSubmit={handleSubmit(handleEdit)}
            >
              <div className="flex flex-col space-y-4 sm:space-y-5">
                <div className="flex flex-col sm:flex-row sm:space-s-3 space-y-4 sm:space-y-0">
                  <div className="w-full">
                    <label className="block text-gray-600  text-sm leading-none mb-3 cursor-pointer">
                      First Name *
                    </label>
                    <input
                      {...register("name", {
                        required: true,
                        minLength: 5,
                        pattern: /^[A-Za-z]+$/i,
                      })}
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Name"
                      value={chekoutData.name}
                      className="py-2 px-4 md:px-5 w-full appearance-none  border text-input text-xs lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-38"
                      aria-invalid="false"
                      onChange={handleInput}
                    />
                    {errors?.name?.type === "pattern" && (
                      <p className="mt-2 text-theme-danger">
                        Alphabetical characters only
                      </p>
                    )}
                    {errors?.name?.type === "required" && (
                      <p className="mt-2 text-theme-danger">
                        This field is required
                      </p>
                    )}
                    {errors?.name?.type === "minLength" && (
                      <p className="mt-2 text-theme-danger">
                        First name cannot less than 5 characters
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:space-s-3 space-y-4 sm:space-y-0">
                  <div className="w-full sm:w-1/2 mr-3">
                    <label className="block text-gray-600  text-sm leading-none mb-3 cursor-pointer">
                      Phone/Mobile *
                    </label>
                    <input
                      {...register("phoneNumber", {
                        required: true,
                        pattern: /\d+/,
                        minLength: 10,
                        maxLength: 10,
                      })}
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      placeholder="Mobile No."
                      value={chekoutData.phoneNumber}
                      className="py-2 px-4 md:px-5 w-full appearance-none border text-input text-xs lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-38"
                      aria-invalid="false"
                      onChange={handleInput}
                    />
                    {errors?.phoneNumber?.type === "required" && (
                      <p className="mt-2 text-theme-danger">
                        This field is required
                      </p>
                    )}
                    {errors?.phoneNumber?.type === "pattern" && (
                      <p className="mt-2 text-theme-danger">
                        This input is number only.
                      </p>
                    )}
                    {errors?.phoneNumber?.type === "minLength" && (
                      <p className="mt-2 text-theme-danger">
                        Please enter valid 10 digit number
                      </p>
                    )}
                    {errors?.phoneNumber?.type === "maxLength" && (
                      <p className="mt-2 text-theme-danger">
                        limit exceeded than 10 digit
                      </p>
                    )}
                  </div>
                  <div className="w-full sm:w-1/2">
                    <label className="block text-gray-600 text-sm leading-none mb-3 cursor-pointer">
                      Email *
                    </label>
                    <input
                      {...register("email", {
                        required: true,
                        pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      })}
                      type="email"
                      id="email"
                      name="email"
                      placeholder="E-mail"
                      value={chekoutData.email}
                      className="py-2 px-4 md:px-5 w-full appearance-none border text-input text-xs lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-38"
                      onChange={handleInput}
                    />
                    {errors?.email?.type === "required" && (
                      <p className="mt-2 text-theme-danger">
                        This field is required
                      </p>
                    )}
                    {errors?.email?.type === "pattern" && (
                      <p className="mt-2 text-theme-danger">
                        enter valid email id
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:space-s-3 space-y-4 sm:space-y-0">
                  <div className="w-full">
                    <label className="block text-gray-600  text-sm leading-none mb-3 cursor-pointer">
                      Address *
                    </label>
                    <textarea
                      {...register("address", {
                        required: true,
                      })}
                      name="address"
                      id="address"
                      placeholder="Address"
                      value={chekoutData.address}
                      onChange={handleInput}
                      className="py-2 px-4 md:px-5 w-full appearance-none border text-input text-xs lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading"
                      rows={7}
                    ></textarea>
                    {errors?.address?.type === "required" && (
                      <p className="mt-2 text-theme-danger">
                        This field is required
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:space-s-3 space-y-4 sm:space-y-0">
                  <div className="w-full ">
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
