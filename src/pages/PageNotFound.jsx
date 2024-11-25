import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="text-richBlack text-xl">404 Page not found</div>

      <div className="mt-5">
        <button
          onClick={() => navigate("/login")}
          type="button"
          aria-label="Go to Login"
          className="px-5 py-2 rounded-lg text-white bg-green-700 hover:bg-green-600 transition-all duration-200 ease-in-out active:scale-95"
        >
          Go to Login
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
