import { useState } from "react";
import API from "../services/api";
import toast from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";

import { GoogleLogin } from "@react-oauth/google";

function Login() {
  useEffect(() => {
    document.title = "CV Forge | Login";
  }, []);

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // NORMAL LOGIN

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", form);

      localStorage.setItem("token", res.data.token);

      toast.success("Login Successful");

      navigate("/dashboard");
    } catch (err) {
      toast.error("Invalid Credentials");
    }
  };

  // GOOGLE LOGIN

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const res = await API.post("/auth/google", {
        credential: credentialResponse.credential,
      });

      localStorage.setItem("token", res.data.token);

      toast.success("Login Successful");

      navigate("/dashboard");
    } catch (err) {
      toast.error("Google Login Failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-500 px-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md"
      >
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Login
        </h1>

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full border p-3 rounded-xl mb-5"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full border p-3 rounded-xl mb-5"
          required
        />

        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition">
          Login
        </button>

        {/* DIVIDER */}

        <div className="my-2 text-center text-gray-500">OR</div>

        {/* GOOGLE LOGIN */}

        <div className="flex justify-center">
          <button className="w-full  text-white py-3 rounded-xl transition">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={() => toast.error("Google Login Failed")}
            />
          </button>
        </div>

        {/* REGISTER LINK */}

        <p className="text-center mt-8 text-gray-600">
          Don't have an account?
          <Link to="/register" className="text-blue-600 font-semibold ml-2">
            Create Account
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
