import style from './App.module.css';

function App() {
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
