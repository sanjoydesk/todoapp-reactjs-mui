import * as React from 'react';
import TaskAccordion from "./accordion";
import HeaderLayout from './header';
import Container from '@mui/material/Container';
import i18n from '../i18n';

const Home = () => {
    return (
        <>
            <HeaderLayout title={i18n.appTitle} />
            <Container maxWidth="sm">
                <TaskAccordion />
            </Container>
        </>
    );
}

export default Home;