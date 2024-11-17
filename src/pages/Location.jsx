import Adress from "../components/Adress";
import { Button } from "../components/Button";
import Footer from "../components/Footer";

function Location() {
  return (
    <>
      <main>
        <section
          className="relative bg-no-repeat bg-cover bg-center bg-[url('../public/assets/images/mobile/image-map.png')] md:bg-[url('../public/assets/images/tablet/image-map.png')]
		lg:bg-[url('../public/assets/images/desktop/image-map.png')] h-[550px] md:h-[600px] lg:h-[685px]"
        >
          <div className="container lg:p-0">
            <Button
              link="/"
              name="BACK TO HOME"
              bgImage="after:bg-[url('/public/assets/images/icon-arrow-left.svg')]"
              positionColor="before:left-[0]"
              position="after:left-[20px]"
              textPosition="text-end"
            />
          </div>
        </section>
        <section>
          <Adress />
        </section>
      </main>
      <Footer
        bgColor="bg-color-brown"
        logo="logo-dark"
        color="text-color-black"
      />
    </>
  );
}

export default Location;
