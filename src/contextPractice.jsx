import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppProvider = ({ children }) => {
  const [name, setName] = useState("dhanu");
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter((prevCount) => prevCount + 1);
  };

  const decreaseCounter = () => {
    setCounter((prevCount) => prevCount - 1);
  };

  return (
    <GlobalContext.Provider
      value={[name, setName, counter, increaseCounter, decreaseCounter]}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default AppProvider;
