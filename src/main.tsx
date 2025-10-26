import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./i18n";
import { SpeedInsights } from "@vercel/speed-insights/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SpeedInsights />
    <App />
  </StrictMode>
);
