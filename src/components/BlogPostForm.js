import React,{useState} from 'react';
import {StyleSheet, View, Text,Button,TextInput} from 'react-native';


const BlogPostForm = ({onSubmit,initialValues}) =>{
    const [title,setTitle]=useState(initialValues.title);
    const [content,setContent]=useState(initialValues.content);
    
    return(
        <View>
            <Text style={styles.label}>Enter Title :</Text>
            <TextInput style={styles.input} value={title} onChangeText={(text)=>setTitle(text)}/>
            <Text style={styles.label}>Enter Content :</Text>
            <TextInput style={styles.input} value={content} onChangeText={(text)=>setContent(text)}/>
            <Button 
            title="Save Blog Post"
            onPress={()=>onSubmit(title,content)}
            />
        </View>
    )
}
BlogPostForm.defaultProps={
    initialValues:{
        title:'',
        content:''
    }
}


const styles=StyleSheet.create({
    label:{
        fontSize:20,
        marginLeft:10
    },
    input:{
        marginHorizontal:10,
        marginVertical:10,
        borderColor:'black',
        borderWidth:2,
        padding:10,
        fontSize:17
    }
});

export default BlogPostForm;