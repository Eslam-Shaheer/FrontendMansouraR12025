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

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>Not found</div>,
    children: [
      {
        index: true,
        element: <Home />,
        loader: async () => {
          const res = await new Promise((resolve) =>
            setTimeout(() => resolve("Hello"), 3000)
          );
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
          );
          const data = await response.json();
          return data;
        },
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

  return (
    <ThemeProvider>
      <RouterProvider router={routes} />
    </ThemeProvider>

    /* <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/account" element={<Account />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Layout>
      </BrowserRouter> */

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
