import {
  LockOutlined,
  UserOutlined,
  GoogleOutlined,
  MailOutlined,
} from "@ant-design/icons";

export const loginInputs = [
  {
    name: "email",
    type: "email",
    placeholder: "Enter Email",
    Icon: MailOutlined,
    label: "Email",
    require: true,
  },
  {
    name: "password",
    type: "password",
    placeholder: "Enter Password",
    Icon: LockOutlined,
    label: "Password",
    require: true,
  },
];

export const registerInputs = [
  {
    name: "avatar",
    type: "upload",
    placeholder: "Upload Image",
    Icon: UserOutlined,
    label: "Upload Image",
  },
  {
    name: "name",
    type: "text",
    placeholder: "Enter Name",
    Icon: UserOutlined,
    label: "Name",
    require: true,
  },
  {
    name: "email",
    type: "email",
    placeholder: "Enter Email",
    Icon: MailOutlined,
    label: "Email",
    require: true,
  },
  {
    name: "password",
    type: "password",
    placeholder: "Enter Password",
    Icon: LockOutlined,
    label: "Password",
    require: true,
  },
  {
    name: "confirmPassword",
    type: "password",
    placeholder: "Enter Confirm Password",
    Icon: LockOutlined,
    label: "Confirm Password",
    require: true,
  },
  {
    name: "university",
    type: "text",
    placeholder: "Enter University",
    Icon: UserOutlined,
    label: "University",
    require: true,
  },
];

export const societyinductionForm = {
  techSociety: [
    {
      name: "name",
      type: "text",
      placeholder: "Enter Full Name",
      Icon: UserOutlined,
      label: "Full Name",
      require: true,
    },
    {
      name: "department",
      type: "text",
      placeholder: "Enter your Department",
      Icon: UserOutlined,
      label: "Department Name",
      require: true,
    },
    {
      name: "session",
      type: "text",
      placeholder: "Enter Your Session",
      Icon: UserOutlined,
      label: "Session Name",
      require: true,
    },
    {
      name: "whatsapp number",
      type: "text",
      placeholder: "Enter Your Phone Number",
      Icon: UserOutlined,
      label: "Phone Number",
      require: true,
    },
    {
      name: "email",
      type: "email",
      placeholder: "Enter Email",
      Icon: MailOutlined,
      label: "Email",
      require: true,
    },
    {
      name: "domainPreference",
      type: "select",
      options: ["Web Development", "Cloud Computing", "Artificial Inelligence", "Cybersecurity"],
      placeholder: "Select Your Preference",
      Icon: UserOutlined,
      label: "Preferred Domain",
      require: true,
    },
  ],
  nonTechSociety: [
    {
      name: "name",
      type: "text",
      placeholder: "Enter Full Name",
      Icon: UserOutlined,
      label: "Full Name",
      require: true,
    },
    {
      name: "department",
      type: "text",
      placeholder: "Enter your Department",
      Icon: UserOutlined,
      label: "Department Name",
      require: true,
    },
    {
      name: "session",
      type: "text",
      placeholder: "Enter Your Session",
      Icon: UserOutlined,
      label: "Session Name",
      require: true,
    },
    {
      name: "whatsapp number",
      type: "text",
      placeholder: "Enter Your Phone Number",
      Icon: UserOutlined,
      label: "Phone Number",
      require: true,
    },
    {
      name: "email",
      type: "email",
      placeholder: "Enter Email",
      Icon: MailOutlined,
      label: "Email",
      require: true,
    },
    {
      name: "interest",
      type: "text",
      placeholder: "Enter Interest Area",
      Icon: UserOutlined,
      label: "Interest Area",
      require: true,
    },
  ],
};

export const CREATE_FORM_REQUEST = "CREATE_FORM_REQUEST";
export const CREATE_FORM_SUCCESS = "CREATE_FORM_SUCCESS";
export const CREATE_FORM_FAIL = "CREATE_FORM_FAIL";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const GET_FORM_REQUEST = "GET_FORM_REQUEST";
export const GET_FORM_SUCCESS = "GET_FORM_SUCCESS";
export const GET_FORM_FAIL = "GET_FORM_FAIL";
