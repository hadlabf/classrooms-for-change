import { Box, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Text1, Title1, Title2, Title3, Title4 } from "../../components/UI/Text";
import { Col, Card } from "../../components/UI/Common";
import Grid from "@mui/material/Unstable_Grid2";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import styled from "styled-components";
import { Container } from "@mui/system";
import { GetToKnow } from "./GetToKnow";
import { BlobButton } from "../../components/UI/BlobButton";
import { Link } from "react-router-dom";

export const Home = (): JSX.Element => {
  return (
    <Stack gap={10}>
      <TopHeader />
      <WhoAreWe />
      <BuildingRequirements />
      <GetToKnow />
    </Stack>
  );
};

const TopHeader = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Box display="flex" flexDirection="row" justifyContent="flex-start" sx={{ flexGrow: 1 }}>
      <Grid container spacing={6}>
        <Grid xs={12} md={6.5}>
          <Title1
            dangerouslySetInnerHTML={{
              __html: t("pages.home.slogan", { interpolation: { escapeValue: false } }),
            }}
          ></Title1>
          <Text1 mb={6}>{t("pages.home.intro")}</Text1>
          <Box>
            <Link to="/donate">
              <BlobButton text={t("pages.home.donateButton")} />
            </Link>
          </Box>
        </Grid>
        <Grid xs={12} md={5.5}>
          <Card secondary>
            <Title4 weight="bold">{t("pages.home.latestUpdateCard.title")}</Title4>
            <Text1 mb={6}>{t("pages.home.latestUpdateCard.text")}</Text1>
            <Link to="/latest-updates">
              <BlobButton secondary text={t("pages.home.latestUpdateCard.button")} />
            </Link>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};
const WhoAreWe = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Box mb={6}>
      <Title2 weight="boldSlim">{t("pages.home.whoAreWe.title")}</Title2>
      <Text1>{t("pages.home.whoAreWe.p1")}</Text1>
      <Text1>{t("pages.home.whoAreWe.p2")}</Text1>
      <Text1 mb={4} weight="bold">
        {t("pages.home.whoAreWe.p3")}
      </Text1>
      <Container maxWidth="xl" sx={{ paddingInline: "0 !important" }}>
        <Card secondary>
          <Box py={4} px={6} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid xs={12}>
                <Title3 weight="bold">{t("pages.home.whoAreWe.longTerm.title")}</Title3>
                <Text1
                  dangerouslySetInnerHTML={{
                    __html: t("pages.home.whoAreWe.longTerm.text", {
                      interpolation: { escapeValue: false },
                    }),
                  }}
                />
              </Grid>
              <Grid xs={6}>
                <Left>
                  <Title3 weight="bold">{t("pages.home.whoAreWe.mission.title")}</Title3>
                  <Text1
                    dangerouslySetInnerHTML={{
                      __html: t("pages.home.whoAreWe.mission.text", {
                        interpolation: { escapeValue: false },
                      }),
                    }}
                  />
                </Left>
              </Grid>
              <Grid xs={6}>
                <Right>
                  <Title3 weight="bold">{t("pages.home.whoAreWe.succeed.title")}</Title3>
                  <Text1
                    mb={0}
                    dangerouslySetInnerHTML={{
                      __html: t("pages.home.whoAreWe.succeed.text", {
                        interpolation: { escapeValue: false },
                      }),
                    }}
                  />
                </Right>
              </Grid>
            </Grid>
          </Box>
        </Card>
      </Container>
    </Box>
  );
};

const Left = styled.div`
  padding-right: ${(props) => props.theme.spacer * 1.5}px;
`;
const Right = styled.div`
  padding-left: ${(props) => props.theme.spacer * 4}px;
  border-left: 2px solid ${(props) => props.theme.colors.black};
  padding-bottom: ${(props) => props.theme.spacer * 1}px;
`;

const BuildingRequirements = (): JSX.Element => {
  const { t } = useTranslation();
  const length = 11;
  return (
    <Box>
      <Title3 color="secondary" weight="bold">
        {t("pages.home.building.title")}
      </Title3>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 12 }}>
          {[...Array(length)].map((item, index) => (
            <Grid xs={12} md={6} lg={5} key={index}>
              <Box display="flex" flexDirection="row" alignItems="flex-start" gap={1}>
                <AddCircleOutlineIcon fontSize="small" sx={{ marginTop: "3px" }} />
                {/* <AddCircleOutlineIcon fontSize="small" sx={{ color: "#F0D608" }} /> */}
                <Text1 mb={0} color="secondary">
                  {t(`pages.home.building.li${index + 1}`)}
                </Text1>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
