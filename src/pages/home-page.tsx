import type { ReactElement } from "react";
import { Contact } from "@components/contact.tsx";
import Page from "@components/common/page.tsx";
import ContentWrapper from "@components/common/content-wrapper.tsx";
import { useTranslation } from "react-i18next";

export const HomePage = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <Page>
      <h1 className={"sr-only"}>Beanleaf</h1>
      <ContentWrapper>
        <section
          className={
            "relative px-2 text-center sm:mt-3 sm:px-8 md:mt-20 lg:px-12"
          }>
          <div
            className={
              "flex justify-center text-5xl font-bold text-[#333333] dark:text-white"
            }>
            <svg
              aria-label={"B"}
              version="1.0"
              className={"h-11"}
              viewBox="0 0 194 311"
              preserveAspectRatio="xMidYMin meet"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M 4.2845432,243.47656 C -0.68695684,227.99576 0.03674316,212.01152 0.03674316,196.0902 V 67.96453 c 0,-2.45427 0.5664,-3.1465 3.14650004,-3.1465 8.6843998,0.18879 17.3371998,0 26.0215998,0 a 25.958664,25.958664 0 0 1 26.1475,25.39229 v 123.94082 a 40.180865,40.180865 0 0 0 22.0255,37.41194 41.596792,41.596792 0 0 0 56.448297,-16.42475 40.904561,40.904561 0 0 0 3.3353,-7.96066 39.645959,39.645959 0 0 0 -7.5202,-38.38736 40.904561,40.904561 0 0 0 -34.611497,-15.73252 h -15.7325 c -1.6677,0 -2.2655,-0.53491 -2.2655,-2.26548 v -50.91045 c 0,-1.60472 0.5663,-2.07669 2.1396,-2.07669 12.8377,0 25.769897,-0.8181 38.450297,2.04522 a 97.1326,97.1326 0 0 1 7.5516,187.90929 94.143421,94.143421 0 0 1 -44.460097,2.6745 94.741257,94.741257 0 0 1 -33.0069,-12.0196 96.660624,96.660624 0 0 1 -40.1493998,-46.2222 l -1.6676,-4.15338 c -0.6608,-1.47886 -0.9754,-3.14651 -1.6047,-4.56244"
                fill="currentColor"
              />
              <path
                d="M 64.162509,2.9980469e-5 A 53.836695,53.836695 0 0 1 95.02972,39.362804 55.221157,55.221157 0 0 1 84.331604,83.697055 54.025486,54.025486 0 0 1 53.527323,44.302816 55.126762,55.126762 0 0 1 63.784928,0.50347073 Z M 131.15159,56.228069 a 53.86816,53.86816 0 0 1 45.08942,5.443453 54.056951,54.056951 0 0 1 -67.11495,36.53092 55.126762,55.126762 0 0 1 -13.183854,-5.915429 54.056951,54.056951 0 0 1 35.209384,-36.058944 z"
                fill="#87b23f"
              />
            </svg>
            eanleaf
          </div>
          <p className={"mt-2 text-xl font-medium sm:text-2xl"}>
            - For all your bits and bytes -
          </p>
          <aside className={"mt-6 text-base text-zinc-600 dark:text-zinc-400"}>
            {t("slogan.subtitle")}
          </aside>
          <div className={"mt-6"}>
            <Contact />
          </div>
        </section>
      </ContentWrapper>
    </Page>
  );
};

export default HomePage;
