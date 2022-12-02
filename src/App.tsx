import { RouterProvider } from 'react-router-dom'

import router from './router';

import styles from './App.module.scss'

function App() {
  return (
    <div className={styles.wrapper}>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
