import { getErgAmount, getWalletAddress } from "./helpers";
import { getTokenP2s, issueToken } from "./issueToken";
import { setSenderOpenWallet } from "../Storage/actions/Settings";

export async function issueTeamToken(
  name,
  requiredSig,
  totalSig,
  description,
  dispatch,
  ergAmount = "0.1"
) {
  const nanoErgAmount = getErgAmount(ergAmount);
  const walletAddress = getWalletAddress();
  getTokenP2s(walletAddress, totalSig, nanoErgAmount)
    .then((p2sResponse) => {
      console.log("tokenP2s", p2sResponse);
      issueToken(
        requiredSig,
        totalSig,
        nanoErgAmount,
        walletAddress,
        name,
        description,
        0,
        p2sResponse.address
      ).then((IssueResponse) => {
        dispatch(setSenderOpenWallet(true, { address: p2sResponse.address }));
        console.log("oon bibilake ke baz mishe", {
          sendAddress: p2sResponse.address,
          sendModal: true,
        });
      });
    })
    .catch((err) => {
      throw err;
    });
}
