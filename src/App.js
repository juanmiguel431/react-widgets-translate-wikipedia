// import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

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
  return (
    <div className="app">
      <Dropdown
        options={options}
      />
    </div>
  );
}

export default App;
