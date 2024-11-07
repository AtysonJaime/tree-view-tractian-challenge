import styled from "styled-components"

export const StyledHeaderContent = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 3rem;
	width: 100%;
	background-color: var(--dark);
	padding: 1rem;

	.logo {
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	.buttons {
		display: flex;
		gap: 10px;

		button {
			display: flex;
			align-items: center;
			height: 24px;
			color: var(--light);
      gap: 8px;
			background-color: var(--primary);
			border: 0;
			border-radius: 0.125rem;
			padding: 0.25rem 0.5rem;
			cursor: pointer;
			transition: all 0.5s;

			&:hover,
			&:focus,
			&.active {
				background-color: var(--primary-light);
				color: var(--light);
			}
		}
	}
`

export const ButtonLoading = styled.div`
  display: flex;
  align-items: center;
  height: 24px;
  width: 100px;
  background-color: var(--dark-gray);
`
