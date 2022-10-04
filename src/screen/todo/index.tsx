import React from 'react';
import { Container, WrappLogo, Logo, Input, Button, WrappInputButton, TextButton } from './styles';
import Icon from 'react-native-vector-icons/AntDesign';

export default function Todo(){
    return(
        <Container>
            <WrappLogo>
                <Logo source={require('../../assets/img/Logo.png')} />
            </WrappLogo>
            <WrappInputButton>
                <Input placeholder="Adicione uma nova tarefa"/>
                
                <Button>
                    <Icon name="pluscircleo" size={20}></Icon>
                </Button>
            </WrappInputButton>
            
        </Container>
    );
}