import { router } from "expo-router";
import { useState } from "react";
import styled from "styled-components/native";

export default function conversor(){

    const [centimenteros, setCentimetros] = useState("");
    const [result, setResult] = useState(null);

    const convertir = () => {
        // Lógica para convertir cm a m
        if (!centimenteros) {
            alert("Por favor, ingrese un valor");
            return;
        }
        const metros = parseFloat(centimenteros) / 100;
        setResult(metros);
          
    }

    return(
        <Container>
            <Input placeholder="ingrese numero" keyboardType="numeric" onChangeText={setCentimetros} />
            <CalculateButton onPress={convertir}>  
                <ButtonText>Convertir</ButtonText>
            </CalculateButton>
            <ResultText>Resultado: {result !==null?`${result} m`:"-" }</ResultText>
            <BackButton onPress={() => router.back("/index")}>
                <BackButtonText>Volver</BackButtonText>
            </BackButton>

        </Container>
    )
}

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`

const Input = styled.TextInput`
    width: 80%;
    height: 50px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    font-size: 18px;
    margin-bottom: 20px;
`
const CalculateButton = styled.TouchableOpacity`
    padding: 10px 20px;
    background-color: blue;
    border-radius: 5px;
`
const ButtonText = styled.Text`
    color: white;
    font-size: 18px;
`
const ResultText = styled.Text`
    font-size: 24px;
    margin-top: 20px;
`

const BackButton = styled.TouchableOpacity`
    position: absolute;
    top: 40px;
    left: 20px;
    padding: 10px 20px;
    background-color: gray;
    border-radius: 5px;
`
const BackButtonText = styled.Text`
    color: white;
    font-size: 18px;
`

const Texto = styled.Text`
    font-size: 24px;
    font-weight: bold;
`
