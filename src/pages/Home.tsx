import { Button, Container, Grid, Typography } from "@mui/material";
import bgimg from "../assets/images/bg/home.png";
import { useNavigate } from "react-router-dom";
import { SRHeader } from "../component/SRHeader";
import { StampList } from "../component/StampList";

export const Home = () => {
  const nav = useNavigate();

  return (
    <Container
      maxWidth="sm"
      sx={{
        minHeight: "100vh",
        padding: 2,
        textAlign: "center",
        backgroundImage: `url(${bgimg})`,
        backgroundSize: "auto 100%",
        backgroundPosition: "center top",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      <SRHeader />
      <Grid container direction="row" wrap="wrap" spacing={3} justifyContent="center">
        <Grid item>
          <Button
            variant="contained"
            size="large"
            sx={{ padding: 2, width: "200px" }}
            onClick={() => {
              nav("/participation");
            }}
          >
            <Typography variant="h5">参加方法</Typography>
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            size="large"
            sx={{ padding: 2, width: "200px" }}
            onClick={() => {
              window.open(
                "https://forms.office.com/Pages/ResponsePage.aspx?id=eeUPGhB_lUOsHmxSoVCbiP4hXRkgLplMkTlk7A0MQPlURDFRNllBTFBUWE9WQU5aTlBYUFhKSDNFNy4u"
              );
            }}
          >
            <Typography variant="h5">お問い合わせ</Typography>
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            size="large"
            sx={{ padding: 2, width: "200px" }}
          >
            <Typography variant="h5">NKC-UGとは？</Typography>
          </Button>
        </Grid>
      </Grid>

      <hr style={{
        margin: "50px 0",
        border: 'none',
        borderTop: '10px dotted #000',
      }} />

      <StampList />
    </Container>
  );
};