import { createThirdwebClient } from "thirdweb";
import { inAppWallet, createWallet } from "thirdweb/wallets";

const clientId = process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID;
const secretKey = process.env.NEXT_PUBLIC_THIRDWEB_SECRET_KEY;

if (!clientId) {
  throw new Error("No client ID provided. Please add NEXT_PUBLIC_THIRDWEB_CLIENT_ID to your .env.local file");
}

export const thirdwebClient = createThirdwebClient({
  clientId: clientId,
  ...(secretKey && { secretKey: secretKey }),
});

export const wallets = [
  inAppWallet({
    auth: {
      options: ["google", "facebook", "telegram", "email", "x", "passkey"],
    },
  }),
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  createWallet("me.rainbow"),
  createWallet("io.rabby"),
  createWallet("io.zerion.wallet"),
];