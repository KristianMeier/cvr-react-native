import { CompanyData } from 'types/sharedTypes'

export const getFilteredCompanies = (
  searchField: string,
  allCompanies: CompanyData[]
) => {
  const filteredCompanies = allCompanies.filter(
    (company) =>
      company.companyName.toLowerCase().includes(searchField.toLowerCase()) ||
      company.address.toLowerCase().includes(searchField.toLowerCase()) ||
      company.cvrNumber.toLowerCase().includes(searchField.toLowerCase())
  )

  return searchField ? filteredCompanies : []
}
