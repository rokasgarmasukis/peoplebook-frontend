import { useQuery, useMutation } from "@tanstack/react-query"
import { getPeople } from "./api/peopleAPI"
import Person from "./components/Person"

function App() {

  const getPeopleQuery = useQuery({
    queryKey: ['people'],
    queryFn: getPeople
  })

  if (getPeopleQuery.isLoading) return <h1>Loading people...</h1>
  if (getPeopleQuery.isError) return <pre>{JSON.stringify(getPeopleQuery.error)}</pre>

  console.log(getPeopleQuery);
  return (
    <div>
      <h2 className="underline">People:</h2>
      {getPeopleQuery.data.map(person => (
        <Person key={person.id} person={person} />
      ))}
    </div>
  )
}

export default App
