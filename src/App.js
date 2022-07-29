import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import FullLayout from "./layouts/FullLayout";
import NavLayout from "./layouts/NavLayout";

import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ContactSupportPage from "./pages/ContactSupport";
import ForBusinessPage from "./pages/ForBusiness";
import SignupPage from "./pages/Signup";
import ProfilePage from "./pages/Profile";
import VideoCoursePage from "./pages/VideoCourse";
import VideoEpisodePage from "./pages/VideoEpisode";
import CoursePage from "./pages/Course";
import LoginPage from "./pages/Login";
import NotFoundPage from "./pages/NotFound";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<FullLayout />}>
            <Route path='' element={<HomePage />} />
            <Route path='about' element={<AboutPage />} />
            <Route path='contact-support' element={<ContactSupportPage />} />
            <Route path='for-business' element={<ForBusinessPage />} />
            <Route path='signup' element={<SignupPage />} />
            <Route path='profile' element={<ProfilePage />} />
            <Route path='video-course' element={<VideoCoursePage />} />
            <Route path='video-episode' element={<VideoEpisodePage />} />
            <Route path='course' element={<CoursePage />} />
          </Route>

          <Route path='/nofooter/' element={<NavLayout />}>
            <Route path='login' element={<LoginPage />} />
            <Route path='notfound' element={<NotFoundPage />} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
