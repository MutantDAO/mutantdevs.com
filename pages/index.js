import { Container } from "react-bootstrap";
import MutantNav from "../components/MutantNav";
import ContentSection from "../components/ContentSection";
import ContentTitle from "../components/ContentTitle";
import ContentBody from "../components/ContentBody";
import SplashContent from "../components/SplashContent";
import PrizesSection from "../components/PrizesSection";
import GuidelinesSection from "../components/GuidelinesSection";
import KeyDates from "../components/KeyDates";
import amplitude from "amplitude-js";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    amplitude.getInstance().logEvent("app load", { view: "home" });
  }, []);

  return (
    <div className={"appContainer"}>
      <MutantNav analytics={window.analyticsInstance} />
      <Container className={"mainContainer"}>
        <SplashContent analytics={window.analyticsInstance} />
        <ContentSection>
          <ContentTitle>Call out for all $FiSH HacKeRz!</ContentTitle>
          <p>
            The MutantDAO has requested we setup a hackathon to expedite the
            number of innovative and creative ways we, as a community, can
            provide further $FISH and SERUM utility aside from simply speeding
            up SERUM production or curing MutantCats. This hackathon is seen as
            a means to accomplish this.
          </p>
          <p>
            Our MutantGorillas love $FISH but our DAO FISH reserves love it more
            as it means that only the tastiest $FISH stays out in the community.
          </p>
          <p>Our missions as a community is to make dapps that:</p>
          <ol>
            <li>Provide value to the Mutant Community in exchange for $FISH</li>
            <li>
              Send $FISH to our MutantDAO Wallet here:{" "}
              <a
                href="https://etherscan.io/address/0xb25a1d02b029d53212e4c356b6daad419762e606"
                target="_blank"
              >
                <code>0xb25a1d02b029d53212e4c356b6daad419762e606</code>
              </a>
            </li>
          </ol>
          <p>
            In this hackathon we are calling on the community to help make this
            happen at speed! 🚀
          </p>
        </ContentSection>

        <PrizesSection />
        <KeyDates />
        <ContentSection>
          <ContentTitle>About Us</ContentTitle>
          <ContentBody>
            <p>
              Mutant Cats released in early October 2021 was the first DAO to
              purchase and fractionalize Cool Cats, CryptoPunks and more
              valuable blue chip NFTs so they can be distributed to its members.
              The $FISH token, an ERC20 token on Ethereum, represents fractional
              shares of blue chip NFTs held in the vault but also is the primary
              token used for utility in the Mutant World. Each Mutant Cat NFT
              earns 10 $FISH per day from staking.
            </p>
            <p>
              As November 2021 began MutantGorillas were released at Auction.
              MutantGorillas can be staked to earn SERUM NFTS which can be used
              to cure MutantCats which, inturn, allows breeding of virtual
              reality VX Cats for the Metaverse. MutantGorillas play an
              important role as the first $FISH sink and $FISH utility project
              to go live. $FISH token is used by staked gorillas to speed up
              SERUM production.
            </p>
            <p>Here is where you can find out more about the MutantWorld:</p>
            <p>
              <a href="https://mutantworld.com" target="_blank">
                Website
              </a>
              {" | "}
              <a href="https://github.com/MutantDAO" target="_blank">
                Github
              </a>
              {" | "}
              <a href="https://discord.gg/mutants" target="_blank">
                Discord
              </a>
              {" | "}
              <a href="https://twitter.com/mutantcats" target="_blank">
                Twitter
              </a>
            </p>
          </ContentBody>
        </ContentSection>

        <GuidelinesSection />
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
