import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "../src/context/AuthContext";
import NavBar from '../src/components/NavBar';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Account from "./pages/Account";



function App() {
  return (
    <>
      <AuthContextProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/account' element={

            <Account />


          } />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
