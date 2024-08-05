import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import bgimg from "../assets/images/bg/home.png";
import { useNavigate } from "react-router-dom";

export const StampList = () => {
  const nav = useNavigate();

  return (
    <Container disableGutters maxWidth="sm">
      <Stack justifyContent="center">
        <Container
          disableGutters
          sx={{
            padding: 2,
            textAlign: "center",
            backgroundImage: `url(${bgimg})`,
            backgroundSize: "auto 100vh",
            backgroundPosition: "center top",
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Box>
            <Typography variant="h4" sx={{ marginBottom: 4 }}>
              スタンプ一覧
            </Typography>
            <Box>
              <Typography
                variant="h5"
                sx={{ borderBottom: "2px solid #253958" }}
              >
                １号館
              </Typography>
              <Grid
                container
                spacing={3}
                sx={{
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Grid item sx={{ width: "27%", margin: "4px" }}>
                  <img
                    src="src\assets\images\stamp\nkc-ug.jpg"
                    style={{ width: "100%", height: "auto" }}
                  />
                  <Typography variant="h6">NKC-UG</Typography>
                </Grid>
                <Grid item sx={{ width: "27%", margin: "4px" }}>
                  <img
                    src="src\assets\images\stamp\nkc-ug.jpg"
                    style={{ width: "100%", height: "auto" }}
                  />
                  <Typography variant="h6">NKC-UG</Typography>
                </Grid>
                <Grid item sx={{ width: "27%", margin: "4px" }}>
                  <img
                    src="src\assets\images\stamp\nkc-ug.jpg"
                    style={{ width: "100%", height: "auto" }}
                  />
                  <Typography variant="h6">NKC-UG</Typography>
                </Grid>
                <Grid item sx={{ width: "27%", margin: "4px" }}>
                  <img
                    src="src\assets\images\stamp\nkc-ug.jpg"
                    style={{ width: "100%", height: "auto" }}
                  />
                  <Typography variant="h6">NKC-UG</Typography>
                </Grid>
              </Grid>
            </Box>
            <Box>
              <Typography
                variant="h5"
                sx={{ borderBottom: "2px solid #253958" }}
              >
                ３号館
              </Typography>
              <Grid
                container
                spacing={3}
                sx={{
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Grid item sx={{ width: "27%", margin: "4px" }}>
                  <img
                    src="src\assets\images\stamp\nkc-ug.jpg"
                    style={{ width: "100%", height: "auto" }}
                  />
                  <Typography variant="h6">NKC-UG</Typography>
                </Grid>
                <Grid item sx={{ width: "27%", margin: "4px" }}>
                  <img
                    src="src\assets\images\stamp\nkc-ug.jpg"
                    style={{ width: "100%", height: "auto" }}
                  />
                  <Typography variant="h6">NKC-UG</Typography>
                </Grid>
                <Grid item sx={{ width: "27%", margin: "4px" }}>
                  <img
                    src="src\assets\images\stamp\nkc-ug.jpg"
                    style={{ width: "100%", height: "auto" }}
                  />
                  <Typography variant="h6">NKC-UG</Typography>
                </Grid>
                <Grid item sx={{ width: "27%", margin: "4px" }}>
                  <img
                    src="src\assets\images\stamp\nkc-ug.jpg"
                    style={{ width: "100%", height: "auto" }}
                  />
                  <Typography variant="h6">NKC-UG</Typography>
                </Grid>
              </Grid>
            </Box>
            <Box>
              <Typography
                variant="h5"
                sx={{ borderBottom: "2px solid #253958" }}
              >
                10号館
              </Typography>
              <Grid
                container
                spacing={3}
                sx={{
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Grid item sx={{ width: "27%", margin: "4px" }}>
                  <img
                    src="src\assets\images\stamp\nkc-ug.jpg"
                    style={{ width: "100%", height: "auto" }}
                  />
                  <Typography variant="h6">NKC-UG</Typography>
                </Grid>
                <Grid item sx={{ width: "27%", margin: "4px" }}>
                  <img
                    src="src\assets\images\stamp\nkc-ug.jpg"
                    style={{ width: "100%", height: "auto" }}
                  />
                  <Typography variant="h6">NKC-UG</Typography>
                </Grid>
                <Grid item sx={{ width: "27%", margin: "4px" }}>
                  <img
                    src="src\assets\images\stamp\nkc-ug.jpg"
                    style={{ width: "100%", height: "auto" }}
                  />
                  <Typography variant="h6">NKC-UG</Typography>
                </Grid>
                <Grid item sx={{ width: "27%", margin: "4px" }}>
                  <img
                    src="src\assets\images\stamp\nkc-ug.jpg"
                    style={{ width: "100%", height: "auto" }}
                  />
                  <Typography variant="h6">NKC-UG</Typography>
                </Grid>
              </Grid>
            </Box>
            <Box>
              <Typography
                variant="h5"
                sx={{ borderBottom: "2px solid #253958" }}
              >
                チャレンジングロット
              </Typography>
              <Grid
                container
                spacing={3}
                sx={{
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Grid item sx={{ width: "27%", margin: "4px" }}>
                  <img
                    src="src\assets\images\stamp\nkc-ug.jpg"
                    style={{ width: "100%", height: "auto" }}
                  />
                  <Typography variant="h6">NKC-UG</Typography>
                </Grid>
                <Grid item sx={{ width: "27%", margin: "4px" }}>
                  <img
                    src="src\assets\images\stamp\nkc-ug.jpg"
                    style={{ width: "100%", height: "auto" }}
                  />
                  <Typography variant="h6">NKC-UG</Typography>
                </Grid>
                <Grid item sx={{ width: "27%", margin: "4px" }}>
                  <img
                    src="src\assets\images\stamp\nkc-ug.jpg"
                    style={{ width: "100%", height: "auto" }}
                  />
                  <Typography variant="h6">NKC-UG</Typography>
                </Grid>
                <Grid item sx={{ width: "27%", margin: "4px" }}>
                  <img
                    src="src\assets\images\stamp\nkc-ug.jpg"
                    style={{ width: "100%", height: "auto" }}
                  />
                  <Typography variant="h6">NKC-UG</Typography>
                </Grid>
              </Grid>
            </Box>
            <Button
              variant="contained"
              size="large"
              sx={{ padding: 2, width: "25vh" }}
              onClick={() => {
                nav("/");
              }}
            >
              <Typography variant="h5">ホームへ戻る</Typography>
            </Button>
          </Box>
        </Container>
      </Stack>
    </Container>
  );
};
