import type { PropsWithChildren, ReactElement } from "react";
import i18n from "i18next";
import { useTranslation } from "react-i18next";

interface Props {
  langs: string[];
}

export const LanguageSwitch = (
  props: PropsWithChildren<Props>,
): ReactElement => {
  const changeLanguage = (lng: string) => {
    void i18n.changeLanguage(lng);
  };

  const { t } = useTranslation();

  return (
    <div className={"flex justify-center gap-2"}>
      {props.langs
        .filter((lang) => lang != i18n.language)
        .map((lang, i) => {
          return (
            <button
              key={i}
              className={"hover:underline"}
              onClick={() => changeLanguage(lang)}>
              {t("languages." + lang)}
            </button>
          );
        })}
    </div>
  );
};
