function Collection() {
  return (
    <section className="pb-[3.75rem] lg:py-[5.625rem] container pt-[3.656rem]  md:mx-auto lg:p-0 md:grid  md:grid-cols-7 lg:gap-10 md:gap-2.5">
      <picture className=" row-start-1 col-start-4 col-end-[-1]">
        <source
          srcSet="../assets/images/desktop/image-grid-1.jpg"
          media="(min-width: 1200px)"
        />
        <source
          srcSet="../assets/images/tablet/image-grid-1.jpg"
          media="(min-width: 768px)"
        />
        <img
          className="w-full object-contain"
          src="../assets/images/mobile/image-grid-1.jpg"
          alt="hero image"
        />
      </picture>
      <div className="w-[350px] col-start-1 col-end-4 pt-[2.188rem]">
        <h2 className="font-display text-6xl leading-[60px] uppercase">
          Your Day at the Gallery
        </h2>
        <p className="py-[2.188rem] ">
          Wander through our distinct collections and find new insights about
          our artists. Dive into the details of their creative process.
        </p>
      </div>

      <picture className="col-start-1 col-end-5">
        <source
          srcSet="../assets/images/desktop/image-grid-2.jpg"
          media="(min-width: 1200px)"
        />
        <source
          srcSet="../assets/images/tablet/image-grid-2.jpg"
          media="(min-width: 768px)"
        />
        <img
          className="w-full object-contain h-fit"
          src="../assets/images/mobile/image-grid-2.jpg"
          alt="hero image"
        />
      </picture>

      <div className="mt-4 md:mt-0 grid-rows-2 col-start-5 col-end-[-1] md:row-start-2 grid md:gap-2.5 lg:gap-[10px] text-color-white">
        {/* w-max lg:w-full md:w-fit* */}
        <picture className="contents md:block">
          <source
            srcSet="../assets/images/desktop/image-grid-3.jpg"
            media="(min-width: 1200px)"
          />
          <source
            srcSet="../assets/images/tablet/image-grid-3.jpg"
            media="(min-width: 768px)"
          />
          <img
            className="w-full object-contain"
            src="../assets/images/mobile/image-grid-3.jpg"
            alt="hero image"
          />
        </picture>
        <div className=" pt-12 px-[1.625rem] bg-color-black">
          <h2 className="font-display text-6xl leading-[60px] uppercase">
            COME & BE INSPIRED
          </h2>
          <p className="py-[2.188rem]">
            We’re excited to welcome you to our gallery and see how our
            collections influence you.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Collection;
