import type { PropsWithChildren, ReactElement } from "react";
import i18n from "i18next";
import { useTranslation } from "react-i18next";

interface Props {
  langs: string[];
  defaultLang?: string;
}

export const LanguageSwitch = (
  props: PropsWithChildren<Props>,
): ReactElement => {
  const changeLanguage = (language: string): void => {
    void i18n.changeLanguage(language);
  };

  const { t } = useTranslation();
  const resolvedLanguage = i18n.resolvedLanguage;

  return (
    <div className="{flex gap-2} justify-center">
      {props.langs
        .filter((lang) => {
          if (!resolvedLanguage && lang !== props.defaultLang) {
            return true;
          }

          return lang !== resolvedLanguage;
        })
        .map((lang, i) => (
          <button
            key={i}
            className="hover:underline"
            onClick={() => changeLanguage(lang)}>
            {t("languages." + lang)}
          </button>
        ))}
    </div>
  );
};
