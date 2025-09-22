import { router } from "expo-router";
import styled from "styled-components/native";



export default function Index(){
    return(
        <Container>
            <Icon source={require('../../assets/images/icon.png')} />
            <Texto>Conversor</Texto>
            <SubTitle>(cm) a (m)</SubTitle>

            <StartButton onPress={() => router.push("/conversor")}>
                <StartButtonText>Iniciar</StartButtonText>
            </StartButton>
        </Container>
    )
}

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: gray;
`

const Texto = styled.Text`
    font-size: 24px;
    font-weight: bold;
`
const SubTitle = styled.Text`
    font-size: 18px;
    margin-top: 10px;
`
const StartButton = styled.TouchableOpacity`
    margin-top: 20px;
    padding: 10px 20px;
    background-color: blue;
    border-radius: 5px;
`

const StartButtonText = styled.Text`
    color: white;
    font-size: 18px;
`
const Icon = styled.Image`
    width: 100px;
    height: 100px;
    margin-bottom: 20px;
`