import { HeroHeader } from "../components/HeroHeader";
import Marquee from "../components/Marquee";
import ArenaGamesSection from "../components/ArenaGamesSection";
import FooterCommunitySection from "@/components/FooterCommunitySection";

export default function Home() {
  return <>
    <HeroHeader />
    <Marquee />
    <ArenaGamesSection />
  </>;
}
