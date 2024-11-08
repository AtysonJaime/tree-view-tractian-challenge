import styled from "styled-components"

export const SearchInputStyled = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 1px solid var(--gray);
	min-height: 45px;
	padding: 0 8px;

	input {
		width: 100%;
		height: 100%;
		border: none;
		padding: 0 8px;
		font-size: 16px;
		color: var(--dark-gray);
		font-size: 16px;
		outline: none;

		&::placeholder {
			color: var(--gray);
		}
	}
`
