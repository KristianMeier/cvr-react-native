import { SafeAreaView, StyleSheet, ScrollView, View, Text } from 'react-native'
import { Navigation } from './Navigation'
import { COLORS, FONT, FONTSIZES, SIZES } from '../theme'

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
  safeAreaContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: COLORS.white,
    padding: SIZES.medium,
  },
  header: {
    marginBottom: SIZES.medium,
    fontFamily: FONT.bold,
    fontSize: FONTSIZES.xxl,
  },
})
