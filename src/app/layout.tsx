import "@/assets/css/globals.css"
import HeaderContent from "@/components/headerContent"

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt-br">
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<title>Tree View Tractian Challenge</title>
			</head>
			<body>
				<HeaderContent />
				<main>{children}</main>
			</body>
		</html>
	)
}
