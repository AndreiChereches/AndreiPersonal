import { FeaturedProject } from "@/components/featured-project";
import { ProjectCard } from "@/components/project-card";
import { Section, SectionHeading, SectionLead } from "@/components/section";
import { projects } from "@/content/site";

export function Work({ className }: { className?: string }) {
  return (
    <Section id="work" index="02" eyebrow="Work" className={className}>
      <div className="reveal">
        <SectionHeading id="work-heading">Selected work</SectionHeading>
        <SectionLead>
          Five projects, and what each one was actually for.
        </SectionLead>
      </div>

      <div className="mt-12">
        <FeaturedProject />
      </div>

      <p className="label reveal mt-14 text-faint">Also built</p>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <div key={project.title} className="reveal">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </Section>
  );
}
