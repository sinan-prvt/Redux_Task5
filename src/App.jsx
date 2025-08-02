import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FetchUser } from './UseSlice'
import ClipLoader from 'react-spinners/ClipLoader'

const App = () => {

  const { loading, users, error } = useSelector((state) => state.users)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(FetchUser())
  }, [dispatch])


  if(loading) return (
    <div style={{ margin: '100px'}}>
      <ClipLoader color="blue"></ClipLoader>
      <p>Loading User.....</p>
    </div>
  )

  if(error) return <p>{error}</p>


  return(
    <>
      <div>
        <h2>Users List</h2>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </div>
    </>
  )
}

export default App