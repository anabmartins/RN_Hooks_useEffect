import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, FlatList, View } from 'react-native';
import { useEffect } from 'react'

export default function App() {

  var nomes =
    [
      "Ana Maria",
      "Bruno Alves",
      "Carlos José",
      "Daniel Martins",
      "Efraim Gomes",
      "Francisco Junior"
    ]

  // renderizar com flatlist 

  const renderItem = ({ item } : { item: string }) => (
    <Text style={styles.item}>{item}</Text>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Lista de Usuários</Text>
      <FlatList
        data={nomes}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  item: {
    padding: 15,
    fontSize: 16,
    height: '80%',
    width: '100%',
    backgroundColor: "#f1f1f1", 
    borderRadius: 5,
    fontWeight: '400'
  },
  text:{
    fontWeight: 'bold',
    fontSize: 20,
    padding: 15,
    color: 'purple'
  }
});
