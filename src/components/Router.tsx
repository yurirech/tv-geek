import App from "@/App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [],
  },
  {
    path: "*",
    element: <div>NOT FOUND</div>,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
