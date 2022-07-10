import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "./components/organisms";
import { Main, Search, VideoDetail } from "./components/pages";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/search/:id" element={<Search />} />
        <Route path="/video/:id" element={<VideoDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
