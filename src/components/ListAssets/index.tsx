import DownIcon from "../Icons/Down"
import LocationIcon from "../Icons/Location"
import CubeIcon from "../Icons/Cube"
import CodepenIcon from "../Icons/Codepen"
import { ListAssetsContent } from "./styled"

export default function ListAssets() {
	return (
		<ListAssetsContent>
			<li>
				<button>
					<DownIcon />
					<LocationIcon />
					Product
				</button>
			</li>
			<li>
				<button>
					<CubeIcon />
					Product as
				</button>
			</li>
			<li>
				<button>
					<CodepenIcon />
					Product as
				</button>
			</li>
		</ListAssetsContent>
	)
}
