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
import { SIZES, COLORS, FONT } from '../styles'
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
                style={[
                  styles.tab,
                  {
                    borderColor:
                      activeTab === item.text ? COLORS.black : COLORS.gray2,
                  },
                ]}
                onPress={() => {
                  setActiveTab(item.text)
                  router.push(item.path)
                }}>
                <Text
                  style={[
                    styles.tabText,
                    {
                      color:
                        activeTab === item.text ? COLORS.black : COLORS.gray2,
                    },
                  ]}>
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
    marginTop: StatusBar.currentHeight || 0,
  },
  tabsContainer: {
    marginTop: SIZES.medium,
    marginBottom: SIZES.medium,
  },
  tab: {
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.medium,
    borderWidth: 1,
    borderStyle: 'solid',
  },
  tabText: {
    fontFamily: FONT.medium,
  },
})
