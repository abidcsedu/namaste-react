import { Outlet } from "react-router-dom";
// import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import UserContext from "./utils/UserContext";
import { useState } from "react";
import { Provider } from "react-redux";
import store from "./utils/store";

function App() {
  const [user, setUser] = useState({
    name: "Abid",
    email: "abid@abc.com",
  });
  return (
    <Provider store={store}>
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        {/* <About /> */}
        {/* <Body /> */}
        {/* <Contact /> */}
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  );
}

export default App;
