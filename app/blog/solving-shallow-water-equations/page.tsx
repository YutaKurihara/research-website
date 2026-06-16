import type { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
  title: "浅水方程式の解き方 — 各項の離散化手法と代表的な解法の比較",
};

export default function Page() {
  return <Content />;
}
