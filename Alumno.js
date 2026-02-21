import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Alumno({ nombre, matricula }) {

    const [mostrarMatricula, setMostrarMatricula] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.nombre}>{nombre}</Text>

            <TouchableOpacity
                style={styles.boton}
                onPress={() => setMostrarMatricula(!mostrarMatricula)}>
                <Text style={styles.textoBoton}>
                    {mostrarMatricula ? 'Ocultar Matrícula' : 'Ver Matrícula'}
                </Text>
            </TouchableOpacity>

            {mostrarMatricula && (
                <Text style={styles.matricula}>Matrícula: {matricula}</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#a34242ff',
        borderRadius: 10,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#194904ff',
    },
    nombre: {
        fontSize: 18,
        color: '#e9efe2c6',
        marginBottom: 10,
    },
    matricula: {
        fontSize: 16,
        color: '#e9efe2c6',
        fontFamily: 'monospace',
        marginTop: 10,
    },
    boton: {
        backgroundColor: '#194904ff',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    textoBoton: {
        color: '#e9efe2c6',
        fontWeight: 'bold',
    }
});