import { useState } from 'react'
import contentData from '../constants/database.json'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { t } from '../i18n'
import { SafeAreaViewWrapper } from '../components'
import { COLORS, FONT, SIZES } from '../styles'

const articles = contentData.virkopediaData

const Virkopedia = () => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0)
  const { content, title } = articles[activeButtonIndex]

  return (
    <SafeAreaViewWrapper header="Virkopedia">
      <View>
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
      </View>

      <View>
        <Text style={styles.headline}>{t(title)}</Text>
        <Text style={styles.text}>{t(content)}</Text>
      </View>
    </SafeAreaViewWrapper>
  )
}

export default Virkopedia

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row',
    gap: 10,
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
