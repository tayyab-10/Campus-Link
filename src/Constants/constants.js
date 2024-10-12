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
  },
  {
    name: "password",
    type: "password",
    placeholder: "Enter Password",
    Icon: LockOutlined,
    label: "Password",
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
  },
  {
    name: "email",
    type: "email",
    placeholder: "Enter Email",
    Icon: MailOutlined,
    label: "Email",
  },
  {
    name: "password",
    type: "password",
    placeholder: "Enter Password",
    Icon: LockOutlined,
    label: "Password",
  },
  {
    name: "confirmPassword",
    type: "password",
    placeholder: "Enter Confirm Password",
    Icon: LockOutlined,
    label: "Confirm Password",
  },
  {
    name: "university",
    type: "text",
    placeholder: "Enter University",
    Icon: UserOutlined,
    label: "University",
  },

];
