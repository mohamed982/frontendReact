import { useEffect, useState } from 'react'

const Component1=()=>{
  return <h1 style={{color:'orangered'}}>Componet 1</h1>
}
const Component2=()=>{
  return <h1 style={{color:'blue'}}>Componet 2</h1>
}
const Component3=()=>{
  return <h1 style={{color:'yello'}}>Componet 3</h1>
}
const Component4=()=>{
  return <h1 style={{color:'green'}}>Componet 4</h1>
}


function App() {
  const [data,setData]=useState([]);

  const getData=()=>{
    return new Promise((res,rej)=>{
      setTimeout(()=>{
        return res(['Component1', 'Component2', 'Component3', 'Component4']);
      },2000)
    })
  }

  useEffect(()=>{
    (async()=>{
      const data=await getData();
      setData(data);
    })();
  },[]);

  return (
    <>
      <div>
          {/* Render Components Here */}
      </div>
    </>
  )
}

export default App
