const chelseaGames = [{
    awayTeam: {
      team: 'Bayer Leverkusen',
      goals: 0,
    },
    homeTeam: {
      team: 'Chelsea',
      goals: 2,      
    }
  },
  {
    awayTeam: {
      team: 'Chelsea',
      goals: 1,     
    },
    homeTeam: {
      team: 'Valencia',
      goals: 1,      
    }
  },
  {
    homeTeam: {
      team: 'Chelsea',
      goals: 5,     
    },
    awayTeam: {
      team: 'Genk',
      goals: 0,      
    }
  },
  {
    homeTeam: {
      team: 'Genk',
      goals: 1,     
    },
    awayTeam: {
      team: 'Chelsea',
      goals: 1,      
    }
  },
  {
    awayTeam: {
      team: 'Chelsea',
      goals: 1,     
    },
    homeTeam: {
      team: 'Bayer Leverkusen',
      goals: 2,      
    }
  },
  {
    homeTeam: {
      team: 'Chelsea',
      goals: 3,     
    },
    awayTeam: {
      team: 'Valencia',
      goals: 0,     
    }
  }
]

const ulParent = document.createElement('ul');
for(let game of chelseaGames){
  const {homeTeam,awayTeam} = game;
  const gameLi = document.createElement('li');
  gameLi.innerText = `${homeTeam.team} vs ${awayTeam.team}`;
  ulParent.append(gameLi);
}

document.body.prepend(ulParent);
