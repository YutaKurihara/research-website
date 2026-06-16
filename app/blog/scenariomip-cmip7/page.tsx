import type { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
  title:
    "ScenarioMIP-CMIP7 — 次期気候モデル比較の7シナリオ設計と排出駆動型への転換",
};

export default function Page() {
  return <Content />;
}
