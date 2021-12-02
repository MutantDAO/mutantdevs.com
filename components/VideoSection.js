import styles from "./VideoSection.module.css";
import ContentSection from "./ContentSection";
import ContentTitle from "./ContentTitle";

const VideoContent = () => {
  return (
    <div style={{ background: "black" }}>
      <video
        className={styles.video}
        src={"fish_hackathon_details_v5.mp4"}
        controls={true}
        loop={true}
        poster={"/Logo_2A_1024x1024.png"}
      />
    </div>
  );
};

export default VideoContent;
