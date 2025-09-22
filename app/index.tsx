import { useRouter } from "expo-router";
import { Button } from "react-native";
import styled, { ThemeProvider } from "styled-components/native";
import { darkTheme, lightTheme } from "../styles/theme";
import { useState } from "react";

export default function Screen1() {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const router = useRouter();
    const data = {
        nombre: 'Dehibhis',
        apellido: 'Perez',
        curso: 'React Native',
    }
    
    const toggleTheme = () => {
        setIsDarkTheme((prevTheme) => !prevTheme);
    }
    
    const currentTheme = isDarkTheme ? darkTheme : lightTheme;
    
    return (
        <ThemeProvider theme={currentTheme}>
            <Container>
                <Title>Screen 1</Title>
                <Button title="Toggle Theme" onPress={toggleTheme} />
                <Button title="Go to Screen 2" onPress={() => router.push(
                    {
                        pathname: '/screen2',
                        params: data,
                    }
                )} />
            </Container>
        </ThemeProvider>
    )
}

// ✅ CORRECTO - Con backticks y sintaxis adecuada
const Title = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: red;
`

// ✅ CORRECTO - Sintaxis fixed
const Container = styled.View`
background-color: ${({theme} ) => theme.colors.background};
  flex: 1;
`;  