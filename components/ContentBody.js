import styles from "./ContentBody.module.css";

const ContentBody = (props) => {
	return (
		<div className={styles.section}>
			{props.children}
		</div>
	)
}

export default ContentBody;