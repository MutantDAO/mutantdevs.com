import Link from 'next/link'
import { Container } from "react-bootstrap";
import MutantNav from "../components/MutantNav";
import ContentSection from "../components/ContentSection";
import ContentTitle from "../components/ContentTitle";
import ContentBody from "../components/ContentBody";
import SplashContent from "../components/SplashContent";
import PrizesSection from "../components/PrizesSection";
import GuidelinesSection from "../components/GuidelinesSection";
import KeyDates from "../components/KeyDates";

export default function faucets() {
    let analyticsInstance;
    if (typeof document !== "undefined") {
        // Stop amplitud tracking while developin
        //analyticsInstance = amplitude.getInstance().init('ac8e022d8c510e8e1a2aef1e1fa4d34f');
        //amplitude.getInstance().logEvent('app load', {view: "home"});
    }

    return (
        <div className={"appContainer"}>
            <MutantNav analytics={analyticsInstance} />
            <Container className={"mainContainer"}>
                <ContentSection>
                    <ContentTitle>Mutantvers token faucets!</ContentTitle>
                    <p>
                        As part of the development infrastructure to support the wide community
                        of developers in the Mutantverse we make the test $FISH, Mutant Cats
                        and Mutant Gorillas faucets.
                    </p>
                    <p>
                        These faucets facilitate developers the access to
                        functionally equivalent Mutantverse tokens in testnets.
                    </p>
                    <p>We currently have 3 faucet:</p>
                    <ol>
                        <li>Ropsten test $FISH: ERC20 token functionally equivalent to $FISH</li>
                        Contract here: {" "}
                        <a href="https://ropsten.etherscan.io/address/0xbCc10bC2a24b07b598D7794FecFDb42B48a5c435"
                            target="_blank"
                        >$FISH test token</a>

                        <li>Ropsten test Mutant Cats: ERC721 token functionally equivalent to Mutant Cats NFT</li>
                        Contract here: {" "}
                        <a href="https://ropsten.etherscan.io/address/0xD29E7D689096a4bb3E6bb549EFb7d23645905C6A"
                            target="_blank"
                        >Mutant cats test NFT</a>

                        <li>Ropsten test Mutant Gorillas: ERC721 token, functionally equivalent to Mutant Gorillas NFT</li>
                        Contract here: {" "}
                        <a href="https://ropsten.etherscan.io/token/0x5bca1f0d787db9a29d907d4b37ed1b15c1af00b3"
                            target="_blank"
                        >Mutant gorillas test NFT</a>
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

    )
}
