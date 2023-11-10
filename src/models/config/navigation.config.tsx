import React from "react";
import type { RouteObject } from "react-router-dom";
import HomePage from "@pages/home-page.tsx";
import ErrorPage from "@pages/error-page.tsx";

interface HTMLSimpleLink {
  href: string;
  text?: string;
}

interface RouteLink {
  link: HTMLSimpleLink;
  element: React.ReactNode;
  isPublic?: boolean;
  errorElement?: React.ReactElement;
}

export const routeConfig: RouteLink[] = [
  {
    link: { href: "/", text: "Home" },
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    link: { href: "/404", text: "Not found" },
    element: <ErrorPage />,
  },
];

export const routes: RouteObject[] = routeConfig.map((routeLink) => {
  return {
    path: routeLink.link.href,
    element: routeLink.element,
    errorElement: routeLink.errorElement,
  };
});
