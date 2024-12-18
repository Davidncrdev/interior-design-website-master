import Facebook from "../icons/facebook.tsx";
import Instagram from "../icons/instagram.tsx";
import LinkedIn from "../icons/linkedin.tsx";
import Logo from "../icons/logo.tsx";
import Twitter from "../icons/twitter.tsx";

const Footer = () => {
  return (
    <footer className="mt-[135px] w-full">
      <div className="w-full max-w-[1200px] px-12 xl:px-0 mx-auto pb-[135px] grid grid-cols-1 lg:grid-cols-5 md:grid-cols-2 gap-6">
        {/* start */}
        <div className="col-span-1 md:col-span-2">
          <a href="/" className="">
            <Logo />
          </a>
          <p className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray pt-[18px] pb-[33px]">
            Crecemos juntos.
          </p>
          <div className="flex gap-5 md:gap-[54px]">
            <a href="/">
              <Facebook />
            </a>
            <a href="/">
              <Twitter />
            </a>
            <a href="/">
              <LinkedIn />
            </a>
            <a href="/">
              <Instagram />
            </a>
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-4">
          <h5 className="text-primary-200 font-dm text-[22px] lg:text-[25px] leading-loose">
            Paginas
          </h5>
          <div className="flex flex-col gap-6">
            <a
              href="/about"
              className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray"
            >
              Sobre nosotros
            </a>
            <a
              href="/services"
              className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray"
            >
              servicios
            </a>
            <a
              href="/contact"
              className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray"
            >
              Contactanos
            </a>
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-4">
          <h5 className="text-primary-200 font-dm text-[22px] lg:text-[25px] leading-loose">
            Servicios
          </h5>
          <div className="flex flex-col gap-6">
            <p className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray">
              Paginas web
            </p>
            <p className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray">
              RRSS
            </p>
            <p className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray">
              Marca personal
            </p>
            <p className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray">
              Marketing digital
            </p>
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-4">
          <h5 className="text-primary-200 font-dm text-[22px] lg:text-[25px] leading-loose">
            Contact
          </h5>
          <div className="flex flex-col gap-6">
            <p className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray">
              Parque teconologico de andaluciia (PTA) Malaga, Espana
            </p>
            <p className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray">
              contact@alturacreativa.com
            </p>
            <p className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray">
              (+34) 641437667
            </p>
          </div>
        </div>

        {/* End */}
      </div>
    </footer>
  );
};

export default Footer;
