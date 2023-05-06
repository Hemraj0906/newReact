//import logo from './logo.svg';
import './App.css';
//import './components/Item'
import Item from './components/Item';
import ItemDate from './components/ItemDate';
function App() {
  const ItemTwoName="detegent";
  return (
    <div>
       <Item name="Nirma" ></Item>
       <ItemDate day="25" month="june" year="1996"></ItemDate>

       <Item name={ItemTwoName}></Item>
       <ItemDate day="20" month="jully" year="1998"></ItemDate>
       <Item name="ghadi"></Item>
       <ItemDate day="28" month="janewary" year="1997"></ItemDate>

    <div className="App">Hello Universe</div>
    </div>
   
  );
}

export default App;
