import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <Link to = "http://localhost:3000/auth/signin">Login</Link>
    </div>
  );
}

export default Navbar;
