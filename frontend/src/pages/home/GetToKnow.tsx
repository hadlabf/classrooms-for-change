import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Unstable_Grid2";
import { Button, Card as CardUI } from "../../components/UI/Common";
import { Text2, Title4 } from "../../components/UI/Text";
import IconPeople from "@mui/icons-material/Diversity1";
import IconVillage from "@mui/icons-material/HolidayVillage";
import IconBehind from "@mui/icons-material/Handshake";
import styled from "styled-components";
import { BlobButton } from "../../components/UI/BlobButton";

export const GetToKnow = (): JSX.Element => {
  const { t } = useTranslation();
  const iconSize = "60px";
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        mb={10}
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 12 }}
        alignItems="flex-end"
        sx={{ height: "550px" }}
      >
        <CardLayout
          icon={<IconPeople sx={{ fontSize: iconSize }} />}
          title={t("pages.home.GTK.card1.title")}
          text={t("pages.home.GTK.card1.text")}
          navigateTo="/get-to-know/the-people"
        />
        <CardLayout
          icon={<IconBehind sx={{ fontSize: iconSize, marginTop: -2 }} />}
          title={t("pages.home.GTK.card2.title")}
          text={t("pages.home.GTK.card2.text")}
          navigateTo="/get-to-know/us"
        />
        <CardLayout
          icon={<IconVillage sx={{ fontSize: iconSize }} />}
          title={t("pages.home.GTK.card3.title")}
          text={t("pages.home.GTK.card3.text")}
          navigateTo="/get-to-know/krofu"
        />
      </Grid>
    </Box>
  );
};

type CardLayoutProps = {
  icon: JSX.Element;
  title: string;
  text: string;
  navigateTo: string;
};
export const CardLayout = ({ icon, title, text, navigateTo }: CardLayoutProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Grid xs={12} md={4} display="flex">
      <Card>
        <Box display="flex" flexDirection="column" justifyContent="center" textAlign="center">
          <IconBox display="flex" justifyContent="center" mt={3} mb={6}>
            {icon}
          </IconBox>
          <Title4 sx={{ lineHeight: 1 }} mb={1} weight="bold">
            {title}
          </Title4>
          <Text2 sx={{ lineHeight: 1.25, marginTop: 1 }} mb={3}>
            {text}
          </Text2>
          <Box display="flex" justifyContent="center">
            <BlobButton
              text={t("common.readMore")}
              fontSize={2}
              px={8}
              navigateTo={navigateTo}
              secondary
            ></BlobButton>
          </Box>
        </Box>
      </Card>
    </Grid>
  );
};
const Card = styled(CardUI)`
  cursor: pointer;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;
  height: 400px;
  transform: scale(1);
  transition: transform 0.6s ease-in-out;
  &:hover {
    transform: scale(1.025);
    }
  }
`;
const IconBox = styled(Box)`
  width: 100%;
  text-align: center;
`;
const HiddenBox = styled(Box)`
  overflow: hidden;
  & > p {
    transition: margin-bottom 0.6s ease-in;
    margin-bottom: -100px !important;
  }
`;
