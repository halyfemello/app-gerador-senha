import { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useIsFocused } from "@react-navigation/native";
import useStorage from "../../hooks/useStorage";
import { PasswordItem } from "./components/passwordItem";

export function Passwords(){

    const [listPasswords, setListPasswords] = useState([]);
    const focuses = useIsFocused();
    const { getItens, removeItem } = useStorage();

    useEffect(() => {
        async function loadPassword(){
            const passwords = await getItens("@pass");
            setListPasswords(passwords);
        }

        loadPassword();
    }, [focuses]);

    async function handleDeletePassword(item){
        const passwords = await removeItem("@pass", item);
        setListPasswords(passwords);
    }

    return(
        <SafeAreaView style={{ flex: 1, }}>
            <View style={styles.header }>
                <Text style={styles.title } >Minhas senhas</Text>
            </View>

            <View style={styles.content}>
                <FlatList style={{flex: 1, marginTop: 14}} 
                    data={listPasswords}
                    keyExtractor={ (item) => String(item) }
                    renderItem={ ({item}) => <PasswordItem data={item} removePassword={ () => handleDeletePassword(item) } /> }
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: "#392de9",
        paddingTop: 58,
        paddingBottom: 14,
        paddingLeft: 14,
        paddingRight: 14,
        alignItems: "center"
    },
    title:{
        fontSize: 18,
        color: "#FFF",
        fontWeight: "bold"
    },
    content:{
        flex: 1,
        paddingLeft: 14,
        paddingRight: 14
    }
})