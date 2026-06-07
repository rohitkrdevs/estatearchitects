import dynamic from "next/dynamic";

const InteractiveCustomizer = dynamic(() => import("@/components/InteractiveCustomizer"));

export default function Page() {
  return <InteractiveCustomizer />;
}
