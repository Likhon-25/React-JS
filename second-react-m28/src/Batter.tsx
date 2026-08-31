import { useState } from "react"

export default function Batter(){
    const [runs, setRuns] = useState(0)

    const handleAddOne = () =>{
        setRuns(runs + 1)
    }
    return(
       <div>
         <p>------------------</p>
        <h2>Score: {runs} </h2>
        <button onClick={handleAddOne}>Add</button>
       </div>
    )
}