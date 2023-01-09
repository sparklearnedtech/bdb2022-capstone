import step1 from "../assets/images/how-to-connect/import-tokens-1.png";
import step2 from "../assets/images/how-to-connect/import-tokens-2.png";
import step3 from "../assets/images/how-to-connect/import-tokens-3.png";
import step4 from "../assets/images/how-to-connect/import-tokens-4.png";

function LearnAndEarn() {
  return (
    <div className="help-info">
      <p>
        The objective of this game is to learn more about the Bible and a little
        bit about the blockchain.
      </p>
      <p>
        By playing this game, you will be able to <em>"earn"</em> <em>BIBLE</em>
        &nbsp;tokens and NFT badges if you connect your MetaMask wallet. You
        will also need some Goerli ETH in order to claim these tokens. You can
        get some ETH from this&nbsp;
        <a href="https://goerlifaucet.com/" target="_blank" rel="noreferrer">
          faucet
        </a>
        . These tokens are available only on the Goerli testnet and have no
        monetary value.
      </p>
      <p>
        You can think of these tokens as your&nbsp;
        <em>
          <strong>Proof of Knowledge</strong>
        </em>
        . The more tokens you have accumulated means that your knowedge about
        biblical stuff has also increased.
      </p>

      <hr />
      <h6>How to import BIBLE token to Metamask</h6>
      <hr />

      <ol>
        <li>
          Click on import tokens
          <br />
          <img src={step1} alt="Step 1" width={150} height={254} />
        </li>
        <li>
          On the token contract address field, copy and paste the contract
          address of the BIBLE token{" "}
          <em>0x49F42fEe015AD60F033c762bb8b9DACCA11870c0</em>. The rest of the
          fields should auto-populate
          <br />
          <img src={step2} alt="Step 2" width={150} height={254} />
        </li>
        <li>
          You should see the BIBLE token and its available balance. Click on
          import tokens.
          <br />
          <img src={step3} alt="Step 3" width={150} height={254} />
        </li>
        <li>
          The BIBLE token is now imported
          <br />
          <img src={step4} alt="Step 4" width={150} height={254} />
        </li>
      </ol>
    </div>
  );
}

export default LearnAndEarn;
