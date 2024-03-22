import { Route, Routes } from "react-router-dom";
import  Navbar  from "./components/Navbar";
import  Home  from "./pages/Home";
import { AuthContextProvider } from "./context/AuthContext";
import LogIn from './pages/Login';
import Signup from './pages/Signup';
import Account from "./pages/Account";
import ProductRoute from "./components/ProductRoute";
 
function App() {
  return (
    <>
   <AuthContextProvider>
   <Navbar/>
    <Routes>
      <Route   path='/' element={<Home/>} />
      <Route  path="/login" element={<LogIn/>} />
      <Route  path="/signup" element={<Signup/>} />
      <Route  path="/account" element={<ProductRoute><Account/></ProductRoute>} />
    </Routes>
   </AuthContextProvider>
    {/* <Home/> */}
    </>
  );
}

export default App;
