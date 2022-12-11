import { Box, SxProps } from "@mui/system";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Card, Layout } from "../../components/UI/Common";
import { Text1, Text2, Title1, Title2, Title3, Title4 } from "../../components/UI/Text";
import { Size } from "../../config/theme.config";
import { useState } from "react";
import CopyIcon from "@mui/icons-material/ContentCopy";
import CheckIcon from "@mui/icons-material/DownloadDone";
import QuoteIcon from "@mui/icons-material/FormatQuote";
import { BlobButton } from "../../components/UI/BlobButton";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";
import { DefaultComponentProps, OverridableTypeMap } from "@mui/material/OverridableComponent";
import { Theme } from "@mui/material";

export const Donate = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Layout direction="column">
      <Box mb={6} display="flex" flexDirection="column">
        <Title1 mb={1} weight="bold">
          {t("pages.donate.title")}
        </Title1>
        <Title2
          lineHeight={1.2}
          dangerouslySetInnerHTML={{
            __html: t("pages.donate.subtitle", { interpolation: { escapeValue: false } }),
          }}
        />
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <GridParent container spacing={10}>
          <Grid sx={{}} xs={12} lg={7}>
            <Box>
              <Quote
                quote={t("pages.donate.quote1.quote")}
                author={t("pages.donate.quote1.author")}
              />
            </Box>
            <Box ml="auto" width="70%">
              <Quote
                quote={t("pages.donate.quote2.quote")}
                author={t("pages.donate.quote2.author")}
              />
            </Box>
            <Box ml={0}>
              <Quote
                quote={t("pages.donate.quote3.quote")}
                author={t("pages.donate.quote3.author")}
              />
            </Box>
          </Grid>
          <Grid xs={12} lg={5}>
            <Card reverse>
              <Title4 weight="bold" mb={0}>
                How?
              </Title4>
              <Text1 mb={0}>
                {t("pages.donate.text")} <PhoneNumber />
              </Text1>
              <Link to="/contact">
                <BlobButton reverse text={t("pages.donate.contactForm")} />
              </Link>
            </Card>
          </Grid>
        </GridParent>
      </Box>
    </Layout>
  );
};

const PhoneNumber = (): JSX.Element => {
  const { t } = useTranslation();
  const [isCopied, setIsCopied] = useState(false);

  async function copyTextToClipboard(text: string) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  }

  const handleCopyClick = () => {
    copyTextToClipboard("+46761155842")
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log("An error occurred when copying the phone: ", err);
      });
  };

  return (
    <>
      <SendText href="sms:(+46)(0761155842)">+46(0)76-115 58 52</SendText>
      <CopyText onClick={handleCopyClick}>
        <CopyStatus>
          {isCopied ? (
            <>
              <CheckIcon /> {t("pages.donate.copied")}
            </>
          ) : (
            <>
              <CopyIcon /> {t("pages.donate.copy")}
            </>
          )}
        </CopyStatus>
        <span className="bold">+46(0)76-115 58 52</span>{" "}
      </CopyText>
    </>
  );
};
type QuoteProps = {
  quote: string;
  author: string;
  styleProps?: any;
};

const Quote = ({ quote, author, styleProps }: QuoteProps): JSX.Element => {
  const { t } = useTranslation();
  return (
    <Box mb={2} display="flex" flexDirection="row" flexWrap="nowrap" {...styleProps}>
      <QuoteIcon fontSize="large" sx={{ lineHeight: 1, marginTop: -1 }} />
      <Text1 mb={0}>
        {quote}
        <Text2 mt={1} weight="boldSlim">
          - {author}
        </Text2>
      </Text1>
    </Box>
  );
};

const GridParent = styled(Grid)`
  @media only screen and (max-width: ${Size.lg}px) {
    flex-direction: column-reverse !important;
  }
`;
const SendText = styled.a`
  @media only screen and (min-width: ${Size.sm}px) {
    display: none;
  }
`;
const CopyStatus = styled.span`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  margin-right: 8px;
  svg {
    font-size: 18px;
    margin-right: 4px;
  }
`;
const CopyText = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-block: 24px;
  flex-wrap: nowrap;
  @media only screen and (max-width: ${Size.sm - 1}px) {
    display: none;
  }
`;
