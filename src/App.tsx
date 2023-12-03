import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import { QuizQuestionComponent } from './components/quiz-question-component';
import { AppLayout } from './layouts/hydrogen/layout';
import { Sidebar } from './components/sidebar';
import { ProfileComponent } from './components/profile-component';
import { QuizViewComponent }from './components/quiz-view-component';
import { QuizResultComponent } from './components/quiz-result-component';
import { TeacherHomePage } from './components/teacher-home-page';
import { StudentHomeComponent } from './components/student-home-component';
import { QuizCreationComponent } from './components/quiz-creation-component';
export default function App() {
  return (
    <div>
      <AppLayout>
        <Sidebar />
        <div className="bg-white m-4 rounded-lg">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/quiz-question"
                element={<QuizQuestionComponent />}
              />
              <Route path="/quiz-view" element={<QuizViewComponent />} />
              <Route path="/quiz-result" element={<QuizResultComponent />} />

              <Route path="/student/home" element={ <StudentHomeComponent/>} />
              <Route path="/teacher/home" element={ <TeacherHomePage />} />
              <Route path="/teacher/create-quiz" element={ <QuizCreationComponent />} />

              <Route path="/profile" element={<ProfileComponent />} />
              <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
          </BrowserRouter>
        </div>
      </AppLayout>
    </div>
  );
}
