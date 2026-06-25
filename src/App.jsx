import { Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./LanguageContext.jsx";
import SmoothScroll from "./lib/SmoothScroll.jsx";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Expeditions from "./pages/Expeditions.jsx";
import Itinerary from "./pages/Itinerary.jsx";
import Journal from "./pages/Journal.jsx";
import Booking from "./pages/Booking.jsx";

export default function App() {
  return (
    <LanguageProvider>
      <SmoothScroll>
        <Nav />
        <main className="pt-[88px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/expeditions" element={<Expeditions />} />
            <Route path="/expeditions/:slug" element={<Itinerary />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
        </main>
        <Footer />
      </SmoothScroll>
    </LanguageProvider>
  );
}
