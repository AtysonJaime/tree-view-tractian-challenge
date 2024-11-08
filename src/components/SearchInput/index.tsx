"use client"
import { useState } from "react"
import { SearchInputStyled } from "./styled"
import SearchIcon from "@/components/Icons/Search"

export default function SearchInput() {
	const [search, setSearch] = useState("")
	return (
		<SearchInputStyled>
			<input
				type="text"
				value={search}
				placeholder="Buscar Ativo ou Local"
				onChange={(e) => setSearch(e.target.value)}
			/>
			<SearchIcon />
		</SearchInputStyled>
	)
}
