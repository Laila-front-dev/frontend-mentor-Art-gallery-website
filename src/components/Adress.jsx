function Adress() {
  return (
    <section className="bg-color-black py-12 md:py-[5.5rem] lg:py-24">
      <div className="container grid md:grid-cols-2">
        <div>
          <h1 className="text-color-white md:text-[3.438rem] lg:text-[4.375rem] leading-[4.375rem] font-display">
            OUR LOCATION
          </h1>
        </div>
        <div>
          <ul className="text-color-white leading-[2rem]">
            <li>
              <h2 className="text-color-brown text-4xl font-display uppercase">
                99 King Street
              </h2>
            </li>
            <li className="pt-[2.125rem]">
              <span className="text-[1.125rem]">Newport</span>
            </li>
            <li>
              <span className="text-[1.125rem]">RI 02840</span>
            </li>
            <li className="pb-[2.125rem]">
              <span className="text-[1.125rem]">United States of America</span>
            </li>
            <li>
              <p className="text-[1.125rem]">
                Our newly opened gallery is located near the Edward King House
                on 99 King Street, the Modern Art Gallery is free to all
                visitors and open seven days a week from 8am to 9pm.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Adress;
