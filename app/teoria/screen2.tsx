import { useLocalSearchParams, useRouter } from "expo-router";
import { Button,View,Text } from "react-native";
import styled from "styled-components/native";



export default function Screen2() {
    const router = useRouter();
    const data = useLocalSearchParams();
    return (
        <View>
            <Title>Screen 2</Title>   
            <Button title="Go to Screen 1" onPress={() => router.back()} />
            <Text>Nombre: {data.nombre}</Text>
            <Text>Apellido: {data.apellido}</Text>
            <Text>Curso: {data.curso}</Text>
        </View>
    )
}

const Title = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: red;
`
