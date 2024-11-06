import Image from "next/image"
import Logo from "@/assets/images/logo.svg"
import { GoldIcon } from "../icons/gold"
import { StyledHeaderContent } from "./styled"

export default function HeaderContent() {
	return (
		<StyledHeaderContent>
			<div className="logo">
				<Image src={Logo.src} alt="Logo Tractian" width={100} height={100} />
			</div>
			<div className="buttons">
				<button>
					<GoldIcon />
					<span>Gold</span>
				</button>
			</div>
		</StyledHeaderContent>
	)
}
