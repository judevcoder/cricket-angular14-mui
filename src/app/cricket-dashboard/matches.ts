export interface Match {
  date: string;
  type: 'LIVE' | 'COMPLETED' | 'UPCOMING';
  title: string;
  time?: string;
  description: string;
  team1: string;
  team2: string;
  team1Country: string;
  team2Country: string;
}

export const lives: Match[] = [
  {
    date: '23 - 27 Feb 23',
    type: 'LIVE',
    title: 'New Zealand trail England by 4 runs with 7 wickets remaining',
    description: 'New Zealand v England Tesst - Men * 2nd Test * Basin Reserve, Wellington',
    team1: 'https://www.cricket.com.au/-/media/3696D6AC3EF540F7A049BBFE0B728BF8.ashx?h=300',
    team1Country: 'NewZealand',
    team2: 'https://www.cricket.com.au/-/media/5D7AFC5909E34C5C8947C7332ED21448.ashx?h=300',
    team2Country: 'England',
  },
  {
    date: '23 - 27 Feb 23',
    type: 'LIVE',
    title: 'New Zealand trail England by 4 runs with 7 wickets remaining',
    description: 'New Zealand v England Tesst - Men * 2nd Test * Basin Reserve, Wellington',
    team1: 'https://www.cricket.com.au/-/media/3696D6AC3EF540F7A049BBFE0B728BF8.ashx?h=300',
    team1Country: 'NewZealand',
    team2: 'https://www.cricket.com.au/-/media/5D7AFC5909E34C5C8947C7332ED21448.ashx?h=300',
    team2Country: 'England',
  }
];

export const completes: Match[] = [
  {
    date: '26 Feb 23',
    type: 'COMPLETED',
    title: 'Australia Women win by 19 runs',
    description: `ICC Women's T20 World Cup 2023 * Final * Newlands, Cape Town`,
    team1: 'https://www.cricket.com.au/-/media/3696D6AC3EF540F7A049BBFE0B728BF8.ashx?h=300',
    team1Country: 'NewZealand',
    team2: 'https://www.cricket.com.au/-/media/5D7AFC5909E34C5C8947C7332ED21448.ashx?h=300',
    team2Country: 'England',
  }
]

export const upcomings: Match[] = [
  {
    date: '28 - 04 Mar 23',
    type: 'UPCOMING',
    title: 'Teams will be announced at the toss',
    description: 'South Africa v West Indies Tests - Men * 1st Test * SuperSport Park, Centurion',
    team1: 'https://www.cricket.com.au/-/media/3696D6AC3EF540F7A049BBFE0B728BF8.ashx?h=300',
    team1Country: 'NewZealand',
    team2: 'https://www.cricket.com.au/-/media/5D7AFC5909E34C5C8947C7332ED21448.ashx?h=300',
    team2Country: 'England',
  }
]
