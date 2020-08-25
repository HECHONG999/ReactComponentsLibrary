import React, { useState } from 'react';
import usePageStudent from "./myHooks/usePageStudent"

function Test() {
  const [page, setPage] = useState(1)
  const resp = usePageStudent(page, 5);
  if (resp.length != 0) {
    console.log(resp)
    const list = resp.findByPage.map(it => {
      return (
        <li key={it.id}>地址: {it.address}</li>
      )
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

