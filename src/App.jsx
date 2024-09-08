import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./pages/landing";
import Login from "./pages/login";
import Register from "./pages/register";
import CalculatorPage from "./pages/calculatorPage";
import MealRecommendation from "./pages/mealRecommendation";
import SplashScreen from "./pages/splashScreen";
import ProtectedRoute from "./pages/protectedRoute";




function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <SplashScreen />
    },

    {
      path: "/login",
      element: <Login />
    },

    {
      path: "/register",
      element: <Register />
    },

    {
      path: "/bmi", 
      element: <ProtectedRoute children={<CalculatorPage/>} />
    },

    {
      path: "/meals", 
      element: <ProtectedRoute children={<MealRecommendation/>} />
    },

    {
      path: "/splash",
      element: <SplashScreen />
    },

    {
      path: "/landing",
      element: <Landing />
    },

  ]);


  return <RouterProvider router={router} />;
}


export default App