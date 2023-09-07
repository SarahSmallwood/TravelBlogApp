import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from './utilities/users-service';

// pages
import AuthPage from './pages/AuthPage/AuthPage';
import CreateTravelPost from './pages/CreateTravelPost/CreateTravelPost';
import ViewAll from './pages/ViewAll/ViewAll';
import BlogPostPage from './pages/BlogPostPage/BlogPostPage';
// components
import NavBar from './components/NavBar/NavBar';
// css
import './App.css';
import WelcomeBanner from './components/WelcomeBanner/WelcomeBanner';

function App() {
  // array destructuring
  const [user, setUser] = useState(getUser());

  return (
    <main className='App'>
      {user ? (
        <>
          <WelcomeBanner/>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path='/blogpostpage' element={<BlogPostPage />} />
            <Route path='/createtravelpost' element={<CreateTravelPost />} />
            <Route path='/viewall' element={<ViewAll/>} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

export default App;
