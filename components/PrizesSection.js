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
    },
    {
      key: 2,
      place_str: "2nd",
      num_eth: 6,
    },
    {
      key: 3,
      place_str: "3rd",
      num_eth: 4,
    },
    {
      key: 4,
      place_str: "4th",
      num_eth: 2,
    },
    {
      key: 5,
      place_str: "Largest 🐟 Burner",
      num_eth: 3,
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
                🪙 {prize.place_str} Prize: <b>{prize.num_eth} ETH</b>
              </li>
            );
          })}
        </ul>
      </ContentBody>
    </ContentSection>
  );
};

export default PrizesSection;
