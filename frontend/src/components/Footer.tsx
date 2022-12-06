import { Box, Container, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { Text3 } from "./UI/Text";

export const Footer = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <FooterContariner>
      <Container maxWidth="xl">
        <Box sx={{ flexGrow: 1 }}>
          <Container>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 10 }}>
              <Grid xs={12} sm={5}>
                <Text3 mb={0}>{t("footer.p1")}</Text3>
                <Text3 mb={0}>{t("footer.p2")}</Text3>
                <Text3 mb={0}>{t("footer.p3")}</Text3>
              </Grid>
              <Grid xs={12} sm={5}>
                <Text3 mb={0}>{t("footer.p4")}</Text3>
                <Text3 mb={0}>{t("footer.p5")}</Text3>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Container>
    </FooterContariner>
  );
};

const FooterContariner = styled.footer`
  background-color: ${(props) => props.theme.colors.black} !important;
  color: ${(props) => props.theme.colors.grey08} !important;
  padding-top: ${(props) => props.theme.spacer * 8}px;
  padding-bottom: ${(props) => props.theme.spacer * 20}px;
`;
