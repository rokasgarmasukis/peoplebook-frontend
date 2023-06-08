import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


import Groups, {loader as groupsLoader} from './components/groupsPage/Groups';
// import Groups from './components/groupsPage/Groups';
import Home from './components/homePage/Home';
import Layout from './components/layout/Layout';
import Group from './components/groupsPage/Group';


import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { getGroups } from './api/groupsAPI';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'groups',
        element: <Groups />,
        loader: async () => getGroups(),
      },

      {
        path: 'groups/:id',
        element: <Group  />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    <ReactQueryDevtools />
  </QueryClientProvider>,
);
