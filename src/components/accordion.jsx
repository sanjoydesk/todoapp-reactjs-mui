import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Cards from './cards';
import Fab from '@mui/material/Fab';
import { styled as styledMui } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import { statusList, filterDataByType } from '../helpers';
import TextFieldSearchBar from './search-tasks';
import cardData from '../services';

const StyledFab = styledMui(Fab)({
  position: 'fixed',
  zIndex: 1,
  bottom:12,
  right: 12,
  backgroundColor: '#034EA2'
});

const TaskAccordion = () => {

  const navigate = useNavigate();
  const handleAddTask = () => {
    navigate('/add-task');
  };

  // Fetch API will be called inside useEffect to get the data from server. For this app used Mock Data
  const data = filterDataByType(cardData);

  return (
    <>
      <TextFieldSearchBar list={cardData} />
        {data && data.map((item, index) => {
          return (
            <Accordion key={index} >
               <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{
                  backgroundColor: "#F3F6F9",
                }}
              >
                <Typography>{statusList[item[0]]} ({item[1].length})</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Cards status={item[0]} data={item[1]} key={item.id} />
              </AccordionDetails> 
            </Accordion>
          );
        })}
      <StyledFab color="secondary" aria-label="add">
        <AddIcon onClick={handleAddTask}/>
      </StyledFab>
    </>
  );
};

export default TaskAccordion;
