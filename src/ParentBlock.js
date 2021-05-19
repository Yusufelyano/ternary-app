function ParentBlock(){
   const number = 48
   const isSmall = number < 50
   return
      isSmall?<Small /> : <Large />  
}
function Small (){
   return(
   <div>Small</div>
   );
}

function Large() {
   return (
      <div>Large</div>
   );
}
export default ParentBlock