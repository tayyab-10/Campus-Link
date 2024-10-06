import { Button, Form } from "antd";
import ReusableInput from "../ReusableInput/ReusableInput";
import { useForm } from "react-hook-form";

const ReusableForm = ({ inputs, formTitle, onSubmit, butttonTxt }) => {
  const { register, handleSubmit, control } = useForm();

  return (
    <div className="flex flex-col items-center justify-center  w-full p-4">
      <h1>{formTitle}</h1>
      <Form className="w-full">
        {inputs.map((input) => (
          <div key={input.name} className="w-full">
            <ReusableInput
              input={input}
              register={register}
              control={control}
            />
          </div>
        ))}
      </Form>
      <Button
        onClick={handleSubmit(onSubmit)}
        type="primary"
        className=" p-6 px-10"
      >
        {butttonTxt ? butttonTxt : "Submit"}
      </Button>
    </div>
  );
};

export default ReusableForm;
