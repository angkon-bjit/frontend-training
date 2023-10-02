import { createContext, useEffect, useState } from "react";
import DebounceDemo from "./components/debounceDemo";
import FetchDemo from "./components/fetchDemo";
import PostDemo from "./components/postDemo";
import RegistrationForm from "./components/registrationForm";

export const ProductContext = createContext();

function App() {
  const [fetchReload, setFetchReload] = useState(false);

  useEffect(() => {
    console.log("FetchReload: ", fetchReload);
  }, [fetchReload]);

  return (
    <>
      <RegistrationForm />
      <DebounceDemo />

      <ProductContext.Provider value={{ fetchReload, setFetchReload }}>
        <PostDemo />
        <FetchDemo />
      </ProductContext.Provider>
    </>
  );
}

export default App;
