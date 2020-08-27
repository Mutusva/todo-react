import React from "react";
// import GradientBar from "./common/GradientBar";
import NavMenubar from "./Navigation/NavMenubar";
import Footer from "./Navigation/Footer";

const AppShell = ({ children }) => {
  return (
    <>
      <div className="row">
        <header className="col-12">
          <NavMenubar />
        </header>
        <div className="col-12 main">{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default AppShell;
