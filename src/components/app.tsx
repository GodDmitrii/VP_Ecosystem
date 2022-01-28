import React, { useState } from "react";
import { Route, BrowserRouter, Routes, Link } from "react-router-dom";
import Header from "./Header/header";
import Form from "./Form/form";
import Menu from "./Menu/menu";

export const MenuContext = React.createContext<boolean>(false);

const App: React.FC = () => {
  const [menuIsOpened, setMenuIsOpened] = useState<boolean>(true);
  const openMenuHandler = () => {
    setMenuIsOpened(!menuIsOpened);
  };
  return (
    <MenuContext.Provider value={menuIsOpened}>
      <BrowserRouter>
        <Header openMenuHandler={openMenuHandler} />
        <Menu openMenuHandler={openMenuHandler} />
        <Routes>
          <Route path="/settings" element={<Form />} />
          <Route path="/profile" />
        </Routes>
      </BrowserRouter>
    </MenuContext.Provider>
  );
};

export default App;
