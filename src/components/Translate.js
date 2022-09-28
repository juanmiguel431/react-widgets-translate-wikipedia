import Dropdown from "./Dropdown";
import { useEffect, useState } from "react";
import Convert from "./Convert";

const options = [
  {
    label: 'Spanish',
    value: 'es'
  },
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
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');
  const [debounceText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timerId = setInterval(() => {
      setDebouncedText(text);
    }, 750);

    return () => {
      clearInterval(timerId);
    };
  }, [text]);

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
      <hr/>
      <h3 className="ui header">Output</h3>
      <Convert
        language={language}
        text={debounceText}
      />
    </div>
  );
};

export default Translate;
