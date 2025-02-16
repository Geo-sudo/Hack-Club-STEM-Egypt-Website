//components
import CPbg from "@/components/CP-bg";
import CPContent from "@/components/CP-Content";
// for cloudFlare
export const runtime = "edge";

export default function page() {
  return (
    <section className="h-fit w-full flex flex-col justify-center items-center ">
      <CPbg />
      <CPContent />
    </section>
  );
}
