import { SearchResults } from '../components/Search/SearchResults'
import contentData from '../constants/database.json'
import { ScrollView, Text, TextInput, View, StyleSheet } from 'react-native'
import { t } from '../i18n'
import { SearchContextProps, useSearchContext } from '../context'
import { SafeAreaViewWrapper } from '../components'
import { SIZES, COLORS, FONT, BORDERS } from '../styles'

const allCompanies = contentData.companiesData

const Index = () => {
  const { searchField, setSearchField } =
    useSearchContext() as SearchContextProps

  return (
    <SafeAreaViewWrapper>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text style={styles.searcTheCvr}>{t('searchTitle')} </Text>
          <TextInput
            // @ts-ignore
            style={styles.textInput}
            value={searchField}
            onChangeText={setSearchField}
            placeholder="Write Company Name, Cvr Number or Address"
          />
          <SearchResults allCompanies={allCompanies} />
        </View>
      </ScrollView>
    </SafeAreaViewWrapper>
  )
}

export default Index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searcTheCvr: {
    marginBottom: SIZES.medium,
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
  },
  textInput: {
    padding: SIZES.medium,
    flex: 1,
    ...BORDERS.standard,
  },
  searchBtnImage: {
    width: '50%',
    height: '50%',
    tintColor: COLORS.white,
  },
  searchBtn: {
    width: 50,
    height: '100%',
    backgroundColor: COLORS.gray,
    borderRadius: SIZES.medium,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: SIZES.medium,
  },
})
