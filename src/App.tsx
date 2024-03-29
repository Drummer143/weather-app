import React from 'react';
import { RouterProvider } from 'react-router-dom';

import router from './router';

const App: React.FC = () => {    
    return (
        <div className={`h-screen w-screen overflow-hidden`}>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
