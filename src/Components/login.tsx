import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useGetAllProductsQuery } from "../features/apiSlice";

interface User {
  id: number;
  EmailAddress: string;
  CreatePassword: string;
  ConfirmPassword: string;
}
const Login: React.FC = () => {
  const { data } = useGetAllProductsQuery({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [checkingData, setCheckingData] = useState<User[]>([]);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const loginNav = () => {
    navigate("/dashboard");
  };
  const signUp = () => {
    navigate("/signup");
  };
  useEffect(() => {
    setCheckingData(data);
  });

  const loginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { email, password } = loginData;
    const newErrors = { email: "", password: "" };

    if (!email) {
      newErrors.email = "Email is required";
    }

    if (!password) {
      newErrors.password = "Password is required";
    }

    if (newErrors.email || newErrors.password) {
      setErrors(newErrors);
      return;
    }

    setIsLoggedIn(true);

    const user = (checkingData ?? []).find(
      (user) =>
        user?.EmailAddress === email && user?.CreatePassword === password
    );

    if (user) {
      setIsLoggedIn(true);
      navigate("/dashboard");
    } else {
      newErrors.email = "Invalid email or password";
      setErrors(newErrors);
    }
  };

  return (
    <div className="">
      <div className="flex bg-slate-300 flex items-center justify-center  ">
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
          <form>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                className={`w-full px-3 py-2 placeholder-gray-400 text-gray-700 border rounded-lg focus:outline-none focus:ring focus:border-blue-500 focus:ring-blue-300 ${
                  errors.email ? "border-red-500" : ""
                }`}
                placeholder="Enter your email"
                value={loginData.email}
                onChange={(e) =>
                  setLoginData({ ...loginData, email: e.target.value })
                }
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>
            <div className="mb-4">
              <input
                type="password"
                id="password"
                name="password"
                className={`w-full px-3 py-2 placeholder-gray-400 text-gray-700 border rounded-lg focus:outline-none focus:ring focus:border-blue-500 focus:ring-blue-300 ${
                  errors.password ? "border-red-500" : ""
                }`}
                placeholder="Enter your password"
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>

            <div className="mb-4">
              <div className="mb-4 space-y-2 ">
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                  onClick={loginSubmit}
                >
                  Sign In
                </button>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                  onClick={signUp}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
