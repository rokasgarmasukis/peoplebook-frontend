import { useQuery, useMutation } from '@tanstack/react-query';
import { getGroups } from '../../api/groupsAPI';
import { Link } from 'react-router-dom';

const Groups = () => {
    const getGroupsQuery = useQuery({
        queryKey: ['groups'],
        queryFn: getGroups,
      });
    

      return (
        <div>
          <h2>Groups</h2>
          <Link to="/groups/1">Group 1</Link>
        </div>
        
      )
}

export default Groups;