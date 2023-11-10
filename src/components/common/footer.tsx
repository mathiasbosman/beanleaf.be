import type { ReactElement } from "react";

export const Footer = (): ReactElement => {
  return (
    <footer className={"mt-18 sm:px-8"}>
      <div className="mx-auto mt-12 max-w-7xl lg:px-8">
        <div className="">
          <div className={"relative px-16 pb-16 pt-10"}>
            <div className={"mx-auto max-w-2xl lg:max-w-5xl"}>
              <p className={"text-balance text-center text-sm text-zinc-500"}>
                ©&nbsp;{new Date().getFullYear()} Beanleaf.
                All&nbsp;rights&nbsp;reserved. BTW&nbsp;BE&nbsp;0737.612.645
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
