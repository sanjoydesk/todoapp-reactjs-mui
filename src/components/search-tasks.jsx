import { useState } from "react";
import { TextField, Typography } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import cardData from '../services';
import { NameWrapper } from './style';
import i18n from '../i18n';

const TextFieldSearchBar = ({ list }) => {
  const [input, setInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleInput = (e) => {
    setInput(e.target.value.toLowerCase());
    const filteredList = cardData.filter((element) => {
        if (input !== "") {
          return element.title.toLowerCase().includes(input) || element.content.toLowerCase().includes(input);
        }

        return [];
    });
    setFilteredData(filteredList);
  };

  return (
        <>
      <form style={{ display: "flex", alignItems: "center", top: '76px' }} onSubmit={(e) => e.preventDefault()}>
        <TextField
          id="search-bar"
          className="text"
          onChange={handleInput}
          onKeyDown={handleInput}
          label={i18n.searchLabel}
          variant="outlined"
          placeholder={i18n.searchPlaceholder}
          size="small"
          sx={{
            width: '382px',
            margin: "10px auto",
            height: '40px',
          }}
        />
        {/* <IconButton type="submit" aria-label="search">
          <SearchIcon style={{ fill: "blue" }} />
        </IconButton> */}
      </form>

        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {filteredData && input !== "" && filteredData.map( (item, index) => (<> 
                <ListItem alignItems="flex-start" key={item.id}>
                <ListItemAvatar> <Avatar alt="L" src={item.img} /> </ListItemAvatar>
                <ListItemText
                    primary={<NameWrapper>{item.title}</NameWrapper>}
                    secondary={<>{item.content}
                        <Typography variant="caption" gutterBottom sx={{ display: 'block' }}>{item.date}</Typography></>
                    }
                />
                </ListItem> 
                {index === 0 && <Divider variant="inset" component="li" />}
            </>))}
        </List>

      </>

  );
};

export default TextFieldSearchBar;