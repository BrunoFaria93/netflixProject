import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useUser } from "../../providers/user";
import { fontWeight } from "@mui/system";
import { UserProfile } from "./styles";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ userImage }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { logout } = useUser();

  const handleLogout = () => {
    logout();
  };
  return (
    <UserProfile>
      <Button onClick={handleOpen}>
        <img src={userImage} className="logo2" alt="user-logo" />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            backgroundColor: "rgba(0,0,0,.75)",
            p: 18,
            borderRadius: "10px",
            border: "2px solid #e50914",
            margin: "0 auto",
            marginTop: "10vh",
            width: "25vw",
            height: "25vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{
              width: "55vw",
              fontSize: "2rem",
              textAlign: "center",
            }}
          >
            Deseja sair?
          </Typography>
          <Button
            onClick={() => handleLogout()}
            sx={{
              marginTop: "30px",
              padding: "10px",
              backgroundColor: "#e50914",
              color: "white",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#e50914",
              },
            }}
          >
            Sair
          </Button>
        </Box>
      </Modal>
    </UserProfile>
  );
}
