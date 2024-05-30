import React, {useState, useEffect} from 'react';
import Filter from './Filter.jsx';
import Heading from './Heading.jsx';
import Form from './Form.jsx';
import Search from './Search.jsx';
import axios from 'axios';

const App = () => {

const [list, setList] = useState([]);
const [searchTerm, setSearchTerm] = useState('');

const getData = () => {
  axios.get('/glossary')
  .then((response) => {
    setList(response.data);
  })
  .catch((err) => {
    console.log(err);
  });
};

useEffect(() => {getData()}, []);

const addTerm = (term) => {
  axios.post('/glossary', {text : term})
  .then(() => {
    getData();
  })
  .catch((err) => {
    console.log(err);
  });
};

const handleEditButton = (index, newText) => {
  axios.put(`/glossary/${index}`, {text: newText})
  .then(() => {
    getData();
  })
  .catch((err) => {
    console.log(err);
  });
};

const handleDeleteButton = (index) => {
  axios.delete(`/glossary/${index}`)
  .then(() => {
    getData();
  })
  .catch((err) => {
    console.log(err);
  });
};

const search = (term) => {
  setSearchTerm(term);
};

return (
  <div>
    <Heading />
    <Form addTerm={addTerm}/>
    <Search search={search}/>
    <Filter list={list} handleEditButton={handleEditButton}
    handleDeleteButton={handleDeleteButton}
    searchTerm={searchTerm}/>
  </div>
)

};

export default App;
