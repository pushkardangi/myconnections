import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";

import { GoogleOAuthProvider } from "@react-oauth/google";

const GoogleOAuthWrapper = () =>{
  return(
    <GoogleOAuthProvider clientId="444228919007-tdpm73n34a953k6rtg5r8l6tdct2i8lg.apps.googleusercontent.com">
      <Login></Login>
    </GoogleOAuthProvider>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" />, // Redirect from "/" to "/login"
  },
  {
    path: "/login",
    element: <GoogleOAuthWrapper/>,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

function App() {
  return (
    <RouterProvider
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_skipActionErrorRevalidation: true,
      }}
      router={router}
    />
  );
}

export default App;
