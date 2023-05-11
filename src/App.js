import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Suspense,lazy } from "react";
import { MainHeader } from "./components/header/main-header";

const  Validate = lazy(() => import ("./pages/validation"));
const  Home = lazy(() => import ("./pages/home"));
const  Login = lazy(() => import ("./pages/login"));
const  WorkSheet = lazy(() => import ("./pages/work-sheet"));
const  CreateSheetPage = lazy(() => import ("./pages/create-sheet-page"));
const  Register = lazy(() => import ("./pages/register"));



function App() {
  return (
    <>
    
      <BrowserRouter>
        <MainHeader />
        <Suspense /* fallback={<span>Cargando</span>} */>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/validate" element={<Validate />}></Route>
          <Route
            path="/hoja-de-calculo/:datasheet"
            element={<WorkSheet />}
          >
          </Route>
          <Route path="/crear-hoja" element={<CreateSheetPage />}></Route>
        </Routes>
        </Suspense>
      </BrowserRouter>
      
    </>
  );
}

export default App;
