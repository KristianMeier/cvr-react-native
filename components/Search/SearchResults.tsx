import { useEffect } from 'react'
import { getConvertedSearchData, getFilteredCompanies } from '../../utils'
import { CompanyData } from '../../types'
import { View, Text } from 'react-native'
import { t } from '../../i18n'
import { SearchContextProps, useSearchContext } from '../../context'
import { SearchCompany } from './SearchCompany'

interface SearchResultsProps {
  allCompanies: CompanyData[]
}

export const SearchResults = ({ allCompanies }: SearchResultsProps) => {
  const {
    searchField,
    companies,
    setCompanies,
    isCompaniesFound,
    isSearchFieldEmpty,
  } = useSearchContext() as SearchContextProps

  useEffect(() => {
    isSearchFieldEmpty
      ? setCompanies(allCompanies)
      : setCompanies(getFilteredCompanies(searchField, allCompanies))
  }, [searchField])

  if (!isCompaniesFound && !isSearchFieldEmpty)
    return <Text>{t('companiesNoCompanies')}</Text>

  if (isCompaniesFound)
    return (
      <View>
        {companies.map((company, index) => {
          const convertedData = getConvertedSearchData({ ...company })

          return (
            <SearchCompany
              key={index}
              convertedData={convertedData}
              uid={company.uid}
            />
          )
        })}
      </View>
    )

  return null
}
