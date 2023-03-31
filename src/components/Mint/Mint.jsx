import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ethers } from "ethers";
import { ContractABI } from "./Contract";

function Mint({
  wallet,
  price,
  images,
  userMintedAmount,
  maxMintAmount,
  disconnect,
  connection,
  readContract,
  getTokens,
}) {
  const [amount, setAmount] = useState(0);
  const [check, setCheck] = useState(false);

  const { REACT_APP_CONTRACT_ADDRESS } = process.env;

  const notify = (message) => {
    toast.error(message, {
      toastId: "custom-id-yes",
    });
  };
  const mint = async (mintAmount) => {
    setCheck(!check);
    if (wallet === "Connect a Wallet") {
      notify("Connect a Wallet First!");
      return;
    } else {
      await readContract();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        REACT_APP_CONTRACT_ADDRESS,
        ContractABI,
        signer
      );
      try {
        const response = await contract.mint(mintAmount, {
          value: ethers.utils.parseEther((price * mintAmount).toString()),
        });
        await response.wait();
        toast.success("Transaction Successful.", {
          toastId: "custom-id-yes",
        });
        setCheck(!check);
      } catch (error) {
        setCheck(!check);
        notify(error.reason);
      }
    }
  };
  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("chainChanged", async () => {
        await disconnect();
      });
      window.ethereum.on("accountsChanged", async () => {
        await disconnect();
        await connection();
        await readContract();
        await getTokens();
      });
    }
  });
  const initialFun = async () => {
    await connection();
    await readContract();
    await getTokens();
  };
  useEffect(() => {
    initialFun();
  });

  return (
    <>
      <div className="md:py-16 py-10 text-white md:text-2xl text-lg text-center font-bold bg-blue-light pb-5 bg-opacity-80">
        <div>
          Total minted: {userMintedAmount}/{maxMintAmount}
        </div>
        <div>The Price is {price}eth ETH + Gas Fee</div>
        <div className=" py-5 flex justify-center">
          <div className="outline  md:px-20 px-10 py-5 ">
            <div className="grid md:grid-cols-2 justify-center">
              <div className="flex">
                <button
                  class="btn2 w-5  px-5 flex items-center justify-center py-2 relative border text-white border-white uppercase font-semibold tracking-wider leading-none overflow-hidden hover:text-black"
                  type="button"
                  onClick={() => {
                    setAmount(amount - 1);
                  }}
                >
                  <span class="absolute inset-0 bg-yelloww"></span>
                  <span class="absolute inset-0 flex justify-center items-center font-bold">
                    -
                  </span>
                  -
                </button>
                <p className="md:px-10 px-5 w-5 mt-1 mr-5">{amount}</p>
                <button
                  class="btn2 w-5 px-5 flex items-center justify-center relative border text-white border-white uppercase font-semibold tracking-wider leading-none overflow-hidden hover:text-black"
                  type="button"
                  onClick={() => {
                    setAmount(amount + 1);
                  }}
                >
                  <span class="absolute inset-0 bg-yelloww"></span>
                  <span class="absolute inset-0 flex justify-center items-center font-bold">
                    +
                  </span>
                  +
                </button>
              </div>
              <button
                class="btn2 md:px-5 py-0 flex items-center justify-center relative md:ml-20 md:mt-0 mt-10 text-white  uppercase font-semibold tracking-wider leading-none overflow-hidden hover:text-black"
                type="button"
                onClick={async () => {
                  await mint(amount);
                  await readContract();
                  await getTokens();
                }}
              >
                <span class="absolute inset-0 bg-yelloww"></span>
                <span class="absolute inset-0 flex justify-center items-center font-bold">
                  Mint
                </span>
                Mint
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-white justify-center px-10 py-10 grid text-center lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {images.map((image, key) => {
          return (
            <div className="p-8 border border-white/100">
              <div className="bg-white/100 flex justify-center border border-white/80 anm">
                <img src={image} alt="" className="h-auto w-auto" />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Mint;
