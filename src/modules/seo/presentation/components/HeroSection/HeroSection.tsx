import { Button } from "../../../../../core/presentation/components/Button";
import CallIcon from "../../../../../core/presentation/assets/icons/CallIcon";

export default function HeroSection() {
  return (
    <section className="flex flex-col lg:gap-8 gap-6 lg:px-56 px-6 mx-2 items-center lg:pt-56 pt-40">
      <h1 className="font-extrabold lg:text-6xl text-3xl text-beige font-primary text-center">
        We Place Your Website in Front of Your Dream Customers Through Revenue
        Focused SEO
      </h1>
      <p className="font-normal font-secondary lg:text-3xl text-sm text-gray text-center">
        We Place Your Website in Front of Your Dream Customers Through Revenue
        Focused SEO
      </p>
      <Button className="flex flex-row justify-center gap-3 items-center mt-8">
        <span>
          <CallIcon />
        </span>
        <p className="text-sm lg:text-xl">Increase my Traffic</p>
      </Button>
    </section>
  );
}