import { View, Text, StyleSheet } from 'react-native'
import { t } from '../../i18n'
import { StyledLink } from '../'
import { COMPANY_PATH } from '../../constants'
import { BORDERS, FONT, SIZES } from '../../styles'

interface SearchCompanyProps {
  convertedData: {
    title: string
    paragraphOne: string
    paragraphTwo: string
  }[]
  uid: string
}

export const SearchCompany = ({ convertedData, uid }: SearchCompanyProps) => {
  return (
    <StyledLink
      style={styles.container}
      path={COMPANY_PATH}>
      {convertedData.map(({ title, paragraphOne, paragraphTwo }, index) => {
        return (
          <View
            style={styles.text}
            key={title + index}>
            {title && <Text style={styles.title}>{t(title)}</Text>}
            {paragraphOne && <Text>{t(paragraphOne)}</Text>}
            {paragraphTwo && <Text>{t(paragraphTwo)}</Text>}
          </View>
        )
      })}
    </StyledLink>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: SIZES.medium,
    marginTop: SIZES.medium,
    ...BORDERS.standard,
    flexDirection: 'row',
  },
  text: {
    padding: SIZES.medium,
  },
  title: {
    fontFamily: FONT.bold,
  },
})
