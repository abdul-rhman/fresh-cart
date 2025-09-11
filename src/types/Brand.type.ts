export interface brandsResultType {
  results: number
  metadata: BrandsMetadata
  data: BrandType[]
}

export interface BrandsMetadata {
  currentPage: number
  numberOfPages: number
  limit: number
  nextPage: number
}

export interface BrandType {
  _id: string
  name: string
  slug: string
  image: string
  createdAt: string
  updatedAt: string
}
