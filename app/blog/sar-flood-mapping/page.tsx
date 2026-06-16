import type { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
  title: "SAR衛星画像による洪水範囲の抽出手法",
};

export default function Page() {
  return <Content />;
}
