import React, { useState } from "react";
import { Route, BrowserRouter, Routes, Link } from "react-router-dom";
import Header from "./Header/header";
import LoginForm from "./Login/login-form";
import Menu from "./Menu/menu";

export const MenuContext = React.createContext<boolean>(false);

const App: React.FC = () => {
  const [menuIsOpened, setMenuIsOpened] = useState<boolean>(false);
  const openMenuHandler = () => {
    setMenuIsOpened(!menuIsOpened);
  };
  return (
    <MenuContext.Provider value={menuIsOpened}>
      <BrowserRouter>
        <Header openMenuHandler={openMenuHandler} />
        <Menu openMenuHandler={openMenuHandler} />
        <LoginForm />
        <Routes>
          <Route path="/settings" element={<h1>hello</h1>} />
          <Route path="/profile" />
        </Routes>
      </BrowserRouter>
    </MenuContext.Provider>
  );
};

export default App;
