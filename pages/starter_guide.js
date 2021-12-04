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
                    <h1 className="green_text" > Hackathon starter guide </h1>

                    <ContentBody>
                        <p>
                            With this starter guide you and your team will be ready to join the Mutant Cats hackaton!
                            Our goal is to give you an idea about the hackathon goal, what is $FISH and what is its current utility.
                        </p>
                    </ContentBody>

                    <ContentSection>
                        <ContentTitle>What is $FISH?</ContentTitle>
                        <p>
                            $FISH is an ERC20 token used as the currency of the Mutantverse.
                            The token represents a fraction of the value of vault of the Mutant Cats DAO if a sale occurs.
                        </p>
                        <p>
                            <li>Check our vault:{" "}
                                <a
                                    href="https://opensea.io/0x65De7dA4eba5Ed248E3dc1C4d3e1E10ABe96Aadf"
                                    target="_blank"
                                >
                                    Link
                                </a>
                            </li>
                        </p>
                        <p>
                            Its total supply is 930,000,000 $FISH and its distributed proportionally
                            to the staking of Cats (Mutant & Cured).

                            <li>Each Cat staked receives a reward of 10 $FISH/day.</li>
                            <li>
                                $FISH price chart: {" "}
                                <a
                                    href="https://www.dextools.io/app/ether/pair-explorer/0xfe4a7f5c61f0010876e7d6a7fdef0a9647a8b323"
                                    target="_blank"
                                >
                                    Link
                                </a>
                            </li>
                            <li>
                                Get $FISH: {" "}
                                <a
                                    href="https://app.sushi.com/swap?inputCurrency=ETH&outputCurrency=0x2604e9f68259e609e8744fb67cc410d50fc9aa0f"
                                    target="_blank"
                                >
                                    Link
                                </a>
                            </li>


                        </p>

                    </ContentSection>

                    <ContentSection>
                        <ContentTitle>What is $FISH current utility?</ContentTitle>
                        <p>

                            $FISH current functionality is for the production of SERUM. The diagram below shows the relevance of $FISH in the Mutantverse.
                        </p>
                        <p>
                            <ol>
                                <li>$FISH is produced by Cats</li>
                                <li>$FISH is consumed by Gorillas</li>
                            </ol>
                        </p>
                        <center><img className="centerImage" alt="MutantCatsEconomy" src="/MutantCatsEconomy.png"
                            width="100%" height="100%" />
                        </center>

                    </ContentSection>

                    <ContentTitle>What we want from you dev?... more utility</ContentTitle>
                    <p>
                        We want $FISH to become a currency with as many functionalities as possible. Today is to produce SERUM, but there is no limit to its usage... Hence our call!
                    </p>
                    <p>
                        We want you to come up with creative ways to use $FISH in applications with real value for different users within or outside the mutantverse.
                    </p>

                    <p>
                        Teams are welcome to come up with any idea, but in order to be part of this hackathon we want you guys to burn $FISH!. The rules are simple and detailed in the diagram below. A simple summary would be:{" "}
                    </p>
                    <ol>
                        <li> The users of your app pay in $FISH</li>
                        <li> You keep a fee in $FISH for your app, you send the rest to burn</li>
                        <li> Community votes for the best ideas and you get the ETH price + the $FISH fee</li>
                    </ol>
                    <ContentBody>
                        <center><img className="centerImage" alt="hackthon nutshell" src="/promo_hackathon.png"
                            width="100%" height="100%" />
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
        </div >
    );
}