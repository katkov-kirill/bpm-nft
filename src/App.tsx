import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Homepage } from 'components/homepage/homepage';
import { Footer, Header } from 'components/common/common';
import { Login } from 'components/log-in/log-in';
import { Profile } from 'components/profile/profile';
import { ProtectedRoute } from 'components/protected-route/protected-route';
import { SignUp } from 'components/sign-up/sign-up';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NotFound } from 'components/not-found/not-found';

function App() {
  return (
    <Router>
      <ToastContainer />
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
