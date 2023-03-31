import "./Select.css";

type SelectOption = {
  label: string;
  value: string | number;
};

type SelectProps = {
  options: SelectOption[];
  value?: SelectOption;
  onChange: (value: SelectOption | undefined) => void;
};

export const Select = ({ value, onChange, options }: SelectProps) => {
  return (
    <div tabIndex={0} className='container'>
      <span className='value'>Value</span>
      <button className='close-btn'>&times;</button>
      <div className='divider'></div>
      <div className='caret'></div>
      <ul className='options'>
        {options.map((option) => (
          <li key={option.value} className='option'>
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};
