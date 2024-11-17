import Main from "../components/Main";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Main />
      <Footer
        bgColor="bg-color-black"
        color="text-color-white"
        mt="mt-[3.75rem]"
        mtlarge="mt-[5.625rem]"
        logo="logo-light"
      />
    </>
  );
}

export default Home;
