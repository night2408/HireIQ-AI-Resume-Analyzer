// import { createBrowserRouter } from "react-router";
// import Login from "./features/auth/pages/Login";
// import Register from "./features/auth/pages/Register";
// import Protected from "./features/auth/components/Protected";
// import Home from "./features/interview/pages/Home";
// import Interview from "./features/interview/pages/Interview";
// import BulkUpload from "./features/auth/pages/BulkUpload";

// export const router = createBrowserRouter([
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "/register",
//     element: <Register />,
//   },
//   {
//     path: "/",
//     element: (
//       <Protected>
//         <Home />
//       </Protected>
//     ),
//   },
//   {
//     path: "/interview/:interviewId",
//     element: (
//       <Protected>
//         <Interview />
//       </Protected>
//     ),
//   },
//   {
//     path: "/bulk",
//     element: (
//       <Protected>
//         <BulkUpload />
//       </Protected>
//     ),
//   },
// ]);

//-----------------------------with-logout--------------------
import { createBrowserRouter, Outlet } from "react-router";
import Login from "./features/auth/pages/Login";
import Register from "./features/auth/pages/Register";
import Protected from "./features/auth/components/Protected";
import Home from "./features/interview/pages/Home";
import Interview from "./features/interview/pages/Interview";
import BulkUpload from "./features/auth/pages/BulkUpload";
import Navbar from "./features/auth/components/Navbar";

// ✅ Layout component — wraps all protected pages with Navbar
const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  // ✅ All protected routes wrapped in AppLayout
  {
    element: (
      <Protected>
        <AppLayout />
      </Protected>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/interview/:interviewId",
        element: <Interview />,
      },
      {
        path: "/bulk",
        element: <BulkUpload />,
      },
    ],
  },
]);
