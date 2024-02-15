import { SafeAreaView, Text, StyleSheet, Button,Image , View} from 'react-native'

const logo = require('../../assets/SENAI.png')

export default function Inicio() {


    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.card}>
            <Image style={styles.logo} source={logo} />
            <Text style={styles.title}>Dados do Aluno</Text>
            <View style={styles.field}>
                <Text style={styles.label}>Nome:</Text>
                <Text style={styles.value}>João Paulo Lima de Souza</Text>
            </View>
            <View style={styles.field}>
                <Text style={styles.label}>Data :</Text>
                <Text style={styles.value}>30/01/2024</Text>
            </View>
            <View style={styles.field}>
                <Text style={styles.label}>Escola:</Text>
                <Text style={styles.value}>Escola SENAI Celso Charuri</Text>
            </View>
            <View style={styles.field}>
                <Text style={styles.label}>Curso:</Text>
                <Text style={styles.value}>Técnico em Desenvolvimento de Sistemas</Text>
            </View>
            <View style={styles.field}>
                <Text style={styles.label}>Curricular:</Text>
                <Text style={styles.value}>INDMO - Interface para Dispositivos Móveis</Text>
            </View>
        </View>
    </SafeAreaView>
       
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F2F2F2',
    },
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 30,
        shadowColor: '#000',
        shadowOffset: {
            width: 10 ,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    logo: {
        width: 220,
        height: 110,
        alignSelf: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    field: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    label: {
        flex: 6,
        fontWeight: 'bold',
        color: '#333333',
        left: -25
    },
    value: {
        flex: 20,
        color: '#555555',
        left: 10
    },
})