import { useDispatch, useSelector } from "react-redux";
import { loginInputs } from "../../Constants/constants";
import ReusableForm from "../ReusableForm/ReusableForm";
import { Link, useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import { useEffect } from "react";
import loginImage from "../../Assets/Images/login_image.png";
import {
  clearError,
  googleSignIn,
  LoadUser,
  LoginUser,
} from "../../Actions/userActions";
import Loader from "../Loader/Loader";
import { GoogleOutlined } from "@ant-design/icons";
import { Button, message } from "antd";

const Login = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();

  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.User
  );

  useEffect(() => {
    if (error) {
      console.log(error);
      message["error"](error);
      dispatch(clearError());
    }

    if (isAuthenticated) {
      dispatch(LoadUser());
      message["success"]("Login Successfully");
      navigate("/account");
    }
  }, [dispatch, error, alert, navigate, isAuthenticated]);

  const handleLogin = (data) => {
    dispatch(LoginUser(data.email, data.password));
  };
  const handleGoogleSignIn = () => {
    dispatch(googleSignIn());
  };

  const extraInputs = () => {
    return (
      <>
        <Link to="/forgotpassword">Forget Password</Link>
      </>
    );
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex justify-center min-h-screen p-4 bg-gray-100">
          <div className="flex flex-col lg:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden ">
            {/* Left side: Image */}
            <div className="hidden sm:flex w-[80%] h-auto lg:h-screen mb-20">
            <img
              src={loginImage}
              alt="Login"
              className="w-full h-full object-cover transform scale-75" // Scales down to 75% of the original size
            />
          </div>

            {/* Right side: Form */}
            <div className="p-8 w-full md:w-1/2 flex flex-col justify-center items-center border-l-2 border-gray-300 rounded-l-lg h-full">
              <h1 className="text-3xl font-bold text-center my-10">
                Welcome Back!{" "}
              </h1>
              <div className="mb-6">
                <Button
                  type="default"
                  icon={<GoogleOutlined />}
                  className="mb-3  bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300 p-6"
                  onClick={handleGoogleSignIn}
                >
                  Sign up with Google
                </Button>
              </div>

              <div className="flex items-center justify-center text-sm text-black mb-3 w-full">
                <hr className="flex-1" />
                <span className="mx-2">Or</span>
                <hr className="flex-1" />
              </div>

              <ReusableForm
                inputs={loginInputs}
                onSubmit={handleLogin}
                butttonTxt="Login"
                extraInputs={extraInputs()}
              />

              <div className="mt-3 text-center">
                Not a member?{" "}
                <Link className="text-blue-500 hover:underline" to="/signup">
                  Register now!
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
