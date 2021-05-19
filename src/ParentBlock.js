import Small from "./Small.js"
import Large from "./Large.js"
const number = 48
const isSmall = number < 50
function ParentBlock(){

   return <div>
      {isSmall?<Small /> : <Large />} 
       </div>
}

export default ParentBlock