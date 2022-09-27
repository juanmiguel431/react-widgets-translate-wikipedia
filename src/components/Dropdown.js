import { useState } from "react";

const Dropdown = ({ options, selected, onChange }) => {
  const [open, setOpen] = useState(false);

  const renderedOptions = options.map(option => {
    if (option.value === selected.value) {
      return null;
    }

    return (
      <div
        key={option.value}
        className="item"
        onClick={_ => onChange(option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className="dropdown-comp ui form">
      <div className="field">
        <label className="label">Select a color</label>
        <div className={`ui selection dropdown${open ? ' visible active' : ''}`} onClick={_ => setOpen(!open)}>
          <i className="dropdown icon" />
          <div className="text">{selected.label}</div>
          <div className={`menu${open ? ' visible transition' : ''}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
