import styles from "./ContentTitle.module.css";
const ContentTitle = (props) => {
	return(
		<h1 className={styles.title}>{props.children}</h1>
	)
}
export default ContentTitle;