import { getConvertedCompanyData } from '../utils'
import contentData from '../constants/database.json'
import { View, Text, StyleSheet } from 'react-native'
import { t } from '../i18n'
import { SafeAreaViewWrapper } from '../components/'
import { BORDERS, FONT, FONTSIZES, SIZES } from '../styles'

const Company = () => {
  const companies = contentData.companiesData
  const selectedCompany = companies[0]

  const formattedCompany = getConvertedCompanyData(selectedCompany)
  const companyName = t(selectedCompany?.companyName)

  if (!formattedCompany)
    return (
      <View>
        <Text>{t('companies.nocompanies')}</Text>
      </View>
    )

  return (
    <SafeAreaViewWrapper header={companyName}>
      {/* @ts-ignore */}
      <View style={styles.companyWrapper}>
        <View style={styles.companyContainer}>
          {formattedCompany.map(({ title, field }) => (
            <View key={t(field)}>
              <Text style={styles.title}>{t(title)} </Text>
              <Text>{t(field)} </Text>
            </View>
          ))}
        </View>
      </View>
    </SafeAreaViewWrapper>
  )
}

export default Company

export const styles = StyleSheet.create({
  companyWrapper: {
    padding: SIZES.medium,
    ...BORDERS.standard,
    width: '100%',
  },
  companyName: {
    fontFamily: FONT.bold,
    fontSize: FONTSIZES.s,
  },
  companyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: SIZES.medium,
  },
  title: {
    fontFamily: FONT.bold,
  },
})
