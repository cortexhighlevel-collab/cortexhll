import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface FeatureCardProps {
  title: string;
  subtitle: string;
  link: string;
}

const FeatureCard = ({ title, subtitle, link }: FeatureCardProps) => (
  <a 
    href={link}
    className="flex flex-col p-4 rounded-2xl bg-[rgba(255,255,255,0.03)] hover:bg-[rgba(255,255,255,0.08)] transition-all duration-200 group"
  >
    <span className="text-white font-medium text-sm">{title}</span>
    <span className="text-white/50 text-xs">{subtitle}</span>
  </a>
);

export const ContentDropdown = () => {
  const { t } = useLanguage();

  const services = [
    { title: t("dropdown.ai"), subtitle: t("dropdown.ai.sub"), link: "#servicos" },
    { title: t("dropdown.design"), subtitle: t("dropdown.design.sub"), link: "#servicos" },
    { title: t("dropdown.growth"), subtitle: t("dropdown.growth.sub"), link: "#servicos" },
    { title: t("dropdown.infra"), subtitle: t("dropdown.infra.sub"), link: "#servicos" },
  ];

  return (
    <div className="w-[600px] bg-[rgb(20,20,20)] rounded-3xl p-6 shadow-2xl border border-white/5 font-dm">
      <div className="flex gap-6">
        <div className="flex-1">
          <div className="mb-4">
            <span className="text-orange-500 text-xs font-medium uppercase tracking-wider">
              {t("dropdown.services")}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {services.map((service, idx) => (
              <FeatureCard key={idx} {...service} />
            ))}
          </div>
        </div>

        <div className="w-[180px] flex flex-col justify-center">
          <div className="bg-orange-500 rounded-2xl p-4 text-center">
            <p className="text-white text-sm font-medium mb-3">
              {t("dropdown.cta")}
            </p>
            <a 
              href="#contato"
              className="inline-flex items-center gap-2 bg-white text-orange-500 px-4 py-2 rounded-full text-xs font-medium hover:bg-white/90 transition-opacity"
            >
              {t("nav.contact")}
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentDropdown;
