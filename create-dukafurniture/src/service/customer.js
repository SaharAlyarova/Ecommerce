import * as Yup from "yup";


export const customerValidationSchema2 = Yup.object().shape({
    Email: Yup.string("")
      .required("this field can not be empty")
      .min(10, "min 10 character is required"),
    
  });