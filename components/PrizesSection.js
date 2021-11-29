import ContentTitle from "./ContentTitle";
import ContentBody from "./ContentBody";
import ContentSection from "./ContentSection";
import styles from "./PrizesSection.module.css";

const PrizesSection = () => {
  const prizeMap = [
    {
      key: 1,
      place_str: "1st",
      num_eth: 10,
      num_usd: 43,
    },
    {
      key: 2,
      place_str: "2nd",
      num_eth: 6,
      num_usd: 26,
    },
    {
      key: 3,
      place_str: "3rd",
      num_eth: 4,
      num_usd: 17,
    },
    {
      key: 4,
      place_str: "4th",
      num_eth: 2,
      num_usd: 8.6,
    },
    {
      key: 5,
      place_str: "🐟 Burner Bonus",
      num_eth: 3,
      num_usd: 13,
    },
  ];
  return (
    <ContentSection>
      <ContentTitle>Prizes</ContentTitle>
      <ContentBody>
        <p>
          There will be <b>25 ETH</b> in prizes up for grabs! Below is the list
          of the distribution:
        </p>
        <ul className={styles.prizeList}>
          {prizeMap.map((prize) => {
            return (
              <li key={prize.key} className={styles.prizeListItem}>
                🪙 {prize.place_str} Prize:{" "}
                <b>
                  {prize.num_eth} ETH (${prize.num_usd}k)
                </b>
              </li>
            );
          })}
        </ul>
        <p>
          The DAO will vote for the winners and the burner bonus will be awarded
          automatically to the app that burns the most fish on average from the
          widest array of wallets in the weeks after the competition.
        </p>
      </ContentBody>
    </ContentSection>
  );
};

export default PrizesSection;
