import { useRouter } from "expo-router";
import { Button,View,Text } from "react-native";
import styled from "styled-components/native";


export default function Screen2() {
    const router = useRouter();
    return (
        <View>
            <Title>Screen 2</Title>   
            <Button title="Go to Screen 1" onPress={() => router.back()} />
        </View>
    )
}

const Title = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: red;
`
