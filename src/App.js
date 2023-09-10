// import logo from './logo.svg';
// import './App.css';
// import Landing from './components/landing';
// import Portfolio from './components/portfolio';

// function App() {
//   return (
//     <div className="App">
//       <Landing exact path="/"/>
//     <Portfolio exact path="/1"/>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import './App.css';
import Landing from './components/landing';
import Portfolio from './components/portfolio';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleRouteChange = () => {
      setCurrentPath(window.location.pathname);
    };

    // Listen for changes in the URL path
    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return (
    <div className="App">
      {currentPath === '/' && <Landing />}
      {currentPath === '/1' && <Portfolio />}
    </div>
  );
}

export default App;
