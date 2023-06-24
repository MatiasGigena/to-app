const About = () => {
  return (
    <div className="absolute w-full h-[90vh] bottom-5  grid place-content-center place-items-center sm:bottom-3  md:bottom-3 ">
      <div className="text-center w-56 sm:w-60 md:w-96 ">
        <h1 className="text-white text-2xl mb-2 font-bold sm:text-3xl sm: md:text-4xl">
          About us
        </h1>
        <article className="text-white text-lg font-extralight sm:text-xl md:text-2xl">
          TRIPTWO is a website created by Matias Gigena which only and unique
          intention is to search the first TWO results that pop-up on our search
          engine. This will help you plan and develop trips, or even get other
          info easier!
        </article>
      </div>
    </div>
  );
};
export default About;
