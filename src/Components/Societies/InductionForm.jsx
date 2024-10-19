import React, { useState, useEffect } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { clearError } from "../../Actions/userActions";
import { createForm, fetchFormById } from "../../Actions/formActions";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

const InductionForm = () => {
  const navigate = useNavigate();
  const [societyType, setSocietyType] = useState("");
  const [societyName, setSocietyName] = useState("");
  const [universityName, setUniversityName] = useState("");
  const [description, setDescription] = useState("");
  const [societybanner, setSocietybanner] = useState({ url: "" });
  const [socialLinks, setSocialLinks] = useState([]);
  // State for session options
  const [sessionOptions, setSessionOptions] = useState([]);
  const [newSessionOption, setNewSessionOption] = useState("");
  
  const [fields, setFields] = useState([]);
  const [newField, setNewField] = useState({
    fieldName: "", // renamed from name
    fieldLabel: "", // renamed from label
    fieldType: "text", // renamed from type
    required: false,
  });

  const dispatch = useDispatch();
  const alert = useAlert();
  
  // Destructure and add fallback to avoid errors
  const { loading, error, formId } = useSelector((state) => state.Inductionform || {});

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearError());
    }
    if (formId) {
      dispatch(fetchFormById(formId));
      navigate(`form/${formId}`);
    }
  }, [error, formId, alert, dispatch, navigate]);

  // Handle input changes for society form fields
  const handleSocietyChange = (e) => {
    const { name, value } = e.target;
    if (name === "societyType") setSocietyType(value);
    if (name === "societyName") setSocietyName(value);
    if (name === "universityName") setUniversityName(value);
    if (name === "description") setDescription(value);
  };

  // Handle input changes for creating new fields
  const handleFieldChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewField({
      ...newField,
      [name]: type === "checkbox" ? checked : value, // Handle checkbox
    });
  };

  const handleSocialLinksChange = (e) => {
    const { name, value } = e.target;
    setSocialLinks((prevLinks) => ({
      ...prevLinks,
      [name]: value, // Keep the state structure for easy input handling
    }));
  };

  const handleAddSocialLinks = () => {
    const linksArray = Object.values(socialLinks);
    setSocialLinks(linksArray);
  };

  const handleBannerChange = (e) => {
    setSocietybanner({ url: e.target.value });
  };

  // Add new field to the form preview
  const handleAddField = () => {
    setFields([...fields, newField]);
    setNewField({ fieldName: "", fieldLabel: "", fieldType: "text", required: false }); // Reset form after adding
  };
  const handleSessionOptionChange = (e) => {
    setNewSessionOption(e.target.value);
  };

  // Add new session option
  const handleAddSessionOption = () => {
    if (newSessionOption.trim()) {
      setSessionOptions([...sessionOptions, newSessionOption]);
      setNewSessionOption(""); // Clear input
    }
  };
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const socialLinksArray = Object.values(socialLinks);
    const formData = {
      societyType,
      societyName,
      universityName,
      societybanner,
      socialLinks: socialLinksArray, // new social links go here
      description,
      fields, // all dynamic form fields go here
    };

    const response = await dispatch(createForm(formData));
    if (response && response.formId) {
      alert.success("Form Created Successfully");
      dispatch(fetchFormById(response.formId));
      navigate(`/form/${response.formId}`);
    }
  };
  

  return (
    <>
    {loading ? (
      <Loader />
    ):( <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-semibold mb-4">Create Induction Form</h1>

      {/* Society Form Fields */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Society Type:</label>
        <input
          type="text"
          name="societyType"
          value={societyType}
          onChange={handleSocietyChange}
          placeholder="Enter Society Type"
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Society Name:</label>
        <input
          type="text"
          name="societyName"
          value={societyName}
          onChange={handleSocietyChange}
          placeholder="Enter Society Name"
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">University Name:</label>
        <input
          type="text"
          name="universityName"
          value={universityName}
          onChange={handleSocietyChange}
          placeholder="Enter University Name"
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
  <label className="block text-gray-700 font-medium mb-2">Society Banner URL:</label>
  <input
    type="text"
    name="societybanner" // Change this to match your state
    value={societybanner.url}
    onChange={handleBannerChange}
    placeholder="Enter Banner Image URL"
    className="w-full px-4 py-2 border border-gray-300 rounded-md"
  />
</div>


  {/* Social Links */}
  <div className="mb-4">
    <label className="block text-gray-700 font-medium mb-2">Facebook URL:</label>
    <input
      type="text"
      name="facebook"
      value={socialLinks.facebook}
      onChange={handleSocialLinksChange}
      placeholder="Enter Facebook URL"
      className="w-full px-4 py-2 border border-gray-300 rounded-md"
    />
  </div>

  <div className="mb-4">
    <label className="block text-gray-700 font-medium mb-2">Twitter URL:</label>
    <input
      type="text"
      name="twitter"
      value={socialLinks.twitter}
      onChange={handleSocialLinksChange}
      placeholder="Enter Twitter URL"
      className="w-full px-4 py-2 border border-gray-300 rounded-md"
    />
  </div>

  <div className="mb-4">
    <label className="block text-gray-700 font-medium mb-2">Instagram URL:</label>
    <input
      type="text"
      name="instagram"
      value={socialLinks.instagram}
      onChange={handleSocialLinksChange}
      placeholder="Enter Instagram URL"
      className="w-full px-4 py-2 border border-gray-300 rounded-md"
    />
  </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Description:</label>
        <textarea
          name="description"
          value={description}
          onChange={handleSocietyChange}
          placeholder="Enter Description"
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
          rows="4"
        />
      </div>

      {/* Field Input Section */}
      {/* Dynamic Session Options */}
      <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Session Options:</label>
            <div className="flex items-center mb-2">
              <input
                type="text"
                value={newSessionOption}
                onChange={handleSessionOptionChange}
                placeholder="Enter session"
                className="w-full px-4 py-2 border border-gray-300 rounded-md mr-2"
              />
              <button
                onClick={handleAddSessionOption}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500"
              >
                Add
              </button>
            </div>

            {/* Render session options as checkboxes */}
            {sessionOptions.length > 0 && (
              <div className="mt-4">
                <h2 className="text-lg font-medium">Sessions:</h2>
                {sessionOptions.map((option, index) => (
                  <label key={index} className="block text-gray-700">
                    <input type="checkbox" name={`session_${option}`} className="mr-2" />
                    {option}
                  </label>
                ))}
              </div>
            )}
          </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Field Name:</label>
        <input
          type="text"
          name="fieldName" // updated name
          value={newField.fieldName}
          onChange={handleFieldChange}
          placeholder="Enter field name"
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Field Label:</label>
        <input
          type="text"
          name="fieldLabel" // updated name
          value={newField.fieldLabel}
          onChange={handleFieldChange}
          placeholder="Enter field label"
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Field Type:</label>
        <select
          name="fieldType" // updated name
          value={newField.fieldType}
          onChange={handleFieldChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        >
          <option value="text">Text</option>
          <option value="email">Email</option>
          <option value="radio">Radio</option>
          <option value="checkbox">Checkbox</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            name="required"
            checked={newField.required}
            onChange={handleFieldChange}
            className="form-checkbox h-5 w-5 text-indigo-600"
          />
          <span className="ml-2 text-gray-700">Required</span>
        </label>
      </div>

      {/* Add Field Button */}
      <button
        onClick={handleAddField}
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-500"
      >
        Add Field
      </button>

      {/* Form Preview */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Form Preview</h2>
        <div className="border-t border-gray-300 pt-4">
          {fields.map((field, index) => (
            <div key={index} className="mb-2">
              <label className="block text-gray-700 font-medium">
                {field.fieldLabel} ({field.fieldType}) {field.required && "*"}
              </label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                type={field.fieldType}
                disabled
              />
            </div>
          ))}
        </div>
      </div>

      {/* Submit Form Fields */}
      <button
        onClick={handleSubmit}
        className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-500 mt-4"
      >
        Submit Form Fields
      </button>
    </div>
  )};
  </>
  );
};

export default InductionForm;
