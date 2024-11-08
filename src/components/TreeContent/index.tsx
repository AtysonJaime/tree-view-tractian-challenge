import ListAssets from "../ListAssets"
import SearchInput from "../SearchInput"
import { Content } from "./styled"

export default function TreeContent() {
	return (
		<Content>
			<SearchInput />
			<ListAssets />
		</Content>
	)
}
