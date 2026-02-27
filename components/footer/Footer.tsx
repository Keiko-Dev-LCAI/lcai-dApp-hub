import { socialIconMap } from "@/lib/footer/socialIconMap";
import type { RawFooterColumn, RawSocialLink } from "@/lib/footer/types";
import Image from "next/image";
import socialIcon from "@/public/images/icons/x-icons-2.svg";

type FooterProps = {
  socials: RawSocialLink[];
  footerColumns: RawFooterColumn[];
};

export default async function Footer({ socials, footerColumns }: FooterProps) {
  console.log('footerCol', socials)

  return (
    <footer className="relative border-border-soft border-t bg-surface-slate-strong px-6 md:px-14 py-25 bg-[url(/images/bg/footer-bg.png)] bg-no-repeat bg-cover after:content-[''] after:absolute after:w-full after:h-full after:bg-[linear-gradient(0deg,rgba(8,8,18,0.40)_0%,#101123_100%)] after:top-1/2 after:left-1/2 after:-translate-1/2 ">
      <div className="container mx-auto z-1 relative">
        <div className="grid gap-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 pb-12">
          {footerColumns.map((col) => (
            <div className="flex flex-col gap-4" key={col.title}>
              <h4 className="mb-2 font-semibold text-base text-white leading-normal md:mb-4">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="text-[#9F9FA9] text-sm transition-colors hover:text-white/80"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="flex flex-col gap-4">
            <h4 className="mb-2 font-semibold text-base text-white leading-normal md:mb-4">
              Socials
            </h4>
            <ul className="flex flex-col gap-2.5">
              {socials.map((link, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <div className="relative h-7.5 w-7.5 before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-1/2 before:w-full before:h-full border border-border-soft hover:bg-[linear-gradient(#5b4bff,#27273733)] rounded-lg overflow-hidden after:content-[''] after:absolute after:inset-px after:bg-[#0f1021] after:rounded-[4px]">
                    <div className="flex items-center justify-center h-full relative before:content-[''] before:w-3.5 before:h-3.5 before:rounded-3xl before:bg-[linear-gradient(#5b4bff_0%,#fff_100%)] before:absolute before:left-1/2 before:-bottom-1/2 before:-translate-1/2 before:blur-[5px] before:z-1">
                      <Image className="relative z-1" src={socialIcon} alt="Icon" height={16} width={16} />
                    </div>
                  </div>
                  <a
                    href={link.href}
                    className="text-[#9F9FA9] text-sm transition-colors hover:text-white/80"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-6 border-border-soft border-t py-8 text-center md:flex-row md:gap-4 md:py-4 md:text-left">
          <div className="flex flex-col items-center gap-4 text-[#9F9FA9] text-sm md:flex-row">
            Logo
            <span> © 2026 Lightchain. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-5">
            {socials.map((social, idx) => {
              const IconComponent = socialIconMap[social.iconKey];
              if (!IconComponent) return null;

              return (
                <a
                  key={idx}
                  href={social?.href}
                  aria-label={social?.text}
                  className="text-lg text-white transition-colors"
                  target={social?.target ?? undefined}
                >
                  <IconComponent />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}