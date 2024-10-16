import { Button, Form } from "antd";
import ReusableInput from "../ReusableInput/ReusableInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createValidationSchema } from "../../Utils/ValidationFunctions";
import { Link } from "react-router-dom";

const ReusableForm = ({
  inputs,
  formTitle,
  butttonTxt,
  onSubmit,
  extraInputs,
}) => {
  const validateScheme = createValidationSchema(inputs);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validateScheme),
  });

  return (
    <div className="flex flex-col items-center justify-center  w-full p-4">
      <h1>{formTitle}</h1>
      <Form className="w-full">
        {inputs.map((input) => (
          <ReusableInput
            input={input}
            register={register}
            control={control}
            errors={errors}
            key={input.name}
          />
        ))}
        {extraInputs &&<div className="my-2">{extraInputs}</div>}
      </Form>
      <Form.Item>
        <Button
          type="primary"
          className=" p-6 px-10"
          onClick={handleSubmit(onSubmit)}
        >
          {butttonTxt ? butttonTxt : "Submit"}
        </Button>
      </Form.Item>
    </div>
  );
};

export default ReusableForm;
