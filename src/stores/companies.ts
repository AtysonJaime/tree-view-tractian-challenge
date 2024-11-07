import { IStateCompanies, IUseCompaniesStore, TCompany } from "@/interfaces/companies.interface"
import { tractianApi } from "@/server"
import { create } from "zustand"

export const useCompaniesStore = create<IUseCompaniesStore>(() => ({
  loadingCompanies: true,
  loadingTree: true,
	state: {
		companies: [],
    selectedCompany: {} as TCompany,
		tree: "",
	},
	actions: {
		getCompanies: async () => {
			useCompaniesStore.setState({
        loadingCompanies: true,
      })
			await tractianApi
				.get("/companies")
				.then((res) => {
          if(res.data.length > 0) {
            useCompaniesStore.setState(
              {
                loadingCompanies: false,
                state: {
                  ...useCompaniesStore.getState().state,
                  companies: res.data,
                  selectedCompany: res.data[0],
                }
              }
            )
          }
          console.log(useCompaniesStore.getState())
				})
				.catch((err) => {
					console.log("Error on get companies", err)
				})
				.finally(async () => {
          console.log("finally")
          setTimeout(() => {
            useCompaniesStore.setState({
              loadingCompanies: false,
            })
          }, 1000)
				})
		},
	},
}))
