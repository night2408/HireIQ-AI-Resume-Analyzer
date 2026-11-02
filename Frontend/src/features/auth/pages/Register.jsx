// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router";
// import { useAuth } from "../hooks/useAuth";
// const Register = () => {
//   const navigate = useNavigate();
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const { loading, handleRegister } = useAuth();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await handleRegister({ username, email, password });
//     navigate("/");
//   };

//   if (loading) {
//     return (
//       <main>
//         <h1>Loading.............</h1>
//       </main>
//     );
//   }
//   return (
//     <main>
//       <div className="form-container">
//         <h1>Register</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="input-group">
//             <label htmlFor="username"></label>
//             <input
//               onChange={(e) => {
//                 setUsername(e.target.value);
//               }}
//               type="username"
//               id="username"
//               placeholder="Enter your username"
//             />
//           </div>
//           <div className="input-group">
//             <label htmlFor="email">Email</label>
//             <input
//               onChange={(e) => {
//                 setEmail(e.target.value);
//               }}
//               type="email"
//               id="email"
//               placeholder="Enter email address"
//             />
//           </div>
//           <div className="input-group">
//             <label htmlFor="password">Password</label>
//             <input
//               onChange={(e) => {
//                 setPassword(e.target.value);
//               }}
//               type="password"
//               id="password"
//               placeholder="Enter password"
//             />
//           </div>

//           <button className="button primary-button">Login</button>
//         </form>
//         <p>
//           Already have an account?<Link to={"/login"}>Login</Link>
//         </p>
//       </div>
//     </main>
//   );
// };

// export default Register;

//---------------------------------new-code-----------------------------

// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router";
// import { useAuth } from "../hooks/useAuth";
// import "../auth.form.scss";

// const Register = () => {
//   const navigate = useNavigate();
//   const { loading, handleRegister } = useAuth();

//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const res = await handleRegister({ username, email, password });

//     if (res?.success) {
//       navigate("/");
//     } else {
//       setError(res?.message || "Registration failed");
//     }
//   };

//   if (loading) {
//     return (
//       <main>
//         <h1>Loading...</h1>
//       </main>
//     );
//   }

//   return (
//     <main>
//       <div className="form-container">
//         <h1>Register</h1>

//         {/* ✅ ERROR MESSAGE */}
//         {error && <p className="error-message">{error}</p>}

//         <form onSubmit={handleSubmit}>
//           <div className="input-group">
//             <label>Username</label>
//             <input
//               onChange={(e) => setUsername(e.target.value)}
//               type="text"
//               placeholder="Enter username"
//             />
//           </div>

//           <div className="input-group">
//             <label>Email</label>
//             <input
//               onChange={(e) => setEmail(e.target.value)}
//               type="email"
//               placeholder="Enter email"
//             />
//           </div>

//           <div className="input-group">
//             <label>Password</label>
//             <input
//               onChange={(e) => setPassword(e.target.value)}
//               type="password"
//               placeholder="Enter password"
//             />
//           </div>

//           {/* 🔥 FIXED BUTTON TEXT */}
//           <button className="button primary-button">Register</button>
//         </form>

//         <p>
//           Already have an account? <Link to="/login">Login</Link>
//         </p>
//       </div>
//     </main>
//   );
// };

// export default Register;

import React, { useState } from "react";
import { useNavigate, Link } from "react-router";
import { useAuth } from "../hooks/useAuth";
import "../auth.form.scss";

const Register = () => {
  const navigate = useNavigate();
  const { loading, handleRegister } = useAuth();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // ✅ added

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await handleRegister({ username, email, password });

    if (res?.success) {
      navigate("/");
    } else {
      setError(res?.message || "Registration failed"); // ✅ added
    }
  };

  if (loading) {
    return (
      <main>
        <h1>Loading.............</h1>
      </main>
    );
  }

  return (
    <main>
      <div className="form-container">
        <h1>Register</h1>

        {/* ✅ error message */}
        {error && <p style={{ color: "red" }}>{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              type="username"
              id="username"
              placeholder="Enter your username"
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              placeholder="Enter email address"
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              placeholder="Enter password"
            />
          </div>

          {/* ⚠️ only this small fix */}
          <button className="button primary-button">Register</button>

        </form>

        <p>
          Already have an account?<Link to={"/login"}>Login</Link>
        </p>
      </div>
    </main>
  );
};

export default Register;