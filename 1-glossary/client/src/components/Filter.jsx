import react from 'react';
import GlossaryList from './GlossaryList.jsx';

const Filter = ({list, handleEditButton, handleDeleteButton, searchTerm}) => {
  searchTerm = searchTerm.toLowerCase();
    if (searchTerm === '') {
      return (<GlossaryList list={list} handleEditButton={handleEditButton} handleDeleteButton={handleDeleteButton}/>)
    } else {
      var filteredList = list.filter((item) => {
        var listItem = item.text.toLowerCase();
        for (var i = 0; i < searchTerm.length; i++) {
          if (searchTerm[i] !== listItem[i]) {
            return false;
          }
        }
        return true;
      });
      console.log(filteredList);
      if (filteredList.length === 0) {
        return (<div>Sorry!, no match was found!</div>)
      } else {
        return (<GlossaryList list={filteredList} handleEditButton={handleEditButton} handleDeleteButton={handleDeleteButton}/>)
      }
    }

};

export default Filter;