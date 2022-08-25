import React, { useEffect, useState } from "react";
import { Card, CardBody, Button } from "design-system";
import { useForm } from "react-hook-form";

interface IFormInput {
  name: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

const Account = ({}: IFormInput) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInput>();
  const handleEdit = (data: IFormInput) => {
    alert(JSON.stringify(data.name));
    let item = { name, lastName, mobile, email };

    fetch(`http://localhost:8000/Users/${userId}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    }).then((result) => {
      result.json().then((resp) => {
        console.log(resp);
        getUsers();
      });
    });
  }; // your form submit function which will invoke after successful validation

  //
  const [users, setUser] = useState([]);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = () => {
    fetch("http://localhost:8000/Users").then((result) => {
      result.json().then((resp) => {
        // console.warn(resp);
        setUser(resp);
        setName(resp[0].name);
        setLastName(resp[0].lastName);
        setMobile(resp[0].mobile);
        setEmail(resp[0].email);
        setUserId(resp[0].id);
      });
    });
  };

  // function handleEdit(e) {
  //   e.preventDefault();
  //   // console.log("You clicked submit.");
  //   let item = { name, lastName, mobile, email };

  //   fetch(`http://localhost:8000/Users/${userId}`, {
  //     method: "PUT",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(item),
  //   }).then((result) => {
  //     result.json().then((resp) => {
  //       console.log(resp);
  //       getUsers();
  //     });
  //   });
  // }

  return (
    <>
      <Card className="grow flex h-full w-1/2 items-center justify-center">
        <CardBody className="w-full">
          <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-heading mb-6 xl:mb-8">
            Account Details
          </h2>
          <form
            onSubmit={handleSubmit(handleEdit)}
            className="w-full mx-auto flex flex-col justify-center "
          >
            <div className="flex flex-col space-y-4 sm:space-y-5">
              <div className="">
                <label
                  aria-label="name"
                  className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer"
                >
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
                  placeholder="First Name"
                  value={name}
                  className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12"
                  aria-invalid="false"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
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
              <div className="">
                <label className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer">
                  Last Name *
                </label>
                <input
                  {...register("lastName", {
                    required: true,
                    pattern: /^[A-Za-z]+$/i,
                  })}
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
                {errors?.lastName?.type === "pattern" && (
                  <p className="mt-2 text-theme-danger">
                    Alphabetical characters only
                  </p>
                )}
                {errors?.lastName?.type === "required" && (
                  <p className="mt-2 text-theme-danger">
                    This field is required
                  </p>
                )}
              </div>
              <div>
                <label className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer">
                  Phone/Mobile *
                </label>
                <input
                  {...register("phoneNumber", {
                    required: true,
                    pattern: /\d+/,
                  })}
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Mobile No."
                  value={mobile}
                  className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12"
                  aria-invalid="false"
                  onChange={(e) => {
                    setMobile(e.target.value);
                  }}
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
              </div>

              <div className="">
                <label className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer">
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
                  placeholder="mail"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12"
                />
                {errors?.email?.type === "required" && (
                  <p className="mt-2 text-theme-danger">
                    This field is required
                  </p>
                )}
                {errors?.email?.type === "pattern" && (
                  <p className="mt-2 text-theme-danger">enter valid email id</p>
                )}
              </div>

              <Button
                variant="primary"
                className="cursor-pointer mr-2"
                type="submit"
                // onClick={onSubmit}
              >
                save
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </>
  );
};

export default Account;
