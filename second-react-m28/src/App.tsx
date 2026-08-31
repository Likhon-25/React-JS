import './App.css'
import Batter from './Batter'
// import Cart from './Cart'
import Counter from './Counter'

function App() {
  
  // function handleClick(){
  //   alert('button clicked 2')
  // }

  // const handleAddToCart = (id) =>{
  //   alert('Buying item' + id)
  // }

  return (
    <>
    <Counter></Counter>
    <Batter></Batter>
      {/* <Cart></Cart> */}
      {/* <button onClick={handleClick}>Click Me 1 </button>
      <button onClick={handleClick}>Click Me 2</button>

      <button onClick={() => alert('click 3')}>Click Me 3</button>

      <button onClick={() => handleAddToCart(65)}>Buy this</button> */}
    </>
  )
}

export default App
