import * as Yup from 'yup';

export const createValidationSchema = (fields) => {
    const shape = {};
    fields.forEach((field) => {
      if (field.name === 'avatar') {
        shape.avatar = Yup.mixed()
          .required('Avatar is required')
          .test('fileSize', 'Image must be smaller than 2MB', (file) => {
            return file && file.size / 1024 / 1024 < 2;
          });
      } else if (field.type === 'text') {
        shape[field.name] = Yup.string().required(`${field.label} is required`);
      } else if (field.type === 'email') {
        shape[field.name] = Yup.string().email('Invalid email address').required(`${field.label} is required`);
      } else if (field.type === 'password') {
        shape[field.name] = Yup.string()
          .min(8, 'Password must be at least 8 characters')
          .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'Password must contain at least one uppercase, one lowercase, and one digit')
          .required('Password is required');
      } else if (field.type === 'select') {
        shape[field.name] = Yup.string().required(`${field.label} is required`);
      }
    });
    return Yup.object().shape(shape);
  };
  