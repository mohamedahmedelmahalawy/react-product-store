import { useForm } from "react-hook-form";

import { useUsers } from "../../context/userscontext/useUsers";
import { useNavigate } from "react-router-dom";

function Form() {
  const { addUser } = useUsers();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    addUser(data);
    navigate("/login");

    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center gap-4 mt-16 text-yellow-200"
    >
      <h2 className="mb-8 font-bold text-6xl">Register</h2>
      <div className="flex flex-col gap-2">
        <label htmlFor="name">Name</label>
        <input
          className="bg-transparent px-2 py-1 border-2 border-yellow-200 rounded-sm w-96 text-yellow-200"
          type="text"
          {...register("name", { required: "Name is required" })}
          id="name"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email</label>
        <input
          className="bg-transparent px-2 py-1 border-2 border-yellow-200 rounded-sm w-96 text-yellow-200"
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

      <div className="flex flex-col gap-2">
        <label htmlFor="password">password</label>
        <input
          className="bg-transparent px-2 py-1 border-2 border-yellow-200 rounded-sm w-96 text-yellow-200"
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
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-yellow-200 hover:bg-red-500 mt-4 px-2 py-1 rounded-lg w-96 font-bold text-[#030712] text-2xl transition-all duration-150"
      >
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
