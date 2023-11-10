import type { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { LanguageSwitch } from "@components/languageSwitch.tsx";
import { defaultLang, languages } from "@/i18n.ts";

export const Footer = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <footer className={"mt-18 sm:px-8"}>
      <div className="mx-auto mt-12 max-w-7xl lg:px-8">
        <div className="">
          <div className={"relative px-16 pb-16 pt-10"}>
            <div className={"mx-auto max-w-2xl lg:max-w-5xl"}>
              <p
                className={
                  "text-balance flex flex-wrap justify-center gap-1 text-center text-sm text-zinc-500"
                }>
                ©&nbsp;{new Date().getFullYear()} Beanleaf.{" "}
                <span className={"whitespace-nowrap"}>
                  {t("footer.disclaimer")}.
                </span>
                <span className={"whitespace-nowrap"}>
                  {t("vat.short")}
                  &nbsp;BE&nbsp;0737.612.645
                </span>
              </p>
              <p
                className={
                  "text-balance mt-1 text-center text-sm text-zinc-500"
                }>
                <LanguageSwitch langs={languages} defaultLang={defaultLang} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
