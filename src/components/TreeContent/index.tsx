"use client"
import { useCompaniesStore } from "@/stores/companies"
import ListAssets from "../ListAssets"
import SearchInput from "../SearchInput"
import { Content } from "./styled"

export default function TreeContent() {
	const useCompanies = useCompaniesStore()
	return (
		<Content>
			<SearchInput />
			<ListAssets
				list={useCompanies.state.treeList}
				loading={useCompanies.loadingTree}
			/>
		</Content>
	)
}
