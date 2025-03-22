import { useContext ,useEffect} from "react";
import Home from "./pages/Home";
import BuyCredit from "./pages/BuyCredit";
import Result from "./pages/Result";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import Login from "./components/Login";
import { AppContext } from "./context/AppContext";

const App = () => {
  const {showLogin}=useContext(AppContext)
  return (
    <div className="px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen text-white bg-gradient-to-b  bg-gray-700">
      <NavBar />
     { showLogin &&<Login/>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/buy" element={<BuyCredit />} />

        {/* Not Found Route - Catch-all */}
        <Route path="*" element={<NotFound />} />

      </Routes>
      <Footer/>
      
    </div>
  );
};

export default App;
