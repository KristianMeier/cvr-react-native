import { useState } from 'react'
import contentData from '../constants/database.json'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native'
import { t } from '../i18n'
import { SafeAreaViewWrapper } from '../components'
import { COLORS, FONT, FONTSIZES, SIZES } from '../styles'

const articles = contentData.virkopediaData

const Virkopedia = () => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0)
  const { content, title } = articles[activeButtonIndex]
  const width = Dimensions.get('window').width

  return (
    <SafeAreaViewWrapper>
      {/*@ts-ignore  */}
      <View style={styles.container(width)}>
        <View style={styles.btnContainer}>
          {articles.map(({ title }, index) => {
            const isActiveButton = index === activeButtonIndex

            return (
              <TouchableOpacity
                key={t(title) + index}
                onPress={() => setActiveButtonIndex(index)}>
                {/* @ts-ignore */}
                <Text style={styles.buttonText(isActiveButton)}>
                  {t(title)}
                </Text>
              </TouchableOpacity>
            )
          })}
        </View>
        <View>
          <Text style={styles.headline}>{t(title)}</Text>
          <Text style={styles.text}>{t(content)}</Text>
        </View>
      </View>
    </SafeAreaViewWrapper>
  )
}

export default Virkopedia

const styles = StyleSheet.create({
  //@ts-ignore
  // ToDO: How do I get this to not fill the whole with on Web
  container: (width: number) => ({
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 300,
  }),
  btnContainer: {
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
    marginBottom: SIZES.medium,
    borderBottomColor: COLORS.gray2,
    borderBottomWidth: 1,
  },

  headline: {
    // ToDO: Why can't i use normalize here? It gets crazy huge, at least on web
    fontSize: 16,
    fontFamily: FONT.bold,
  },
  text: {
    fontSize: 12,
    fontFamily: FONT.regular,
    lineHeight: 20,
  },
  //@ts-ignore
  buttonText: (isActiveButton) => ({
    textAlign: 'center',
    fontSize: 16,
    fontFamily: isActiveButton ? FONT.bold : FONT.regular,
  }),
})
