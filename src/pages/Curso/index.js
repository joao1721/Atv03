import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, Platform, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const curso1 = require('../../assets/curso1.jpg')
const curso2 = require('../../assets/curso2.jpg')
const curso3 = require('../../assets/curso3.png')

export default function Cursos() {

    const navigation = useNavigation();

    function ds() {
        navigation.navigate('Detalhes', { nomeCurso: 'Desenvolvimento de Sistemas', image: curso1, descricao: 'Os cursos do SENAI-SP nas áreas de Tecnologia da Informação e Informática abrangem: Técnico de Redes de Computadores, Desenvolvimento de Sistemas Informática para Internet, entre outros.' });
    }
    function mecatronica() {
        navigation.navigate('Detalhes', { nomeCurso: 'Mecatronica', image: curso2, descricao: 'O curso de Aperfeiçoamento Profissional de Acionamento Eletrônico de Máquinas Elétricas tem por objetivo realizar instalação e parametrização de inversores de frequência, conversores e Soft-Starter' })
    }
    function s5() {
        navigation.navigate('Detalhes', { nomeCurso: '5s', image: curso3, descricao: '5S tem por objetivo o desenvolvimento de competências para analisar e solucionar os problemas de processo e qualidade, aplicando a ferramenta 5S.' })
    }

    return (
        <SafeAreaView style={[styles.container, styles.androidSafeArea]}>

            <ScrollView>
                <View>
                    <View style={styles.item}>
                       
                        <Image style={{ width: '100%', height: 210, marginBottom: 30, left: 3, marginTop: 10 }} source={curso1}></Image>
                        <TouchableOpacity style={[styles.botao]} onPress={ds}>
                            <Text style={styles.buttonText}>Desenvolvimento de Sistemas</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.item}>
                      
                        <Image style={{ width: '100%', height: 210, marginBottom: 30, left: 3, marginTop: 10 }} source={curso2}></Image>
                        <TouchableOpacity style={[styles.botao]} onPress={mecatronica}>
                            <Text style={styles.buttonText}>Mecatronica</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.item}>
                        
                        <Image style={{ width: '100%', height: 210, marginBottom: 30, left: 3, marginTop: 10 }} source={curso3}></Image>
                        <TouchableOpacity style={[styles.botao]} onPress={s5}>
                            <Text style={styles.buttonText}>5s </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <StatusBar style="light" />

            </ScrollView>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    androidSafeArea: {
        paddingTop: Platform.OS === 'android' ? 35 : 0,
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    item: {
        marginBottom: 30,
    },
    botao: {
        backgroundColor: 'red',
        padding: 13,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
    },
})
