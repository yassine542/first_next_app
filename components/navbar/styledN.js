import styled from 'styled-components';

export const Container = styled.div `
	max-width: 1320px;
	margin : auto;
	padding : 0 30px;
`
export const Div1 = styled.div `
	height : 80px;
	display : flex;
	justify-content : space-around;
	color : white;
	align-items : center;
`

export const Logo = styled.h2 `
	color: black;
	font-size: 25px;
	width : 80%;
	color : rgb(36, 62, 99);
`
export const List = styled.ul `
	display: flex;
	height: 70px;
	justify-content: space-between;
	align-items: center;
	width : 20%;
`
export const ListItem = styled.li `
	list-style-type: none;
	transition : 0.2s;
	position : relative;
	&:before
	{
		content : '';
		width : 0px;
		position : absolute;
		height : 3px;
		background : rgb(100, 21, 255);
		bottom : -5px;
		transition : 0.2s;
	}

	&:hover:before {
		width: 98%;
	}
	&:hover a {
		color : rgb(100, 21, 255);
	}
`
export const ListLink = styled.a `
	color: black;
	font-weight : bold;
	text-decoration: none;
	font-size: 17px;
	cursor : pointer;
	transition: 0.3s;
	color : rgb(36, 62, 99);
`

