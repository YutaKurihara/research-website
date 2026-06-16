import type { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
  title: "SAR浸水マップの準リアルタイム同化による洪水予測の改善",
};

export default function Page() {
  return <Content />;
}
