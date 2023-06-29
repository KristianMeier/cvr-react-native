import { Text, TouchableOpacity } from 'react-native'
import { SIZES } from '../../styles'

interface StackScreenProps {
  onPress: () => void
  buttonText: string
}

export const HeaderButton = ({ onPress, buttonText }: StackScreenProps) => {
  return (
    <TouchableOpacity
      style={{ padding: SIZES.medium }}
      onPress={onPress}>
      <Text>{buttonText} </Text>
    </TouchableOpacity>
  )
}
