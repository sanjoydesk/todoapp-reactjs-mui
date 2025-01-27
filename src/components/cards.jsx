import * as React from 'react';
import List from '@mui/material/List';
import { listItemClasses } from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import { CircleIconWrapper, StatusSection, NameWrapper, ContentWrapper, DateTimeWrapper, ListItemWrapper } from './style';
import { useNavigate } from 'react-router-dom';
import { statusList } from '../helpers';

const CardList = ({item, index, status}) => {
    const navigate = useNavigate();

    const handleEdit = (item, status) => {
        navigate(`/task/${item.id}/${status}`);
    };

    return (
        <>
            <ListItemWrapper alignItems="flex-start" key={item.id} sx={{ [`& .${listItemClasses.root}:hover`]: {
            backgroundColor: 'grey',
        } }}>
                <ListItemAvatar>
                    <Avatar alt="L" src={item.img} />
                </ListItemAvatar>
                <ListItemText 
                    primary={
                        <NameWrapper>{item.title} <EditIcon fontSize='10' onClick={() => handleEdit(item, status)}></EditIcon><StatusSection>
                            <Typography variant="caption" align="right">
                                <CircleIconWrapper statusId={status} fontSize='10'/> 
                                {' '}{statusList[status]}
                            </Typography>
                            </StatusSection>
                        </NameWrapper>
                    }
                    secondary={
                        <>
                        <ContentWrapper variant="caption" gutterBottom sx={{ display: 'block' }}>{item.content}</ContentWrapper>
                        <DateTimeWrapper variant="caption" gutterBottom sx={{ display: 'block' }}>{item.date}</DateTimeWrapper>
                        </>
                    }
                />
                
            </ListItemWrapper> 
            {index === 0 && <Divider variant="inset" component="li" />}
        </>
    );
}


const Cards = ({status, data}) => {
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper',   }} >
            {data && data.map( (item, index) => <CardList item={item} index={index} status={status} key={item.id} />)}
        </List>
    )
};

export default Cards;