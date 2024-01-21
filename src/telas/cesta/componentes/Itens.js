import React  from "react";
import { Image, ScrollView, View, StyleSheet } from "react-native";
import Texto from '../../../componentes/Texto';


export default function Itens({titulo, lista}){
    return<ScrollView>
        <Texto style={estilos.titulo}> {titulo} </Texto>
        {lista.map(( {nome,imagem} ) => {
           
           return <View key = {nome} style={estilos.itens}>
            <Texto style={estilos.nome}>{nome}</Texto>
            <Image source = {imagem} style={estilos.imagem}/>
        </View>
        })}
    </ScrollView>
}       

const estilos = StyleSheet.create({
    titulo:{
        color: "#464646",
        fontWeight: "bold",
        marginTop:32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight:32,

    },
    itens:{
        flexDirection:"row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        paddingVertical: 16,
        alignItems: "center",

    },
    imagem:{
        width:46,
        height:46,
    },
    nome:{
        fontSize:16,
        lineHeight:26,
        marginLeft:11,
        color:"#464646",

    }
})