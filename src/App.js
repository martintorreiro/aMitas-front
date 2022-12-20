import "./App.css";
import { Login } from "./pages/login";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { MainHeader } from "./components/main-header";
import { Cuentas } from "./pages/calc-example";
import { Register } from "./pages/register";
import { Validate } from "./pages/validation";

function App() {
  return (
    <>
      <BrowserRouter>
        <MainHeader />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/calc/:mode" element={<Cuentas />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/validate" element={<Validate />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
