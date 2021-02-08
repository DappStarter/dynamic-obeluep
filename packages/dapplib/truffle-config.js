require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good slice obscure suspect normal note rural erosion hockey private foster general'; 
let testAccounts = [
"0xe1733132f9bd0ae682980f6da1b0fb0967c2fd90b7c5b85319a1c366adb6e6ed",
"0x5a06490b16f8a6236407a5fe9a3b8496cfb23b2ba90aa4dceab7a8e861832b7a",
"0x32310b730120ffac08fcabf32f7d1f01118367bcece11ac51968cef0556f6d24",
"0x346647ab852bc9272075e8f952b97b085616cc31debe5a199f31820fed767465",
"0xde0f1d046e3b9b32971ae2630a9472d38c623c67129bb3fd59795b09d35c8861",
"0x8787b19a7e7b13cb9525c650eb44cc308f9d603d0b51401f20a9576b952644b8",
"0x7983d22f196e3aea4ee9af6822bf4b562abf7967ec85efee34b13c7597c40c6a",
"0x58e77423d4a993517d15da82922fedc7dfab50627511bee90351b9446b4d88ea",
"0x31e371fb0cd52378b2b76bf2d4fb2ebd53565ec3c100b2271501ef7e072f5e42",
"0x3927cab8892153c105b4168b0062f578a219fc3e5b53ff42f9fda0d9025e2447"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
