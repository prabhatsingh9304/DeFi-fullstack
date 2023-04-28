import { useEthers } from "@usedapp/core";
import helperConfig from "../helper-config.json";
import networkMapping from "../chain-info/deployments/map.json";
import { constants } from "ethers";
import brownieConfig from "../brownie-config.json";

import iit from "../icons/iit.jpg";
import eth from "../icons/eth.png";
import dai from "../icons/dai.png";
import { MyWallet } from "./wallet/MyWallet";
import { makeStyles } from "@mui/styles";

export type Token = {
  image: string;
  address: string;
  name: string;
};

const useStyles = makeStyles((theme) => ({
  title: {
    color: theme.palette.common.white,
    textAlign: "center",
    padding: theme.spacing(4),
  },
}));

export const Main = () => {
  const classes = useStyles();
  const chainId = "11155111";
  const networkName = "sapolia";
  const iitTokenAddress = chainId
    ? networkMapping[chainId]["IITToken"][0]
    : constants.AddressZero;
  const wethTokenAddress = chainId
    ? brownieConfig["networks"][networkName]["weth_token"]
    : constants.AddressZero; // brownie config
  const fauTokenAddress = chainId
    ? brownieConfig["networks"][networkName]["fau_token"]
    : constants.AddressZero;

  const supportedTokens: Array<Token> = [
    {
      image: iit,
      address: iitTokenAddress,
      name: "IIT",
    },
    {
      image: eth,
      address: wethTokenAddress,
      name: "WETH",
    },
    {
      image: dai,
      address: fauTokenAddress,
      name: "DAI",
    },
  ];
  return (
    <>
      <h2 className={classes.title}>IIT Token App</h2>
      <MyWallet supportedTokens={supportedTokens} />
    </>
  );
};
