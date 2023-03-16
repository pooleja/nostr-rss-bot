export type Feed = {
  uri: string;
  title: string;
};

// RSS Feeds with changing content
export const dynamicFeeds: Feed[] = [
  {
    uri: 'https://news.ycombinator.com/rss',
    title: 'From Hacker News',
  },
  {
    uri: 'https://www.reddit.com/r/Bitcoin/.rss',
    title: 'From r/Bitcoin',
  },
  {
    uri: 'https://www.reddit.com/r/ethereum/.rss',
    title: 'From r/Ethereum',
  },
  {
    uri: 'https://www.coindesk.com/feed/',
    title: 'From CoinDesk',
  },
  {
    uri: 'http://news.google.com/news?ned=us&topic=h&output=rss',
    title: 'From Google News',
  },
  // Wired
  {
    uri: 'https://www.wired.com/feed/rss',
    title: 'From Wired',
  },
  // Zero Hedge
  {
    uri: 'http://feeds.feedburner.com/zerohedge/feed',
    title: 'From Zero Hedge',
  },
  // TechCrunch
  {
    uri: 'https://techcrunch.com/feed/',
    title: 'From TechCrunch',
  },
  // Lifehacker
  {
    uri: 'https://lifehacker.com/rss',
    title: 'From Lifehacker',
  },
]

// RSS feeds that change relatively rarely - any new ones we want to publish
export const staticFeeds: Feed[] = [
  {
    uri: 'https://noahpinion.substack.com/feed',
    title: 'New Article from Noahpinion',
  },
  {
    uri: 'https://cryptohayes.medium.com/feed',
    title: 'New Article from Arthur Hayes',
  },
  {
    uri: 'https://doomberg.substack.com/feed',
    title: 'New Article from Doomberg',
  },
  {
    uri: 'https://www.lynalden.com/feed/',
    title: 'New Article from Lyn Alden',
  },
  {
    uri: 'https://stratechery.com/feed/',
    title: 'New Article from Ben Thompson (Stratechery)',
  },
  {
    uri: 'https://blog.bitmex.com/feed/',
    title: 'New Article from BitMEX',
  }
]


// Get more here - https://github.com/androidsx/micro-rss/blob/master/list-of-feeds.txt

