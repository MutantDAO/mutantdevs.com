import { Container } from "react-bootstrap";
import MutantNav from "../components/MutantNav";
import ContentSection from "../components/ContentSection";
import ContentTitle from "../components/ContentTitle";
import ContentBody from "../components/ContentBody";
import SplashContent from "../components/SplashContent";

export default function Starter_guide() {
  return (
    <div className={"appContainer"}>
      <MutantNav />
      <Container className={"mainContainer"}>
        <ContentSection>
          <h1 className="green_text"> Hackathon starter guide </h1>

          <ContentBody>
            <p>
              With this starter guide you and your team will be ready to join
              the Mutant Cats Hackathon! Our goal is to give you an idea about
              what we expect from the hackathon, what $FISH is, and what its
              current utility is.
            </p>
          </ContentBody>

          <ContentSection>
            <ContentTitle>What is $FISH?</ContentTitle>
            <ul>
              <li>
                $FISH is an ERC20 token used as the currency of the Mutantverse.
                The token represents a fraction of the value of the Mutant Cats
                DAO vault.
              </li>
              <li>
                Check out our vault:{" "}
                <a
                  href="https://opensea.io/0x65De7dA4eba5Ed248E3dc1C4d3e1E10ABe96Aadf"
                  target="_blank"
                >
                  Link
                </a>
              </li>
              <li>
                $FISH has a total supply of 930,000,000 and is distributed
                proportionally to staked Cats (Mutant & Cured) at a rate of 10
                $FISH/day.
              </li>
              <li>
                $FISH price chart:{" "}
                <a
                  href="https://www.dextools.io/app/ether/pair-explorer/0xfe4a7f5c61f0010876e7d6a7fdef0a9647a8b323"
                  target="_blank"
                >
                  Link
                </a>
              </li>
              <li>
                Buy $FISH:{" "}
                <a
                  href="https://app.sushi.com/swap?inputCurrency=ETH&outputCurrency=0x2604e9f68259e609e8744fb67cc410d50fc9aa0f"
                  target="_blank"
                >
                  Link
                </a>
              </li>
            </ul>
          </ContentSection>

          <ContentSection>
            <ContentTitle>What is $FISH's current utility?</ContentTitle>
            <p>
              $FISH currently can be fed to Mutant Gorillas to produce SERUM.
              The diagram below shows the position of $FISH within the
              Mutantverse.
            </p>
            <p>
              <ol>
                <li>$FISH is produced by Cats</li>
                <li>$FISH is consumed by Gorillas</li>
              </ol>
            </p>
            <center>
              <img
                className="centerImage"
                alt="MutantCatsEconomy"
                src="/MutantCatsEconomy.png"
                width="100%"
                height="100%"
              />
            </center>
          </ContentSection>

          <ContentTitle>
            What we are looking for: <br />
            More utility!
          </ContentTitle>
          <p>
            We want $FISH to become a highly utilized currency with as much
            functionality as possible. Today it produces SERUM, but we believe
            there should be no limit to its usage - hence the Hackathon!
          </p>
          <p>
            We want you to come up with creative ways to use $FISH in
            applications with real value for different users within or outside
            the mutantverse.
          </p>

          <p>
            Teams are welcome to come up with any kind of idea, however for the
            purpose of this hackathon we need you folks to help tokenomically
            and send $FISH out of circulation. The rules are simple and detailed
            in the diagram below. A summary would be:{" "}
          </p>
          <ol>
            <li>Your app provdes value in exchange for $FISH</li>
            <li>
              {" "}
              You keep a fee (&lt; 5% of $FISH burnt) and you send the rest to
              the DAO wallet.
            </li>
            <li>
              {" "}
              Community votes for the best projects and you get to win big!
            </li>
          </ol>
          <ContentBody>
            <center>
              <img
                className="centerImage"
                alt="hackthon nutshell"
                src="/promo_hackathon.png"
                width="100%"
                height="100%"
              />
            </center>
          </ContentBody>
        </ContentSection>

        <div className="accent-border-bottom"></div>

        <div className={"footer"}>
          <a
            href="https://github.com/MutantDAO"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/github.png" alt="Github" />
          </a>
          <a
            href="https://twitter.com/mutantcats"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://mutantworld.com/static/media/twitter.dc8823af.svg"
              alt="twitter"
            />
          </a>
          <a
            href="https://etherscan.io/address/0xaadba140ae5e4c8a9ef0cc86ea3124b446e3e46a"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://mutantworld.com/static/media/etherscan.c7335cce.svg"
              alt="Etherscan"
            />
          </a>
          <a href="https://discord.gg/mutants" target="_blank" rel="noreferrer">
            <img
              src="https://mutantworld.com/static/media/discord.83a473c3.svg"
              alt="Discord"
            />
          </a>
          <a
            href="https://fractional.art/vaults/0x2604e9f68259e609e8744fb67cc410d50fc9aa0f"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://mutantworld.com/static/media/unknow.87faf06c.svg"
              alt="twitter"
            />
          </a>
          <a
            href="https://opensea.io/collection/mutantcats"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://mutantworld.com/static/media/opensea.cf5843ee.svg"
              alt="Opensea"
            />
          </a>
        </div>
      </Container>
    </div>
  );
}
