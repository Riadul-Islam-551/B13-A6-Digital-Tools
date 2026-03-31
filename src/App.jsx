import "./App.css";
import Banner from "./components/banner/Banner";
import Tools from "./components/digitalTools/Tools"
import Nav from "./components/nav/Nav";
import States from "./components/states/States";

const fetchProducts = fetch("/product.json")
  .then((res) => res.json())
  .then((data) => {
    return data;
  });

function App() {
  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <States></States>
      <Tools fetchProducts={fetchProducts}></Tools>
    </>
  );
}

export default App;
