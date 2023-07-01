import { useState } from 'react'
import contentData from '../constants/database.json'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { t } from '../i18n'
import { COLORS, FONT, FONTSIZES, SIZES } from '../styles'
import { SafeAreaViewWrapper } from '../components/SafeAreaViewWrapper'

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
                <Text
                  style={[
                    styles.buttonText,
                    { fontFamily: isActiveButton ? FONT.bold : FONT.regular },
                  ]}>
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
    justifyContent: 'space-between',
    gap: 10,
    marginBottom: SIZES.medium,
    borderBottomColor: COLORS.gray2,
    borderBottomWidth: 1,
  },

  headline: {
    fontSize: FONTSIZES.m,
    fontFamily: FONT.bold,
  },
  text: {
    fontSize: FONTSIZES.xs,
    lineHeight: 20,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: FONTSIZES.m,
  },
})
