import { SafeAreaViewWrapper } from './'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

interface GatedWrapperProps {
  header: string
  onPress: () => void
  buttonText: string
}

export const GatedWrapper = ({
  header,
  onPress,
  buttonText,
}: GatedWrapperProps) => {
  return (
    <SafeAreaViewWrapper>
      <Text style={styles.text}>{header}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </SafeAreaViewWrapper>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
})
