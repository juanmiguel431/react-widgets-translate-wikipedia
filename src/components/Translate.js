import Dropdown from "./Dropdown";
import { useState } from "react";

const options = [
  {
    label: 'Afrikaans',
    value: 'af'
  },
  {
    label: 'Arabic',
    value: 'ar'
  },
  {
    label: 'Hindi',
    value: 'hi'
  }
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');

  return (
    <div className="translate">
      <div className="ui form">
        <div className="field">
          <label>Enter text</label>
          <input
            type="text"
            value={text}
            onChange={evt => setText(evt.target.value)}
          />
        </div>
      </div>

      <Dropdown
        label="Select a language"
        options={options}
        onChange={setLanguage}
        selected={language}
      />
    </div>
  );
};

export default Translate;
