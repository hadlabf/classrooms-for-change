import { Box, Link } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Card, Layout, LinkButton } from "../../components/UI/Common";
import Grid from "@mui/material/Unstable_Grid2";
import { Update, updates } from "./updates";
import { Text1, Text2, Text3, Text4, Title1, Title4 } from "../../components/UI/Text";
import { TimeSince } from "./Time";
import styled from "styled-components";
import { BlobButton } from "../../components/UI/BlobButton";
import { Stack } from "@mui/system";
import { Dispatch, SetStateAction, useState } from "react";

export const LatestUpdates = (): JSX.Element => {
  const updateSorted = updates.sort(function (a, b) {
    return b.id - a.id;
  });
  const [page, setPage] = useState<number>(updateSorted[0].id);
  return (
    <Layout>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={12} lg={7}>
            <MainUpdate
              page={page}
              setPage={setPage}
              update={updateSorted[updates.length - page]}
            />
          </Grid>
          <Grid xs={12} lg={5}>
            <Stack gap={2}>
              {updateSorted.map((update) => (
                <PreviusUpdates key={update.id} page={page} setPage={setPage} update={update} />
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

type UpdateProp = {
  update: Update;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
};
export const MainUpdate = ({ update, page, setPage }: UpdateProp): JSX.Element => {
  const { t } = useTranslation();
  return (
    <MagnifiedCard secondary padding={2}>
      <Box>
        {update.imageUrl && (
          <ImageContainer>
            <img alt="cover" src={update.imageUrl} />
          </ImageContainer>
        )}
        <Text4 mb={0}>{TimeSince(update.date)}</Text4>
        <Title4 mb={2} lineHeight={1} weight="bold">
          {update.title}
        </Title4>
        <Text2>{update.text}</Text2>
        {update.text2 && <Text2>{update.text}</Text2>}
      </Box>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <LinkButton disabled={page === updates.length} onClick={() => setPage(page + 1)}>
          {t("common.previous")}
        </LinkButton>
        <LinkButton disabled={page === 1} onClick={() => setPage(page - 1)}>
          {t("common.next")}
        </LinkButton>
      </Box>
    </MagnifiedCard>
  );
};

export const PreviusUpdates = ({ update, page, setPage }: UpdateProp): JSX.Element => {
  const { t } = useTranslation();

  return (
    <MiniatureCard secondary padding={0} style={{ opacity: page === update.id ? 0.7 : 1 }}>
      <Box flexGrow="1" padding={2}>
        <Text4 mb={0}>{TimeSince(update.date)}</Text4>
        <Text1 mb={0} weight="bold">
          {update.title}
        </Text1>
        <Ellipsis numOfLines={2}>
          <Text4 mb={1}>
            {update.text}
            {update.text2 ? (
              <>
                <br />
                <br /> {update.text2}
              </>
            ) : (
              ""
            )}
          </Text4>
        </Ellipsis>
        {page === update.id ? (
          <Text4
            sx={{
              paddingBlock: "5.5px",
            }}
            mb={0}
            weight="bold"
          >
            {t("common.currentlyReading")}
          </Text4>
        ) : (
          <BlobButton
            onClick={() => setPage(update.id)}
            disabled={page === update.id}
            fontSize={1.5}
            py={0.5}
            px={1.5}
            text={t("common.readMore")}
          />
        )}
      </Box>
    </MiniatureCard>
  );
};

const MagnifiedCard = styled(Card)`
  height: 650px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const MiniatureCard = styled(Card)`
  padding: 0;
  display: flex;
  flex-direction: row;
  border-radius: ${(props) => props.theme.borderRadius.small};
`;
const ImageContainer = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  border-radius: ${(props) => props.theme.borderRadius.small};
  margin-bottom: ${(props) => props.theme.spacer}px;
  display: flex;
  align-items: center;
  img {
    width: 100%;
    height: auto;
    image-position: center;
  }
`;

const Ellipsis = styled.span<{ numOfLines: number }>`
  p {
    display: -webkit-box;
    -webkit-line-clamp: ${(props) => props.numOfLines};
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;
