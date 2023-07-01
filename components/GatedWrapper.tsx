import { COLORS, FONTSIZES, SIZES } from '../styles'
import { SafeAreaViewWrapper } from './SafeAreaViewWrapper'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

interface GatedWrapperProps {
  onPress: () => void
  buttonText: string
  header: string
  children?: React.ReactNode
}

export const GatedWrapper = ({
  header,
  onPress,
  buttonText,
  children,
}: GatedWrapperProps) => {
  return (
    <SafeAreaViewWrapper header={header}>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
      {children}
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
    padding: SIZES.small,
    marginBottom: SIZES.small,
    width: 145,
    borderWidth: 1,
    borderColor: COLORS.gray2,
    borderStyle: 'solid',
  },

  buttonText: {
    textAlign: 'center',
  },
})
