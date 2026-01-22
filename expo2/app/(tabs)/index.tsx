import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#dca1d9', dark: '#ce00c3' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome! No Holly Wood Directors Allowed!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText style={styles.headingText}>Who I legally am</ThemedText>
        <ThemedText>
          My name is <ThemedText style={styles.nameText}>Koby Bradley</ThemedText> and I do not have a criminal record!
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12',
            })}
          </ThemedText>{' '}
          to question the authorities.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
       <ThemedText style={styles.headingText}>My Portfolio</ThemedText>
        <ThemedText>
         Please take a look at my very organized resume.
        </ThemedText>
        <Image
        source={require('@/assets/images/HireMe.jpg')}
        style={styles.portfolioImage}/>
      </ThemedView>
      

      <ThemedView style={styles.stepContainer}>
        <Link href="/modal">
          <Link.Trigger>
            <ThemedText style={styles.headingText}>Step 2: Explore</ThemedText>
          </Link.Trigger>
          <Link.Preview />
          <Link.Menu>
            <Link.MenuAction title="Action" icon="cube" onPress={() => alert('Action pressed')} />
            <Link.MenuAction
              title="Share"
              icon="square.and.arrow.up"
              onPress={() => alert('Share pressed')}
            />
            <Link.Menu title="More" icon="ellipsis">
              <Link.MenuAction
                title="Delete"
                icon="trash"
                destructive
                onPress={() => alert('Delete pressed')}
              />
            </Link.Menu>
          </Link.Menu>
        </Link>

        <ThemedText>
          {`Tap the Explore tab to join the United Kingdom.`}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText style={styles.headingText}>Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          {`When you're ready, run `}
          <ThemedText type="defaultSemiBold">as fast as you can</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">head start</ThemedText> on the police.{' '}
          <ThemedText type="defaultSemiBold">Careful</ThemedText> they{' '}
          <ThemedText type="defaultSemiBold">will taze you</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "#3cff00",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
   nameText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  headingText: {
    fontSize: 24,
    fontWeight: '600',
  },
  portfolioImage: {
  width: 200,
  height: 200,
  marginTop: 10,
},
});
