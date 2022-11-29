import { Box, Input, Link, TextField } from "@mui/material";
import { Container, Stack } from "@mui/system";
import { useTranslation } from "react-i18next";
import { BlobButton } from "../../components/UI/BlobButton";
import { Card, Col, Layout } from "../../components/UI/Common";
import { Text1, Title1, Title3, Title4 } from "../../components/UI/Text";
import Grid from "@mui/material/Unstable_Grid2";
import IconPhone from "@mui/icons-material/PhoneIphone";
import IconInstagram from "@mui/icons-material/Instagram";
import IconEmail from "@mui/icons-material/Markunread";
import { Label } from "@mui/icons-material";

export const Contact = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Box sx={{ flexGrow: 1, height: "100vh" }}>
        <Grid container spacing={2}>
          <Grid xs={12} sm={6}>
            <Title1 weight="bold">{t("pages.contact.title")}</Title1>
            <Stack gap={1}>
              <Link>
                <Box display="flex" flexDirection="row" alignItems="center">
                  <IconInstagram />
                  <Text1 mb={0}>@classroomsforchange</Text1>
                </Box>
              </Link>
              <Link>
                <Box display="flex" flexDirection="row" alignItems="center">
                  <IconEmail />
                  <Text1 mb={0}>hadla.bergman@classroomsforchange.org</Text1>
                </Box>
              </Link>
              <Link>
                <Box display="flex" flexDirection="row" alignItems="center">
                  <IconPhone />
                  <Text1 mb={0}>+46 76 115 58 42</Text1>
                </Box>
              </Link>
            </Stack>
          </Grid>
          <Grid xs={12} sm={6}>
            <Card>
              <Col py={3} px={3}>
                <Stack gap={4}>
                  <TextField required id="outlined-basic" label="Name" variant="outlined" />
                  <TextField required id="outlined-basic" label="Email" variant="outlined" />
                  <TextField required id="outlined-basic" label="Message" variant="outlined" />
                  <BlobButton secondary navigateTo="TODO!" text={t("pages.contact.send")} />
                </Stack>
              </Col>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};
