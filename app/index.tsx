import { SearchResults } from '../components/Search/SearchResults'
import contentData from '../constants/database.json'
import { TextInput, StyleSheet } from 'react-native'
import { t } from '../i18n'
import { SearchContextProps, useSearchContext } from '../context'
import { SIZES, COLORS } from '../styles'
import { SafeAreaViewWrapper } from '../components/SafeAreaViewWrapper'

const allCompanies = contentData.companiesData

const Index = () => {
  const { searchField, setSearchField } =
    useSearchContext() as SearchContextProps

  return (
    <SafeAreaViewWrapper header={t('searchTitle')}>
      <TextInput
        style={styles.textInput}
        value={searchField}
        onChangeText={setSearchField}
        placeholder="Write Company Name, Cvr Number or Address"
      />
      <SearchResults allCompanies={allCompanies} />
    </SafeAreaViewWrapper>
  )
}

export default Index

const styles = StyleSheet.create({
  textInput: {
    padding: SIZES.medium,
    flex: 1,
    width: '100%',
    borderWidth: 1,
    borderColor: COLORS.gray2,
    borderStyle: 'solid',
  },
})
