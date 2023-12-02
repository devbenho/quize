import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { QuizQuestion } from "./components/quiz-question";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dev" element={<QuizQuestion />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
