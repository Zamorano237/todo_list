import {useState, useEffect} from 'react'
import Form from './Form'
// import List from './List'
import Table from './Table'


function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com/'
  const [reqType, setReqType] = useState("users")
  const [items, setItems] = useState([])
  // const [fetchError, setFetchError] = useState(null)
  // const [loading, setLoading] = useState(true)

  useEffect(() => {
    try {
        const fetchItem = async () => {
          const response = await fetch(`${API_URL}${reqType}`)
          if (!response.ok) throw Error ('impossible de fetch les donnees')
          const data = await response.json()
          setItems(data)
        }
        fetchItem()
    } catch (error) {
      console.log(error.message)
    }
  },[reqType])

  return (
    <div className="App">
      <Form 
        reqType = {reqType}
        setReqType = {setReqType}
      />
      {/* <List 
        items = {items} 
      /> */}
      <Table 
        items = {items}
      />
    </div>
  );
}



export default App;
