import { ToastContainer } from "react-toastify";
import Layout from "./components/SecondLayout";
import Navbar from "./components/Navbar";
// import Layout from "./components/Layout";

export default function App() {
  return (
    <>
      <Navbar/>
      <Layout/>
          <ToastContainer />
    </>
  )
}