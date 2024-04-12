// Signup.jsx
import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  React.useEffect(() => {
  }, []);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phn, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:4000/api/v1/user/signup",
        {
          username,
          email,
          phn,
          password,
          cpassword,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      if (res && res.data) {
        toast.success(res.data.message);
      } else {
        toast.error("Unexpected response from server");
      }
      setUsername("");
      setEmail("");
      setPhoneNo("");
      setPassword("");
      setConfirmPassword("");
      navigate("/login");
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred while signing up");
      }
    }
  };

  return (
    <div id="signup" className="signup container">
      <div className="form">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="phn"
            placeholder="Phone No."
            value={phn}
            onChange={(e) => setPhoneNo(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={()=>navigate("/login")}>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
