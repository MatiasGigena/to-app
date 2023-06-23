import Link from "next/link";
import { SiYourtraveldottv } from "react-icons/si";
const NavBar = () => {
  return (
    <div className="grid grid-cols-2 h-14 shadow-md bg-white">
      <h1 className=" ml-5 font-bold text-xl flex mx-auto  items-center">
        Travel AI <SiYourtraveldottv className="ml-2 text-xl" />
      </h1>
      <div className=" flex mt-4 ml-0 w-36 gap-2 absolute right-0  ">
        <Link href="http://localhost:3000/home">
          <button className=" text-center  w-12">Home</button>
        </Link>
        <div className="flex  w-32">
          <button className="ml-6 ">About</button>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
