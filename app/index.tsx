
import { Link } from "expo-router";
import { FlatList } from "react-native-gesture-handler";
import styled from "styled-components/native";

export default function Index(){
    const datarutas = [
        {name:"Teoria", href:"/teoria"},
        {name:"Conversor", href:"/(conversor)"}
    ]

    const renderItem = ({item}) => {
        return(
            <Link href={item.href} >
                <Title>{item.name}</Title>
            </Link>
        )
    }

    return(
        <Container>
            <Title>Menu</Title>
            <FlatList keyExtractor={(item)=>item.name} data={datarutas} renderItem={renderItem} />
        </Container>
    )
}

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`

const Title = styled.Text`
    font-size: 24px;
    font-weight: bold;
`
