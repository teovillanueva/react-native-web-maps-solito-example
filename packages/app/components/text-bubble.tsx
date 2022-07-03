import { Platform, StyleSheet, Text, View } from 'react-native'

interface TextBubbleProps {
  children: string
}

export function TextBubble(props: TextBubbleProps) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.ruby}></View>
        <Text>{props.children}</Text>
      </View>
      {Platform.select({ native: <View style={styles.mobilePadding} /> })}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 999,
    backgroundColor: 'salmon',
    position: 'relative',
    zIndex: 19,
    borderWidth: 2,
  },
  ruby: {
    position: 'absolute',
    width: 10,
    height: 10,
    backgroundColor: 'salmon',
    zIndex: 20,
    bottom: -6.5,
    alignSelf: 'center',
    borderBottomWidth: 2,
    borderRightWidth: 2,
    transform: [{ rotate: '45deg' }],
  },
  mobilePadding: {
    height: 7,
  },
})
