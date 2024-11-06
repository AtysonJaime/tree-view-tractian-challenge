"use client"
import { useEffect } from "react"
import { TesteContent } from "./styled"
import HeaderContent from "@/components/headerContent"
import { tractianApi } from "@/server"

export default function Home() {
	useEffect(() => {
		console.log("Page Loaded")
		tractianApi.get("/").then((res) => console.log(res.data))
	})

	return (
		<>
			<HeaderContent />
			<main>
				<TesteContent />
			</main>
		</>
	)
}
