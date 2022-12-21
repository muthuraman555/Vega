import { useFormik } from "formik";
import {basicSchema} from "./Schemas"
import axios from "axios";

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  axios.post(`http://192.168.100.156:5005/api/form/submit`,values
  )
  .then(res => {
    alert("Message Succefully Send")
  });
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};


// const loginsubmit = (e) => {

//   e.preventDefault();
//     axios.post(`http://192.168.100.156:5005/api/form/submit`,values
//     )
//     .then(res => {
//       alert("Message Succefully Send")
//     });
// }


const BasicForm = () => {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
        first_name: "",
        last_name: "",
        email:"",
        message:"",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  console.log(errors);

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
    <div className="row">
    <div className="col-md-6">
      <label htmlFor="first_name">First Name</label>
      <input
        value={values.first_name}
        onChange={handleChange}
        id="first_name"
        type="text"
        placeholder="Enter your First Name"
        onBlur={handleBlur}
        className={errors.first_name && touched.first_name ? "input-error" : ""}
      />
      {errors.first_name && touched.first_name && <p className="error">{errors.first_name}</p>}
      </div>
      <div className="col-md-6">
      <label htmlFor="last_name">Last Name</label>
      <input
        value={values.last_name}
        onChange={handleChange}
        id="last_name"
        type="text"
        placeholder="Enter your Last Name"
        onBlur={handleBlur}
        className={errors.last_name && touched.last_name ? "input-error" : ""}
      />
      {errors.last_name && touched.last_name && <p className="error">{errors.last_name}</p>}
      </div>
      <div className="col-md-12">
      <label htmlFor="email">Email</label>
      <input
        value={values.email}
        onChange={handleChange}
        id="email"
        type="email"
        placeholder="Enter your email"
        onBlur={handleBlur}
        className={errors.email && touched.email ? "input-error" : ""}
      />
      {errors.email && touched.email && <p className="error">{errors.email}</p>}
      </div>
      <div className="col-md-12">
      <label htmlFor="message">Message</label>
      <textarea
        rows="4"
        id="message"
        type="text"
        placeholder="Enter your Message"
        value={values.message}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.message && touched.message ? "input-error" : ""}
      />
      {errors.message && touched.message && (
        <p className="error">{errors.message}</p>
      )}
      </div>
      <div className="col-md-12 ">
      <button className="text-white text-left" disabled={isSubmitting} type="submit">
        Send Message
      </button>
      </div>
      </div>
    </form>
  );
};
export default BasicForm;
