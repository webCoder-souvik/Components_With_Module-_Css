// This is a example of a form using React Hook Form with TypeScript and Yup for validation.
// It demonstrates how to set up a simple form with validation and default values.
// create your own form component using this example as a reference.

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface FormData {
  name: string;
  email: string;
  password: string;
}

// Validation schema using yup
const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email address"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 6 characters long"),
});

const ExampleForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema), // Integrate yup validation schema
    defaultValues: {
      name: "John Doe", // Default value for name
      email: "john.doe@example.com", // Default value for email
      password: "", // Default value for password
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Name Field */}
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" {...register("name")} />
        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" {...register("email")} />
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
      </div>

      {/* Password Field */}
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" {...register("password")} />
        {errors.password && (
          <p style={{ color: "red" }}>{errors.password.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default ExampleForm;
