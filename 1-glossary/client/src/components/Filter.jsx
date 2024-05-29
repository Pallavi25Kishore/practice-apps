import react from 'react';
import GlossaryList from './GlossaryList.jsx';

const Filter = ({list, handleEditButton, handleDeleteButton}) => {

return <GlossaryList list={list} handleEditButton={handleEditButton} handleDeleteButton={handleDeleteButton}/>

};

export default Filter;