import { useTranslation } from "react-i18next";
import { Title1 } from "../../components/UI/Text";

export const Contact = (): JSX.Element => {
  const { t } = useTranslation();

  return <Title1>{t("pages.contact.title")}</Title1>;
};
