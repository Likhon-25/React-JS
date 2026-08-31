import { Suspense } from 'react'
import './App.css'
// import Batter from './Batter'
// import Cart from './Cart'
// import Counter from './Counter'
import Users from './Users'

const UserDataPromise = async() =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json();
  return data
}

function App() {
  
  // function handleClick(){
  //   alert('button clicked 2')
  // }

  // const handleAddToCart = (id) =>{
  //   alert('Buying item' + id)
  // }

  return (
    <>
      
      <Suspense fallback={<p>Loading...</p>}>
        <Users UserDataPromise={UserDataPromise()}></Users>
      </Suspense>
    {/* <Counter></Counter>
    <Batter></Batter> */}
      {/* <Cart></Cart> */}
      {/* <button onClick={handleClick}>Click Me 1 </button>
      <button onClick={handleClick}>Click Me 2</button>

      <button onClick={() => alert('click 3')}>Click Me 3</button>

      <button onClick={() => handleAddToCart(65)}>Buy this</button> */}
    </>
  )
}

export default App
