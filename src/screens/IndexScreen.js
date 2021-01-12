import React,{useContext,useEffect} from 'react';
import {Text,StyleSheet, View, FlatList,Button,TouchableOpacity} from 'react-native';
import {Context} from '../context/BlogContext';
import {Feather} from '@expo/vector-icons';

const IndexScreen = ({navigation}) => {
    const {state,deleteBlogPost,getBlogPosts}=useContext(Context);

    useEffect(()=>{
        getBlogPosts();
        const listener=navigation.addListener('didFocus',()=>{
            getBlogPosts();
        });
        return () =>{
            listener.remove();
        }
    },[])

    return(
        <View>
        <FlatList
            data={state}
            keyExtractor={(blogpost) =>blogpost.title}
            renderItem={({item})=>{
        return (
            <TouchableOpacity onPress = {()=>navigation.navigate('show',{id:item.id})}>
            <View style={styles.tras}>
            <Text style={styles.title}>{item.title}- {item.id}</Text>
            <TouchableOpacity onPress = {()=>deleteBlogPost(item.id)}>
            <Feather name="trash" style={styles.icon}/>
            </TouchableOpacity>
            </View>
            </TouchableOpacity>
        )}}
        /> 
    </View>
    )
}

IndexScreen.navigationOptions = ({navigation}) => {
    return {
    headerRight: () => (
        <TouchableOpacity onPress={()=>navigation.navigate('create')}>
        <Feather name="plus" size={30}/>
        </TouchableOpacity>
    )
    
};
};

const styles=StyleSheet.create({
    tras:{
        flexDirection:'row',
        justifyContent:"space-between",
        paddingVertical:10,
        paddingHorizontal:10,
        borderColor:'gray',
        borderBottomWidth:2
        },

    title:{
        fontSize:20
    },
    icon:{
        fontSize:30
    }
});

export default IndexScreen;