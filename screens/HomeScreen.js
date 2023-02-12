import { FlatList } from 'react-native-gesture-handler';
import Item from '../components/item';
import DATA from '../components/data';


const HomeScreen=({navigation})=> {
  const goToDetails=(item)=>{
    navigation.navigate('Details',{
      selectedItem:item
    });
    
  }

  const renderItem=({item})=>(
    <Item name={item.name} id={item.id} image={item.image}
    onPress={()=>{
      goToDetails(item);}}
    />
  )

  return (
    <FlatList
    data={DATA}
       renderItem={renderItem}
       keyExtractor={(item)=>item.id}
    />



    
  );
}

export default HomeScreen;

