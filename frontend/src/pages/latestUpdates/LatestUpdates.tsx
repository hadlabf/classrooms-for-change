import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Card, Layout } from "../../components/UI/Common";
import Grid from "@mui/material/Unstable_Grid2";
import { Update, updates } from "./updates";
import { Text1, Text2, Text3, Text4, Title4 } from "../../components/UI/Text";
import { TimeSince } from "./Time";
import styled from "styled-components";
import { BlobButton } from "../../components/UI/BlobButton";

export const LatestUpdates = (): JSX.Element => {
  return (
    <Layout>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={12} sm={7}>
            <MainUpdate update={updates[0]} />
          </Grid>
          <Grid xs={12} sm={5}>
            <Card>
              {updates.map((update, index) => index > 0 && <PreviusUpdates update={update} />)}
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

type UpdateProp = {
  update: Update;
};
export const MainUpdate = ({ update }: UpdateProp): JSX.Element => {
  return (
    <Card>
      <Text3 mb={0}>{TimeSince(update.date)}</Text3>
      <Title4 weight="bold">{update.title}</Title4>
      <Text2>{update.text}</Text2>
      {update.text2 && <Text2>{update.text}</Text2>}
    </Card>
  );
};
export const PreviusUpdates = ({ update }: UpdateProp): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Box>
      <Text4 mb={0}>{TimeSince(update.date)}</Text4>
      <Text1 mb={0} weight="bold">
        {update.title}
      </Text1>
      <Ellipsis numOfLines={2}>
        <Text3 mb={1}>
          {update.text}
          {update.text2 ? (
            <>
              <br />
              <br /> {update.text2}{" "}
            </>
          ) : (
            ""
          )}
        </Text3>
      </Ellipsis>
      <BlobButton fontSize={1.5} py={0.5} px={1.5} text={t("common.readMore")} />
    </Box>
  );
};

const Ellipsis = styled.span<{ numOfLines: number }>`
  p {
    display: -webkit-box;
    -webkit-line-clamp: ${(props) => props.numOfLines};
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;
