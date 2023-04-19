const trueOrFalse = [
  {
    name: `Yes`,
    key: true
  },
  {
    name: `No`,
    key: false
  },
];


const setRates = {
  resident: {
    min: 35,
    max: 90,
  },
  qualifying: {
    min: 100,
    max: 140,
  },
  licensed: {
    min: 150,
    max: 200,
  }
}

const goals = {
  individual: [
    {
      name: `I want to improve myself`,
      key: 'self-improvement'
    },
    {
      name: `I want to get a deeper understanding of myself`,
      key: 'understand-self',
    },
    {
      name: `I've been feeling down`,
      key: 'depression'
    },
    {
      name: `I've been feeling anxious or overwhelmed`,
      key: 'anxiety'
    },
    {
      name: `I'm struggling to find purpose and meaning in my life`,
      key: 'life-purpose'
    },
    {
      name: `I've experienced trauma`,
      key: 'trauma'
    },
    {
      name: `I want support in a specific area`,
      key: 'specific challenge'
    },
    {
      name: 'I want to gain self-confidence',
      key: 'self-confidence'
    },
    {
      name: `I want to improve my relationships`,
      key: 'relationship'
    },
    {
      name: `I'm just exploring`,
      key: 'exploring',
    },
    {
      name: `What I'm looking for is not listed here`,
      key: 'other'
    },
    {
      name: `I'm not sure`,
      key: 'unsure'
    },
  ],
  couple: [
    {
      name: `We want to strengthen our relationship`,
      key: 'strengthen relationship'
    },
    {
      name: `We want a better way to resolve conflict`,
      key: 'conflict resolution',
    },
    {
      name: `We want to strengthen our communication`,
      key: `strengthen communication`,
    },
    {
      name: `Our trust has been broken`,
      key: 'broken trust'
    },
    {
      name: `We feel misunderstood or ignored`,
      key: 'miscommunication'
    },
    {
      name: `Something feels off, but we don't know why`,
      key: 'something is wrong but not sure why'
    },
    {
      name: `We experienced something devastating that's changed the way we connect with each other`,
      key: 'experienced shared trauma but altered connection'
    },
    {
      name: `We feel stuck in our patterns`,
      key: 'stuck in patterns'
    },
    {
      name: 'Our emotional intimacy has diminished',
      key: 'lack of emotional intimacy'
    },
    {
      name: `Our physical intimacy has diminished`,
      key: 'lack of physical intimacy'
    },
    {
      name: `We are just exploring`,
      key: 'just exploring',
    },
    {
      name: `We are not sure`,
      key: 'unsure'
    },
  ],
};

const therapistGoals = [
  {
    name: 'Provide me with tools',
    key: 'provide tools',
  },
  {
    name: `Teach me new skills`,
    key: 'teach new skills'
  },
  {
    name: `Challenge me`,
    key: 'challenge'
  },
  {
    name: `Assign me homework and tasks`,
    key: 'assign homework and tasks'
  },
  {
    name: `Collaborate with me`,
    key: 'collaborate'
  },
  {
    name: 'Listen to me',
    key: 'listen',
  },
  {
    name: `Explore my past`,
    key: 'explore past'
  },
  {
    name: `Teach me mindfulness`,
    key: 'teach mindfulness'
  },
  {
    name: `Instill hope`,
    key: 'instill hope'
  },
  {
    name: `Unsure/other`,
    key: 'Unsure/other'
  },
];

const coverage = [
  {
    name: 'Registered Psychotherapist (RP)',
    key: 'rp',
  },
  {
    name: `Registered Social Worker (RSW)`,
    key: 'rsw'
  },
  {
    name: `None of the above`,
    key: 'none'
  },
  {
    name: `I'm not sure`,
    key: 'unsure'
  },
];



export { 
  trueOrFalse,
  setRates,
  goals,
  therapistGoals,
  coverage,
};