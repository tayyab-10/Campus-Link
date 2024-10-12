import {
  EyeInvisibleOutlined,
  EyeOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Input, Select, DatePicker, Radio, Form, Upload, message } from "antd";
import { useState } from "react";
import { Controller } from "react-hook-form";
const { Option } = Select;

const ReusableInput = ({ input, register, control, inputPadding }) => {
  const [imageUrl, setImageUrl] = useState(null); // State to handle preview

  const { type, name, placeholder, value } = input;

  // Validate and preview image
  const beforeUpload = (file) => {
    const isImage = file.type.startsWith("image/");
    if (!isImage) {
      message.error("You can only upload image files!");
      return Upload.LIST_IGNORE;
    }
    const isLt2M = file.size / 1024 / 1024 < 2; // Check if image is smaller than 2MB
    if (!isLt2M) {
      message.error("Image must be smaller than 2MB!");
      return Upload.LIST_IGNORE;
    }
    return true;
  };
  const renderInput = (input, field, classes) => {
    if (type === "text" || type === "email" || type === "number")
      return (
        <Input
          type={type}
          name={name}
          placeholder={placeholder}
          {...field}
          prefix={input.Icon && <input.Icon style={{ marginRight: "8px" }} />} // Adding margin to the icon
          value={field.value || ""}
          className={classes}
        />
      );
    else if (type === "password")
      return (
        <Input.Password
          type={type}
          name={name}
          iconRender={(visible) =>
            visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
          }
          prefix={input.Icon && <input.Icon style={{ marginRight: "8px" }} />} // Adding margin to the icon
          placeholder={placeholder}
          {...field}
          value={field.value || ""}
          className={classes}
        />
      );
    else if (type === "select") {
      return (
        <Select
          placeholder={placeholder}
          allowClear
          {...field}
          value={field.value || null}
          className={classes}
        >
          {input.options.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.name}
            </Option>
          ))}
        </Select>
      );
    } else if (type === "date") {
      return (
        <DatePicker
          placeholder={placeholder}
          format="YYYY-MM-DD"
          {...field}
          value={field.value || null}
          className={classes}
        />
      );
    } else if (type === "radio") {
      return (
        <Radio.Group {...field} value={field.value || null} className={classes}>
          {input.options.map((option) => (
            <Radio key={option.value} value={option.value}>
              {option.name}
            </Radio>
          ))}
        </Radio.Group>
      );
    } else if (type === "upload") {
      return (
        <Upload
          name={name}
          listType="picture-circle"
          showUploadList={false}
          beforeUpload={beforeUpload}
          onChange={(info) => {
            if (
              info.file.status === "done" ||
              info.file.status === "uploading"
            ) {
              const reader = new FileReader();
              reader.onload = () => {
                setImageUrl(reader.result); // Preview the image
                field.onChange(info.file.originFileObj); // Store file in react-hook-form's state
              };
              reader.readAsDataURL(info.file.originFileObj);
            }
          }}
          className={`${classes} text-center`}
        >
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="uploaded"
              style={{ width: "100%", height: "100%" }}
              className="rounded-full"
            />
          ) : (
            <div>
              <UploadOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          )}
        </Upload>
      );
    }
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) =>
        renderInput(
          input,
          field,
          `min-w-full mb-4 p-4 rounded-md  text-lg ${inputPadding}`
        )
      }
    />
  );
};

export default ReusableInput;
