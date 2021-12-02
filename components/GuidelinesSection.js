import ContentTitle from "./ContentTitle";
import ContentBody from "./ContentBody";
import ContentSection from "./ContentSection";
import styles from "./GuidelinesSection.module.css";
import RegisterBtn from "./RegisterBtn";

const GuidelinesSection = () => {
  return (
    <ContentSection>
      <ContentTitle>Registration</ContentTitle>
      <ContentBody>
        <p>
          In order to register for the hackathon you will need the following:
        </p>
        <ul>
          <li>A fleshed out thought through idea</li>
          <li>A development team ready to execute on that idea</li>
          <li>At least one Github account</li>
          <li>At least one discord user account</li>
          <li>A one page draft white paper</li>
        </ul>
        <p>
          The white paper should include:
          <ul>
            <ol>
              <li> What your project is</li>
              <li>
                How your project will work on a technical level. Eg contract
                architecture, technical architecture.
              </li>
              <li>Your deployment architecture</li>
            </ol>
          </ul>
        </p>
        <p>
          <br />
          <RegisterBtn origin={"splash"}>
            Register Here When Ready
          </RegisterBtn>{" "}
          <br />
          <br />
        </p>
      </ContentBody>

      <ContentTitle>Submissions</ContentTitle>

      <ContentBody>
        <ul>
          <li>
            You will submit your entry via github as a monorepo containing the
            source code of your entry. This should include Frontend, Smart
            Contracts and any cloud functions your application might use.
          </li>
          <li>
            Your team must deploy and pin your frontend to any IPFS host of your
            choice. Eg.{" "}
            <a
              href="https://docs.fleek.co/hosting/site-deployment"
              target="_blank"
            >
              Fleek
            </a>
            ,{" "}
            <a href="https://docs.pinata.cloud" target="_blank">
              Pinata
            </a>
            <br />
            <i>
              NOTE: Moralis does not use IPFS to host their code so you will
              need to still use an IPFS pinning service to deploy your frontend
              if you use Moralis.
            </i>
          </li>
          <li>
            Your submission must include a link to the{" "}
            <a href="https://medium.com/pinata/how-to-easily-host-a-website-on-ipfs-9d842b5d6a01">
              IPFS CID
            </a>{" "}
            of your frontend in the README.md as well as the ropsten addresses
            of your deployed contracts.
          </li>
          <li>
            Projects must include a documented build command or script that
            builds the frontend to a folder (./out, ./build, etc...)
          </li>
          <li>
            Running <code>ipfs add -Qr --only-hash ./build</code> must yield the
            same CID as the ipfs CID provided
          </li>
        </ul>
      </ContentBody>
      <ContentTitle>Guidelines</ContentTitle>
      <ContentBody>
        <ul>
          <li>
            There are no limits on team size but we would recommend working in
            smaller teams of 5 or less. Teams of 1 are totally fine.
          </li>
          <li>Your project must send $FISH to the MutantDAO wallet.</li>
          <li>
            Your project must be delivered under an open source license, this is
            vital for the security of our community and it allows others in the
            community to build on top of what you have done. Remember
            integrations with closed source documented third party APIs are
            totally acceptible eg. Opensea API. Github Oauth
          </li>
          <li>Your project must contribute value to the Mutant Community.</li>
          <li>
            Your project must be accessible by the mutant community and cannot
            be behind a paywall.... unless your paywall is in $FISH! ;-)
          </li>
          <li>
            Financial mechanisms must be trustless, auditable and on-chain.
          </li>
          <li>
            Your project must only send $FISH to the MutantDAO wallet. You may
            collect a small fee for doing so up to 5% of the $FISH you have
            sent. This is in order to maintain your project for the long term.
          </li>
          <li>
            Teams must be registered by the registration date. Late entries will
            not be accepted.
          </li>
          <li>
            Teams can have members from outside the MutantCat community although
            you will need at least one verified member on our discord for
            communication purposes.
          </li>
          <li>
            Teams are welcome to share, gain advice or support from organizers,
            volunteers, sponsors, and others.
          </li>
          <li>
            Teams are welcome to use an idea they have had prior to the event
            although they must be prepared to submit their project under the
            submission guidelines.
          </li>
          <li>
            Teams can be disqualified from the competition at the organizers'
            discretion. Reasons might include but are not limited to breaking
            competition rules, poor conduct or other bad behaviour. This is an
            open supportive group. Sportsmanship, dignity and suportiveness are
            all important. We are here primarily to make the mutant community
            thrive. We are all on the one team.
          </li>
          <li>
            Projects found to have any malicious code will be immediately
            disqualified.
          </li>
          <li>
            Minor unintentional security issues will be dealt with on a case by
            case basis.
          </li>
          <li>
            Projects that are submitted to the DAO will form part of the DAO’s
            code base and be available under an MIT license. This grants the DAO
            unlimited use of the code and/or services made available and allows
            modifications as decided by the DAO.
          </li>
          <li>
            To qualify for the $FISH burner bonus your app must recieve $FISH
            from a wide number of wallets. Having your app only receive $FISH
            from a handful of wallets will disqualify you from the burner bonus.
          </li>

          <li>
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
          <li>
            You have done well reading all of this can't wait to see what you
            come up with click several times on the background of this page.
          </li>
        </ul>
      </ContentBody>
    </ContentSection>
  );
};

export default GuidelinesSection;
