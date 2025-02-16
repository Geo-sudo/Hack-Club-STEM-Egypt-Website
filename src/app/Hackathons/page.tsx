//components 
import BgHackthons from "@/components/bgHackthons"
import Content from "@/components/Hackthons-Content"


// for cloudFlare
export const runtime = "edge";


export default function page() {
  return (
    <section className="w-full">
      <BgHackthons/>
      <Content/>
    </section>
  )
}
