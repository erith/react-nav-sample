import { Outlet } from "react-router-dom";

import { NavbarSegmented } from "./NavMenu";
const Layout = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        height: "100vh",
      }}
    >
      <div style={{ flexBasis: 300, height: "100vh" }}>
        <NavbarSegmented />
      </div>
      <div style={{ flexGrow: 1, backgroundColor: "#efefef", width: "100%" }}>
        <Outlet />
      </div>
    </div>
  );
};
export default Layout;
