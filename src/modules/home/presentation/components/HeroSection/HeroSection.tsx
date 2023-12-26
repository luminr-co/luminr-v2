import { Button } from "../../../../../core/presentation/components/Button";
import CallIcon from "../../../../../core/presentation/assets/icons/CallIcon";
import HeroImage from "../../assets/images/HeroSection/HeroImage";
export default function HeroSection() {
  return (
    <section className="container flex flex-row">
      <div className="flex flex-col gap-12 pl-28 bg-beige w-7/12 py-52">
        <div className="flex flex-col gap-8 w-4/5">
          <div className="flex flex-col gap-8 ">
            <h1 className="text-6xl font-extrabold font-primary">
              Unlock Your Business’s Online Potential with Seamless Web Presence
            </h1>
            <p className="text-2xl font-normal font-secondary w-full">
              We Build, Optimize, and Elevate Your Digital Presence, So You Can
              Focus on Growing Your Business.
            </p>
          </div>
          <Button className="flex flex-row justify-center gap-3 items-center ">
            <span>
              <CallIcon />
            </span>
            <p>Hop on a Call</p>
          </Button>
        </div>
      </div>
      <div className="h-full lg:w-auto">
        <HeroImage/>
      </div>
    </section>
  );
}
