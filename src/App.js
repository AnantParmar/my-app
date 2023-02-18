import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // whether dark mode is enabled or not.
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtil | Home | DarkMode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtil | Home | LightMode";
    }
  };
  return (
    <>
      {/* <BrowserRouter> */}
        {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
        {/* <Navbar/>  */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About />}> */}
              {/* <About /> */}
            {/* </Route> */}
            {/* <Route exact path="/" element={}> */}
            <TextForm
                heading="Enter Text to Analyze Below"
                mode={mode}
                showAlert={showAlert}
              /> 
            {/* </Route> */}
          {/* </Routes> */}
        </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
