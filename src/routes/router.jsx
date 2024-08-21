import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignInPage from "../layout/SignInPage";
import Home from "../mainLayout/Home";
import SignUpPage from "../layout/SignUpPage";
import UsersPage from "../components/dashboard/UsersPage";
import DashboardLayout from "../mainLayout/DashboardLayout";
import LeaderBoard from "../components/dashboard/LeaderBoard";

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
        element: <UsersPage />,
      },
      {
        path: "leader-board",
        element: <LeaderBoard />,
      },
    ],
  },
]);
