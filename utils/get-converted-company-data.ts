interface getConvertedCompanyDataProps {
  cvrNumber: string
  address: string
  postNoCity: string
  companyType: string
}

export const getConvertedCompanyData = ({
  cvrNumber,
  address,
  postNoCity,
  companyType,
}: getConvertedCompanyDataProps) => {
  return [
    { title: 'convertedCompanyCvr', field: cvrNumber },
    { title: 'convertedCompanyAddress', field: address },
    { title: 'convertedCompanyPostcodeCity', field: postNoCity },
    { title: 'convertedCompanyType', field: companyType },
  ]
}
