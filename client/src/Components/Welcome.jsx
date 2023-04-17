import React, { useContext } from "react"
import "../../src/Components/css_files/welcome.css"
import { TranscationContext } from "../context/TransactionContext";


const Input = ({ placeholder, name, type, value, handleChange }) => (
    <input
        placeholder={placeholder}
        type={type}
        step="0.0001"
        value={value}
        onChange={(e) => handleChange(e, name)}
    />
);

const Welcome = () => {

    const { connectWallet, currentAccount, formData, sendTransaction, handleChange } = useContext(TranscationContext);



    const handleSubmit = (e) => {

        const { addressTo, amount, keyword, message } = formData;

        e.preventDefault();

        if (!addressTo || !amount || !keyword || !message) return;

        sendTransaction();
    }



    return (

        <div className="welcome">


            <div className="left">
                <div className="left-1">
                    <h1>
                        Send Crypto <br /> across the world
                    </h1>
                </div>
                <div className="left-2">
                    <p>
                        Explore the crypto world. Buy and sell cryptocurrencies easily on Krypto.
                    </p>
                    <br />
                    {!currentAccount && (<button type="button" onClick={connectWallet}>Connect Wallet</button>)}
                </div>
                <div className="left-3">
                    <div>Reliability</div>
                    <div>Security</div>
                    <div>Etherium</div>
                    <div>Web 3.0</div>
                    <div>Low Fees</div>
                    <div>Blockchain</div>
                </div>
            </div>


            <div className="right">
                <div className="right-1">
                    card
                </div>
                <div className="right-2">
                    <Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} />
                    <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />
                    <Input placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={handleChange} />
                    <Input placeholder="Enter Message" name="message" type="text" handleChange={handleChange} />
                    <div>Loader</div>
                    <button type="button" onClick={handleSubmit}>Send Now</button>
                </div>
            </div>

        </div>
    )
};


export default Welcome;