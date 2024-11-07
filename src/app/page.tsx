"use client"
import { useEffect } from "react"
import { MainContent, SectionContent } from "./styled"
import HeaderContent from "@/components/headerContent"
import { useCompaniesStore } from "@/stores/companies"
import { ThunderboltIcon } from "@/components/icons/thunderbolt"
import { ExclamationCircleIcon } from "@/components/icons/exclamationCircle"

export default function Home() {
	const useCompanies = useCompaniesStore()
	useEffect(() => {
		useCompanies.actions.getCompanies()
	}, [])

	return (
		<>
			<HeaderContent />
			<MainContent>
				<SectionContent>
					<div className="header">
						<div className="info-unit">
							<h5>Ativos</h5>
							{useCompanies.loadingCompanies ? (
								<small
									className="skeleton"
									style={{
										width: "100px",
										height: "20px",
										backgroundColor: "var(gray)",
									}}
								></small>
							) : (
								<small>/{useCompanies.state.selectedCompany?.name}</small>
							)}
						</div>
						<div className="filters">
							<button>
								<ThunderboltIcon />
								<span>Sensor de Energia</span>
							</button>
							<button>
								<ExclamationCircleIcon />
								<span>Crítico</span>
							</button>
						</div>
					</div>
					<div className="tree-content"></div>
				</SectionContent>
			</MainContent>
		</>
	)
}
