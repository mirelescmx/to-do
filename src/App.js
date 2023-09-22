import './App.css';

function App() {
  return (
    <div className="App">
      <Box items={TODOLIST}/>
    </div>
  );
}


function Box({ items }) {
  let itemsLeft = items.filter((item) => {
    return !item.completed
  }).length;

  return(
    <div>
      <h1>To Do</h1>
      <TextBar />
      <ItemTable items={items}/>
      <ToolBar itemsLeft = {itemsLeft}/>
    </div>
  );
}

function ItemTable({ items }) {
  const rows = [];
  items.forEach((item) => {
    rows.push(
      <Item item={item} />
    );
  });
  return rows;
}

function Item({ item }) {
  return(
    <div>
      <input
        type="checkbox"
        checked={item.completed}
      />
      {item.description}
    </div>
  );
}

function TextBar({ barText, onBarTextChange }) {
  return(
    <input 
      type="text"
      placeholder="Add New"
      onChange={(e) => onBarTextChange(e.target.value)}
    />
  );
}

function ToolBar({ itemsLeft }) {
  return(
    <div>
      <ToolBarButton name='Add'/>
      <ToolBarButton name='Search'/>
      {itemsLeft} items left
      <ToolBarButton name='All'/>
      <ToolBarButton name='Active'/>
      <ToolBarButton name='Completed'/>
    </div>
  );
}

function ToolBarButton({ name }) {
  return(
    <button>{name}</button>
  );
}

const TODOLIST = [
  {description: "Finish App", completed: false},
  {description: "Do Stuff", completed: false},
  {description: "Start Project", completed: false},
  {description: "Do More Stuff", completed: false},
  {description: "Publish the thing", completed: false}
];

export default App;