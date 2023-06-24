import Link from "next/link";
import { GiArchiveResearch } from "react-icons/gi";
const NavBar = () => {
  return (
    <div className="grid grid-cols-2 h-14 shadow-md bg-white">
      <Link
        href="/"
        className=" ml-5 font-bold text-xl flex mx-auto  items-center"
      >
        TRIPTWO <GiArchiveResearch className="ml-2 text-xl" />
      </Link>
      <div className=" flex mt-4 ml-0 w-36 gap-2 absolute right-0  ">
        <Link passHref href="/home">
          <button className=" text-center  w-12">Home</button>
        </Link>
        <Link passHref href="/about" className="flex  w-32">
          <button className="ml-6 ">About</button>
        </Link>
      </div>
    </div>
  );
};
export default NavBar;
