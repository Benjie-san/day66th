
import React,{ useState } from 'react';
import { StatusBar  } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Jura_400Regular } from '@expo-google-fonts/jura';
import { useFonts } from "expo-font";
import { AntDesign } from '@expo/vector-icons';
import AddSection from './components/AddSection';


const CategoryItem = ({name}) =>(
  <TouchableOpacity style={styles.categoryItem}>
    <Text style={[styles.commonText, {fontSize: 16}]}>{name}</Text>
  </TouchableOpacity>
)
export default function App() {

  //STATES
  const [openAddModal, setOpenAddModal] = useState(false);

  //LOADING FONTS
  const [fontsLoaded] = useFonts({
    Jura_400Regular
  });
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  //FUNCTIONS

  const handleOpenAddModal = (item) =>{
    setOpenAddModal(item);
  }

  return (
    <>
    <View style={styles.container}>
      <View style={[styles.header]}>
        <View style={[styles.titleContainer]}>

          <Text style={[styles.commonText, {color : '#51C734',fontSize: 28,}]}
          >Day 66th</Text>
          <Text style={[styles.commonText,{ fontSize: 18,}]} >Build Habits - Track Progress</Text>
        
        </View>

        <TouchableOpacity onPress={ ()=>{handleOpenAddModal(true)} } style={[styles.addBtn,]}>
          <AntDesign name="plus" size={25} color="#ffd60a" />
        </TouchableOpacity>
        
      </View>

      <View style={[styles.catergory]}>
          <CategoryItem name="All" />
          <CategoryItem name="Tech" />
          <CategoryItem name="Urgent"  />
      </View>


    </View>

    <AddSection isOpen={openAddModal} handleModal={handleOpenAddModal} commonText={styles.commonText} />

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: '#000814',
    color: 'white',
    padding: 20,
    paddingTop: 20,
    gap: 10,
  },
  commonText:{
    fontFamily: 'Jura_400Regular',
    color: 'white',
  },
  header:{
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  catergory:{
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: 10,
  },
  categoryItem:{
    borderRadius: 5,
    backgroundColor: '#001d3d',
    padding: 10,
  },
});
