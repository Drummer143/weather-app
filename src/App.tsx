import { RouterProvider } from 'react-router-dom';
import { darkMode } from 'tailwindcss/defaultConfig'

import router from './router';

function App() {
    console.log(darkMode);
    return (
        <div className={`h-screen w-screen overflow-hidden`}>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
