import { useForm } from "react-hook-form";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          {...register("name", { required: "Name is required" })}
          id="name"
        />
      </div>
      <div>
        <label htmlFor="email">email</label>
        <input
          type="text"
          {...register("email", {
            required: "email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
              message: "Invalid Email Address",
            },
          })}
          id="email"
        />
      </div>
      <div>
        <label htmlFor="password">password</label>
        <input
          type="password"
          {...register("password", {
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
          id="password"
        />
      </div>
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
      {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
      {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
      {errors.password && (
        <p style={{ color: "red" }}>{errors.password.message}</p>
      )}
    </form>
  );
}

export default Form;
