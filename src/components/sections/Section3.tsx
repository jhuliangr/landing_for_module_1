import { Cube } from "../svg/Cube";
import { Lang } from "../svg/Lang";
import { Shield } from "../svg/Shield";
import { SolarSvg } from "../svg/SolarSvg";
import { Umbrella } from "../svg/Umbrella";
import { WavesGroup } from "../WavesGroup";

const ITEMS = [
  {
    icon: Shield,
    title: "Total security",
    text: "Protect your valuables with a digital PIN",
  },
  {
    icon: SolarSvg,
    title: "Solar energy",
    text: "Sustainable lockers, no wiring required",
  },
  {
    icon: Cube,
    title: "Rugged design",
    text: "Made for beach, sand and humidity",
  },
  {
    icon: Lang,
    title: "Multilingual and universal",
    text: "Designed for tourists from all over the world",
  },
];

function Section3() {
  return (
    <div className="md:h-[1080px] py-16 md:py-5 relative">
      <div className="w-full flex justify-between items-center px-10 ">
        <p className="text-primary text-4xl md:text-2xl md:text-[64px] w-full text-center md:text-left font-bold">
          Why SafeBox?
        </p>
        <WavesGroup position="top-10 right-3 w-[90px] md:w-fit hidden md:flex" />
      </div>
      <div className="grid md:grid-cols-2 w-[80%] mx-auto pt-10 gap-9 md:gap-[100px]">
        {ITEMS.map((item, i) => (
          <div key={i} className="flex items-center flex-col text-center">
            <div className="text-primary">
              <item.icon className="size-[72px] md:size-fit"/>
            </div>
            <p className="text-2xl md:text-[50px] font-bold">{item.title}</p>
            <p className="text-sm md:text-3xl">{item.text}</p>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 hidden md:block">
        <Umbrella className="h-80" />
      </div>
    </div>
  );
}

export { Section3 };
