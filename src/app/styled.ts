import styled from "styled-components"

export const MainContent = styled.main`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	padding: 8px;
`

export const SectionContent = styled.section`
	width: 100%;
	height: 100%;
	min-height: calc(100vh - 64px);
	display: flex;
	flex-direction: column;
	padding: 16px;
	background-color: var(--light);
	border-radius: 4px;
	border: 1px solid var(--gray);

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;

		.info-unit {
			display: flex;
			align-items: center;
			gap: 8px;
		}
		.filters {
			display: flex;
			align-items: center;
			gap: 8px;
			flex-wrap: wrap;

			button {
				display: flex;
				align-items: center;
				height: 32px;
				gap: 8px;
				color: var(--dark-gray);
				background-color: var(--light);
				border: 1px solid var(--gray);
				border-radius: 0.125rem;
				padding: 0.25rem 0.5rem;
				cursor: pointer;
				transition: all 0.5s;

				svg > path {
					transition: all 0.5s;
					color: var(--primary-light);
					fill: var(--primary-light);
				}

				&:hover,
				&:focus,
				&.active {
					background-color: var(--primary-light);
					color: var(--light);

					svg > path {
						color: var(--light);
						fill: var(--light);
					}
				}
			}
		}
	}

	.tree-content {
		display: grid;
		gap: 8px;
		grid-template-columns: 400px auto;
		width: 100%;
	}
`
