import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
    return (
        <ThirdwebProvider desiredChainId={ChainId.Goerli} chainRpc={{[ChainId.Goerli]: 'https://goerli.infura.io/v3/9baab33bcd46485c96f25fd1f34c4f38'}}>

            <Component {...pageProps} />
        </ThirdwebProvider>
    )
}

export default MyApp
