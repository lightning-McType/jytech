import * as yup from "yup";

const userSchema = yup.object().shape({
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  email: yup.string().email("Invalid email format").required("Required"),
  contact: yup.string("Invalid contact number").length(10).required("Required"),
  about: yup.string().max(100).required("write something about yourself"),
  location: yup.string().required("Required"),
  gender: yup.string().required("Required"),
  interests: yup.array().min(2).required("Required"),
});

export default userSchema;
