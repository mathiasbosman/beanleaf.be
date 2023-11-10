import type { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { LanguageSwitch } from "@components/languageSwitch.tsx";

export const Footer = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <footer className={"mt-18 sm:px-8"}>
      <div className="mx-auto mt-12 max-w-7xl lg:px-8">
        <div className="">
          <div className={"relative px-16 pb-16 pt-10"}>
            <div className={"mx-auto max-w-2xl lg:max-w-5xl"}>
              <p className={"text-balance text-center text-sm text-zinc-500"}>
                ©&nbsp;{new Date().getFullYear()} Beanleaf.{" "}
                {t("footer.disclaimer")}. {t("vat.short")}
                &nbsp;BE&nbsp;0737.612.645
              </p>
              <p
                className={
                  "text-balance mt-1 text-center text-sm text-zinc-500"
                }>
                <LanguageSwitch langs={["nl", "en"]} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
