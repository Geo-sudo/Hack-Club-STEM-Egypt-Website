//component
import BgWhyUs from "@/components/bgWhyUs";
import Content from "@/components/Why-Us-content";


// for cloudFlare
export const runtime = "edge";

export default function page() {
  return (
    <section className="h-fit flex flex-col select-text cursor-default    ">
      <BgWhyUs />
      <Content />
    </section>
  );
}
