import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./components/Router.tsx";

async function enableMocking() {
  if (process.env.NODE_ENV !== "development") {
    return;
  }
  const { worker } = await import("./mocks/browser");

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  // @ts-expect-error I don't know why
  return worker.start();
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <Router />
    </React.StrictMode>,
  );
});
