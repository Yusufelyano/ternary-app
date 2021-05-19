import ParentBlock from "./ParentBlock.js"
function App(props) {

 // Задача 1
 // Есть такой компонент:
 //
 // function App(props) {
 //   const isDay = props.hours < 18;
 //
 //   return (isDay ? "сейчас день" : "сейчас вечер")
 // }
 //
 // Как его нужно вызвать, чтобы он вывел текст “сейчас вечер”?

 //ОТВЕТ: поменять значение константы 

  //const isDay = props.time > 18
  //return (
  //  <div>
  //    {isDay ? "сейчас день" : "сейчас вечер"}
  //  </div>
  //);


//Задача 2
//
//Объясни, почему следующий компонент всегда выводит “первый текст” при любых пропсах?
//
//    function BadComponent(props) {
//      return(
//        <div>
//          {props ? "первый текст" : "второй текст"}
//        </div>
//      );
//    }

//ОТВЕТ: Потому-что в пропсе храниться значение true, в таком случае, срабатывает условие и код, который идет дальше не срабатывает..


  //Задача 3
  //Допиши код компонента так, чтобы в зависимости от значения переменной`dark` блок выводился либо темным либо светлым:
// const dark = false
//   return (
//     dark ?
//       <div className="dark">
//         Hello, ternary operator!
//    </div> : (
//
//         <div className="light">
//           Hello, ternary operator!
//         </div>
//    ) 
//  );
return(
  <div>
    <ParentBlock />
  </div>
);
}

export default App;
