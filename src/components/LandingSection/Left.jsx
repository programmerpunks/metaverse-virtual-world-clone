import { useNavigate } from "react-router-dom";

const Left = () => {
  const navigate = useNavigate();

  return (
    <div className="text-white px-5  justify-center xl:text-start text-center  space-y-10">
      <h1 className="md:text-6xl text-4xl font-black uppercase">
        CyberBrokers Collection
      </h1>
      <p className="md:text-2xl  text-xl xl:w-[450px] xl:px-0 px-20">
        CyberBrokers is a first-of-kind art colectibles ecosystem centered
        around 10,000 unique and fully on-chain cyberbrokers NFTs.
      </p>
      <div className="">
        <button
          className="p-1 w-80 border  border-white"
          onClick={() => {
            navigate("/mint");
          }}
        >
          <div className="hover:bg-white bg-yelloww transition ease-linear">
            <p className="uppercase font-semibold px-16 py-3 text-black">
              Mint Now
            </p>
          </div>
        </button>
        <button className="p-1 w-80 border  border-white">
          <div className="bg-white hover:bg-yelloww transition ease-linear">
            <p className="uppercase font-semibold px-16 py-3 text-black">
              Whitelist Now
            </p>
          </div>
        </button>
      </div>
      <div className="flex items-center xl:justify-start justify-center gap-5">
        <h1 className="text-6xl text-yelloww font-black">+3K</h1>
        <p className="text-lg w-[150px]">Items has been minted already.</p>
      </div>
    </div>
  );
};

export default Left;
