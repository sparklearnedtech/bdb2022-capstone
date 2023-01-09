import step1 from "../assets/images/how-to-connect/metamask-1.png";
import step2 from "../assets/images/how-to-connect/metamask-2.png";
import step3 from "../assets/images/how-to-connect/metamask-3.png";
import step4 from "../assets/images/how-to-connect/metamask-4.png";

function HowToConnect() {
  return (
    <div className="help-info">
      <ol>
        <li>Login to your MetaMask wallet</li>
        <li>
          Click on the circle on the upper right and click on settings <br />
          <img src={step1} alt="Step 1" width={150} height={254} />
        </li>
        <li>
          Inside Settings, click on Advanced
          <br />
          <img src={step2} alt="Step 2" width={150} height={254} />
        </li>
        <li>
          Inside Advanced, scroll down until you see "Show test networks". Turn
          it on and close the Advanced Screen <br />
          <img src={step3} alt="Step 3" width={150} height={254} />
        </li>
        <li>
          Click on the network dropdown and select Goerli from the network
          <br />
          <img src={step4} alt="Step 4" width={150} height={254} />
        </li>
        <li>
          When you are in the Goerli network, click on Connect to start playing
        </li>
      </ol>
    </div>
  );
}

export default HowToConnect;
