// import './index.css';
import Footer from "./Components/Footer";
// import Navbar from "./Components/Navbar";

import Layout from "./Pages/Layout";
import Home from "./Pages/Home"
import MyList from "./Pages/MyList";
import Login from "./Pages/Login";
import Products from "./Pages/Products";
import AdminPage from "./Pages/AdminPage";
import NoPage from "./Pages/NoPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Pages/Register";

// import {ToastContainer} from 'react-toastify'
// import 'react-toastify/dist/react-toastify.css'
import {ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      {/* <ToastContainer> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<Home />} /> */}
          <Route path="Home" element={<Home />} />

          <Route path="MyList" element={<MyList />} />
          <Route path="Login" element={<Login />} />
          <Route path="Products" element={<Products />} />
          <Route path="Register" element={<Register />} />
          <Route path="Admin" element={<AdminPage/>}></Route>

          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    {/* <ToastContainer/> */}

    <Footer></Footer>
  <ToastContainer/>
  </>
  );
}

export default App;
