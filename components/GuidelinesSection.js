import ContentTitle from "./ContentTitle";
import ContentBody from "./ContentBody";
import ContentSection from "./ContentSection";
import styles from "./GuidelinesSection.module.css";

const GuidelinesSection = () => {
  return (
    <ContentSection>
      <ContentTitle>Guidelines</ContentTitle>
      <ContentBody>
        <ul>
          <li className={styles.guidelineItem}>
            There are no limits on team size but we would recommend working in
            smaller teams of 5 or less. Teams of 1 are totally fine.
          </li>
          <li className={styles.guidelineItem}>
            Your project must send $FISH to the MutantDAO wallet.
          </li>
          <li className={styles.guidelineItem}>
            Your project must be delivered under an open source license, this is
            vital for the security of our community and it allows others in the
            community to build on top of what you have done. Remember
            integrations with closed source documented third party APIs are
            totally acceptible eg. Opensea API. Github Oauth
          </li>
          <li className={styles.guidelineItem}>
            Your project must contribute value to the Mutant Community.
          </li>
          <li className={styles.guidelineItem}>
            Your project must be accessible by the mutant community and cannot
            be behind a paywall.... unless your paywall is in $FISH! ;-)
          </li>
          <li className={styles.guidelineItem}>
            Financial mechanisms must be trustless, auditable and on-chain.
          </li>
          <li className={styles.guidelineItem}>
            Your project must only send $FISH to the MutantDAO wallet. You may
            collect a small fee for doing so up to 5% of the $FISH you have
            sent. This is in order to maintain your project for the long term.
          </li>
          <li className={styles.guidelineItem}>
            Teams must be registered by the registration date. Late entries will
            not be accepted.
          </li>
          <li className={styles.guidelineItem}>
            Teams can have members from outside the MutantCat community although
            you will need at least one verified member on our discord for
            communication purposes.
          </li>
          <li className={styles.guidelineItem}>
            Teams are welcome to share, gain advice or support from organizers,
            volunteers, sponsors, and others.
          </li>
          <li className={styles.guidelineItem}>
            Teams are welcome to use an idea they have had prior to the event
            although they must be prepared to submit their project under the
            submission guidelines.
          </li>
          <li className={styles.guidelineItem}>
            Teams can be disqualified from the competition at the organizers'
            discretion. Reasons might include but are not limited to breaking
            competition rules, poor conduct or other bad behaviour. This is an
            open supportive group. Sportsmanship, dignity and suportiveness are
            all important. We are here primarily to make the mutant community
            thrive. We are all on the one team.
          </li>
          <li className={styles.guidelineItem}>
            Projects found to have any malicious code will be immediately
            disqualified.
          </li>
          <li className={styles.guidelineItem}>
            Minor unintentional security issues will be dealt with on a case by
            case basis.
          </li>
          <li className={styles.guidelineItem}>
            Projects that are submitted to the DAO will form part of the DAO’s
            code base and be available under an MIT license. This grants the DAO
            unlimited use of the code and/or services made available and allows
            modifications as decided by the DAO.
          </li>
          <li className={styles.guidelineItem}>
            To qualify for the $FISH burner bonus your app must recieve $FISH
            from a wide number of wallets. Having your app only receive $FISH
            from a handful of wallets will disqualify you from the burner bonus.
          </li>
          <li>
            You have done well reading all of this click several times on the
            background of this page.
          </li>
          <li className={styles.guidelineItem}>
            Contracts should follow solidity best practices.{" "}
            <a
              href={
                "https://consensys.github.io/smart-contract-best-practices/software_engineering"
              }
              target={"_blank"}
            >
              reference
            </a>
          </li>
        </ul>
      </ContentBody>
    </ContentSection>
  );
};

export default GuidelinesSection;
