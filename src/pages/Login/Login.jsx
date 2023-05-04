import React, { useContext, useState } from "react";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
const Login = () => {

  const { signInWithEAndPd, scontinuewithGoogle, continuewithGithubGit } =
    useContext(AuthContext);

const [successful, Setsuccessful] = useState("");
const [error, setError] = useState("");


const loginOnsubmit = (event) =>{
  Setsuccessful("");
  setError("");
  event.preventDefault();

  const formValue = event.target;
  const email = formValue.email.value;
  const password = formValue.password.value;

  signInWithEAndPd(email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;

      console.log(user);
      // ...
      event.target.reset("");
      Setsuccessful("Welcome back! Your login was successful.");

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setError(errorMessage,errorCode)
    });


}

const continuewithGoogle = () => {
    scontinuewithGoogle()
}

const continuewithGitHub = () =>{
    continuewithGithubGit()
}













  return (
    <div>
      <div
        href="#"
        className="flex text-center mx-auto flex-row justify-center items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
      >
        <img
          className="w-8 h-8 mr-2"
          src="https://seeklogo.com/images/C/chef-logo-3AB30DE4D7-seeklogo.com.png"
          alt="logo"
        />
        <img
          className="h-20"
          src="https://pngimg.com/d/welcome_PNG81.png"
          alt=""
        />
      </div>
      <section
        style={{
          backgroundImage: `url(https://flowbite.s3.amazonaws.com/blocks/marketing-ui/authentication/illustration.svg)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className=" dark:bg-gray-900"
      >
        <div className="flex b flex-col items-center justify-center px-6  mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:-mt-80 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Login to your account
              </h1>
              <form onSubmit={loginOnsubmit} className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>

                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div>
                <div className="inline-flex items-center justify-center w-full">
                  <hr className="w-72  mb-3 mt-3 h-px  bg-gray-200 border-0 dark:bg-gray-700" />
                  <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
                    Or
                  </span>
                </div>
                <div className="flex flex-col gap-4 items-center justify-center">
                  <div className="">
                    <Button onClick={continuewithGoogle}
                      size="lg"
                      variant="outlined"
                      color="blue-gray"
                      className="flex items-center gap-3"
                    >
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png"
                        alt="metamask"
                        className="h-6 w-6"
                      />
                      Continue with Google
                    </Button>
                  </div>
                  <div>
                    <Button onClick={continuewithGitHub}
                      size="lg"
                      variant="outlined"
                      color="blue-gray"
                      className="flex items-center gap-3 "
                    >
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                        alt="metamask"
                        className="h-6 w-6"
                      />
                      Continue with GitHub!
                    </Button>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-black text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <Link
                    to={"/registration"}
                    className="font-medium  hover:underline text-blue-600"
                  >
                    Sign up
                  </Link>
                </p>
              </form>
              <p className="text-green-500">{successful}</p>
              <p className="text-red-500">{error}</p>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
