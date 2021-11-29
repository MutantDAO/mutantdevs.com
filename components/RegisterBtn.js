import styles from "./RegisterBtn.module.css";

const RegisterBtn = (props) => {
	return(
		<a href={"https://docs.google.com/forms/d/e/1FAIpQLSeZYLyoBJ69kGS5BGw1_yTE26e-yTZuZNHHxhYIveSKZjyh-w/viewform"} target={"_blank"}>
			<div className={`${styles.splashActionBtn} ${props.origin === "navbar" ? styles.navBarRegBtn : ''}`}>{props.children}</div>
		</a>
	)
}

export default RegisterBtn;