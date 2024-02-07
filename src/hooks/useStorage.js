import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () => {

    //Buscar os itens salvos
    const getItens = async (key) => {
        try {

            const passwords = await AsyncStorage.getItem(key);
            return JSON.parse(passwords) || []; //TODO Caso venha vazia ou der algum erro por ser a primeira vez, retorna um array vazio
            
        } catch (error) {
            console.log("Erro ao buscar", error);
            return [];
        }
    }

    //Salvar um item no storage
    const saveItem = async (key, value) => {
        try {

            let passwords = await getItens(key);
            passwords.push(value);

            await AsyncStorage.setItem(key, JSON.stringify(passwords));

        } catch (error) {
            console.log("Erro ao salvar", error);
        }
    }

    //Deletar um item do storage
    const removeItem = async (key, item) => {
        try {

            let passwords = await getItens(key);

            let myPasswords = passwords.filter( (password) => {
                return (password !== item);
            });

            await AsyncStorage.setItem(key, JSON.stringify(myPasswords));
            return myPasswords;
            
        } catch (error) {
            console.log("Erro ao remover item", error);
        }
    }

    return {
        getItens,
        saveItem,
        removeItem
    }
}

export default useStorage;