const chelseaGames = [{
    awayTeam: {
      team: 'Bayer Leverkusen',
      goals: 0,
      stage: 'group'
    },
    homeTeam: {
      team: 'Chelsea',
      goals: 2,
      stage: 'group'      
    }
  },
  {
    awayTeam: {
      team: 'Chelsea',
      goals: 1,
      stage: 'group'     
    },
    homeTeam: {
      team: 'Valencia',
      goals: 1,
      stage: 'group'      
    }
  },
  {
    homeTeam: {
      team: 'Chelsea',
      goals: 5,
      stage: 'group'     
    },
    awayTeam: {
      team: 'Genk',
      goals: 0,
      stage: 'group'      
    }
  },
  {
    homeTeam: {
      team: 'Genk',
      goals: 1,
      stage: 'group'     
    },
    awayTeam: {
      team: 'Chelsea',
      goals: 1,
      stage: 'group'      
    }
  },
  {
    awayTeam: {
      team: 'Chelsea',
      goals: 1,
      stage: 'group'     
    },
    homeTeam: {
      team: 'Bayer Leverkusen',
      goals: 2,
      stage: 'group'      
    }
  },
  {
    homeTeam: {
      team: 'Chelsea',
      goals: 3,
      stage: 'group'     
    },
    awayTeam: {
      team: 'Valencia',
      goals: 0,
      stage: 'group'     
    }
  },
]
const chelseaGamesKnock = [{
  homeTeam: {
    team: 'Chelsea',
    goals: 5,
    stage: 'knock'     
  },
  awayTeam: {
    team: 'Napoli',
    goals: 4,
    stage: 'knock'     
  }
},
{
  homeTeam: {
    team: 'Chelsea',
    goals: 3,
    stage: 'knock'     
  },
  awayTeam: {
    team: 'Benfica',
    goals: 1,
    stage: 'knock'     
  }
},
{
  homeTeam: {
    team: 'Chelsea',
    goals: 3,
    stage: 'knock'     
  },
  awayTeam: {
    team: 'Barcelona',
    goals: 2,
    stage: 'knock'     
  }
},
{
  homeTeam: {
    team: 'Chelsea',
    goals: 4,
    stage: 'knock'     
  },
  awayTeam: {
    team: 'Bayern Munich',
    goals: 3,
    stage: 'knock'     
  }
}
]

const makeChart = (games) => {
	const ulParent = document.createElement('ul');
	for (let game of games) {
		const gameLi = document.createElement('li');
		gameLi.innerHTML = getScoreLine(game);
		ulParent.append(gameLi);
	}
	return ulParent;
};

const getScoreLine = ({ homeTeam, awayTeam }) => {
	const { team: homTeam, goals: homgoals } = homeTeam;
	const { team: awaTeam, goals: awagoals } = awayTeam;
	
	let scoreLine;
	if (homgoals > awagoals) {
		scoreLine = `<b>${homgoals}</b>-${awagoals}`;
	}
	else if (homgoals == awagoals) {
		scoreLine = `<b>${homgoals}-${awagoals}</b>`;
  }
  else {
    scoreLine = `${homgoals}-<b>${awagoals}</b>`;
  }

  const teamNames = `${homTeam} ${scoreLine} ${awaTeam}`;
	return `${teamNames}`;
};

const grpSection = document.querySelector('#grp');
const knokSection = document.querySelector('#knok');

const grpChart = makeChart(chelseaGames, 'group');
const knockChart = makeChart(chelseaGamesKnock, 'knock');

grpSection.append(grpChart);
knokSection.append(knockChart);