import { Link } from "react-router";

const ErrorPage = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      {/* Error Code */}
      <h1 className="text-9xl font-extrabold text-red-500 mb-4 animate-pulse">
        404
      </h1>

      {/* Error Message */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
        Oops! Page Not Found
      </h2>

      <p className="text-gray-600 text-center mb-6 max-w-md">
        The page you are looking for might have been removed, had its name changed,
        or is temporarily unavailable.
      </p>

      {/* Home Button */}
      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow-lg hover:bg-blue-700 transition-all duration-300"
      >
        Go Back Home
      </Link>

      {/* Optional Illustration */}
      <div className="mt-10">
        <img
          src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
          alt="404 Illustration"
          className="w-72 md:w-96"
        />
      </div>
    </div>
    );
};

export default ErrorPage;