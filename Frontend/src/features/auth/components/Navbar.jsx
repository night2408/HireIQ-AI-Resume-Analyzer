import React from "react";
import { useNavigate, useLocation } from "react-router";
import { useAuth } from "../hooks/useAuth";

const Navbar = () => {
  const { user, handleLogout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const onLogout = async () => {
    await handleLogout();
    navigate("/login");
  };

  // Don't show navbar on login/register pages
  if (location.pathname === "/login" || location.pathname === "/register") {
    return null;
  }

  return (
    <nav
      style={{
        width: "100%",
        backgroundColor: "#161b22",
        borderBottom: "1px solid #2a3348",
        padding: "0 24px",
        height: "56px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxSizing: "border-box",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      {/* Logo / Brand */}
      <div
        onClick={() => navigate("/")}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          cursor: "pointer",
        }}
      >
        <span
          style={{
            background: "linear-gradient(135deg, #ff2d78, #6366f1)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "800",
            fontSize: "18px",
            letterSpacing: "-0.5px",
          }}
        >
          HireIQ
        </span>
      </div>

      {/* Nav Links */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <button
          onClick={() => navigate("/")}
          style={{
            background:
              location.pathname === "/" ? "rgba(255,45,120,0.1)" : "none",
            color: location.pathname === "/" ? "#ff2d78" : "#7d8590",
            border: "none",
            borderRadius: "6px",
            padding: "6px 14px",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: "500",
          }}
        >
          Single Resume
        </button>

        <button
          onClick={() => navigate("/bulk")}
          style={{
            background:
              location.pathname === "/bulk" ? "rgba(99,102,241,0.1)" : "none",
            color: location.pathname === "/bulk" ? "#6366f1" : "#7d8590",
            border: "none",
            borderRadius: "6px",
            padding: "6px 14px",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: "500",
          }}
        >
          Bulk Analyzer
        </button>
      </div>

      {/* Right side — user + logout */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        {user && (
          <span
            style={{
              color: "#7d8590",
              fontSize: "13px",
            }}
          >
            👤 {user.username || user.email}
          </span>
        )}

        <button
          onClick={onLogout}
          style={{
            background: "rgba(255,45,120,0.1)",
            color: "#ff2d78",
            border: "1px solid rgba(255,45,120,0.2)",
            borderRadius: "6px",
            padding: "6px 16px",
            cursor: "pointer",
            fontSize: "13px",
            fontWeight: "600",
            transition: "all 0.2s",
          }}
          onMouseOver={(e) => {
            e.target.style.background = "rgba(255,45,120,0.2)";
          }}
          onMouseOut={(e) => {
            e.target.style.background = "rgba(255,45,120,0.1)";
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
