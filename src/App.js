// import React from "react";
// // components
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// // pages
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Restaurant from "./pages/Restaurant";
// import RoomDetails from "./pages/RoomDetails";

// // react router
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import PreHeader from "./components/PreHeader";
// import Gallery from "./pages/Gallery";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/room/:id",
//     element: <RoomDetails />,
//   },

//   {
//     path: "/about", //
//     element: <About />,
//   },
//   {
//     path: "/restaurant", //
//     element: <Restaurant />,
//   },
//   {
//     path: "/gellery", //
//     element: <Gallery />,
//   },
// ]);

// const App = () => {
//   return (
//     <div>
//       <PreHeader />
//       <Header />
//       <RouterProvider router={router} />
//       <Footer />
//     </div>
//   );
// };

// export default App;
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PreHeader from "./components/PreHeader";
import Home from "./pages/Home";
import About from "./pages/About";
import Restaurant from "./pages/Restaurant";
import Gallery from "./pages/Gallery";
import RoomDetails from "./pages/RoomDetails";
import SampleRoom from "./pages/sampleroom";
import Rooms from './components/Rooms';

// import SignUp from "./components/Signup";

const App = () => {
  return (
    <Router>
      <PreHeader />
       <Header /> 
      {/* Define your routes here using Routes component */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/room/:id" element={<RoomDetails />} />
        <Route path="/rooms" element={<Rooms />}/>
        <Route path="/sampleroom" element={<SampleRoom />} />
        {/* <Route path="signup" element={<SignUp />}/> */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
