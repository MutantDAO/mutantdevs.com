import styles from "./SplashContent.module.css";
import RegisterBtn from "./RegisterBtn";

const SplashContent = () => {
  return (
    <div className={`${styles.splash} accent-border-bottom`}>
      <div className={`${styles.splashSection} ${styles.splashGraphic}`}>
        <div className={styles.graphicWrapper}>
          <img
            src={"/favicon.png"}
            alt={"Mutant Cats Logo"}
            height={310}
            width={310}
          />
        </div>
        <div style={{ flexShrink: 4 }}>
          <div className={styles.splashSection}>
            <i style={{ marginBottom: "1 rem", display: "block" }}>
              Mutant Cats DAO presents
            </i>
            <h1 className={`${styles.pageTitle} accent-text`}>
              Mutant World Fish Hackathon
            </h1>
            <p className={`${styles.launchDate} accent-text`}>
              Worldwide Event: November 29, 2021
            </p>
            <p>
              Join us for our inaugural <b>HACKATHON</b>!
            </p>
            {/*<p>*/}
            {/*  Contribute to the expanding Mutant Verse by hacking on our token*/}
            {/*  protocol and invest new and exciting ways to use your $FISH token*/}
            {/*  and win up to <b>25 ETH is prizes</b>!*/}
            {/*</p>*/}
            <p>
              Assemble your team. Develop your idea to increase utility and
              effectiveness of fish token. Submit your proposal to the DAO.
            </p>
            <p>
              <b>WIN UP TO 25 ETH ($100,000+) IN PRIZES FOR THE BEST IDEAS.</b>
            </p>
          </div>
          <div className={styles.splashSection}>
            <div className={styles.splashActions}>
              <RegisterBtn>Register Here</RegisterBtn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashContent;
