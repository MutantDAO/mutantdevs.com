import styles from "./VideoSection.module.css";
import ContentSection from "./ContentSection";
import ContentTitle from "./ContentTitle";

const VideoContent = () => {
	return (
		<ContentSection>
			<div className={styles.videoContainer}>
				<video className={styles.video} src={"fish_hackathon_details_v5.mp4"} controls={true}/>
			</div>
		</ContentSection>
		
	)
}

export default VideoContent;