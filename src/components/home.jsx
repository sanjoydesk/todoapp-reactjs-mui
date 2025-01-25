import * as React from 'react';
import TaskAccordion from "./accordion";
import HeaderLayout from './header';
import Container from '@mui/material/Container';

const Home = () => {
    return (
        <>
            <HeaderLayout title={'TODO APP'} />
            <Container maxWidth="sm">
                <TaskAccordion />
            </Container>
        </>
    );
}

export default Home;