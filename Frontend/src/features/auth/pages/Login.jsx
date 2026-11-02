// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router";
// import "../auth.form.scss";
// import { useAuth } from "../hooks/useAuth";

// const Login = () => {
//   const { loading, handleLogin } = useAuth();
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await handleLogin({ email, password });
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
//         <h1>Login</h1>
//         <form onSubmit={handleSubmit}>
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
//           Don;t have an account?<Link to={"/register"}>Register</Link>
//         </p>
//       </div>
//     </main>
//   );
// };

// export default Login;

//-----------------------------------new-code----------------------

// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router";
// import "../auth.form.scss";
// import { useAuth } from "../hooks/useAuth";

// const Login = () => {
//   const { loading, handleLogin } = useAuth();
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const res = await handleLogin({ email, password });

//     if (res?.success) {
//       navigate("/");
//     } else {
//       setError(res?.message || "Login failed");
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
//         <h1>Login</h1>

//         {/* ✅ ERROR MESSAGE */}
//         {error && <p className="error-message">{error}</p>}

//         <form onSubmit={handleSubmit}>
//           <div className="input-group">
//             <label>Email</label>
//             <input
//               onChange={(e) => setEmail(e.target.value)}
//               type="email"
//               placeholder="Enter email address"
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

//           <button className="button primary-button">Login</button>
//         </form>

//         <p>
//           Don’t have an account? <Link to="/register">Register</Link>
//         </p>
//       </div>
//     </main>
//   );
// };

// export default Login;
import React, { useState } from "react";
import { useNavigate, Link } from "react-router";
import "../auth.form.scss";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const { loading, handleLogin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // ✅ added

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await handleLogin({ email, password });

    if (res?.success) {
      navigate("/");
    } else {
      setError(res?.message || "Login failed"); // ✅ added
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
        <h1>Login</h1>

        {/* ✅ error message (simple, no UI change) */}
        {error && <p style={{ color: "red" }}>{error}</p>}

        <form onSubmit={handleSubmit}>
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

          <button className="button primary-button">Login</button>
        </form>

        <p>
          Don't have an account?<Link to={"/register"}>Register</Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
