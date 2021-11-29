import {Navbar, Container, Col, Row} from "react-bootstrap";
import RegisterBtn from "./RegisterBtn";
import styles from "./MutantNav.module.css";

const MutantNav = () => {
	return (
		<Navbar className={`${styles.navBar} accent-border-bottom`} variant="dark">
			<Container>
				<Navbar.Brand href="#home" className={styles.brandContainer}>
					<img
						alt="Mutant Cats Logo"
						src="/Logo_2A_1024x1024.png"
						width="30"
						height="30"
						className={`${styles.brandIcon} d-inline-block align-top`}
					/>
					<span style={{marginLeft: "0px"}}>Mutant Devs</span>
				</Navbar.Brand>
				<Row>
					<Col>
						<RegisterBtn origin={"navbar"}>Register</RegisterBtn>
					</Col>
				</Row>
			</Container>
		</Navbar>
	)
}

export default MutantNav;