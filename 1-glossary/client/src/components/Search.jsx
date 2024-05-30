import react, {useState} from 'react';

const Search = ({search}) => {

  const [value, setValue] = useState('');

  const handleOnChange = (event) => {
    event.preventDefault();
    setValue(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    search(value);
  };


return (
  <div>
    <input
    type="text"
    onChange={handleOnChange}
    value = {value}
    placeholder="Search..."></input>
    <button onClick={handleClick}>Search</button>
  </div>
)
};

export default Search;
