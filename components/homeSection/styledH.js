import styled from 'styled-components';

export const ContainerH = styled.div `
	max-width: 1320px;
	margin : auto;
	padding : 40px 0;
`
export const DivH1 = styled.div `
	height : auto;
	padding : 30px 0;
	display : flex;
	justify-content : space-between;
	align-items : center;
	
`
export const DivH2 = styled.div `
	height : auto;
	width : 45%;
	padding : 20px; 
`
export const Small = styled.h3
`
	color : rgb(100, 21, 255);
	font-size : 18px;
	margin : 20px 0;
`
export const Title = styled.h1 `
	color : rgb(36, 62, 99);
	font-size : 45px;
	margin : 5px 0;
	font-weight : bold;
	text-transform : uppercase;
`
export const Desc = styled.p`
	color : rgb(102, 120, 146);
	font-size : 19px;
	margin : 10px 0;
	line-height : 1.5;
`
export const Button = styled.button
`
	width : 170px;
	height : 50px;
	margin : 10px 0;
	border-radius : 5px;
	outline : none;
	border : none;
	font-size : 15px;
	font-weight : bold;
	color : white;
	background-color : rgb(100, 21, 255);
	cursor : pointer;
	transition : 0.3s;
	&:hover {
		opacity : 0.9;
	}
`