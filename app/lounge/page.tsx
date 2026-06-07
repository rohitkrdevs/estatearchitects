import dynamic from "next/dynamic";

const AiLounge = dynamic(() => import("@/components/AiLounge"));

export default function Page() {
  return <AiLounge />;
}
