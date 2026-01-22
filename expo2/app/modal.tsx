import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';
import { Image } from 'expo-image';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';



export default function ModalScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">This is the UK</ThemedText>
      <Image
        source={require('@/assets/images/UKFlag.png')}
        style={styles.portfolioImage}/>
      <Link href="/" dismissTo style={styles.link}>
        <ThemedText type="link">Go to home screen</ThemedText>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  portfolioImage: {
    width: 200,
    height: 150,
    marginTop: 10,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});