import styles from "./RegisterBtn.module.css";
import amplitude from "amplitude-js";

const RegisterBtn = (props) => {
	const buttonClicked = () => {
		amplitude.getInstance().logEvent('registerButtonClicked', {location: props.origin});
		window.open("https://docs.google.com/forms/d/e/1FAIpQLSeZYLyoBJ69kGS5BGw1_yTE26e-yTZuZNHHxhYIveSKZjyh-w/viewform")
	}
	return(
		<>
			<div onClick={buttonClicked} className={`${styles.splashActionBtn} ${props.origin === "navbar" ? styles.navBarRegBtn : ''}`}>{props.children}</div>
		</>
	)
}

export default RegisterBtn;