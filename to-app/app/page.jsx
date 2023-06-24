import { AiOutlineLinkedin, AiOutlineInstagram } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";
import Link from "next/link";

const Home = () => {
  return (
    <div className="grid place-items-center overflow-hidden">
      <p className="text-xl text-white absolute font-bold top-14 mt-0 px-10 py-10 w-full text-center sm:text-2xl sm:top-12 md:top-11 md:text-3xl">
        Plan your trips, plan your future.
      </p>
      <Link
        href="/home"
        className=" text-center absolute top-[180px] hover:scale-110 transition-transform duration-300 text-white border-white border-2 bg-transpararent p-2 w-40 shadow-xl rounded-xl font-bold sm:text-xl sm:w-48 sm:top-[150px] sm:p-2 md:text-2xl md:w-60 md:h-20 md:top-[160px] md:p-2"
      >
        Begin your journey!
      </Link>
      <div className="absolute top-[300px] h-36 w-64 font-bold  border-white bg-transparent text-white rounded-xl  sm:w-[380px] sm:h-52 sm:top-[260px] md:w-[410px] md:h-[240px] md:top-[280px]">
        <h4 className="text-center mb-2 sm:text-xl sm:mb-1 md:mb-0 md:text-2xl">
          About me
        </h4>
        <p className="text-xs text-center p-0 sm:text-lg sm:px-2 md:text-xl md:p-1">
          My name is Matias Gigena, I am a Full-stack developer student at Soy
          Henry. I love programming and I am passionate about learning new
          things. This is my project testing the Next.js framework from React
          and Tailwind CSS.
        </p>
        <div className="absolute top-[200px] h-20 w-52 font-bold left-5  border-white bg-transparent text-white rounded-xl  sm:top-[240px] sm:h-24 sm:left-20 sm:w-68 md:h-28 md:top-[260px] md:left-[68px] md:w-[265px]">
          <h4 className="text-center text-lg sm:text-xl md:text-2xl">
            Contact
          </h4>
          <div className="flex gap-3 justify-center mt-3 mx-2 sm:gap-5 md:mt-3">
            <Link
              target="_blank"
              href="https://www.instagram.com/matiasgigena_/"
            >
              <AiOutlineInstagram className=" duration-300 hover:text-5xl flex text-4xl items-start left-0 sm:text-5xl sm:duration-300 sm:hover:text-6xl md:text-6xl md:duration-300 md:hover:text-7xl" />
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/matias-gigena-25b95026a/"
            >
              <AiOutlineLinkedin className=" duration-300 hover:text-5xl flex text-4xl items-center justify-center mx-auto sm:text-5xl sm:duration-300 sm:hover:text-6xl md:text-6xl md:duration-300 md:hover:text-7xl" />
            </Link>
            <Link target="_blank" href="https://github.com/MatiasGigena">
              <VscGithub className=" duration-300 hover:text-5xl flex items-end text-4xl sm:text-5xl sm:duration-300 sm:hover:text-6xl md:duration-300 md:hover:text-7xl md:text-6xl" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
