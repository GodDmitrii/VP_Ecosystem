import React, { useState } from "react";
import { Route, BrowserRouter, Routes, Link } from "react-router-dom";
import ErrorPage from "./ErrorPage/error-page";
import Header from "./Header/header";
import Home from "./Home/home";
import LoginForm from "./Login/login-form";
import Menu from "./Menu/menu";
import RegisterForm from "./Register/register-form";

// export const MenuContext = React.createContext<boolean>(false);

const App: React.FC = () => {
  // const [menuIsOpened, setMenuIsOpened] = useState<boolean>(false);
  // const openMenuHandler = () => {
  //   setMenuIsOpened(!menuIsOpened);
  // };
  return (
    <BrowserRouter>
      {/* // <MenuContext.Provider value={menuIsOpened}> */}
      {/* <BrowserRouter> */}
      {/* <Header openMenuHandler={openMenuHandler} />
        <Menu openMenuHandler={openMenuHandler} />
        <LoginForm /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<RegisterForm />} />
        <Route path="/profile" />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
