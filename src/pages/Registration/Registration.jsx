import React, { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AiOutlineEye ,AiOutlineEyeInvisible } from "react-icons/ai";

import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import {
  Form,
  Link,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Registration = () => {
  const notify = () => toast("Here is your toast.");
  const [successful, Setsuccessful] = useState("");
  const [error, setError] = useState("");
  const [show,setShow] = useState(false)
  const navigate = useNavigate();
  const location = useLocation();
  const form = location.state?.from?.pathname || "/";

  const { createUser, updateAUser } = useContext(AuthContext);

  const registerSubmit = (event) => {
    Setsuccessful("");
    setError("");
    event.preventDefault();

    const formValue = event.target;
    const name = formValue.name.value;
    const email = formValue.email.value;
    const password = formValue.password.value;
    const photoUrl = formValue.photoUrl.value;
    const confirmpassword = formValue.cmpassword.value;
    setError('')
 if(password !== confirmpassword){
    return setError(
      "Make sure that the password and confirmation password fields match exactly"
    );
 }

    console.log(photoUrl);
    if (!/(?=.*\d)/.test(password)) {
      setError("should contain at least one digit");
      return;
    } else if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError(" Ensure string has two uppercase letters");
      return;
    } else if (!/.{7}/.test(password)) {
      // length
      setError("Ensure string is of length 7.");
      return;
    }

    createUser(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);

        <Toaster position="top-right" reverseOrder={true}></Toaster>;
        setError("");
        Setsuccessful("Congratulations! Your Registration was Successful !");
        // ...
        updateAUser(name, photoUrl);
        event.target.reset("");
        navigate(form, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(errorMessage, errorCode);
        setError(errorMessage, errorCode);
      });
  };

  return (
    <div>
      <Card className="mt-10" color="white" shadow={false}>
        <Typography className="text-center" variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 text-center font-normal">
          {successful ? (
            <span className="text-green-500">{successful}</span>
          ) : (
            <span>Enter your details to register.</span>
          )}
        </Typography>
        <form
          onSubmit={registerSubmit}
          className="mt-8 mx-auto mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-4 flex flex-col gap-6 form-control">
            <Input name="name" size="lg" label="Name" required />
            <Input name="email" size="lg" label="Email" required />
            <div className="flex  items-center justify-center">
              <Input
                name="password"
                type={show ? "text" : "password"}
                size="lg"
                label="Password"
                required
              />
              <div
                onClick={() => setShow(!show)}
                className="absolute ms-60 md:ms-80"
              >
                {show ? (
                  <AiOutlineEyeInvisible className="text-4xl "></AiOutlineEyeInvisible>
                ) : (
                  <AiOutlineEye className="text-4xl  "></AiOutlineEye>
                )}
              </div>
            </div>

            <div>
              <Input
                name="cmpassword"
                type={show ? "text" : "password"}
                size="lg"
                label=" Confirm password"
                required
              />
            </div>

            <Input name="photoUrl" size="lg" label="Photo URL" required />

            <label className="block">
              <span className="sr-only">Choose profile photo</span>
              <input
                // name="photoUrl"
                type="file"
                className="block w-full text-sm text-slate-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-violet-50 file:text-violet-700
                  hover:file:bg-violet-100
                "
              />
            </label>
          </div>

          <h1>{successful}</h1>
          <Checkbox
          required
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
                
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors text-red-400 hover:text-blue-500"
                >
                  &nbsp;
                  <Link
                    to={
                      "https://www.termsfeed.com/live/b5fb6ace-6483-4497-a9cf-618587f31111"
                    }
                    target="https://www.termsfeed.com/live/b5fb6ace-6483-4497-a9cf-618587f31111"
                  >
                    Terms and Conditions
                  </Link>
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <button
            type=""
            className="text-white w-full mt-3 bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5  text-center mr-2 mb-2"
          >
            Register
          </button>
          <h5 className="text-red-700">{error}</h5>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?..
            <Link
              to={"/login"}
              className="font-medium text-red-500 transition-colors hover:text-blue-700"
            >
              Sign In
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
};

export default Registration;
