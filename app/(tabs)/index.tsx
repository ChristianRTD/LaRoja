import React from 'react';
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function HomeScreen() {
  // Función para manejar el evento interactivo del botón
  const handleButtonPress = () => {
    Alert.alert(
      '¡Somo la Tri! 🇪🇨',
      '¡Ecuador clasificado y listo para darlo todo en la cancha!',
      [{ text: '¡Aceptar!', onPress: () => console.log('Alerta cerrada') }]
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* 1. Encabezado o título con el nombre del equipo */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Selección Ecuatoriana de Fútbol</Text>
        <Text style={styles.headerSubtitle}>La Tri</Text>
      </View>

      {/* 2. Imagen del escudo o logo de la Selección */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/images/tri.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* 3. Datos básicos del equipo */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>📌 Datos Principales</Text>
        
        <View style={styles.infoRow}>
          <Text style={styles.label}>• Confederación:</Text>
          <Text style={styles.value}>CONMEBOL</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>• Entrenador actual:</Text>
          <Text style={styles.value}>Sebastián Beccacece</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>• Estadio local:</Text>
          <Text style={styles.value}>Estadio Rodrigo Paz Delgado (Quito)</Text>
        </View>
      </View>

      {/* 4. Botón / Elemento interactivo */}
      <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
        <Text style={styles.buttonText}> Ver Mensaje de Apoyo </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#aeb0b1',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 30,
    alignItems: 'center',
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 15,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#002B49', // Azul marino
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#D21034', // Rojo
    marginTop: 4,
  },
  logoContainer: {
    marginVertical: 15,
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 100,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
  },
  logo: {
    width: 140,
    height: 140,
  },
  card: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    borderRadius: 15,
    padding: 20,
    marginVertical: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#002B49',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    paddingBottom: 8,
  },
  infoRow: {
    marginBottom: 10,
  },
  label: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333333',
  },
  value: {
    fontSize: 15,
    color: '#555555',
    marginLeft: 12,
    marginTop: 2,
  },
  button: {
    backgroundColor: '#003DA5', // Azul de La Tri
    width: '100%',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
    elevation: 2,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});