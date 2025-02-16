
//components 
import Content from "@/components/meetUs-content"
import BgMeetUs from "@/components/bgMeetUs"

// for cloudFlare
export const runtime = "edge";

export default function page() {
  return (
    <section className="w-full">
        <BgMeetUs/>
        <Content/>
      
    </section>
  )
}
