import { useQuery, useMutation } from '@tanstack/react-query';
import { getGroups } from '../../api/groupsAPI';
import { Link, useLoaderData } from 'react-router-dom';

const Groups = () => {

  // const data = useLoaderData();
  const groups = useQuery(groupsQuery())
  
  // console.log(data)
  console.log(groups)

  return (
    <div>
      <h2>Groups</h2>
      <Link to="/groups/1">Group 1</Link>
    </div>
  );
};

export default Groups;

const groupsQuery = () => ({
  queryKey: ['groups'],
  queryFn: getGroups,
});

export const loader = (queryClient) => async () => {
  const query = groupsQuery();
  return (
    queryClient.getQueryData(query.queryKey) ??
    (await queryClient.fetchQuery(query))
  );
};
