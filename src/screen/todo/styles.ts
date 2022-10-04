import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #454545;
    align-items: center ;
`;

export const WrappLogo = styled.View`
    background-color: #0D0D0D;
    width: 100%;
    height: 20%;
    justify-content: center;
    align-items: center;
`;

export const Logo = styled.Image``;

export const WrappInputButton = styled.View`
    margin-top: 150px;
    position: absolute;
    width: 100%;
    padding: 10px;
    flex-direction: row;
    justify-content: space-between;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#808080'
})`

    padding: 20px;
    width: 82%;
    height: 60px;
    background-color: #262626;
    border-radius: 8px;
    font-size: 16px;
    color: #F2F2F2
    
`;

export const Button = styled.TouchableOpacity`
    width: 60px;
    height: 60px;

    border-radius: 8px;
    background-color: #1E6F9F;
    
    align-items: center;
    justify-content: center;
`;
export const TextButton = styled.Text`
    color: #fff;
`;

export const WrappLabel = styled.View`
    padding: 15px;
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
`;

export const LabelLeft = styled.Text`
    font-size: 14px;
    font-weight: 800;
    color: #4EA8DE;
`;

export const LabelRight = styled.Text`
    font-size: 14px;
    font-weight: 800;
    color: #8284FA;
`;



