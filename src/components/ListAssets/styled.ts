import styled from "styled-components"

export const ListAssetsContent = styled.ul`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	gap: 8px;
	list-style: none;
	margin: 0;
	padding: 10px 4px;

	li {
		display: flex;
		align-items: center;
		gap: 8px;
		width: 100%;
		flex-direction: column;

		ul {
			border-left: 1px solid var(--gray);
			height: 100%;
			transition: all 0.5s;
			overflow: auto;
			padding: 4px;

			&.close-list {
				height: 0;
				padding: 0;
			}

			&.d-none {
				display: none;
			}
		}

		button {
			display: flex;
			align-items: center;
			gap: 8px;
			padding: 0 8px;
			background-color: transparent;
			border: none;
			cursor: pointer;
			transition: all 0.5s;
			font-size: 14px;
			color: var(--primary-dark);
			width: 100%;

			svg > path {
				transition: all 0.5s;
			}

			&:hover,
			&:focus,
			&.active {
				color: var(--light);
				background-color: var(--primary-light);

				svg > path {
					fill: var(--light);
				}
			}
		}
	}
`

export const ItemListLoading = styled.li`
	width: 100%;
	height: 24px;
	background-color: var(--gray);
`
