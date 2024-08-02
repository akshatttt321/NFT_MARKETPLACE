import React, { useState } from 'react';
import { ethers } from 'ethers';
import  Web3Modal  from 'web3modal';

function Connect() {
  const [address, setAddress] = useState("Connect");

  const connectWallet = async () => {
    const web3modal = new Web3Modal();
      try {
        const connection = await web3modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const address = await signer.getAddress();

        setAddress(address);
      } catch (error) {
        console.error("Error connecting to wallet:", error);
        setAddress("Connect");
      }
    }

  return (
    <div>
      <button onClick={connectWallet}>{address}</button>
    </div>
  );
};

export default Connect;