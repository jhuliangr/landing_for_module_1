function Button({
  type,
  text,
  variant = "primary",
}: {
  type: "submit" | "reset" | "button";
  text: string;
  variant?: "primary" | "secondary";
}) {
  return (
    <button
      type={type}
      className={`cursor-pointer w-full md:w-fit py-2 md:py-[15px] px-4 md:px-10 rounded-[100px] ${
        variant === "primary" ? "bg-primary " : "border-primary border-2"
      } `}
    >
      <p className={`font-bold text-xs md:text-[22px] ${variant === "primary"? "text-secondary": "text-primary"}`}>{text}</p>
    </button>
  );
}

export default Button;
