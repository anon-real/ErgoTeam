import {getErgAmount, getWalletAddress} from "./helpers";
import {getTokenP2s, issueToken} from "./issueToken";


export async function issueTeamToken(name, requiredSig, totalSig, description, ergAmount="0.1") {
  console.log('args :', name, requiredSig, totalSig, description)
  const nanoErgAmount = getErgAmount(ergAmount)
  const walletAddress = getWalletAddress()
  console.log('wallet: ', walletAddress)
  getTokenP2s(walletAddress, totalSig, nanoErgAmount)
      .then(res => {
        console.log('tokenP2s', res)
        issueToken(requiredSig, totalSig, nanoErgAmount, walletAddress, name, description, 0, res.address).then(regRes => {
          console.log('oon bibilake ke baz mishe', {
            sendAddress: res.address,
            sendModal: true,
          })

        })
      })
      .catch(err => {
        throw err
      })
}




