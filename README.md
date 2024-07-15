# Delaemit

## Описание

Веб-приложение для создания крипто кошелька и перевода средств в dev сети Solana.

## Создание кошелька и пополнение

Создайте кошелек, нажав на кнопку "Create Wallet".

Запишите адрес и private key.


Нажмите на кнопку "Airdrop 1 SOL" для пополнения кошелька.
или
Перейдите по --url https://api.devnet.solana.com и Пополните кошелек через CLI:
solana airdrop 1 <YOUR_WALLET_ADDRESS>

## Перевод средств

Перейдите на страницу "Transactions".
Введите количество SOL и адрес получателя.
Нажмите "Send" для выполнения транзакции.


## Установка

```sh
git clone https://github.com/gsricco/delaemit.git
cd delaemit
npm install
npm run dev

При необходимости:
npm run build 
npm start



