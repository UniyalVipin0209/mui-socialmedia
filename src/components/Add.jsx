import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  IconButton,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { StyledModal, UserPostBox } from "./HeaderStyled";
import React, { useState } from "react";
import {
  Add as AddIcon,
  DateRange,
  EmojiEmotions,
  HeadsetMic,
  OndemandVideo,
  Psychology,
} from "@mui/icons-material";
const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        sx={{
          position: "fixed",
          bottom: "25px",
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
        title="Add"
      >
        <Fab aria-label="add" color="primary" variant="circular">
          <AddIcon onClick={(e) => setOpen(true)} />
        </Fab>
      </Tooltip>

      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        p={2}
        borderRadius="5"
      >
        <Box width={400} height={280} bgcolor="white" p={2}>
          <Typography variant="h6" color="gray" textAlign="center">
            Create Post
          </Typography>
          <UserPostBox>
            <Avatar
              src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              sx={{ width: 30, height: 30 }}
            />
            <Typography fontWeight={500} variant="span">
              John Doe
            </Typography>
          </UserPostBox>
          <TextField
            rows={4}
            multiline
            placeholder="What do you dislike most about my attitude?"
            sx={{
              width: "100%",
            }}
            variant="standard"
          />
          <Stack mt={2} mb={2} gap={1} direction="row">
            <EmojiEmotions color="primary" />
            <HeadsetMic color="secondary" />
            <OndemandVideo color="success" />
            <Psychology color="error" />
          </Stack>
          <ButtonGroup
            sx={{
              marginRight: "20px",
            }}
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
