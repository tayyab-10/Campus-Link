import React, { useEffect } from "react";
import SocietyCard from "../Societies/Societycard";
import Navbar from "../Layout/navbar";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { clearError, getSocieties } from "../../Actions/societyactions";
import Loader from "../Loader/Loader";

const LandingPage = () => {
  const alert = useAlert();
  const dispatch = useDispatch();

  const {
    error,
    loading,
    societies = [],
  } = useSelector((state) => state.GetSocieties);
  console.log("Societies in component: ", societies);
  
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearError());
    }
    dispatch(getSocieties());
  }, [dispatch, error]);
  console.log("Societies state:", societies);
  return (
    <>
      <Navbar />
      {loading ? (
        <Loader />
      ) : (
        <div className="min-h-screen bg-gray-50 p-6 md:p-12 lg:p-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {console.log(societies)}
            {societies && societies.length > 0 ? (
              societies.map((society) => (
                <SocietyCard key={society._id} society={society} />
              ))
            ) : (
              <p>No societies available.</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default LandingPage;
