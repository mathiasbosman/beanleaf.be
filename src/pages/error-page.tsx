import Page from "@components/common/page.tsx";
import ContentWrapper from "@components/common/content-wrapper.tsx";
import type { ReactElement } from "react";
import { useTranslation } from "react-i18next";

export const ErrorPage = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <Page title={"404 - Beanleaf"}>
      <ContentWrapper>
        <div className={"relative mt-32 px-2 sm:px-8 lg:px-12"}>
          <div className={"mx-auto max-w-2xl text-center lg:max-w-5xl"}>
            <h1
              className={
                "mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"
              }>
              404 - {t("http.404.title")}
            </h1>
            <p className={"mt-6 text-base text-zinc-500 dark:text-zinc-400"}>
              {t("http.404.description")}
              <br />
              <a className={"underline hover:text-lime-500"} href={"/"}>
                {t("navigation.to_homepage")}
              </a>
            </p>
          </div>
        </div>
      </ContentWrapper>
    </Page>
  );
};

export default ErrorPage;
