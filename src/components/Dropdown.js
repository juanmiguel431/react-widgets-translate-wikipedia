import { useEffect, useRef, useState } from "react";

const Dropdown = ({ options, selected, onChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = evt => {
      if (ref.current.contains(evt.target)) {
        return;
      }

      setOpen(false);
    };

    document.body.addEventListener('click', onBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener('click', onBodyClick, { capture: true, });
    };
  }, []);

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
        <div
          ref={ref}
          className={`ui selection dropdown${open ? ' visible active' : ''}`}
          onClick={_ => setOpen(!open)}>
          <i className="dropdown icon"/>
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
