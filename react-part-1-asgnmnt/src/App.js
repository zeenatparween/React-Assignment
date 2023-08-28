import ButtonCom from "./component/Button";
import Header from "./component/Header";
import List from "./component/List";

import Person from "./component/Person";


function App() {
  return (
    <div>
      <h1>Person Component</h1>
      <Person name = "Ahan" age= '23'/>
      <Person name = "Zakiya " age= '21'/>
      <h1>Button Component</h1>
       <ButtonCom text ="click" />
       <h1>Header Component</h1>
       <Header 
       title = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quibusdam eligendi ducimus id"
       />
       <Header 
       title = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quibusdam eligendi ducimus id"
       />
       <Header 
       title = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quibusdam eligendi ducimus id"
       />

       <h1>List Component</h1>
       <List Electronic ="Laptop" Clothes="T-shirt" Kids="Two" KidsGarmet="Lower" Mens ="Shinchain"/>
       <List Electronic ="Refrigerator" Clothes="Shirt" Kids="One" KidsGarmet="Trowser" Mens ="Hamid"/>
       
    </div>
  )
}

export default App;
