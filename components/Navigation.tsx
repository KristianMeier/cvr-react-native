import {
  FlatList,
  Text,
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native'
import { Stack, useRouter } from 'expo-router'
import { navigationData } from '../constants'
import { SIZES, COLORS, FONT, BORDERS } from '../styles'
import { NavigationContextProps, useNagigationContext } from '../context'

export const Navigation = () => {
  const { activeTab, setActiveTab } =
    useNagigationContext() as NavigationContextProps

  const router = useRouter()

  return (
    <>
      <Stack.Screen options={{ header: () => null }} />
      <View style={styles.tabsContainer}>
        <FlatList
          data={navigationData}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                // @ts-ignore
                style={styles.tab(activeTab, item.text)}
                onPress={() => {
                  setActiveTab(item.text)
                  router.push(item.path)
                }}>
                {/* @ts-ignore */}
                <Text style={styles.tabText(activeTab, item.text)}>
                  {item.text}
                </Text>
              </TouchableOpacity>
            )
          }}
          keyExtractor={(item) => item.path}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: StatusBar.currentHeight || 0,
  },
  tabsContainer: {
    marginTop: SIZES.medium,
    marginBottom: SIZES.medium,
  },
  // @ts-ignore
  tab: (activeJobType, item) => ({
    flex: 'shrink',
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.medium,
    ...BORDERS.standard,
    borderColor: activeJobType === item ? COLORS.secondary : COLORS.gray2,
  }),
  //@ts-ignore
  tabText: (activeJobType, item) => ({
    fontFamily: FONT.medium,
    color: activeJobType === item ? COLORS.secondary : COLORS.gray2,
  }),
})
