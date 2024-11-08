import {
	IStateCompanies,
	IUseCompaniesStore,
	TCompany,
	TreeList,
} from "@/interfaces/companies.interface"
import { tractianApi } from "@/server"
import { create } from "zustand"

export const useCompaniesStore = create<IUseCompaniesStore>((set) => ({
	loadingCompanies: true,
	loadingTree: true,
	state: {
		companies: [],
		selectedCompany: {} as TCompany,
		treeList: [],
		locationList: [],
		assetList: [],
	},
	actions: {
		getCompanies: async () => {
			set((state) => {
				return { loadingCompanies: true, loadingTree: true }
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
					set((state) => ({ loadingCompanies: false, loadingTree: true }))
					useCompaniesStore.getState().actions.createTree()
				})
		},
		getLocations: async () => {
			await tractianApi
				.get(
					`/companies/${
						useCompaniesStore.getState().state.selectedCompany.id
					}/locations`
				)
				.then((res) => {
					if (res.data.length > 0) {
						set((state) => ({
							state: {
								...state.state,
								locationList: res.data,
							},
						}))
					}
				})
				.catch((err) => {
					console.log("Error on get locations", err)
				})
		},
		getAssets: async () => {
			await tractianApi
				.get(
					`/companies/${
						useCompaniesStore.getState().state.selectedCompany.id
					}/assets`
				)
				.then((res) => {
					if (res.data.length > 0) {
						set((state) => ({
							state: {
								...state.state,
								assetList: res.data,
							},
						}))
					} else {
						set((state) => ({
							state: {
								...state.state,
								assetList: [],
							},
						}))
					}
				})
				.catch((err) => {
					console.log("Error on get assets", err)
				})
		},
		createTree: async () => {
			console.log(["createTree"], useCompaniesStore.getState())
			set((state) => ({ loadingTree: true }))
			await Promise.all([
				useCompaniesStore.getState().actions.getLocations(),
				useCompaniesStore.getState().actions.getAssets(),
			])
				.then(() => {
					console.log(useCompaniesStore.getState())
					const buildTree: TreeList[] = []

					// Location
					const locationWithoutChildren = useCompaniesStore
						.getState()
						.state.locationList.filter((location) => location.parentId === null)

					locationWithoutChildren.forEach((location) => {
						buildTree.push({
							id: location.id,
							name: location.name,
							type: "location",
							children: [],
						})
					})

					// SubLocation
					const locationWithChildren = useCompaniesStore
						.getState()
						.state.locationList.filter((location) => location.parentId !== null)

					locationWithChildren.forEach((location) => {
						const parent = buildTree.find(
							(node) => node.id === location.parentId
						)
						if (parent) {
							parent.children.push({
								id: location.id,
								name: location.name,
								type: "location",
								children: [],
							})
						}
					})

					// Assets without father but it is a component
					const assetsWithoutFatherButItIsAComponent = useCompaniesStore
						.getState()
						.state.assetList.filter(
							(asset) =>
								asset.parentId === null &&
								asset.locationId === null &&
								asset.sensorType !== null
						)

					assetsWithoutFatherButItIsAComponent.forEach((asset) => {
						buildTree.push({
							id: asset.id,
							name: asset.name,
							type: "component",
							children: [],
						})
					})
				})
				.catch((err) => {
					console.log("Error on create tree", err)
				})
				.finally(() => {
					set((state) => ({ loadingTree: true }))
				})
		},
	},
}))
