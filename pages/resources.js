import { Container } from "react-bootstrap";
import MutantNav from "../components/MutantNav";
import ContentSection from "../components/ContentSection";
import ContentTitle from "../components/ContentTitle";
import styles from "../components/KeyDates.module.css";
import { useEffect } from "react";
import amplitude from "amplitude-js";
const win = typeof window !== "undefined" ? window : null;
export default function resources() {
  useEffect(() => {
    amplitude.getInstance().logEvent("Resources page", { view: "resources" });
  }, []);

  return (
    <div className={"appContainer"}>
      <MutantNav analytics={win?.analyticsInstance} />
      <Container className={"mainContainer"}>
        <ContentSection>
          <ContentTitle>Mutantverse token faucets!</ContentTitle>
          <p>
            As part of the development infrastructure to support the wide
            community of developers in the Mutantverse we make the test $FISH,
            Mutant Cats and Mutant Gorillas faucets.
          </p>
          <p>
            These faucets facilitate developers the access to functionally
            equivalent Mutantverse tokens in testnets.
          </p>
          <p>We currently have 3 faucet:</p>
          <ol>
            <li>
              Ropsten test $FISH: ERC20 token functionally equivalent to $FISH
            </li>
            <li>
              Ropsten test Mutant Cats: ERC721 token functionally equivalent to
              Mutant Cats NFT
            </li>
            <li>
              Ropsten test Mutant Gorillas: ERC721 token, functionally
              equivalent to Mutant Gorillas NFT
            </li>
          </ol>

          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.heading}>Token</th>
                <th className={styles.heading}>Network</th>
                <th className={styles.heading}>Type</th>
                <th className={styles.heading}>Contract address link</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styles.date}>$FISH</td>
                <td className={styles.date}>Ropsten</td>
                <td className={styles.date}>ERC20</td>
                <td className={styles.date}>
                  <a
                    href="https://ropsten.etherscan.io/address/0xbCc10bC2a24b07b598D7794FecFDb42B48a5c435"
                    target="_blank"
                  >
                    $FISH test token
                  </a>
                </td>
              </tr>
              <tr>
                <td className={styles.date}>Mutant Cats</td>
                <td className={styles.date}>Ropsten</td>
                <td className={styles.date}>ERC721</td>
                <td className={styles.date}>
                  <a
                    href="https://ropsten.etherscan.io/address/0xD29E7D689096a4bb3E6bb549EFb7d23645905C6A"
                    target="_blank"
                  >
                    Mutant cats test NFT
                  </a>
                </td>
              </tr>
              <tr>
                <td className={styles.date}>Mutant Gorillas</td>
                <td className={styles.date}>Ropsten</td>
                <td className={styles.date}>ERC721</td>
                <td className={styles.date}>
                  <a
                    href="https://ropsten.etherscan.io/token/0x5bca1f0d787db9a29d907d4b37ed1b15c1af00b3"
                    target="_blank"
                  >
                    Mutant gorillas test NFT
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <br></br>
          <p>
            For a step-to-step guide on how to use the faucets you can click
            here:{" "}
            <a
              href="https://www.notion.so/Faucets-documentation-c24e8d683c334977b3b08aaba531fb0a"
              target="_blank"
            >
              {" "}
              Faucets guide
            </a>
          </p>
        </ContentSection>

        <ContentSection>
          <ContentTitle>Contracts and minting</ContentTitle>
          <p>
            To interact with any of the faucet contracts you must connect with
            the ROPSTEN test net. To do this from metamask, click on the
            metamask icon in your browser and select the "Ropsten Test Network"
            in the center top of the interface. See the image below for
            references.
          </p>
          <center>
            <img
              class="centerImage"
              alt="selecting ropsten test network"
              src="/ropstenNetwork.png"
              width="35%"
              height="35%"
            />
          </center>
          <br></br>
          <br></br>
          <h3>Minting test $FISH in Ropsten</h3>
          <ol>
            <li>
              Go to the contract on ehterscan and click on the option
              "writeContract" or simply use the link below.{" "}
            </li>
            <a
              href="https://ropsten.etherscan.io/address/0xbCc10bC2a24b07b598D7794FecFDb42B48a5c435#writeContract"
              target="_blank"
            >
              {" "}
              Minting test $FISH
            </a>
            <li>
              Once in "writeContract" enter the wallet you wish to add test
              $FISH to (rectangle "1" in the image below)
            </li>
            <li>
              Then enter the amount of $FISH you wish to add (rectangle "2" in
              the image below)
            </li>
            <li>Click on "Write".</li>
            <li>This transaction will charge ropsten test eth.</li>
            <br></br>
            <center>
              <img
                class="centerImage"
                alt="Minting test $FISH"
                src="/mintTestFish.png"
                width="100%"
                height="100%"
              />
            </center>
            <p>
              Always make sure you are on thetest net so you dont get charge
              real eth.
            </p>
          </ol>

          <br></br>
          <h3>Minting test Mutant cats in Ropsten</h3>
          <br></br>
          <ol>
            <li>
              Go to the contract on ehterscan and click on the option
              "writeContract" or simply use the link below., connect your wallet
              to the ROPSTEN test net.
            </li>
            <a
              href="https://ropsten.etherscan.io/address/0xD29E7D689096a4bb3E6bb549EFb7d23645905C6A#writeContract"
              target="_blank"
            >
              {" "}
              Minting test Mutant Cat
            </a>
            <li>
              Once in "writeContract" enter the wallet you wish to add test
              Mutant Cat to (rectangle "1" in the image below)
            </li>
            <li>Click on "Write".</li>
            <li>This transaction will charge test eth.</li>
            <center>
              <img
                class="centerImage"
                alt="Minting test Mutant Cat"
                src="/mintMC.png"
                width="100%"
                height="100%"
              />
            </center>
            <p>
              Always make sure you are on the test net so you dont get charge
              real eth.
            </p>
            <br></br>
          </ol>

          <br></br>
          <h3>Minting test Mutant gorillas in Ropsten</h3>
          <br></br>
          <ol>
            <li>
              Go to the contract on ehterscan and click on the option
              "writeContract" or simply use the link below., connect your wallet
              to the ROPSTEN test net.
            </li>
            <a
              href="https://ropsten.etherscan.io/token/0x5bca1f0d787db9a29d907d4b37ed1b15c1af00b3#writeContract"
              target="_blank"
            >
              {" "}
              Minting test Mutant Gorillas
            </a>
            <li>
              Once in "writeContract" enter the wallet you wish to add test
              Mutant Cat to (rectangle "1" in the image below)
            </li>
            <li>Click on "Write".</li>
            <li>This transaction will charge test eth.</li>
            <center>
              <img
                class="centerImage"
                alt="Minting test Mutant Gorillas"
                src="/mintMC.png"
                width="100%"
                height="100%"
              />
            </center>
            <p>
              Always make sure you are on the test net so you dont get charge
              real eth.
            </p>
            <br></br>
          </ol>
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
