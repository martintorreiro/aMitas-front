import "./App.css";
import { Login } from "./pages/login";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { MainHeader } from "./components/main-header";
import { WorkSheet } from "./pages/work-sheet";
import { Register } from "./pages/register";
import { Validate } from "./pages/validation";
import { CreateSheetPage } from "./pages/create-sheet-page";

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
          <Route
            path="/hoja-de-calculo/:datasheet"
            element={<WorkSheet />}
          ></Route>
          <Route path="/crear-hoja" element={<CreateSheetPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
