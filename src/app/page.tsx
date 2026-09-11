import { About } from "@/components/about";
import { Campus } from "@/components/campus";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Method } from "@/components/method";
import { Philosophy } from "@/components/philosophy";
import { Recognition } from "@/components/recognition";
import { Work } from "@/components/work";

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-[68rem] rule-column">
      <Hero />
      <Method />
      <Work className="border-t border-line" />
      <Campus />
      <Philosophy />
      <Recognition className="border-t border-line" />
      <About className="border-t border-line" />
      <Contact className="border-t border-line" />
    </div>
  );
}
