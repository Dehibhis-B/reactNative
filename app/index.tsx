
import { MaterialIcons } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";
import styled from "styled-components/native";


export default function Index(){
    const datarutas = [
        {name:"Teoria", href:"/teoria"},
        {name:"Conversor", href:"/(conversor)"}
    ]

    const renderItem = ({item}) => {
        return(
            <LinkButton href={item.href} >
                <MaterialIcons name="insert-drive-file" size={24}/>
                <Title>{item.name}</Title>
            </LinkButton>
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
    background-color: #000000;
`

const Title = styled.Text`
    font-size: 12px;
    font-weight: semibold;
`

const LinkButton = styled.View`
    margin-top: 20px;
    background-color: blue;
    padding: 10px 20px;
    border-radius: 10px;

`

const LinkText = styled.Text`
    color: white;
    font-size: 18px;
`

const Separator = styled.View`
    height: 20px;
`

const Icon = styled.Image`
    width: 100px;
    height: 100px;
    margin-bottom: 20px;
`

const SubTitle = styled.Text`
    font-size: 18px;
    color: gray;
    margin-bottom: 20px;
`

const StartButton = styled.TouchableOpacity`
    background-color: green;
    padding: 10px 20px;
    border-radius: 5px;
`
