import type { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
  title:
    "水理モデルの支配方程式を比較する — 完全SWE・局所慣性・拡散波の違い",
};

export default function Page() {
  return <Content />;
}
