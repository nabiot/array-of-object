import logo from './logo.svg';
import './App.css';
import ObjectLists from './ObjectLists';

function App() {

let arr= [
  {
  firstName: "Nabiot", 
  lastName: "Wubet",
  adress: "3240 s 180th st",
  seniority: "Freshmen" 
  },
  {
    firstName: "G/medhin", 
    lastName: "Abebe",
    adress: "SeaTac",
    seniority: "snior"
  },
  {
  firstName: "Tolosa", 
  lastName: "Bikela",
  adress: "Ethiopia",
  seniority: "sophomore"
  }]
  

var listItem = arr.map(item => (<ObjectLists firstName={item.firstName} lastName={item.lastName} adress={item.adress} seniority={item.seniority} />))

  return (
    <div className="App">
      {listItem}
    </div>
  );
}

export default App;
