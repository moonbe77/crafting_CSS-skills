import style from './App.module.css';

function App() {

 function isPalindrome(head)
  {
      let input = head
      let res = false

      for (let i = 0; i < input.length; i++){
            if(input.length > 1){
            let first = input.shift()
            let last = input.pop()
            first === last ? res = true : res = false
            }            
          }          
          return res
      }

     console.log(isPalindrome([1,2,1,2,1]))

  return (
    <div className={style.App}>
     <div>
       <h1>THIS IS A TITLE</h1>
     </div>
     <div className={style.container}>
    <div className={style.card}>
       <img src="//unsplash.it/400/400" alt=""/>
       <div className={style.content}>
         <h3 className={style.title}>This is a card</h3>
         <p className={style.body}> body of the card</p>
       </div>
    </div>
    <div className={style.card}>
       <img src="//unsplash.it/401/401" alt=""/>
       <div className={style.content}>
         <h3 className={style.title}>This is a card</h3>
         <p className={style.body}> body of the card</p>
       </div>
    </div>

     </div>
     
    </div>
  );
}

export default App;
