import {WalletProvider} from '@/context/WalletContext';
import {GlobalStyles} from "@/styles/GlobalStyle";
import {useClient} from "@/components/hooks/useClient";

function MyApp({Component, pageProps}) {
    const client = useClient()

    return (
        client && (
            <WalletProvider>
                <GlobalStyles/>
                <Component {...pageProps} />
            </WalletProvider>
        )
    )
}

export default MyApp;
