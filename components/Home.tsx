import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

const Home = ({ selectGameCategory }: { selectGameCategory: () => void }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-opacity-10 bg-[url('/decor-1.svg')] bg-cover bg-bottom bg-no-repeat p-4 bg-blend-luminosity">
      <main className={""}>
        <div className={"py-20"}>
          <Image
            src={"/logo-quiz.svg"}
            priority
            alt={"Logo quiz Bon Pote"}
            height={291}
            width={627}
            className={"h-[291px] mix-blend-luminosity"}
          />
        </div>
        <div className="flex flex-col items-center gap-8 text-4xl font-bold">
          <Link onClick={() => selectGameCategory()} href="/" className={""}>
            Commencer une partie
          </Link>
          <div
            aria-disabled={true}
            className={"relative cursor-not-allowed text-[#4C3D7A]"}
          >
            Multijoueur{" "}
            <div
              className={
                "absolute left-1/2 top-3/4 -translate-x-1/2 -rotate-3 rounded-lg border border-[#1A0A4C] bg-[#4C3D7A] px-2 py-1 text-sm font-normal text-white"
              }
            >
              Bientôt
            </div>
          </div>
          <div
            aria-disabled={true}
            className={"relative cursor-not-allowed text-[#4C3D7A]"}
          >
            Leaderboard{" "}
            <div
              className={
                "absolute left-1/2 top-3/4 -translate-x-1/2 -rotate-3 rounded-lg border border-[#1A0A4C] bg-[#4C3D7A] px-2 py-1 text-sm font-normal text-white"
              }
            >
              Bientôt
            </div>
          </div>
          <Link href="/" className={"text-[#BEB7D2]"}>
            Les règles
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
