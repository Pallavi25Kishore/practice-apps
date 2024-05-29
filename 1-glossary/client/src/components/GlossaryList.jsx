import react from 'react';
import Item from './Item.jsx';

 const GlossaryList = ({list, handleEditButton, handleDeleteButton}) => {
  return (
    <div>
      {list.map((item) => {
        return <Item item={item} handleEditButton={handleEditButton}
        handleDeleteButton={handleDeleteButton}
        key={item['_id']}/>
      })}
    </div>
  )
 };

 export default GlossaryList;