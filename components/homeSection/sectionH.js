import { Title, ContainerH, DivH1, DivH2, Small, Desc, Button } from "./styledH";
import Image from "next/image";
import holiday from './image/hd-wallpaper-g1192860a0_1920.jpg'
import camera from './image/camera-gd1235b999_1920.jpg'
import Link from "next/link";


const SectionH = () => {
	return ( 
		<div>
			<ContainerH>
				<DivH1>
					<DivH2>
						<Small>
							Wander The World
						</Small>
						<Title>
							From short breaks to long adventures.
						</Title>
						<Desc>
							Travel blog featuring travel tips, guides, and photography from around the world. Whether you need guidance for your first trip, or you're a seasoned traveler looking for destination inspiration, you've come to the right place!
						</Desc>
						<Button>Read our Blog</Button>
					</DivH2>
					<DivH2>
						<Image
							src={holiday}
							alt="Picture of the author"
							width={650}
							height={400}
							style={{
								borderRadius : "10px"
							}}
						/>
					</DivH2>
				</DivH1>
				<DivH1>
					<DivH2>
						<Image
							src={camera}
							alt="Picture of the author"
							width={650}
							height={400}
							style={{
								borderRadius : "10px"
							}}
							/>
					</DivH2>
					<DivH2>
						<Small>
							About Us
						</Small>
						<Title>
							Adventurers and Storytellers
						</Title>
						<Desc>
							Through our award-winning blog, we love to provide travelers with guidance and inspiration and connect them to meaningful experiences as they travel the world with curiosity!
						</Desc>
						<Link href="/about">
							<Button>
								Learn about us
							</Button>
						</Link>
					</DivH2>
				</DivH1>
			</ContainerH>
		</div>
	 );
}
 
export default SectionH;