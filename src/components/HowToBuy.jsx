import React from "react";

export default function HowToBuy() {
  return (
    <div className="container py-5">
      <div className="col-8 mx-auto my-3">
        <h3 className="my-4 text-center text-white">HOW TO BUY</h3>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button btn-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                1.Create a Wallet:
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                On Google Chrome, visit metamask.io to download the extension
                and set up a wallet. Android and iOS users can download the
                Trust Wallet app on your phone.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                2.Send $BNB to your BSC wallet:
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Buy $BNB from Binance Exchange and transfer to your BSC wallet
                address.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                3.Swap $BNB for $PANDA :
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Go to the DApps tab at the bottom, find PancakeSwap V2, click
                “Select a Currency”, enter the contract address in the search
                bar, and you should be able to find PANDA.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                4. PANDA contract address:
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <code>0x3C82a76556282FecBCdFdefBC0760Dee9D230D5a</code>
                <p>
                  Before the Swap, click the gear and set the slippage to 6-7%,
                  set the amount you want to buy and click the “Swap” button. If
                  you are operating on the PC, please enter the PancakeSwapV2
                  official website and click “Connect Wallet” at the top right
                  of the website.
                </p>
                <a href="https://pancakeswap.finance/swap?outputCurrency=0x3C82a76556282FecBCdFdefBC0760Dee9D230D5a">
                  <b>Buy on PancakeSwap</b>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
