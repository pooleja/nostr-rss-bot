import * as dotenv from "dotenv";
import { getEventHash, getPublicKey, nip19, relayInit, signEvent } from "nostr-tools";
import 'websocket-polyfill'
import { extract } from '@extractus/feed-extractor'
import { Feed, dynamicFeeds, staticFeeds } from './feeds'

dotenv.config();

const privateKey = process.env.privateKey;
if (!privateKey) {
  throw new Error("No privateKey in .env");
}
let publicKey = getPublicKey(privateKey);

console.log("publicKey:", publicKey);
console.log('npub version of public key:', nip19.npubEncode(publicKey))

// Publish a message to the relay
const publish = async (content: string) => {
  const relay = relayInit('wss://nostr.mempoole.com')
  relay.on('connect', () => {
    console.log(`connected to ${relay.url}`)
  })
  relay.on('error', () => {
    console.log(`failed to connect to ${relay.url}`)
  })

  await relay.connect()

  const event = {
    id: '',
    sig: '',
    kind: 1,
    pubkey: publicKey,
    created_at: Math.floor(Date.now() / 1000),
    tags: [],
    content: content,
  }
  event.id = getEventHash(event)
  event.sig = signEvent(event, privateKey)

  let pub = relay.publish(event)
  console.log('publishing event to relay')
  pub.on('ok', () => {
    console.log(`${relay.url} has accepted our event`)
  })
  pub.on('failed', (reason: string) => {
    console.log(`Failed to publish to ${relay.url}: ${reason}`)
  })

  await new Promise(resolve => setTimeout(resolve, 5000));

  await relay.close();
}

const getRandomFeed = async (feeds: Feed[]) => {
  return feeds[Math.floor(Math.random() * feeds.length)];
}

const getRandomItemFromFeed = async (feed: Feed) => {
  const data = await extract(feed.uri);
  if (!data.entries) {
    console.log("No entries in feed " + data);
    return null;
  }

  return data.entries[Math.floor(Math.random() * data.entries.length)];
}

const pickRandomDynamicFeed = async () => {
  console.log('Picking a random dynamic feed...')
  const feed = await getRandomFeed(dynamicFeeds);
  if (!feed) {
    return;
  }
  console.log('Using ' + feed.title + ' ' + feed.uri)
  try {
    const entry = await getRandomItemFromFeed(feed);
    if (!entry) {
      return;
    }
    console.log('Publishing: ' + feed.title + "\n\n" + entry.title + " " + entry.link + '')
    await publish(feed.title + "\n\n" + entry.title + " " + entry.link);
  } catch (e) {
    console.log('Error: ' + e)
  }
}

const checkForStaticFeeds = async () => {
  console.log('Checking for new static feeds...')
  staticFeeds.forEach(async (feed) => {
    const data = await extract(feed.uri);
    if (!data.entries) {
      console.log('No entries in feed ' + data);
      return
    }

    data.entries.forEach(async (entry) => {
      // Check if the entry was published in the last hour
      if (entry.published! > new Date(Date.now() - 60 * 60 * 1000)) {
        console.log('Publishing: ' + feed.title + "\n\n" + entry.title + " " + entry.link + '')
        await publish(feed.title + "\n\n" + entry.title + " " + entry.link);
      }
    })
  })
}

const main = async () => {
  // Run a random feed every 1 hour
  setInterval(pickRandomDynamicFeed, 1 * 60 * 60 * 1000); // 1 hour

  // Wait 15 minutes and then check for static feeds
  setTimeout(async () => {
    // Check for new static content every hour
    setInterval(checkForStaticFeeds, 1 * 60 * 60 * 1000); // 1 hour
  }, 15 * 60 * 1000); // 15 minutes
}

main();