import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './Login';

function Home() {
  return (
    <div>
      <h1>OAuth 2.0 로그인</h1>
      <Link to="/login">Google 로그인</Link>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}