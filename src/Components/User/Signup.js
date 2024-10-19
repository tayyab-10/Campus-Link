import { useDispatch, useSelector } from "react-redux";
import { registerInputs } from "../../Constants/Formconstants";
import ReusableForm from "../ReusableForm/ReusableForm";
import { Link, useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import { useEffect } from "react";
import loginImage from "../../Assets/Images/login_image.png";
import {
  clearError,
  googleSignIn,
  LoadUser,
  SignupUser,
} from "../../Actions/userActions";
import Loader from "../Loader/Loader";
import { GoogleOutlined } from "@ant-design/icons";
import { Button } from "antd";

const Signup = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();

  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.User
  );

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearError());
    }

    if (isAuthenticated) {
      dispatch(LoadUser());
      alert.success("Signup Successfully");
      navigate("/userprofile");
    }
  }, [dispatch, error, alert, navigate, isAuthenticated]);

  const handleSignUp = async (data) => {
    const formData = new FormData();
    formData.append("name", data?.name);
    formData.append("email", data?.email);
    formData.append("password", data?.password);
    formData.append("university", data?.university);
    formData.append("avatar", data?.avatar);
    console.log(formData);
    dispatch(SignupUser(formData));
  };
  const handleGoogleSignIn = () => {
    dispatch(googleSignIn());
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex justify-center min-h-screen p-4 bg-gray-100">
          <div className="flex flex-col lg:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden ">
            {/* Left side: Image */}
            <div className="hidden sm:flex w-[80%] h-auto lg:h-screen mb-60">
            <img
              src={loginImage}
              alt="Login"
              className="w-full h-full object-cover transform scale-75" // Scales down to 75% of the original size
            />
          </div>

            {/* Right side: Form */}
            <div className="p-8 w-full md:w-1/2 flex flex-col justify-center items-center border-l-2 border-gray-300 rounded-l-lg h-full">
              <div className="mb-6">
                <Button
                  type="default"
                  icon={<GoogleOutlined />}
                  className="mb-3 p-6 bg-blue-500 text-white"
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
                inputs={registerInputs}
                onSubmit={handleSignUp}
                butttonTxt="Signup"
              />
              <div className="text-center mt-3">
                <span className="font-normal">Already a member?</span>
                <Link
                  to="/login"
                  className="text-blue-500 hover:underline ml-1"
                >
                  Login here!
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Signup;
