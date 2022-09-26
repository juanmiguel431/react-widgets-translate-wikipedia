// import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import { useState } from "react";

// const items = [
//   {
//     title: 'What is React?',
//     content: 'React is a frontend javascript framework'
//   },
//   {
//     title: 'Why use React?',
//     content: 'React is favorite JS library among engineers'
//   },
//   {
//     title: 'How do you use React?',
//     content: 'You use React by creating components'
//   },
// ];

const options = [
  {
    label: 'The color red',
    value: 'red'
  },
  {
    label: 'The color green',
    value: 'green'
  },
  {
    label: 'A shade of blue',
    value: 'blue'
  },
]

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="app">
      <Dropdown
        options={options}
        selected={selected}
        onChange={setSelected}
      />
    </div>
  );
}

export default App;
