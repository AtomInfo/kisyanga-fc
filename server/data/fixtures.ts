export const fixturesData = [
  // Upcoming fixtures
  {
    id: 1,
    type: 'upcoming',
    date: 'Sunday, May 15, 2023',
    time: '2:00 PM',
    homeTeam: {
      name: 'Kisyanga FC',
      shortName: 'KFC',
      logo: ''
    },
    awayTeam: {
      name: 'Lions United',
      shortName: 'LU',
      logo: ''
    },
    matchday: 8,
    venue: 'Ntare School Grounds, Mbarara'
  },
  {
    id: 2,
    type: 'upcoming',
    date: 'Sunday, May 22, 2023',
    time: '4:00 PM',
    homeTeam: {
      name: 'Thunder Stars',
      shortName: 'TS',
      logo: ''
    },
    awayTeam: {
      name: 'Kisyanga FC',
      shortName: 'KFC',
      logo: ''
    },
    matchday: 9,
    venue: 'Kampala International School'
  },
  
  // Past results
  {
    id: 3,
    type: 'result',
    date: 'Sunday, May 1, 2023',
    homeTeam: {
      name: 'Kisyanga FC',
      shortName: 'KFC',
      logo: ''
    },
    awayTeam: {
      name: 'Eagle Squad',
      shortName: 'ES',
      logo: ''
    },
    homeScore: 3,
    awayScore: 1,
    result: 'win',
    scorers: 'Mc Jim (2), Nue-ha (1)',
    matchday: 7,
    venue: 'Ntare School Grounds'
  },
  {
    id: 4,
    type: 'result',
    date: 'Sunday, April 24, 2023',
    homeTeam: {
      name: 'Royal Lions',
      shortName: 'RL',
      logo: ''
    },
    awayTeam: {
      name: 'Kisyanga FC',
      shortName: 'KFC',
      logo: ''
    },
    homeScore: 2,
    awayScore: 2,
    result: 'draw',
    scorers: 'Seth (1), Nue-ha (1)',
    matchday: 6,
    venue: 'Royal Stadium'
  }
];
