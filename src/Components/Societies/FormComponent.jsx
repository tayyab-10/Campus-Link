import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearError, fetchFormById } from '../../Actions/formActions';
import { useAlert } from 'react-alert';
import Loader from '../Loader/Loader';
import { useParams } from 'react-router-dom';

const FormComponent = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const {formId}=useParams();

  const formDetails = useSelector((state) => state.GetForm);
  const { loading, error, form } = formDetails;

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearError());
    }
  
    dispatch(fetchFormById(formId));
  }, [dispatch, formId, error]);

useEffect(() => {
  if (form) {
    console.log("Form data:", form);  // Check if socialLinks exists here
  }
}, [form]);
  if (loading) {
    return <div><Loader/></div>;
  }

  return (
    form && (
      <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        {/* Society and University Info */}
        <div className="flex flex-col items-center text-center mb-8">
          <img
            src="/path-to-society-image.jpg" // Replace with actual society image URL
            alt="Society Logo"
            className="w-24 h-24 mb-4"
          />
          <h1 className="text-3xl font-bold mb-2">
            {form.societyName} Induction Form
          </h1>
          <h2 className="text-xl text-gray-600 mb-4">{form.universityName}</h2>
          <p className="text-gray-700 max-w-lg">{form.description}</p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center mb-8 space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600"
          >
            <i className="fab fa-instagram"></i>
          </a>
          {/* Add more social links as needed */}
        </div>

        {/* Form Fields */}
        <form className="space-y-6">
          {form.fields.map((field, index) => (
            <div key={index} className="flex flex-col mb-4">
              <label className="text-gray-600 mb-2">{field.fieldLabel}</label>
              <input
                type={field.fieldType}
                name={field.fieldName}
                className="border border-gray-300 rounded-md px-4 py-2"
                placeholder={field.fieldLabel}
              />
            </div>
          ))}

          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white items-center justify-center font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    )
  );
};

export default FormComponent;
