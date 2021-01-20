import React from 'react';

import AgentRegistration from './components/agent-registration';
import Profile from './components/profile';
import Footer from './components/footer';

function App() {
    return (
        <div className="container">
            <div className="app">
                <AgentRegistration />
                <Profile />
                <Footer />
            </div>
        </div>
    );
}

export default App;
