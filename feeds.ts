export type Feed = {
  uri: string;
  title: string;
};

// RSS Feeds with changing content
export const dynamicFeeds: Feed[] = [
  {
    uri: 'https://news.ycombinator.com/rss',
    title: 'Latest from Hacker News',
  },
  {
    uri: 'https://www.reddit.com/r/Bitcoin/.rss',
    title: 'Latest from r/Bitcoin',
  },
  {
    uri: 'https://www.reddit.com/r/ethereum/.rss',
    title: 'Latest from r/Ethereum',
  },
  {
    uri: 'https://www.coindesk.com/feed/',
    title: 'From CoinDesk',
  }
]

// RSS feeds that change relatively rarely - any new ones we want to publish
export const staticFeeds: Feed[] = [
  {
    uri: 'https://noahpinion.substack.com/feed',
    title: 'Latest from Noahpinion',
  },
  {
    uri: 'https://cryptohayes.medium.com/feed',
    title: 'From Arthur Hayes',
  },
  {
    uri: 'https://doomberg.substack.com/feed',
    title: 'From Doomberg',
  },
  {
    uri: 'https://www.lynalden.com/feed/',
    title: 'From Lyn Alden',
  },
  {
    uri: 'https://stratechery.com/feed/',
    title: 'From Ben Thompson (Stratechery)',
  },
  {
    uri: 'https://blog.bitmex.com/feed/',
    title: 'From BitMEX',
  }
]


// Get more here - https://github.com/androidsx/micro-rss/blob/master/list-of-feeds.txt

