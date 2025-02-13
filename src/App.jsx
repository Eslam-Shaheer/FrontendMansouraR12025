import "./App.css";
import styles from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useCallback, useEffect, useMemo, useState } from "react";
import Products from "./components/Products";
import ProductWrapper from "./components/ProductWrapper";
import ThemeContext, { ThemeProvider } from "./contexts/ThemeContext";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import Account from "./pages/Account";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Layout from "./components/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProductDetails from "./pages/ProductDetails";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Cart from "./pages/Cart";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>Error</div>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/account",
        element: <Account />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "*",
        element: <div>Not found</div>,
      },
    ],
  },
]);

const App = () => {
  // let userName = "Eslam";

  // function changeName(lastName) {
  //   console.log(lastName, "In function");
  // }

  // const handleChange = (event) => {
  //   console.log(event.target.value, "Handle Change");
  // };
  // const [price, setPrice] = useState(0);

  // useEffect(() => {
  //   console.log("Component did mount");
  // }, []);

  // const handleConsoleFooter = useCallback(() => {
  //   console.log("price");
  // }, []);

  // const tax = useMemo(() => {
  //   return price * 0.14;
  // }, [price]);

  const queryClient = new QueryClient();

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <RouterProvider router={routes} />
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>

    // <BrowserRouter>
    //     <Layout>
    //       <Routes>
    //         <Route path="/" element={<Home />} />
    //         <Route path="/account" element={<Account />} />
    //         <Route path="/contact" element={<Contact />} />
    //         <Route path="/products" element={<Products />} />
    //         <Route path="/about" element={<About />} />
    //       </Routes>
    //     </Layout>
    //   </BrowserRouter>

    // <ThemeProvider>
    //   <div className="layout-container">
    //     <Header passedTax={tax} />
    //     <main className="main">
    //       <Products />
    //     </main>
    //     <Footer handleConsoleFooter={handleConsoleFooter} />
    //   </div>
    // </ThemeProvider>

    /* <div className="d-flex gap-3 justify-content-center">
        <button onClick={() => setPrice(price - 1)}>-</button>
        <div>{price}</div>
        <button onClick={() => setPrice(price + 1)}>+</button>
      </div>{" "}
     
      <div>
       <h1>Hello, {userName}!</h1>
        <p>Welcome to the world of React!</p>
        <form>
          <label htmlFor="name">Name:</label>
          <input onChange={handleChange} type="text" id="name" />
          <button>Submit</button>
        </form>
        <button onClick={() => changeName("Ahmed")}>Change name</button> 
      </div> */
  );
};

export default App;
