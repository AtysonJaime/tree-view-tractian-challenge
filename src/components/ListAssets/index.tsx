import DownIcon from "../Icons/Down"
import LocationIcon from "../Icons/Location"
import CubeIcon from "../Icons/Cube"
import CodepenIcon from "../Icons/Codepen"
import { ItemListLoading, ListAssetsContent } from "./styled"
import { TreeList } from "@/interfaces/companies.interface"
import { useState } from "react"

type ListAssetsProps = {
	list: TreeList[]
	loading: boolean
	classList: string
}
export default function ListAssets({
	list,
	loading,
	classList = "",
}: ListAssetsProps) {
	return (
		<ListAssetsContent className={classList}>
			{loading ? (
				<LoadingItems />
			) : (
				list.map((item) => {
					return (
						<ItemAssetContent key={item.id} item={item} loading={loading} />
					)
				})
			)}
		</ListAssetsContent>
	)
}

type ItemAssetContentProps = {
	item: TreeList
	loading: boolean
}
function ItemAssetContent({ item, loading }: ItemAssetContentProps) {
	const openList = (e: any) => {
		e.preventDefault()
		if (item.children.length > 0) {
			const button = e.target
			const list = button.nextElementSibling
			if (list.classList.contains("d-none")) {
				list.classList.remove("d-none", "close-list")
			} else {
				list.classList.add("close-list")
				setTimeout(() => {
					list.classList.add("d-none")
				}, 500)
			}
		}
	}

	return (
		<li>
			<button type="button" onClick={openList}>
				{item.children.length > 0 && <DownIcon />}
				{item.type === "location" && <LocationIcon />}
				{item.type === "assets" && <CubeIcon />}
				{item.type === "component" && <CodepenIcon />}
				{item.name}
			</button>
			{item.children.length > 0 && (
				<ListAssets
					classList="close-list d-none"
					list={item.children}
					loading={loading}
				/>
			)}
		</li>
	)
}

function LoadingItems() {
	return (
		<>
			<ItemListLoading className="skeleton" />
			<ItemListLoading className="skeleton" />
			<ItemListLoading className="skeleton" />
			<ItemListLoading className="skeleton" />
			<ItemListLoading className="skeleton" />
			<ItemListLoading className="skeleton" />
		</>
	)
}
