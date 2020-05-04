import React ,{useState}from 'react';
import usePageStudent from "./myHooks/usePageStudent"

function Test() {
  const [page, setPage] = useState(1)
  const resp = usePageStudent(page, 5);
  console.log(resp, ")))))))))")
  if( resp.length != 0) {
    const list = resp.findByPage.map( it => {
      return <li key={it.id}>姓名: {it.name}</li>
    })

    return (
      <div>
        {list}
      </div>
    )
  }
  return null
}



function App() {
  return (
    <div>
      <Test />
    </div>
  )
}

export default App;

