import { useState } from "react";
// import { useSignUpMutation } from "../features/apiSlice";

const Signup = () => {
  const [signupData, setSignupData] = useState({
    emailAddress: "",
    createPassword: "",
    confirmPassword: "",
  });

  // const [createUser] = useSignUpMutation();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setSignupData({
      ...signupData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    // createUser({ signupData })
    //   .unwrap()
    //   .then(() => {})
    //   .catch(() => console.log(createUser));
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              id="emailAddress"
              name="emailAddress"
              value={signupData?.emailAddress}
              onChange={handleChange}
              className="w-full px-3 py-2 placeholder-gray-400 text-gray-700 border rounded-lg focus:outline-none focus:ring focus:border-blue-500 focus:ring-blue-300"
              placeholder="Enter your email address"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              id="createPassword"
              name="createPassword"
              value={signupData.createPassword}
              onChange={handleChange}
              className="w-full px-3 py-2 placeholder-gray-400 text-gray-700 border rounded-lg focus:outline-none focus:ring focus:border-blue-500 focus:ring-blue-300"
              placeholder="Create a password"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={signupData.confirmPassword}
              onChange={handleChange}
              className="w-full px-3 py-2 placeholder-gray-400 text-gray-700 border rounded-lg focus:outline-none focus:ring focus:border-blue-500 focus:ring-blue-300"
              placeholder="Confirm your password"
              required
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
              onChange={handleSubmit}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
