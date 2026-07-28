import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    // Redirige al Home (tabs) después de 2.5 segundos (2500 ms)
    const timer = setTimeout(() => {
      router.replace('/(tabs)');
    }, 2500);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View style={styles.container}>
      {/* Escudo desde la carpeta de assets local */}
      <Image
        source={require('../assets/images/logo_espana.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Título Principal */}
      <Text style={styles.mainTitle}>ECUADOR</Text>
      
      {/* Subtítulo estilo cursiva */}
      <Text style={styles.subtitle}>- La Tri -</Text>

      {/* Indicador de carga inferior */}
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="small" color="#002B49" />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFCC00',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  mainTitle: {
    fontSize: 36,
    fontWeight: '900',
    color: '#002B49',
    letterSpacing: 2,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 28,
    fontStyle: 'italic',
    fontWeight: '600',
    color: '#002B49',
    marginTop: -5,
    marginBottom: 40,
  },
  loadingContainer: {
    position: 'absolute',
    bottom: 60,
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 8,
    fontSize: 14,
    color: '#002B49',
    fontWeight: '500',
  },
});