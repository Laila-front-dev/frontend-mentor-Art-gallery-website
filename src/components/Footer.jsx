import Icons from "./Icons";

function Footer(props) {
  return (
    // mt-[3.75rem] lg:mt-[5.625rem]
    // eslint-disable-next-line react/prop-types
    <footer
      // eslint-disable-next-line react/prop-types
      className={`${props.mt} lg:${props.mtlarge} py-12 lg:py-20 ${props.bgColor} ${props.color}`}
    >
      <div className="container lg:p-0 md:mx-auto md:flex items-center justify-between">
        <img
          className="object-contain	"
          // eslint-disable-next-line react/prop-types
          src={`../assets/images/${props.logo}.svg`}
          alt="logo"
        />
        <p className="text-[1.125rem] md:w-[281px] lg:w-[430px] py-[2.375rem] md:py-0">
          The Modern Art Gallery is free to all visitors and open seven days a
          week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
        </p>
        <Icons />
      </div>
    </footer>
  );
}

export default Footer;
