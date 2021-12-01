import styles from "./RegisterBtn.module.css";
import amplitude from "amplitude-js";
import {  Amplitude } from "react-amplitude-hooks";

const RegisterBtn = (props) => {
	const buttonClicked = () => {
		window.open("https://docs.google.com/forms/d/e/1FAIpQLSeZYLyoBJ69kGS5BGw1_yTE26e-yTZuZNHHxhYIveSKZjyh-w/viewform")
	}
	return(
		<Amplitude
			eventProperties={{
				"view-loaded": props.origin
			}}
		>
			{({logEvent}) =>
			<div
				onClick={() => {
					logEvent('registerButtonClicked')
					buttonClicked();
				}}
				className={`${styles.splashActionBtn} ${props.origin === "navbar" ? styles.navBarRegBtn : ''}`}
			>
				{props.children}
			</div>
			}
		</Amplitude>
	)
}

export default RegisterBtn;