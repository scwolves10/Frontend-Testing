var NewComponent = React.createClass({
  render: function() {
    return (
      <div>
        <meta charSet="UTF-8" />
        <title>E2E Test Dapp</title>
        <link rel="icon" type="image/svg" href="metamask-fox.svg" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.14.1/css/mdb.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="index.css" type="text/css" />
        <main className="container-fluid">
          <header>
            <div id="logo-container">
              <h1 id="logo-text" className="text-center">
                E2E Test Dapp
              </h1>
              <img id="mm-logo" src="metamask-fox.svg" />
            </div>
          </header>
          <section>
            <h3 className="card-title">
              Status
            </h3>
            <div className="row">
              <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
                <p className="info-text alert alert-primary">
                  Network: <span id="network" />
                </p>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
                <p className="info-text alert alert-secondary">
                  ChainId: <span id="chainId" />
                </p>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
                <p className="info-text alert alert-success">
                  Accounts: <span id="accounts" />
                </p>
              </div>
            </div>
          </section>
          <section>
            <div className="row d-flex justify-content-center">
              <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">
                      Basic Actions
                    </h4>
                    <button className="btn btn-primary btn-lg btn-block mb-3" id="connectButton" disabled>
                      Connect
                    </button>
                    <button className="btn btn-primary btn-lg btn-block mb-3" id="getAccounts">
                      eth_accounts
                    </button>
                    <p className="info-text alert alert-secondary">
                      eth_accounts result: <span id="getAccountsResult" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="row d-flex justify-content-center">
              <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">
                      Permissions Actions
                    </h4>
                    <button className="btn btn-primary btn-lg btn-block mb-3" id="requestPermissions">
                      Request Permissions
                    </button>
                    <button className="btn btn-primary btn-lg btn-block mb-3" id="getPermissions">
                      Get Permissions
                    </button>
                    <p className="info-text alert alert-secondary">
                      Permissions result: <span id="permissionsResult" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="row">
              <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12 d-flex align-items-stretch">
                <div className="card full-width">
                  <div className="card-body">
                    <h4 className="card-title">
                      Contract
                    </h4>
                    <button className="btn btn-primary btn-lg btn-block mb-3" id="deployButton" disabled>
                      Deploy Contract
                    </button>
                    <button className="btn btn-primary btn-lg btn-block mb-3" id="depositButton" disabled>
                      Deposit
                    </button>
                    <button className="btn btn-primary btn-lg btn-block mb-3" id="withdrawButton" disabled>
                      Withdraw
                    </button>
                    <p className="info-text alert alert-secondary">
                      Contract Status: <span id="contractStatus">Not clicked</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12 d-flex align-items-stretch">
                <div className="card full-width">
                  <div className="card-body">
                    <h4 className="card-title">
                      Send Eth
                    </h4>
                    <button className="btn btn-primary btn-lg btn-block mb-3" id="sendButton" disabled>
                      Send
                    </button>
                    <hr />
                    <h4>
                      Sign Typed Data
                    </h4>
                    <button className="btn btn-primary btn-lg btn-block mb-3" id="signTypedData" disabled>
                      Sign
                    </button>
                    <p className="info-text alert alert-warning">
                      Sign Typed Data Result: <span id="signTypedDataResult" />
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12 d-flex align-items-stretch">
                <div className="card full-width">
                  <div className="card-body">
                    <h4 className="card-title">
                      Send Tokens
                    </h4>
                    <p className="info-text alert alert-success">
                      Token: <span id="tokenAddress" />
                    </p>
                    <button className="btn btn-primary btn-lg btn-block mb-3" id="createToken" disabled>
                      Create Token
                    </button>
                    <button className="btn btn-primary btn-lg btn-block mb-3" id="transferTokens" disabled>
                      Transfer Tokens
                    </button>
                    <button className="btn btn-primary btn-lg btn-block mb-3" id="approveTokens" disabled>
                      Approve Tokens
                    </button>
                    <button className="btn btn-primary btn-lg btn-block mb-3" id="transferTokensWithoutGas" disabled>
                      Transfer Tokens Without Gas
                    </button>
                    <button className="btn btn-primary btn-lg btn-block mb-3" id="approveTokensWithoutGas" disabled>
                      Approve Tokens Without Gas
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="row">
              <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12 d-flex align-items-stretch">
                <div className="card full-width">
                  <div className="card-body">
                    <h4 className="card-title">
                      Encrypt / Decrypt
                    </h4>
                    <button className="btn btn-primary btn-lg btn-block mb-3" id="getEncryptionKeyButton" disabled>
                      Get Encryption Key
                    </button>
                    <hr />
                    <div id="encrypt-message-form">
                      <input className="form-control" type="text" placeholder="Message to encrypt" id="encryptMessageInput" />
                      <button className="btn btn-primary btn-lg btn-block mb-3" id="encryptButton" disabled>
                        Encrypt
                      </button>
                    </div>
                    <hr />
                    <button className="btn btn-primary btn-lg btn-block mb-3" id="decryptButton" disabled>
                      Decrypt
                    </button>
                    <p className="info-text alert alert-secondary">
                      Encryption key: <span id="encryptionKeyDisplay" />
                    </p>
                    <p className="info-text text-truncate alert alert-secondary">
                      Ciphertext: <span id="ciphertextDisplay" />
                    </p>
                    <p className="info-text alert alert-secondary">
                      Cleartext: <span id="cleartextDisplay" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
});