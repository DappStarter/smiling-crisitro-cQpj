require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict hero force spot toy note miss essay inflict entry broken thank'; 
let testAccounts = [
"0xe7537ee705cd724b5fb9ad7117d2686f01fde86518e6e3c0f861e1b5fa98914f",
"0xc7134858d93c8ff7149a20a6601c48c239637c11a1aa143a104af89270a90f97",
"0x55793574742a2e1c7e76a37472fbd5294dea21fa33a0ddc5235f42d94817c457",
"0x6641ce1135682504e4f3edbf287f8c02e5a30a918546737ace8e7c42e8c05ec6",
"0xc9f3df85740366149f874c12479f37d4f6d51436889a0ac14063ede9d5d23934",
"0x67284500ff5ea5f0589eb673f8cde9f92cbcbb1efe7a8c079bafec95aa8deb92",
"0x7600bbe7c9eecefad9fef55615b2e549d039f9a7bb6fafaf8b0c88305fbf1948",
"0x2fc2fdcfbd8f1536873dfd1a1d20d42c257412b9bf1680c06ad4cac590747683",
"0xf8e0ab7f21ee05412aa3a3f81e247ee7f72d78cae0a8ec88b5d93d81f08c1f6e",
"0x888b44538276d5f4f49812a80851b03fed5a729691e6208450ae1750a83ca6b7"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

