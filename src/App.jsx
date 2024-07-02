//rrd imports
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//pages
import { Home, About, Contact, Login, Register } from './pages';

//layouts
import MainLayout from './layouts/MainLayout';

//actions
import { action as RegisterAction } from './pages/Register';
function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/contact',
          element: <Contact />,
        },
      ],
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,
      action: RegisterAction,
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
