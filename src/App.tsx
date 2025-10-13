import { Routes, Route } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import SoftwareProjects from "./pages/SoftwareProjects";
import ProductProjects from "./pages/ProductProjects";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about-me" element={<AboutMe />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/software" element={<SoftwareProjects />} />
        <Route path="projects/product" element={<ProductProjects />} />
        <Route path="contact" element={<Contact />} /> 
        <Route path="*" element={<div className="p-8">Not Found</div>} />
      </Route>
    </Routes>
  );
}
