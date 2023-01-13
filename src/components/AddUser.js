import { Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { add } from "../store/userSlice";
import userSchema from "../schemas/validationSchema";
import { useNavigate } from "react-router-dom";

const cities = [
  "Mumbai",
  "Delhi",
  "Kolkata",
  "Pune",
  "Bangalore",
  "Jaipur",
  "Chandigarh",
  "Punjab",
  "Hyderabad",
  "Gurgaon",
  "Noida",
  "Chennai",
  "Lunknow",
  "Indore",
];

function AddUser() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      contact: "",
      gender: "",
      interests: "",
      location: "",
      about: "",
    },
    onSubmit: (values) => {
      dispatch(add(values));
      alert("User added successfully");
      navigate("/show");
    },
    validationSchema: userSchema,
  });
  return (
    <div>
      <h1 style={{ marginBottom: 20 }}>Add a User</h1>
      <Form onSubmit={formik.handleSubmit}>
        <div className="d-flex justify-content-between mb-3">
          <div className="w-50">
            <Form.Group className="w-75">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                name="firstName"
                type="text"
                placeholder="First Name"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <div className="error">{formik.errors.firstName}</div>
              ) : null}
            </Form.Group>
          </div>
          <div className="w-50">
            <Form.Group className="w-75">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                name="lastName"
                type="text"
                placeholder="Last Name"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <div className="error">{formik.errors.lastName}</div>
              ) : null}
            </Form.Group>
          </div>
        </div>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Contact</Form.Label>
          <Form.Control
            name="contact"
            type="text"
            placeholder="Contact"
            value={formik.values.contact}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.contact && formik.errors.contact ? (
            <div className="error">{formik.errors.contact}</div>
          ) : null}
        </Form.Group>
        <Form.Group
          className="mb-3"
          value={formik.values.gender}
          onChange={formik.handleChange}
        >
          <Form.Label>Gender</Form.Label>
          <Form.Check label="M" name="gender" type="radio" value="M" />
          <Form.Check label="F" name="gender" type="radio" value="F" />
          {formik.touched.gender && formik.errors.gender ? (
            <div className="error">{formik.errors.gender}</div>
          ) : null}
        </Form.Group>
        <Form.Group
          className="mb-3"
          value={formik.values.interests}
          onChange={formik.handleChange}
        >
          <Form.Label>Interests</Form.Label>
          <Form.Check
            label="Reading books"
            name="interests"
            type="checkbox"
            value="Reading books"
          />
          <Form.Check
            label="Watching movies"
            name="interests"
            type="checkbox"
            value="Watching movies"
          />
          <Form.Check
            label="Playing video games"
            name="interests"
            type="checkbox"
            value="Playing video games"
          />
          <Form.Check
            label="Singing"
            name="interests"
            type="checkbox"
            value="Singing"
          />
          <Form.Check
            label="Others"
            name="interests"
            type="checkbox"
            value="Others"
          />
          {formik.touched.interests && formik.errors.interests ? (
            <div className="error">{formik.errors.interests}</div>
          ) : null}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Location</Form.Label>
          <select
            name="location"
            className="category-dropdown"
            value={formik.values.location}
            onChange={formik.handleChange}
          >
            <option value="" label="Select a city" />
            {cities.map((city) => (
              <option key={city} value={city} label={city} />
            ))}
          </select>
          {formik.touched.location && formik.errors.location ? (
            <div className="error">{formik.errors.location}</div>
          ) : null}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>About</Form.Label>
          <div>
            <textarea
              value={formik.values.about}
              onChange={formik.handleChange}
              name="about"
              cols="50"
              rows="4"
            ></textarea>
          </div>
          {formik.touched.about && formik.errors.about ? (
            <div className="error">{formik.errors.about}</div>
          ) : null}
        </Form.Group>
        <div className="d-flex justify-content-center">
          <Button type="submit" variant="primary">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default AddUser;
