import React from 'react';
import ReactGA from 'react-ga';
import Contact from './components/Contact';
import MainFooter from './components/Footer';
import Header from './components/Header';
import Landing from './components/Landing';

ReactGA.initialize('UA-180127680-1');
ReactGA.pageview(window.location.pathname + window.location.search);
function App() { 
    return (
        <div>
            <Header />
            <Landing   />
            <Contact />
            <MainFooter />
        </div>
    )
}

export default App;
