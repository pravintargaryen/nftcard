import coverImage from "./assets/image-equilibrium.jpg";
import avatarImage from "./assets/image-avatar.png";
import ethIcon from "./assets/icon-ethereum.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

export default function App() {
  return (
    <main className="bg-[#15273f] rounded-md text-white shadow-xl p-[20px] w-[300px] ">
      <img
        src={coverImage}
        alt="equilibrium"
        className="rounded-md cursor-pointer hover:bg-cyan-300"
      />
      <h1 className="my-[10px] text-[18px] hover:text-cyan-300 cursor-pointer ">
        Equilibrium #3429
      </h1>
      <p className="text-[#5f7695] text-[16px]">
        Our Equilibrium collection promotes balance and calm.
      </p>
      <div className="flex items-center justify-between my-[15px] text-[14px]">
        <div className="flex gap-[5px] items-center justify-center">
          <img src={ethIcon} alt="ethereum-icon" />
          <p className="text-cyan-300">0.041 ETH</p>
        </div>
        <p className="text-[#5f7695]">
          <FontAwesomeIcon icon={faClock} /> 3 Days Left
        </p>
      </div>
      <hr />
      <div className="flex justify-start items-center gap-[10px] mt-[15px] text-[14px]">
        <img
          src={avatarImage}
          alt="avatar-image"
          className="w-8 h-8 border-2 rounded-full border-white"
        />
        <p>
          <span className="text-[#5f7695]">Creation of</span>
          <span className="cursor-pointer hover:text-cyan-300 ml-[5px]">
            Jules Wyvern
          </span>
        </p>
      </div>
    </main>
  );
}
