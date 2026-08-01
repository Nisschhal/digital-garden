"use client";
import Image from "next/image";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { IconCheck, IconArrow, IconStreak, IconLevel, IconBoss } from "@/components/ui/icons";
import { QACard, DraftCard } from "@/components/ui/proof-card";
import { images } from "@/data/images";
import { useLang } from "@/context/LangContext";

function PhotoWithProof({ src, alt, proof }: { src: string; alt: string; proof: React.ReactNode }) {
  return (
    <div className="hidden md:block relative mt-6 max-w-[280px]">
      <div className="rounded-2xl overflow-hidden aspect-[4/3] relative">
        <Image src={src} alt={alt} fill sizes="280px" className="object-cover" />
      </div>
      <div className="absolute -bottom-8 -right-8 w-[220px]">{proof}</div>
    </div>
  );
}

export default function ValueBlocks() {
  const { t } = useLang();
  const vb = t.valueBlocks;

  const blocks = [
    { key: "admin", data: vb.admin, href: "admins.html", photo: null as null | { src: string; alt: string } },
    { key: "teacher", data: vb.teacher, href: "teachers.html", photo: { src: images.classroom, alt: "A classroom of students at their desks — a teacher's everyday view." } },
    { key: "parent", data: vb.parent, href: "parents.html", photo: { src: images.motherDaughter, alt: "A mother and daughter sharing a warm hug at home." } },
  ];

  return (
    <section className="py-24 sm:py-28 md:py-[160px]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
        {blocks.map((b) => {
          const proof =
            b.key === "admin" ? (
              <QACard q={vb.admin.proofQ} a={vb.admin.proofA} />
            ) : b.key === "teacher" ? (
              <DraftCard label={vb.teacher.proofLabel} snippet={vb.teacher.proofSnippet} />
            ) : (
              <QACard q={vb.parent.proofQ} a={vb.parent.proofA} />
            );

          return (
            <Reveal key={b.key} as="div" y={26} className="grid grid-cols-1 md:grid-cols-[0.85fr_1.15fr] gap-8 md:gap-14 items-start py-11 sm:py-14 md:py-16 border-t border-border">
              <div>
                <p className="text-[13px] font-bold uppercase tracking-[0.06em] text-terrace mb-3.5">{b.data.tag}</p>
                <h3 className="font-display font-medium text-[clamp(22px,2.6vw,29px)] leading-[1.22] max-w-[14ch]">{b.data.title}</h3>

                {b.photo ? (
                  <PhotoWithProof src={b.photo.src} alt={b.photo.alt} proof={proof} />
                ) : (
                  <div className="hidden md:block mt-6 max-w-[260px]">{proof}</div>
                )}
              </div>
              <div>
                <ul className="flex flex-col gap-4">
                  {b.data.bullets.map((line) => (
                    <li key={line} className="flex gap-3 items-start text-[15px] text-ink-soft leading-[1.55]">
                      <IconCheck className="w-[18px] h-[18px] text-terrace shrink-0 mt-0.5" />
                      {line}
                    </li>
                  ))}
                </ul>
                <a href={b.href} className="group inline-flex items-center gap-1.5 font-semibold text-[14.5px] text-terrace-deep mt-6">
                  <span className="border-b border-transparent group-hover:border-terrace-deep transition-colors">{b.data.cta}</span>
                  <IconArrow className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </Reveal>
          );
        })}

        {/* Students — deliberate energetic tone shift, scoped only to this card */}
        <Reveal
          y={26}
          className="mt-3 grid grid-cols-1 md:grid-cols-[0.85fr_1.15fr] gap-8 md:gap-14 items-start rounded-[28px] border border-marigold-tint p-7 sm:p-10 md:p-13"
          style={{ background: "linear-gradient(135deg, var(--marigold-tint) 0%, var(--paper-raised) 60%)" }}
        >
          <div>
            <p className="text-[13px] font-bold uppercase tracking-[0.06em] text-marigold-deep mb-3.5">{vb.student.tag}</p>
            <h3 className="font-display font-medium text-[clamp(22px,2.6vw,29px)] leading-[1.22] max-w-[14ch]">{vb.student.title}</h3>
            <div className="hidden md:block mt-6 rounded-2xl overflow-hidden aspect-[4/3] max-w-[280px] relative">
              <Image
                src={images.nepalSchoolgirls}
                alt="Two schoolgirls in uniform talking together in a Nepali classroom."
                fill
                sizes="280px"
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <ul className="flex flex-col gap-4">
              {vb.student.bullets.map((line) => (
                <li key={line} className="flex gap-3 items-start text-[15px] text-ink-soft leading-[1.55]">
                  <IconCheck className="w-[18px] h-[18px] text-marigold-deep shrink-0 mt-0.5" />
                  {line}
                </li>
              ))}
            </ul>

            <StaggerGroup className="flex flex-wrap gap-2.5 mt-6" stagger={0.1}>
              {[IconStreak, IconLevel, IconBoss].map((Icon, i) => (
                <StaggerItem key={vb.student.chips[i]} as="span" scale className="inline-flex items-center gap-1.5 bg-card border border-marigold-tint px-3.5 py-2 rounded-full text-[13px] font-bold text-marigold-deep">
                  <Icon className="w-[15px] h-[15px]" />
                  {vb.student.chips[i]}
                </StaggerItem>
              ))}
            </StaggerGroup>

            <a href="students.html" className="group inline-flex items-center gap-1.5 font-semibold text-[14.5px] text-marigold-deep mt-6">
              <span className="border-b border-transparent group-hover:border-marigold-deep transition-colors">{vb.student.cta}</span>
              <IconArrow className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
