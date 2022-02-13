import {
  Container,
  Button,
  TextField,
  CssBaseline,
  Box,
  Typography,
} from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Redirect, useHistory } from "react-router-dom";
import { useUser } from "../../providers/user";
import logo from "../../assets/images/netflix-logo.png";
import { motion } from "framer-motion";
import { MainLogin } from "./styles";

const Login = () => {
  const { login } = useUser();
  const schema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório"),
    password: yup.string().required("Senha obrigatória"),
  });

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const handleSignIn = ({ email, password }) => {
    login({ email, password });
  };
  const handleClick = () => {
    history.push("/signup");
  };

  return (
    <MainLogin className="main-login">
      <div className="container">
        <div className="logo">
          <img src={logo} style={{ width: "200px" }} alt="logo"></img>
        </div>
        <motion.div
          className="motion-div"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{ overflow: "hidden" }}
        >
          <Container
            className="container-box"
            component="div"
            maxWidth="xs"
            sx={{
              backgroundColor: "rgba(0,0,0,.75)",
              p: 8,
              borderRadius: "10px",
            }}
          >
            <CssBaseline />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                className="title"
                component="h1"
                variant="h4"
                sx={{
                  color: "white",
                  fontWeight: "600",
                  width: "100%",
                }}
              >
                Entrar
              </Typography>
            </Box>
            <Box
              component="form"
              sx={{
                mt: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              onSubmit={handleSubmit(handleSignIn)}
            >
              <TextField
                className="input-login"
                {...register("email")}
                id="filled-basic"
                variant="filled"
                fullWidth
                color="warning"
                label="E-mail"
                InputLabelProps={{
                  style: { color: "#8c8c8c" },
                }}
                inputProps={{ style: { color: "#f3f3f3" } }}
                sx={{
                  mt: 2,
                  background: "#333",
                  borderRadius: "5px",
                }}
                helperText={errors.email?.message}
                error={!!errors.email?.message}
              />
              <TextField
                className="input-password"
                {...register("password")}
                type="password"
                variant="filled"
                fullWidth
                id="filled-basic"
                color="warning"
                label="Senha"
                InputLabelProps={{
                  style: {
                    color: "#8c8c8c",
                  },
                }}
                inputProps={{ style: { color: "#f3f3f3" } }}
                sx={{
                  mt: 2,
                  background: "#333",
                  width: "80%",
                  borderRadius: "5px",
                }}
                helperText={errors.password?.message}
                error={!!errors.password?.message}
              />
              <Button
                className="button-enter"
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  "&:hover": {
                    backgroundColor: "#e50914",
                  },
                  mt: 3,
                  mb: 2,
                  bgcolor: "#e50914",
                  padding: 2,
                  fontWeight: "bold",
                  width: "80%",
                }}
              >
                Entrar
              </Button>
              <Box
                className="login-text-father"
                sx={{
                  display: "flex",
                }}
              >
                <Typography
                  className="text-login"
                  component="p"
                  variant="p"
                  sx={{ color: "#8c8c8c", width: "200px", heigth: "auto" }}
                >
                  Novo por aqui?
                </Typography>

                <Button
                  className="singup-button"
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                    backgroundColor: "transparent",
                    p: 0,
                    width: "100px",
                    color: "#f3f3f3",
                  }}
                  onClick={() => handleClick()}
                >
                  Cadastre-se
                </Button>
              </Box>
            </Box>
          </Container>
        </motion.div>
      </div>
      <footer
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.87)",
          color: "#8c8c8c",
          width: "100vw",
          height: "20vh",
          margin: "0px",
        }}
      >
        Feito com &nbsp;
        <span role="img" aria-label="coração" style={{ color: "red" }}>
          ❤️ &nbsp;
        </span>
        por Bruno Faria
        <br />
        Direitos de imagem para Netflix
        <br />
        Dados pegos do site Themoviedb.org
      </footer>
    </MainLogin>
  );
};

export default Login;
