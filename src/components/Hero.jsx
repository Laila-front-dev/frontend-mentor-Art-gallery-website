import { Button } from "./Button";

function Hero() {
  return (
    <section className="mb-[3.656rem] lg:mb-[5.625rem] lg:bg-[linear-gradient(90deg,_#151515_50%,_#ffffff_50%)]">
      <div className="container lg:p-0 md:grid lg:grid-cols-4">
        <div className="hidden lg:block lg:w-full lg:h-full lg:pt-[190px]">
          <h1 className="text-[6rem] font-display lg:text-8lg lg:absolute w-[454px] bg-[linear-gradient(90deg,_#ffffff_60%,_#000000_40%)] text-[transparent] bg-clip-text inline-block">
            MODERN ART GALLERY
          </h1>
        </div>
        <picture className="mx-auto md:mx-0 md:w-[437px] lg:w-[540px]">
          <source
            srcSet="../assets/images/desktop/image-hero.jpg"
            media="(min-width: 1200px)"
          />
          <source
            srcSet="../assets/images/tablet/image-hero.jpg"
            media="(min-width: 768px)"
          />
          <img
            className="w-full object-contain"
            src="../assets/images/mobile/image-hero.jpg"
            alt="hero image"
          />
        </picture>
        <div className="pt-[2.188rem] lg:w-[340px] md:pt-36 md:absolute md:ml-[50%] 2xl:right-0 2xl:ml-0 2xl:relative lg:right-[8%] col-start-4">
          <h1 className="lg:hidden font-display text-[3.75rem] leading-[55px] md:text-[4.375rem] md:leading-[65px]">
            MODERN ART GALLERY
          </h1>
          <div className="lg:w-[350px] ">
            <p className="py-[2.188rem] lg:text-[1.375rem] lg:leading-8">
              The arts in the collection of the Modern Art Gallery all started
              from a spark of inspiration. Will these pieces inspire you? Visit
              us and find out.
            </p>
            <Button
              link="location"
              name="OUR LOCATION"
              bgImage="after:bg-[url('../assets/images/icon-arrow-right.svg')]"
              positionColor="before:right-[0]"
              position="after:right-[25px]"
              textPosition="text-start"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
