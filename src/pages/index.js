import {useState} from 'react';
import {Header} from '@/components/Header/Header';
import {airdropSol, createWallet, getBalance} from '@/utils/solana';
import {useWallet} from '@/context/WalletContext';
import {useRouter} from "next/router";
import {Box, Button, Container, Status} from "@/styles/GlobalStyle";
import {DataBox} from "@/components/Header/Header.styled";


export default function Wallet() {
    const router = useRouter();
    const {wallet, setWallet, balance, setBalance} = useWallet();
    const [status, setStatus] = useState('');
    const [isError, setIsError] = useState(true);

    const handleCreateWallet = async () => {
        const newWallet = createWallet();
        setWallet(newWallet);
        const newBalance = await getBalance(newWallet.publicKey.toString());
        setBalance(newBalance);
    };

    const handleAirdrop = async () => {
        if (wallet) {
            try {
                setIsError(false)
                setStatus('Requesting airdrop...');
                await airdropSol(wallet.publicKey.toString(), 1);
                const newBalance = await getBalance(wallet.publicKey.toString());
                setBalance(newBalance);
                setIsError(false)
                setStatus('Airdrop successful!');
            } catch (error) {
                console.log(error)
                setIsError(true)
                setStatus('Airdrop failed: ' + error.message);
            }
        } else {
            setStatus('Please create a wallet first');
            setIsError(true)

            setTimeout(()=>setStatus(''), 3000)

        }
    };

    return (
        <Container>
            <Header title="Wallet">

                <Button onClick={handleCreateWallet}>Create Wallet</Button>
                <Button onClick={handleAirdrop}>Airdrop 1 SOL</Button>
                <DataBox>Balance: <div>{balance} SOL </div></DataBox>
            </Header>
            <Box>
                {wallet && (
                    <>
                        <DataBox >Address: <div>{wallet.publicKey.toString()}</div></DataBox>
                        <DataBox >Private Key: <div>{JSON.stringify(wallet.secretKey)}</div></DataBox>
                        <Button onClick={() => router.push('/transaction')}>Transaction</Button>
                    </>
                )}
                {status && <Status isError={isError}>{status}</Status>}
            </Box>
        </Container>
    );
}
