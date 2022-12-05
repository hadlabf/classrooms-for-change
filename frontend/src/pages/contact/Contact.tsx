import { Box, Link, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import { useTranslation } from "react-i18next";
import { BlobButton } from "../../components/UI/BlobButton";
import { Card, Col, Layout } from "../../components/UI/Common";
import { Text1, Title1 } from "../../components/UI/Text";
import Grid from "@mui/material/Unstable_Grid2";
import IconPhone from "@mui/icons-material/PhoneIphone";
import IconInstagram from "@mui/icons-material/Instagram";
import IconEmail from "@mui/icons-material/Markunread";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

export const Contact = (): JSX.Element => {
  const { t } = useTranslation();
  const userId = "q7Tmt2XpyLdwlEHUb";
  const serviceId = "service_v30ifkg";
  const templateId = "template_808ukpj";
  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    emailjs.sendForm(serviceId, templateId, e.target, userId).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      }
    );
    e.target.reset();
  };
  return (
    <Layout>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={12} sm={6}>
            <Title1 weight="bold">{t("pages.contact.title")}</Title1>
            <Stack gap={1}>
              <Link href="https://www.instagram.com/classroomsforchange/" target="_blank">
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
                <form id="contact-form" action="POST" onSubmit={handleOnSubmit}>
                  <Stack gap={4}>
                    <TextField
                      name="from_name"
                      required
                      id="outlined-basic"
                      label="Name"
                      variant="outlined"
                    />
                    <TextField
                      name="from_email"
                      required
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                    />
                    <TextField
                      name="message"
                      required
                      id="outlined-basic"
                      label="Message"
                      variant="outlined"
                    />
                    <BlobButton secondary text={t("pages.contact.send")} />
                  </Stack>
                </form>
              </Col>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};
