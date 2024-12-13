// Vite + React Frontend per Misk Hair
// Struttura base con fetch per testare gli endpoint

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/prenotazione">Prenotazione</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/my-works">My Works</Link></li>
      </ul>
    </nav>
  );
};

const LinksRow = () => {
  return (
    <div className="links-row">
      <ul>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/prenotazione">Prenotazione</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/my-works">My Works</Link></li>
      </ul>
    </div>
  );
};

const Home = () => <h1>Welcome to Misk Hair</h1>;

const About = () => <h1>About Me</h1>;

const Prenotazione = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4040/bookings')
      .then(response => response.json())
      .then(data => setBookings(data.bookings))
      .catch(error => console.error('Error fetching bookings:', error));
  }, []);

  return (
    <div>
      <h1>Prenotazione</h1>
      <ul>
        {bookings.map(booking => (
          <li key={booking._id}>{booking.name} - {booking.date}</li>
        ))}
      </ul>
    </div>
  );
};

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4040/blog')
      .then(response => response.json())
      .then(data => setPosts(data.posts))
      .catch(error => console.error('Error fetching blog posts:', error));
  }, []);

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map(post => (
          <li key={post._id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

const Login = () => <h1>Login Page</h1>;

const MyWorks = () => {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4040/works')
      .then(response => response.json())
      .then(data => setWorks(data.works))
      .catch(error => console.error('Error fetching works:', error));
  }, []);

  return (
    <div>
      <h1>My Works</h1>
      <ul>
        {works.map(work => (
          <li key={work._id}>{work.title}</li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <LinksRow />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/prenotazione" element={<Prenotazione />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/my-works" element={<MyWorks />} />
      </Routes>
    </Router>
  );
};

export default App;



