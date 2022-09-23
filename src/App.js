import Accordion from "./components/Accordion";

const items = [
  {
    title: 'What is React?',
    content: 'React is a frontend javascript framework'
  },
  {
    title: 'Why use React?',
    content: 'React is favorite JS library among engineers'
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components'
  },
];

export default () => {
  return (
    <div className="app">
      <Accordion items={items} />
    </div>
  );
}
