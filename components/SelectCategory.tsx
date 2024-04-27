"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import CategoryType from "@/domain/Category";
import TagType from "@/domain/Tag";
import { useState } from "react";
import { categories, tags } from "@/domain/data";
import Back from "@/components/Back";

const SelectCategory = ({
  startQuestions,
  back,
}: {
  startQuestions: (category: CategoryType) => void;
  back: () => void;
}) => {
  const [selectedTag, setSelectedTag] = useState<null | TagType>(null);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-[url('/decor-1.svg')] bg-cover bg-bottom bg-no-repeat p-4  px-4 pb-4 pt-8 bg-blend-luminosity md:pt-16">
      <main className={"container space-y-14"}>
        <div className={"flex flex-wrap justify-between gap-4"}>
          <Back back={back} />
          <div className={"flex flex-col gap-3 text-center"}>
            <div className={"text-4xl font-bold"}>Choix du thème</div>
            <div className={"max-w-xl text-[#A39FB4]"}>
              Choisissez un thème pour lancer une série de quiz spécifique, ou
              lancez un quiz aléatoire pour couvrir tous les sujets.
            </div>
          </div>
          <Button className={"bg-[#5B21FF] text-white"}>Quiz aléatoire</Button>
        </div>
        <div className={"flex flex-wrap justify-center gap-4"}>
          {tags.map((tag) => (
            <div
              key={tag.title}
              onClick={() =>
                JSON.stringify(tag) === JSON.stringify(selectedTag)
                  ? setSelectedTag(null)
                  : setSelectedTag(tag)
              }
            >
              <Tag
                tag={tag}
                clickable={true}
                selected={JSON.stringify(tag) === JSON.stringify(selectedTag)}
              />
            </div>
          ))}
        </div>
        <div className={"grid gap-6 md:grid-cols-5"}>
          {categories
            .filter((category) => {
              if (!selectedTag) return true;

              return (
                JSON.stringify(category.tag) === JSON.stringify(selectedTag)
              );
            })
            .map((category) => (
              <div
                key={category.title}
                onClick={() => startQuestions(category)}
              >
                <Category category={category} />
              </div>
            ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

const Category = ({ category }: { category: CategoryType }) => (
  <div
    className={
      "flex cursor-pointer flex-col items-center gap-2 rounded-xl bg-[#2D2453] p-6 text-center hover:bg-[#5B21FF]"
    }
  >
    <Image src={category.emoji} height={68} width={68} alt={category.title} />
    <div className={"mb-2 text-xl font-bold"}>{category.title}</div>
    <Tag tag={category.tag} clickable={false} selected={false} />
  </div>
);

const Tag = ({
  tag,
  clickable = false,
  selected = false,
}: {
  tag: TagType;
  clickable: boolean;
  selected: boolean;
}) => (
  <div
    className={`flex items-center gap-1 rounded-md ${selected ? "bg-[#5B21FF]" : "bg-[#423A65]"} px-2 py-1 text-sm ${clickable || selected ? "cursor-pointer hover:bg-[#5B21FF]" : ""}`}
  >
    <Image src={tag.emoji} height={16} width={16} alt={tag.title} />
    <div>{tag.title}</div>
  </div>
);

export default SelectCategory;
