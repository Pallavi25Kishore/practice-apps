import react from 'react';


const Display = ({item, handleEditButton, handleDeleteButton}) => {

  const showPrompt = (event) =>{
    event.preventDefault();
    var newText = prompt('Edit Glossary Item', item.text);
    handleEditButton(item.id, newText);
  }

 return (
  <button
  onClick={showPrompt}>Edit</button>
  <button
  onClick={(event) => { event.preventDefault(); handleDeleteButton(item.id)}}
  >Delete</button>
 )
};

export default Display;