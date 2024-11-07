import {
	IStateCompanies,
	IUseCompaniesStore,
	TCompany,
} from "@/interfaces/companies.interface"
import { tractianApi } from "@/server"
import { create } from "zustand"

export const useCompaniesStore = create<IUseCompaniesStore>((set) => ({
	loadingCompanies: true,
	loadingTree: true,
	state: {
		companies: [],
		selectedCompany: {} as TCompany,
		tree: "",
	},
	actions: {
		getCompanies: async () => {
			set((state) => {
				return { loadingCompanies: true }
			})
			useCompaniesStore.setState({
				loadingCompanies: true,
			})
			await tractianApi
				.get("/companies")
				.then((res) => {
					if (res.data.length > 0) {
						set((state) => ({
							state: {
								...state.state,
								companies: res.data,
								selectedCompany: res.data[0],
							},
						}))
					}
				})
				.catch((err) => {
					console.log("Error on get companies", err)
				})
				.finally(async () => {
					set((state) => ({ loadingCompanies: false }))
				})
		},
	},
}))
