import type { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
  title: "複数センターのアンサンブル降雨予測を統合する — ベイズモデル平均化と影響予測型警報",
};

export default function Page() {
  return <Content />;
}
