import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons, FontAwesome, AntDesign, Entypo } from '@expo/vector-icons';
// import { Button } from "@rneui/themed";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>My First App mehrail</Text> */}
      <View style={styles.firstView}>
        {/* <Text>My First App mehrail</Text> */}
        {/* <Image source={{ uri: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" }} style={{ width: 100, height: 100, borderRadius: 100, marginLeft: "38%", marginTop: "25%" }} /> */}
        <Image source = {require('/media/My_Data/iti/front-end & cross platform/reactNative/firstApp/assets/profile.jpeg')} style={{ width: 130, height: 130, borderRadius: 100, marginLeft: "33%", marginTop: "15%" }}/>
        <Text style={{ textAlign: 'center', marginTop: "2%", fontSize: 30 }}>Mehrail Antonyos</Text>
      </View>

      <View style={styles.secondView}>
        <View style={{ backgroundColor: '#f2f2f2', width: '80%', height: 100, marginTop: -50, marginLeft: 30, borderRadius: 5, shadowColor: '#52006A', elevation: 20, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ color: '#00b3b3', fontSize: 15 }}>Projects</Text>
            <Text>20</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ color: '#00b3b3', fontSize: 15 }}>Followers</Text>
            <Text>200</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ color: '#00b3b3', fontSize: 15 }}>Folllowing</Text>
            <Text>400</Text>
          </View>
        </View>


        <View style={{ backgroundColor: '#f2f2f2', width: '80%', height: 100,  borderRadius: 5, justifyContent: 'flex-start',margin:50 }}>
          <View style={{flexDirection:'row', paddingBottom:20}}>
            <MaterialIcons name="email" size={24} color="#00b3b3" />
            <Text style={{marginLeft:10}}>mehrailantonyos2@gmail.com</Text>
          </View>
          <View style={{flexDirection:'row', paddingBottom:20}}>
            <FontAwesome name="phone" size={24} color="#00b3b3" />
            <Text style={{marginLeft:10}}>01200695072</Text>
          </View>
          <View style={{flexDirection:'row', paddingBottom:20}}>
            <AntDesign name="github" size={24} color="#00b3b3" />
            <Text style={{marginLeft:10}}>https://github.com/MehrailAntonyos</Text>
          </View>
          <View style={{flexDirection:'row', paddingBottom:20}}>
            <Entypo name="linkedin" size={24} color="#00b3b3" />
            <Text style={{marginLeft:10}}>https://www.linkedin.com/in/mehrail-antonyos</Text>
          </View>
          <TouchableOpacity>
            <Text style={{backgroundColor:'#00b3b3', padding:15, width:'50%', textAlign:'center', borderRadius:15, color:'white', fontSize:20, marginTop:20 ,shadowColor: '#52006A', elevation: 20, marginLeft:"20%"}}>Follow Me</Text>
          </TouchableOpacity>
        </View>
        
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#85e0e0',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  firstView: {
    flex: 2,
    backgroundColor: '#85e0e0',
  },
  secondView: {
    flex: 3,
    backgroundColor: '#f2f2f2',
  }
});
