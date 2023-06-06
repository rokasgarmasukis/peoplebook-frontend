import Groups from './components/groupsPage/Groups';
import Home from './components/homePage/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Group from './components/groupsPage/Group';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'groups',
        Component: Groups,
        children: [],
      },

      {
        path: 'groups/:id',
        Component: Group,
      },
    ],
  },
]);

function App() {
  // const getPeopleQuery = useQuery({
  //   queryKey: ['people'],
  //   queryFn: getPeople,
  // });

  // if (getPeopleQuery.isLoading) return <h1>Loading people...</h1>
  // if (getPeopleQuery.isError) return <pre>{JSON.stringify(getPeopleQuery.error)}</pre>

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
