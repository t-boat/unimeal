import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Landing from "./pages/landing";
import Login from "./pages/login";
import Register from "./pages/register";
import CalculatorPage from "./pages/calculatorPage";



function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />
    },

    {
      path: "/login",
      element: <Login />
    },

    {
      path:"/register",
      element: <Register />
    },

    {
      path:"/bmi",
      element: <CalculatorPage />
    },
  ]);


  return <RouterProvider router={router} />;
}

export default App
