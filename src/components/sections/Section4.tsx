import { Earth } from "../svg/Earth";
import { Hands } from "../svg/Hands";
import { Lighting } from "../svg/Lighting";

const AUTHORS = [
  {
    pic: "/assets/pictures/jhulian.png",
    name: "Jhulian",
  },
  {
    pic: "/assets/pictures/dia.png",
    name: "Dia",
  },
  {
    pic: "/assets/pictures/shamil.png",
    name: "Shamil",
  },
  {
    pic: "/assets/pictures/sito.png",
    name: "Sito",
  },
];

const ITEMS = [
  {
    icon: Earth,
    text: "With a global vision: from Barcelona to the world",
  },
  {
    icon: Lighting,
    text: "Sustainable innovation: solar lockers",
  },
  {
    icon: Hands,
    text: "Committed to security and user experience",
  },
];
function Section4() {
  return (
    <div className="bg-secondary relative py-10 md:px-30 px-3 flex flex-col items-center justify-center">
      <div className="text-center flex items-center justify-center flex-col gap-3">
        <h2 className="font-bold md:text-6xl text-3xl text-primary">About Us</h2>
        <p className="text-base md:w-100">
          We're a team of young entrepreneurs in Barcelona who face the same
          problem as millions of tourists: enjoying the beach without being
          afraid to leave our belongings behind.
        </p>
      </div>
      <div className="flex justify-center md:gap-40 gap-9 flex-wrap text-center py-20">
        {AUTHORS.map((author, i) => (
          <div key={i}>
            <img src={author.pic} alt={author.pic} className="w-40 h-40" />
            <p className="text-lg pt-10">{author.name}</p>
          </div>
        ))}
      </div>
      <p className="md:w-100 text-center text-base">
        From there, <span className="text-primary font-bold">SafeBox</span> was born: a technological, sustainable solution
        designed for people like you, who seek freedom and peace of mind.
      </p>
      <div className="py-20 flex items-center justify-center w-full gap-20 flex-wrap mx-auto">
        {ITEMS.map((item, i) => (
          <div key={i} className="flex items-center justify-center flex-col gap-5">
            <item.icon className="text-primary"/>
            <p className="text-base text-center">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export { Section4 };
