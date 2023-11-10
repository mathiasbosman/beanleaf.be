import Footer from "./footer.tsx";
import type { PropsWithChildren, ReactElement } from "react";
import { useEffect } from "react";

interface Props {
  title?: string;
}

export const Page = (props: PropsWithChildren<Props>): ReactElement => {
  useEffect(() => {
    if (props.title != null) {
      document.title = props.title;
    }
  }, [props.title]);

  return (
    <main
      id="mainBoxy"
      className={
        "flex h-full flex-col bg-white antialiased selection:bg-lime-500 selection:text-green-900 dark:bg-zinc-900"
      }>
      <div className="z-20 h-1 bg-gradient-to-r from-lime-500 to-green-700 "></div>
      {props.children}
      <Footer />
    </main>
  );
};

export default Page;
