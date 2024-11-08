"use client"
import Image from "next/image"
import Logo from "@/assets/images/logo.svg"
import { GoldIcon } from "../Icons/Gold"
import { ButtonLoading, StyledHeaderContent } from "./styled"
import { useCompaniesStore } from "@/stores/companies"

export default function HeaderContent() {
	const useCompanies = useCompaniesStore()
	return (
		<StyledHeaderContent>
			<div className="logo">
				<Image
					src={Logo.src}
					alt="Logo Tractian"
					width={100}
					height={100}
					priority
				/>
			</div>
			<div className="buttons">
				{useCompanies.loadingCompanies ? (
					<LoadingCompanies />
				) : (
					useCompanies.state.companies.map((company) => (
						<button
							key={company.id}
							className={
								company.id === useCompanies.state.selectedCompany.id
									? "active"
									: ""
							}
						>
							<GoldIcon />
							<span>{company.name} Unit</span>
						</button>
					))
				)}
			</div>
		</StyledHeaderContent>
	)
}

function LoadingCompanies() {
	return (
		<>
			<ButtonLoading className="skeleton" />
			<ButtonLoading className="skeleton" />
			<ButtonLoading className="skeleton" />
		</>
	)
}
