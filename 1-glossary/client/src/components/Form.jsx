import react, {useState} from 'react';
import axios from 'axios';

const Form = ({addTerm}) => {

  const [value, setValue] = useState('');

  const handleOnChange = (event) => {
    event.preventDefault();
    setValue(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault;
    addTerm(value);
  }


return (
  <form>
    <input
    size="75"
    type="text"
    onChange={handleOnChange}
    value = {value}
    placeholder="Enter new key term and definition"></input>
    <button onClick={handleClick}>Add</button>
  </form>
)




};

export default Form;