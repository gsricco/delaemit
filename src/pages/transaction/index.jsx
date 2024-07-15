import {useState} from 'react';
import {useRouter} from 'next/router';
import {Header} from '@/components/Header/Header';
import {transferSol, getBalance} from '@/utils/solana';
import {useWallet} from '@/context/WalletContext';
import {Button, Status} from "@/styles/GlobalStyle";
import {DataBox} from "@/components/Header/Header.styled";



export default function Transactions() {
    const router = useRouter();
    const {wallet, balance, setBalance} = useWallet();
    const [amount, setAmount] = useState('');
    const [toAddress, setToAddress] = useState('');
    const [status, setStatus] = useState('');
    const [isError, setIsError] = useState(true);

    const handleTransfer = async () => {
        if (wallet) {
            try {
                setIsError(false)
                setStatus('Processing transaction...');
                await transferSol(wallet, toAddress, parseFloat(amount));
                const newBalance = await getBalance(wallet.publicKey.toString());
                setBalance(newBalance);
                setStatus('Transaction successful!');
                setIsError(false)
            } catch (error) {
                setIsError(true)
                setStatus('Transaction failed: ' + error.message);

            }
        } else {
            setIsError(true)
            setStatus('Please create a wallet first');
            setTimeout(()=>setStatus(''), 3000)
        }
    };

    return (
        <div>
            <Header title="Transactions">
                <Button onClick={() => router.back()}>Back</Button>
                <DataBox>Balance: <div>{balance} SOL </div></DataBox>
            </Header>
            <div style={{textAlign:'center'}}>
                <input
                    type="number"
                    placeholder="Amount SOL"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Recipient Address"
                    value={toAddress}
                    onChange={(e) => setToAddress(e.target.value)}
                />
                <Button onClick={handleTransfer}>Send</Button>
                {status && <Status isError={isError}>{status}</Status>}
            </div>
        </div>
    )
}