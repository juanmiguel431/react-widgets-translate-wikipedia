const Dropdown = ({ options, selected, onChange }) => {
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
        <div className="ui selection dropdown visible active">
          <i className="dropdown icon" />
          <div className="text">{selected.label}</div>
          <div className="menu visible transition">
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
