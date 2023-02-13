import {Div1, List, ListItem, ListLink, Logo, Container} from './styledN'
import Link from 'next/link';

const Navbar = () => {
	return ( 
		<div>
			<Container>
				<Div1>
					<Logo>
						Logo
					</Logo>
					<List>
						<ListItem>
							<ListLink>
								<Link href="/">
									Home
								</Link>
							</ListLink>
						</ListItem>
						<ListItem>
						<ListLink>
							Blog
						</ListLink>
						</ListItem>
						<ListItem>
						<ListLink>
							<Link href="/about">
								About
							</Link>
						</ListLink>
						</ListItem>
					</List>
				</Div1>
			</Container>
		</div>
	 );
}
 
export default Navbar;