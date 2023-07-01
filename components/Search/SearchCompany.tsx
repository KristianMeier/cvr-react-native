import { View, Text, StyleSheet } from 'react-native'
import { t } from '../../i18n'
import { COMPANY_PATH } from '../../constants'
import { COLORS, FONT, SIZES } from '../../styles'
import { StyledLink } from '../StyledLink'

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
    flexDirection: 'column',
    padding: SIZES.medium,
    marginTop: SIZES.medium,
    borderWidth: 1,
    borderColor: COLORS.gray2,
    borderStyle: 'solid',
  },
  text: {
    padding: SIZES.medium,
  },
  title: {
    fontFamily: FONT.bold,
  },
})
