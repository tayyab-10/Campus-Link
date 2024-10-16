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
