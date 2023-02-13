import { ContainerA, Desc, DivA2, Quote, Title } from "./styledAbout";

const { default: Navbar } = require("@/components/navbar/navbar")

const About = () => {
	return ( 
		<>
			<Navbar />
			<ContainerA>
				<DivA2>
					<Title>
						About Us
					</Title>
					<Desc>
						We are a travel blog featuring travel tips, guides, and photography from around the world. Whether you need guidance for your first trip, or you're a seasoned traveler looking for destination inspiration, you've come to the right place!
					</Desc>
					<Quote>
						"Jobs fill your pockets, adventures fill your soul."
					</Quote>
					<Title style={{
						fontSize : "25px",
						margin : "25px 0"
					}}>
						Our Mission
					</Title>
					<Desc>
						We are a travel blog featuring travel tips, guides, and photography from around the world. Whether you need guidance for your first trip, or you're a seasoned traveler looking for destination inspiration,
					</Desc>
				</DivA2>
			</ContainerA>
		</>
	 );
}
 
export default About;