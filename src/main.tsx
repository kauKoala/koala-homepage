import React from "react";
import ContestResultPage from "./pages/ContestResultPage";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootPage from "@/pages/RootPage";
import "@/styles/reset.css";
import "@/styles/global.css";
import MembersPage from "./pages/MembersPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
  },
  {
    path: "contest",
    element: <ContestResultPage />,
  },
  {
    path: "members",
    element: <MembersPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <RouterProvider router={router} />
  </>
);
