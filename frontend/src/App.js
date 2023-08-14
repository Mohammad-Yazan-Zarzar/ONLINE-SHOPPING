// import './index.css';
import Footer from "./Components/Footer";
// import Navbar from "./Components/Navbar";
import { useState, createContext } from "react";
import ReactDOM from "react-dom/client";


import Layout from "./Pages/Layout";
import Home from "./Pages/Home"
import MyList from "./Pages/MyList";
import Login from "./Pages/Login";
import Products from "./Pages/Products";
import Brands from "./Pages/Brands"
import AdminPage from "./Pages/AdminPage";
import NoPage from "./Pages/NoPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Pages/Register";
// import Modal from "./Components/Modal";

// import {ToastContainer} from 'react-toastify'
// import 'react-toastify/dist/react-toastify.css'
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const UserContext = createContext()

function App() {
  const [see, setSee] = useState(false);
  const[note,setNote]=useState('')
  const[mode,setMode]=useState('failed')
  const[modal,setModal]=useState(false)
  const[item,setItem]=useState({})

  return (
    <>
      {/* <ToastContainer> */}

      <BrowserRouter>
      <UserContext.Provider value={{see,setSee,note,setNote,mode,setMode,modal,setModal,item,setItem}}>

      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<Home />} /> */}
          <Route path="Home" element={<Home />} />

          <Route path="MyList" element={<MyList />} />
          <Route path="Login" element={<Login />} />
          <Route path="Products" element={<Products />} />
          <Route path="Brands" element={<Brands />} />

          <Route path="Register" element={<Register />} />
          <Route path="Admin" element={<AdminPage/>}></Route>

          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </UserContext.Provider>

    </BrowserRouter>

    {/* <ToastContainer/> */}


    <Footer></Footer>
  {/* <ToastContainer/> */}
  </>
  );
}

export default App;
