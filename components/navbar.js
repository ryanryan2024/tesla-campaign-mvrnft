import Image from "next/image";
import Link from "next/link";
import Logo from '../public/logo.jpeg'
import {useMetamask, useAddress} from "@thirdweb-dev/react";

const Navbar = () => {
    const connectWallet = useMetamask()
    const address = useAddress()

    return (
        <div className="flex justify-between p-10">
            <div>
                <Image src={Logo} alt="logo" width={125} height={35} />
            </div>
            <div>
                <div className="pb-1 flex justify-center">
                    <div className="bg-none p-2 text-black rounded-3xl border-black border-2 hover:bg-black hover:text-white">
                        <button onClick={connectWallet}>
                            Connect Wallet
                        </button>
                    </div>
                </div>

                <div className="pb-1 flex justify-center">
                    <div className="bg-none p-2 text-black rounded-3xl border-black border-2 hover:bg-black hover:text-white">
                        <Link href="https://thirdweb.com/goerli/nft-collection/0x010f4bd0148DA072F478a1F5D841189c75dCc99c">
                            Ownerships
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar