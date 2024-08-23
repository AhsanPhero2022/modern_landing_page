import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignInPage from "../layout/SignInPage";
import Home from "../mainLayout/Home";
import SignUpPage from "../layout/SignUpPage";
import DashboardLayout from "../mainLayout/DashboardLayout";
import Dashboard from "./../components/dashboard/Dashboard";
import UserProfilePage from "../components/dashboard/UserProfilePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <SignInPage />,
      },
      {
        path: "/signUp",
        element: <SignUpPage />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <UserProfilePage />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);
