import { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'

function Product(){
    const [count, setCount] = useState(false)
    const [name, setName] = useState('')
    const [data, setData] = useState([])
    // useEffect(()=>{
    //     console.log('I am running')
    // })
    // useEffect(()=>{console.log('i am running')}, [])
    

    // useEffect(()=>{console.log('i am running')},[name])

    useEffect(()=>{
           const sleeping =()=>{
            fetch('https://jsonplaceholder.typicode.com/todos/')
      .then((response) => response.json())
      .then((temi) => setData(temi));
      console.log(data)
           };
           sleeping();
    }, [])
    
    // // const navigate = useNavigate()
    return(
    <div>
        <h1>
            This is The Product page
        </h1>
        <input type="text" onChange={(e)=>setName(e.target.value)}/>
        <button onClick={()=>setCount(count + 1)}>+</button>
        <button onClick={()=>setCount(count - 1)}>-</button>


        {/* <Link to="login"><button>Next</button></Link> */}
    </div>
    
    )
}

export default Product