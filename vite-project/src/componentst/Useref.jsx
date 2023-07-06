import { useRef } from "react"



function Useref(){

    const TemiUse = useRef('')
   console.log(TemiUse.current.value)
    return(
         <div>
            <h1>HIIIII</h1>
        <input type="text" ref={TemiUse} />
        </div>
    )
}
export default Useref