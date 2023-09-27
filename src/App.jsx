import { createContext, useState } from "react";
import { useEffect } from "react";
import ChildA from "./components/childA.component";
import ContextApiDemo from "./pages/contextApiDemo.page";
import UseEffectHookDemo from "./pages/useEffectDemo.page";

function App() {
  return (
    <>
      <div>
        <UseEffectHookDemo />
        <ContextApiDemo />
      </div>
    </>
  );
}

export default App;
