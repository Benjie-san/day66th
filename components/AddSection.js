import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


const IconItem = ({icon, color}) => (

    <TouchableOpacity style={[styles.iconItem, {backgroundColor: color}]}>
      {icon}
    </TouchableOpacity>
  
);


export default function AddSection ({isOpen, handleModal, commonText}){
  return (
    <>
      <Modal
          onBackdropPress={() => handleModal(false)}
          onBackButtonPress={() => handleModal(false)}
          onSwipeComplete={() => handleModal(!isOpen)}
          isVisible={isOpen}
          animationIn="bounceInUp"
          animationOut="bounceOutDown"
          swipeDirection="down"
          animationInTiming={900}
          animationOutTiming={500}
          backdropTransitionInTiming={1000}
          backdropTransitionOutTiming={1000}
          animated
          hideModalContentWhileAnimating
          hasBackdrop={false}
          style={{	justifyContent: "flex-end",
            margin: 0,}}
      >
        <View style={[styles.container,]}>

            <View style={[styles.header, styles.itemContainers, {paddingBottom: 10, paddingTop: 10}]}>
              <Text style={[commonText, {fontSize: 22,  color: "#ffd60a", }]} >Add New Item</Text>
              <TouchableOpacity onPress={ ()=>{ handleModal(false) } } >
                <AntDesign name="close" size={24} color="white" />
              </TouchableOpacity>
            
            </View>

            <View style={[styles.form,{gap: 10}]} >
              <View style={[styles.itemContainers,  {flexDirection: 'column',}]}>
                <Text style={[commonText, styles.formText]} >Title:</Text>
                <TextInput  style={[styles.input]} />
              </View>

              <View style={[styles.itemContainers, {flexDirection: 'column',} ]}>
                <Text style={[commonText,  styles.formText]}>Description:</Text>
                <TextInput  style={[styles.input]} />
              </View>

              <View style={[styles.itemContainers,  {flexDirection: 'column',}]}>
                <Text style={[commonText,  styles.formText]}>Catergory:</Text>
                <TextInput  style={[styles.input]} />
              </View>

              {/*REMINDER*/}
              <View style={[styles.itemContainers, {paddingBottom: 10, paddingTop: 10}]}>
                <Text style={[commonText,  styles.formText, ]}>Reminder:</Text>
                <AntDesign name="plus" size={25} color="#ffd60a" />
              </View>

              <View style={[styles.itemContainers,]}>
                <Text style={[commonText,  styles.formText, {alignSelf: 'center'}]}>Completion Per Day:</Text>
                <View style={{
                  width: '30%',
                  alignItems: 'flex-end',
                  backgroundColor: '#003566', 
                  textAlign: 'right',
                  borderRadius: 5,
                  padding: 10,
                  }}>
                  <Text style={[commonText, styles.formText,]}>1/Day</Text>
                </View>
                <View style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderRadius: 10,
                  backgroundColor: '#003566', 
                  padding: 10,
                  gap: 10,
                  }}>
                  <TouchableOpacity>
                    <AntDesign name="minus" size={24} color="white" />
                  </TouchableOpacity>

                  <View style={{
                    backgroundColor: 'white', 
                    width: 1, height: "100%", 
                    opacity: 0.5}} ></View>

                  <TouchableOpacity>
                    <AntDesign name="plus" size={24} color="white" />
                  </TouchableOpacity>
                </View>
              

              </View>

              <View style={{gap: 10}}>
                <Text style={[commonText,  styles.formText]}>Icons:</Text>
                <View style={[styles.itemContainers, {justifyContent: 'space-evenly'}]}>
                  
                  <IconItem icon={<Entypo name="game-controller" size={24} color="white" />} color="#462BEA" />
                  <IconItem icon={<AntDesign name="book" size={24} color="white" />} color="#A027D9" />
                  <IconItem icon={<Feather name="headphones" size={24} color="white" />} color="#CC2525" />
                  <IconItem icon={<Entypo name="code" size={24} color="white" />} color="#209EC6" />
                  <IconItem icon={<FontAwesome5 name="running" size={24} color="white" />} color="#EF7E15" />
                  <IconItem icon={<FontAwesome5 name="lightbulb" size={24} color="white" />} color="#CED206" />
                  
                </View>
              </View>

              <View style={[styles.itemContainers, {justifyContent: 'flex-end', 
    paddingTop: 30,}]}>
                <TouchableOpacity style={[styles.saveBtn]}>
                  <AntDesign name="checkcircle" size={24} color="white" />
                  <Text style={[commonText,  styles.formText,]} >Save</Text>
                </TouchableOpacity>
              </View>

            </View>
        </View>
      </Modal>
    </>
  );
}


const styles = StyleSheet.create({
  flex:{
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
  },
  container:{
    backgroundColor: '#001D3D',
    paddingTop: 12,
		borderTopRightRadius: 20,
		borderTopLeftRadius: 20,
		paddingBottom: 30,
    justifyContent: 'center',
    alignItems:'center',
    padding: 20,
  },
  form:{
    width: '100%'
  },
  formText:{
    fontSize: 16,
  },  
  itemContainers:{
    width: "100%",
    textAlign: 'left',
    justifyContent: 'space-between',
    flexDirection: 'row',
    gap: 5,
  }, 
  input:{
    height: 50,
    borderRadius: 5,
    backgroundColor: '#003566',    
  },
  iconItem:{
    borderRadius: 5,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveBtn:{
    borderRadius: 7,
    flexDirection: 'row',
    gap: 5, 
    backgroundColor:'#39D353',
    padding: 10,
  },
})