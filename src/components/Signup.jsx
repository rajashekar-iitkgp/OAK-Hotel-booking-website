import React from "react";
import home from '../assets/img/image.png';

const SignUp = () => {
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form data submission (e.g., API call)
    console.log("Form submitted");
  };

  // Function to handle Google authentication
  const handleGoogleAuth = () => {
    // Implement Google authentication logic (e.g., redirect to Google OAuth URL)
    console.log("Google authentication clicked");
  };

  // Function to handle Facebook authentication
  const handleFacebookAuth = () => {
    // Implement Facebook authentication logic (e.g., redirect to Facebook OAuth URL)
    console.log("Facebook authentication clicked");
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${home})` }}
    >
      <div className="bg-gray-900 bg-opacity-50 min-h-screen flex items-center justify-center">
        <div className="max-w-lg w-full p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-8 text-center">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            {/* Username */}
            <div className="mb-6">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
                className="mt-1 block w-full border-b-2 border-gray-300 focus:outline-none text-md"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="mt-1 block w-full border-b-2 border-gray-300 focus:outline-none text-md"
                required
              />
            </div>

            {/* Password */}
            <div className="mb-8">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="mt-1 block w-full border-b-2 border-gray-300 focus:outline-none text-md"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-4"
            >
              Sign Up
            </button>

            {/* Google and Facebook Auth Buttons */}
            <div className="flex justify-between">
              <button
                type="button"
                onClick={handleGoogleAuth}
                className="flex items-center justify-center bg-red-500 text-white rounded-md px-4 py-2 w-1/2"
              >
                <svg
                  className="w-6 h-6 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                Google
              </button>
              <button
                type="button"
                onClick={handleFacebookAuth}
                className="flex items-center justify-center bg-blue-600 text-white rounded-md px-4 py-2 w-1/2 ml-2"
              >
                <svg
                  className="w-6 h-6 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.414 7.998L14 7.998l-.002-1.999c0-.826.122-1.287 1.308-1.287h1.698V1.001h-3.005C10.499 1 9.223 2.224 9.223 4.223v2.774H6.5v3.004h2.723V22h3.004v-9.999h3.004l.003-3.004h-3.007z"
                  ></path>
                </svg>
                Facebook
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
