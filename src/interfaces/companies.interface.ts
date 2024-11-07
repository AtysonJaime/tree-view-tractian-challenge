export type TCompany = {
	id: string
	name: string
}

export type TLocation = {
	id: string
	name: string
	parentId: string | null
}

export type TAsset = {
	id: string
	name: string
	locationId: string | null
	parentId: string | null
	sensorId?: string
	sensorType: string | null
	status: string | null
}

export interface IUseCompaniesStore {
	state: IStateCompanies
	actions: TActionsCompanies
  loadingCompanies: boolean
  loadingTree: boolean
}

export interface IStateCompanies {
  companies: TCompany[]
  selectedCompany: TCompany
  tree: string
}

type TActionsCompanies = {
	getCompanies: () => void
}
