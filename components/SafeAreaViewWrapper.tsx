import { SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import { Navigation } from './Navigation'

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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
