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
    <section className="min-h-screen py-20 lg:py-50 px-3 md:px-10 lg:px-30 relative">
      <WavesGroup position="absolute top-1 right-3 hidden md:flex" />
      <h2 className="text-primary text-4xl md:text-6xl w-full text-center md:text-left font-bold mb-10">
        Why SafeBox?
      </h2>
      <ul className="grid md:grid-cols-2 mx-auto pt-10 gap-x-10 gap-y-16 md:gap-y-40">
        {ITEMS.map((item, i) => (
          <li key={i} className="flex items-center flex-col text-center gap-5">
            <div className="text-primary">
              <item.icon className="size-[72px] md:size-fit" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold">{item.title}</h3>
            <p className="text-base">{item.text}</p>
          </li>
        ))}
      </ul>
      <Umbrella className="absolute bottom-0 left-0 h-80 hidden md:flex" />
    </section>
  );
}

export { Section3 };
