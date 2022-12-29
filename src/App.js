import "./App.css";
import { Login } from "./pages/login";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { MainHeader } from "./components/main-header";
import { Probar } from "./pages/probar";
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
          <Route path="/register" element={<Register />}></Route>
          <Route path="/validate" element={<Validate />}></Route>
          <Route path="/probar" element={<Probar />}></Route>
          <Route path="/crear" element={<Probar />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
