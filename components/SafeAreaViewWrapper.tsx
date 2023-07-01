import { SafeAreaView, StyleSheet, ScrollView, View, Text } from 'react-native'
import { Navigation } from './Navigation'
import { COLORS, FONT, SIZES } from '../styles'

interface SafeAreaViewWrapperProps {
  children: React.ReactNode
  header: string
}

export const SafeAreaViewWrapper = ({
  children,
  header,
}: SafeAreaViewWrapperProps) => {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Navigation />
          <Text style={styles.header}>{header}</Text>
          {children}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    padding: SIZES.medium,
    width: '100%',
  },
  header: {
    marginBottom: SIZES.medium,
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
  },
})
