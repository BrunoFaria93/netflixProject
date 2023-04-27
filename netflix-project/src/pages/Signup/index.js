import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toast } from "react-toastify";
import { Link, useHistory } from "react-router-dom";
import {
  Container,
  Button,
  TextField,
  CssBaseline,
  Box,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import logo from "../../assets/images/netflix-logo.png";
import { Footer, MainSignup } from "./styles";

const Signup = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().email("Email inválido").required("Email obrigatório"),
    password: yup
      .string()
      .min(6, "Mínimo de 6 digitos")
      .required("Senha obrigatória"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senha estão diferentes")
      .required("Senha obrigatória"),
  });

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitFuncion = ({ name, email, password }) => {
    const user = { name, email, password };
    api
      .post("/users/", user)
      .then((response) => {
        toast.success("Sucesso ao criar a conta.");
        history.push("/");
      })
      .catch((err) => {
        toast.error("Email já cadastrado");
      });
  };

  return (
    <MainSignup className="main-signup">
      <div className="container">
        <div className="logo">
          <img src={logo} style={{ width: "200px" }} alt="logo" />
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
              paddingY: 5,
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
                Cadastro
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
              onSubmit={handleSubmit(onSubmitFuncion)}
            >
              <TextField
                {...register("name")}
                id="filled-basic"
                variant="filled"
                color="warning"
                fullWidth
                label="Nome"
                inputProps={{ style: { color: "#f3f3f3" } }}
                sx={{
                  mt: 2,
                  background: "#333",
                  color: "#999999",
                  width: "80%",
                  borderRadius: "5px",
                }}
                InputLabelProps={{
                  style: { color: "#8c8c8c" },
                }}
                helperText={errors.name?.message}
                error={!!errors.name?.message}
              />
              <TextField
                {...register("email")}
                id="filled-basic"
                variant="filled"
                inputProps={{ style: { color: "#f3f3f3" } }}
                InputLabelProps={{
                  style: { color: "#8c8c8c" },
                }}
                color="warning"
                fullWidth
                label="Email"
                sx={{
                  mt: 2,
                  background: "#333",
                  color: "#999999",
                  width: "80%",
                  borderRadius: "5px",
                }}
                helperText={errors.email?.message}
                error={!!errors.email?.message}
              />

              <Box
                component="div"
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-around",
                }}
              ></Box>
              <TextField
                type="password"
                {...register("password")}
                id="filled-basic"
                variant="filled"
                color="warning"
                fullWidth
                inputProps={{ style: { color: "#f3f3f3" } }}
                InputLabelProps={{
                  style: { color: "#8c8c8c" },
                }}
                label="Senha"
                sx={{
                  mt: 2,
                  background: "#333",
                  color: "#999999",
                  width: "80%",
                  borderRadius: "5px",
                }}
                helperText={errors.password?.message}
                error={!!errors.password?.message}
              />

              <TextField
                type="password"
                {...register("passwordConfirm")}
                id="filled-basic"
                variant="filled"
                color="warning"
                fullWidth
                inputProps={{ style: { color: "#f3f3f3" } }}
                InputLabelProps={{
                  style: { color: "#8c8c8c" },
                }}
                label="Confirmar Senha"
                sx={{
                  mt: 2,
                  background: "#333",
                  color: "#999999",
                  width: "80%",
                  borderRadius: "5px",
                }}
                helperText={errors.passwordConfirm?.message}
                error={!!errors.passwordConfirm?.message}
              />

              <Button
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
                Cadastrar
              </Button>
              <Link style={{ textDecoration: "none", color: "#8c8c8c" }} to="/">
                Voltar
              </Link>
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
      {/* <Footer>
        Feito com &nbsp;
        <span role="img" aria-label="coração" style={{ color: "red" }}>
          ❤️ &nbsp;
        </span>
        por Bruno Faria
        <br />
        Direitos de imagem para Netflix
        <br />
        Dados pegos do site Themoviedb.org
      </Footer> */}
    </MainSignup>
  );
};
export default Signup;
