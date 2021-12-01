import { Navbar, Container, Col, Row, Button } from "react-bootstrap";
import RegisterBtn from "./RegisterBtn";
import styles from "./MutantNav.module.css";
import Link from 'next/link'

const MutantNav = (props) => {
  // black;
  return (
    <Navbar
      className={`${styles.navBar} accent-border-bottom`}
      style={{ background: "#0b0316" }}
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="/" className={styles.brandContainer}>
          <img
            alt="Mutant Cats Logo"
            src="/Logo_2A_1024x1024.png"
            width="30"
            height="30"
            className={`${styles.brandIcon} d-inline-block align-top`}
          />
          <span style={{ marginLeft: "0px" }}>Mutant Devs</span>
        </Navbar.Brand>
        <Col>
          <Link href="/resources" passHref>
            <Button variant="dark" className={styles.customBtn} >Resources</Button>
          </Link>
        </Col>


        <Row>
          <Col>
            <RegisterBtn analytics={props.analytics} origin={"navbar"}>Register</RegisterBtn>
          </Col>
        </Row>
      </Container >
    </Navbar >
  );
};

export default MutantNav;
