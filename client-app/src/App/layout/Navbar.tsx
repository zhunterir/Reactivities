import * as React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';

interface Props{
    openForm : () => void;
}
export default function Navbar({openForm} : Props){
    return (
        <Menu inverted>
            <Container>
                <Menu.Item header>
                    <img src='/assets/logo.png' alt='logo'></img>
                </Menu.Item>
                <Menu.Item name='Activities' />
                <Menu.Item>
                    <Button positive content="Create new activity" onClick={() => openForm()}/>
                </Menu.Item>

            </Container>
        </Menu>
    );
}