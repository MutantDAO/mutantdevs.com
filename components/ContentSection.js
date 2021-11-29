import styles from "./ContentSection.module.css";

const ContentSection = (props) => {
	return (
		<div className={styles.section}>
			{props.children}
		</div>
	)
}

export default ContentSection;