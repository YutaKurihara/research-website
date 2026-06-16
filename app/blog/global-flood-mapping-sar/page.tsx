import type { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
  title: "10年分のSARデータで世界の洪水を地図化する — 深層学習による全球洪水データセット",
};

export default function Page() {
  return <Content />;
}
