import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { route } from "./Route";
import { ClerkProvider } from "@clerk/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider>
      <RouterProvider router={route} />
    </ClerkProvider>
  </StrictMode>,
);
