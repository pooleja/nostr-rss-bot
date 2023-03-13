import { generatePrivateKey, getPublicKey, nip19 } from 'nostr-tools'

let sk = generatePrivateKey() // `sk` is a hex string
let pk = getPublicKey(sk) // `pk` is a hex string
let npub = nip19.npubEncode(pk)

console.log('sk:', sk)
console.log('pk:', pk)
console.log('nip19:', npub)