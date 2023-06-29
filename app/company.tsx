import { getConvertedCompanyData } from '../utils'
import contentData from '../constants/database.json'
import { View, Text, StyleSheet } from 'react-native'
import { t } from '../i18n'
import { SafeAreaViewWrapper } from '../components/'
import { FONT, SIZES } from '../styles'

const Company = () => {
  const companies = contentData.companiesData

  const selectedCompany = companies[0]

  const formattedCompany = getConvertedCompanyData(selectedCompany)
  const companyName = t(selectedCompany?.companyName)

  if (!formattedCompany) return <View>{t('companies.nocompanies')}</View>

  return (
    <SafeAreaViewWrapper>
      <View style={styles.companyWrapper}>
        <Text style={styles.companyName}>{companyName}</Text>
        <View style={styles.container}>
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
  backToSearch: {
    fontFamily: FONT.bold,
    fontSize: SIZES.medium,
  },
  companyName: {
    fontFamily: FONT.bold,
    fontSize: SIZES.large,
  },
  container: {
    marginTop: SIZES.medium,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    padding: SIZES.medium,
  },
  title: {
    fontFamily: FONT.bold,
  },
  companyWrapper: {
    padding: SIZES.medium,
    border: '1px solid black',
  },
})
