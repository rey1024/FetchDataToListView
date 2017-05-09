import React from 'react';
import {
  AppRegistry,
  Text,View,Button, ListView, Image, StyleSheet
} from 'react-native';

var URL="http://10.164.29.38/appMobile/dataMhs.php";
class ListMahasiswa extends React.Component{
  constructor(props){
    super(props);
    var ds = new 
    ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state={
       dataSource: ds,
    };
  }

  AmbilDataMahasiswa() {
    fetch(URL)
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows
        (responseData),
      });
    }) .done();
  }
  render(){
    this.AmbilDataMahasiswa();
    return(

      <View style={styles.mainContainer}>
      <Text>Daftar Mahasiswa</Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
  renderRow(record){
    return(
      <View style={styles.row} >
        <Text>{record.nim} {record.nama}</Text>
      </View>
    );
  }


}

const styles =  StyleSheet.create({
  mainContainer :{
    flex:1,
    backgroundColor:'#fff'
  },
  row :{
    borderColor: '#f1f1f1',
    borderBottomWidth: 1,
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 20,
  },


})

AppRegistry.registerComponent('AppFormKu',()=>ListMahasiswa);
