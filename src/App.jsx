import Header from "./components/Header.jsx";
import Shop from "./components/Shop.jsx";
import CartContextProvider from "../src/store/shopping-cart-context.jsx";

function App() {
  return (
    <CartContextProvider>
      <Header />
      <Shop />
    </CartContextProvider>
  );
}

export default App;
