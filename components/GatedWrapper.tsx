import { BORDERS, FONTSIZES, SIZES } from '../styles'
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
        // @ts-ignore
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
    fontSize: FONTSIZES.l,
    marginBottom: SIZES.large,
  },
  button: {
    ...BORDERS.standard,
    padding: SIZES.small,
    marginBottom: SIZES.small,
    width: 145,
  },
  buttonText: {
    textAlign: 'center',
  },
})
