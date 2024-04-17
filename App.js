import React from 'react'
import {Text, View, Image, TextInput,StyleSheet, Button, TouchableOpacity} from 'react-native'

export default function App(){
return (

<View style={{flex: 1, backgroundColor: "white"}}>
 <View style={{backgroundColor: "#209CC8", marginTop: 30}}>
 <Text style={{padding: 30, fontSize: 20, color:"white"}}> CareerPilot </Text>
</View>

<View style={styles.container}>

<Image
        style={styles.image}
        source={{ uri: 'https://careerpilot.me/img/logos/logo-blue.png' }}
      />

<View style={{flex:1}}>
<Text style={{ color:"black", fontSize: 20, textAlign: 'center', }}> Login </Text>
<TextInput style={styles.input}
placeholder="Enter your username"></TextInput>

<TextInput style={styles.input}
placeholder="Enter your password"></TextInput>
<TouchableOpacity style={styles.button}>
<Text style={{color: "white",}}> Login </Text>
</TouchableOpacity>

</View>
</View>
</View>
)
}

const styles = StyleSheet.create({

container: {
flex: 1,
justifyContent: 'center',
textAlign: 'center',
alignItems: 'center',
margin: 10,
padding: 10,
},

input:{

marginTop: 5,
padding: 10,
backgroundColor: '#eeeeee',
borderBottomWidth: 3,
borderBottomColor: '#2ABAEC',
width: 300,
marginTop: 30,

},

  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain', // Adjust the image's content mode as needed
  },

button:{
backgroundColor: '#209CC8',
marginTop: 20,
width: 60,
height: 40,
justifyContent: "center",
alignItems:"center",
}


})