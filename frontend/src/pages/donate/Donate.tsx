import { Box } from "@mui/system";
import Grid from "@mui/material/Unstable_Grid2";
import { useTranslation } from "react-i18next";
import { Layout } from "../../components/UI/Common";
import { Text1, Title1, Title3 } from "../../components/UI/Text";

export const Donate = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Box py={4} px={6} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={12}>
            <Title3 weight="bold">Donate</Title3>
            <Text1
              dangerouslySetInnerHTML={{
                __html: t("pages.home.whoAreWe.longTerm.text", {
                  interpolation: { escapeValue: false },
                }),
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};
