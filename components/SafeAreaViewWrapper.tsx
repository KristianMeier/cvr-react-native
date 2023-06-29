import { SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import { Navigation } from './Navigation'
import { COLORS } from '../styles'

interface SafeAreaViewWrapperProps {
  children: React.ReactNode
}

export const SafeAreaViewWrapper = ({ children }: SafeAreaViewWrapperProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Navigation />
        {children}
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
  },
})
