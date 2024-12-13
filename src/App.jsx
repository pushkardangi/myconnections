import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

import { useSelector } from "react-redux";

import Home from "./pages/Home";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";

import { GoogleOAuthProvider } from "@react-oauth/google";

const GoogleOAuthWrapper = () => {
  return (
    <GoogleOAuthProvider clientId="444228919007-tdpm73n34a953k6rtg5r8l6tdct2i8lg.apps.googleusercontent.com">
      <Login></Login>
    </GoogleOAuthProvider>
  );
};

const PrivateRoute = ({element}) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return isAuthenticated ? element : <Navigate to="/login" />;
}

const router = createBrowserRouter(
  [
    {
      path: "/login",
      element: <GoogleOAuthWrapper />,
    },
    {
      path: "/",
      element: <Navigate to="/login" />,
    },
    {
      path: "/home",
      element: <PrivateRoute element={<Home />}/>,
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ],
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
