import { RouterProvider } from 'react-router-dom'

import router from './router';

function App() {
  return (
    <div className={`h-screen w-screen overflow-hidden`}>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
