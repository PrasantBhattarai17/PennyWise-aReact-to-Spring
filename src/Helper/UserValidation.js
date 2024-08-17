import * as Yup from "yup";

export const signUpschema = Yup.object({
  email: Yup.string().email("Email Invallid!").required("Please Enter email"),
  password: Yup.string()
    .min(8, "Password must be more than 8 digits")
    .required("Please Enter password")
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,"Special character and Number is Must"),
  name:Yup.string().min(4,"Name is too short").required("please Enter username"),
  cpassword:Yup.string().oneOf([Yup.ref("password")],"Password not matched!")
});



export const loginSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
});
