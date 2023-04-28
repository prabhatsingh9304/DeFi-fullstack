import React from "react";
import { useEthers } from "@usedapp/core";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import { Theme } from "@mui/material/styles";

declare module "@mui/styles/defaultTheme" {
  interface DefaultTheme extends Theme {}
}

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(4),
    display: "flex",
    justifyContent: "flex-end",
    gap: theme.spacing(1),
  },
}));

export const Header = () => {
  const classes = useStyles();
  const { account, deactivate, activateBrowserWallet } = useEthers();
  const isConnected = account !== undefined;
  return (
    <div className={classes.container}>
      {isConnected ? (
        <Button variant="contained" onClick={deactivate}>
          Disconnect
        </Button>
      ) : (
        <Button
          color="primary"
          variant="contained"
          onClick={() => activateBrowserWallet()}
        >
          Connect
        </Button>
      )}
    </div>
  );
};
