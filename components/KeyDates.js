import ContentTitle from "./ContentTitle";
import ContentBody from "./ContentBody";
import ContentSection from "./ContentSection";
import styles from "./KeyDates.module.css";

const GuidelinesSection = () => {
  const dates = [
    { date: "Nov 29", desc: "Registrations open" },
    { date: "Dec 10", desc: "Registrations close & Hacking begins!" },
    { date: "Dec 17", desc: "Submissions close" },
    { date: "Dec 20", desc: "Projects are deployed to Mainnet" },
    { date: "Dec 27", desc: "DAO Votes!" },
    { date: "Feb 01", desc: "Burner bonus determined." },
  ];
  return (
    <ContentSection>
      <ContentTitle>Timeline</ContentTitle>
      <ContentBody>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.heading}>Date</th>
              <th className={styles.heading}>Description</th>
            </tr>
          </thead>
          <tbody>
            {dates.map(({ date, desc }) => (
              <tr key={date.toString()}>
                <td className={styles.date}>{date}</td>
                <td className={styles.desc}>{desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </ContentBody>
    </ContentSection>
  );
};

export default GuidelinesSection;
