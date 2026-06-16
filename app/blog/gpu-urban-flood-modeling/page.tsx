import type { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
  title: "マルチGPUで都市洪水をリアルタイム予測 — ベルリン全域891km²を2m解像度で5.5時間",
};

export default function Page() {
  return <Content />;
}
