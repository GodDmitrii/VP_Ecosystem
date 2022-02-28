import React, { useState } from "react";
import Header from "../Header/header";
import LoginForm from "../Login/login-form";
import Menu from "../Menu/menu";

export const MenuContext = React.createContext<boolean>(false);

const Home: React.FC = () => {
  const [menuIsOpened, setMenuIsOpened] = useState<boolean>(false);
  const openMenuHandler = () => {
    setMenuIsOpened(!menuIsOpened);
  };
  return (
    <MenuContext.Provider value={menuIsOpened}>
      <Header openMenuHandler={openMenuHandler} />
      <Menu openMenuHandler={openMenuHandler} />
      <LoginForm />
    </MenuContext.Provider>
  );
};

export default Home;
