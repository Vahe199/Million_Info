import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';


const TabIcons = (props) => {
    const {categorysIcons} = useSelector((state) => state.categorys);

    return (
        <View style={styles.container}>
            <FlatList data={categorysIcons} numColumns={4}
                      keyExtractor={(item,index) => index.toString()}
                      renderItem={({item,index}) => (
                          <TouchableOpacity  onPress={() => props.setList(item)}>
                              <View style={styles.iconBlock}>
                                  <Image source={item.img} style={{width: 40, height: 40}} />
                              </View>
                              <Text style={styles.iconText}>{item.name}</Text>
                          </TouchableOpacity>)
                      }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    iconBlock: {
        width: 67,
        height: 67,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 8,
        marginTop: 12,
        borderRightColor: 'grey',
        borderRightWidth: 0.2,
        borderBottomColor: 'grey',
        borderBottomWidth: 0.2,
    },
    img: {
        width: '80%',
        height: '80%',
    },
    iconText: {
        color: '#35005F',
        fontSize: 12,
        marginTop: 10,
        textAlign: 'center',
    },
})

export default TabIcons;
