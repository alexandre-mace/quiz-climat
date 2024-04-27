import Image from "next/image";

const Back = ({ back }: { back: () => void }) => {
  return (
    <div
      className={"flex cursor-pointer items-center gap-2"}
      onClick={() => back()}
    >
      <span className={"inline-block rounded-lg bg-[#2B2352] p-2"}>
        <Image
          src={"/arrow.svg"}
          height={16}
          width={19}
          alt={"Flèche retour"}
          className={"h-auto w-auto"}
        />
      </span>
      Retour
    </div>
  );
};
export default Back;
