

import {
    Connection,
    PublicKey,
    clusterApiUrl,
    Keypair,
    SystemProgram,
    Transaction,
    sendAndConfirmTransaction,
    LAMPORTS_PER_SOL
} from '@solana/web3.js';


const connection = new Connection(clusterApiUrl('devnet'));

export const createWallet = () => {
    const wallet = Keypair.generate();
    return wallet;
};

export const getBalance = async (publicKey) => {
    const balance = await connection.getBalance(new PublicKey(publicKey));
    return balance / LAMPORTS_PER_SOL; // Convert lamports to SOL
};

export const transferSol = async (fromWallet, toPublicKey, amount) => {
    const lamports = amount * LAMPORTS_PER_SOL;

    const fromBalance = await connection.getBalance(fromWallet.publicKey);
    if (fromBalance < lamports) {
        throw new Error(`Insufficient balance for the transaction. Available: ${fromBalance / LAMPORTS_PER_SOL} SOL, Required: ${amount} SOL`);
    }

    const transaction = new Transaction().add(
        SystemProgram.transfer({
            fromPubkey: fromWallet.publicKey,
            toPubkey: new PublicKey(toPublicKey),
            lamports,
        })
    );

    try {
        const signature = await sendAndConfirmTransaction(connection, transaction, [fromWallet]);
        return signature;
    } catch (error) {
        const logs = error.logs || [];
        console.error('Transaction failed:', error);
        console.error('Logs:', logs);
        throw new Error(`Transaction failed: ${error.message}. Logs: ${logs.join(', ')}`);
    }
};

export const airdropSol = async (publicKey, amount) => {
    const signature = await connection.requestAirdrop(new PublicKey(publicKey), amount * LAMPORTS_PER_SOL); // Convert SOL to lamports
    await connection.confirmTransaction(signature);
};
