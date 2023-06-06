import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


import Groups from './components/groupsPage/Groups';
import Home from './components/homePage/Home';
import Layout from './components/layout/Layout';
import Group from './components/groupsPage/Group';


import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

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
        path: 'groups',
        element: <Groups />,
        children: [],
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
