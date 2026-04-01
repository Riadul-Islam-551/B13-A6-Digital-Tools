import { useState } from "react";
import "./App.css";
import Banner from "./components/banner/Banner";
import Tools from "./components/digitalTools/Tools";
import Nav from "./components/nav/Nav";
import States from "./components/states/States";
import Steps from "./components/steps/Steps";
import PackagePrice from "./components/packagePrice/PackagePrice";
import Footer from "./components/footer/Footer";
import { ToastContainer } from "react-toastify";

const fetchProducts = fetch("/product.json")
  .then((res) => res.json())
  .then((data) => {
    return data;
  });

function App() {
  const [cartProducts, setCartProducts] = useState([]);
  // console.log(cartProducts);
  return (
    <>
      <Nav cartProducts={cartProducts}></Nav>
      <Banner></Banner>
      <States></States>
      <Tools
        cartProducts={cartProducts}
        setCartProducts={setCartProducts}
        fetchProducts={fetchProducts}
      ></Tools>
      <Steps></Steps>
      <PackagePrice></PackagePrice>
      <Footer></Footer>

      <ToastContainer />
    </>
  );
}

export default App;
