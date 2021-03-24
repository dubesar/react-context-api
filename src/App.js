import "./styles.css";
import React from "react";
import List from "./components/list";

export const listContext = React.createContext();

export default function App() {
  const ele = { el: ["do", "as", "i", "say"] };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <listContext.Provider value={ele}>
        <List />
      </listContext.Provider>
    </div>
  );
}
