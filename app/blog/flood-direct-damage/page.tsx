import type { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
  title: "衛星画像を用いた洪水直接被害評価手法の解説",
};

export default function Page() {
  return <Content />;
}
