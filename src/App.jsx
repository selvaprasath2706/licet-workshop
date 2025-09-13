import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import Counter from "./components/Counter";
import { YouTubeFeed } from "./pages/YouTubeFeed";
import ProductListingPage from "./pages/ProductListingPage";
import { ChartPage } from "./pages/Chart";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/youtube-feed" element={<YouTubeFeed />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/products" element={<ProductListingPage />} />
            <Route path="/charts" element={<ChartPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
