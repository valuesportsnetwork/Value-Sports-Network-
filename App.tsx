import React from "react";
import store from "./src/redux/store";
import RootNavigator from "./src/routes/RootNavigator";

const App = ({ children, edges }: any) => {
  return (
    <RootNavigator />

  );
};

export default App;
