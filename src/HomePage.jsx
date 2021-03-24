import React from 'react';

import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <h2>Home</h2>
      <Link to="/choice/1">Start</Link>
    </div>
  );
}
