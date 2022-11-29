import { useTranslation } from "react-i18next";
import { LatestUpdates } from "./pages/latestUpdates/LatestUpdates";
import { Contact } from "./pages/contact/Contact";
import { Home } from "./pages/home/Home";

type RouteType = {
  // Path for the route. Should match React Router specification.
  path: string;
  // Element for the route.
  node: JSX.Element;
  // Specified if the route should be shown in Saga navbar.
  navbar?: RouteTypeNavbar;
};

type RouteTypeNavbar = {
  // Text to show in navbar.
  text: string;
  // Url to link to in navbar.
  to: string;
};

export const useRoutes = (): RouteType[] => {
  const { t } = useTranslation();

  return [
    {
      path: "/*",
      node: <Home />,
      navbar: {
        text: t("navbar.home"),
        to: "/",
      },
    },
    {
      path: "/contact/*",
      node: <Contact />,
      navbar: {
        text: t("navbar.contact"),
        to: "/contact",
      },
    },
    {
      path: "/latest-updates/*",
      node: <LatestUpdates />,
      navbar: {
        text: t("navbar.latestUpdates"),
        to: "/latest-updates",
      },
    },
  ];
};

function isDefined<T>(t: T | undefined): t is T {
  return t !== undefined;
}
export const useNavbarRoutes = (): RouteTypeNavbar[] => {
  return useRoutes()
    .map((r) => r.navbar)
    .filter(isDefined);
};
