import React from 'react';
import { 
    Container, 
    WrappLogo, 
    Logo, 
    Input, 
    Button, 
    WrappInputButton, 
    TextButton, 
    WrappLabel,
    LabelLeft,
    LabelRight 
} from './styles';
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
                    <TextButton>
                        <Icon name="pluscircleo" size={20}></Icon>
                    </TextButton>
                   
                </Button>
            </WrappInputButton>
            <WrappLabel>
                <LabelLeft>Criadas</LabelLeft>
                <LabelRight>Concluídas</LabelRight>
            </WrappLabel>            
        </Container>
    );
}