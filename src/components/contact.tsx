import type { ReactElement } from "react";
import { useState } from "react";
import { sendEmail } from "@shared/utils.ts";
import { CONTACT_EMAIL } from "@/constants.ts";
import { useTranslation } from "react-i18next";

export const Contact = (): ReactElement => {
  const [subject, setSubject] = useState("");
  const { t } = useTranslation();

  return (
    <section className={"flex flex-wrap justify-center gap-4"}>
      <label htmlFor={"subject-input"} className={"sr-only"}>
        {t("contact.input.placeholder")}
      </label>
      <input
        type={"text"}
        placeholder={t("contact.input.placeholder") + "..."}
        aria-label={t("contact.input.placeholder")}
        id={"subject-input"}
        onChange={(event) => {
          setSubject(event.target.value);
        }}
        required={true}
        maxLength={30}
        className={
          "min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white p-4 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-lime-500 focus:outline-none focus:ring-4 focus:ring-lime-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-lime-400 dark:focus:ring-lime-400/10 sm:text-sm"
        }
      />
      <button
        className={
          "active:text-white-100/70 dark:active:text-white-100/70 flex-1 gap-2 rounded-md bg-lime-800 px-3 py-4 text-sm font-semibold text-white outline-offset-2 transition hover:bg-lime-700 active:bg-lime-900 active:transition-none dark:bg-lime-600 dark:hover:bg-lime-500 dark:active:bg-lime-600"
        }
        onClick={() => {
          sendEmail(CONTACT_EMAIL, subject);
        }}>
        {t("contact.submit.text")}
      </button>
    </section>
  );
};
