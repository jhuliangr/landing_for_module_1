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
    <div className=" bg-[#FFE5AF] relative py-10">
      <div className="text-center flex items-center justify-center flex-col gap-[10px]">
        <p className="font-bold text-[64px] text-[#092754]">About Us</p>
        <p className="text-[30px] w-[700px]">
          We're a team of young entrepreneurs in Barcelona who face the same
          problem as millions of tourists: enjoying the beach without being
          afraid to leave our belongings behind.
        </p>
      </div>
      <div className="flex justify-center gap-[100px] text-center py-20">
        {AUTHORS.map((author, i) => (
          <div key={i}>
            <img src={author.pic} alt={author.pic} />
            <p className="text-[32px] pt-10">{author.name}</p>
          </div>
        ))}
      </div>
      <div className="w-[700px] text-center flex flex-wrap mx-auto text-[30px]">
        From there, SafeBox was born: a technological, sustainable solution
        designed for people like you, who seek freedom and peace of mind.
      </div>
      <div className="py-20 flex gap-20 w-fit mx-auto">
        {ITEMS.map((item, i) => (
          <div key={i} className="w-[400px] flex items-center justify-center flex-col">
            <item.icon className="text-[#092754]"/>
            <p className="text-[30px] text-center">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export { Section4 };
