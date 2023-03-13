export type Feed = {
  uri: string;
  title: string;
};

// RSS Feeds to be displayed in the app
export const feeds: Feed[] = [
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
  },
  {
    uri: 'https://www.coindesk.com/feed/',
    title: 'From CoinDesk',
  }
]
