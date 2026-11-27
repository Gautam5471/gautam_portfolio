export const profile = {
  name: 'Gautam Kumar',
  role: 'Developer & Open-source Contributor',
  intro: "I build web applications, solve problems, and contribute to software used by real people. Currently pursuing B.Tech in Computer Science and Engineering (AI/ML) at Mirai School of Technology.",
  location: 'Delhi NCR, India',
  graduation: '2029',
  links: {
    github: 'https://github.com/Gautam5471',
    linkedin: 'https://www.linkedin.com/in/gautam-kumar-a8a57535b/',
    leetcode: 'https://leetcode.com/u/Gautam5471/',
    codeforces: 'https://codeforces.com/profile/gautamkumar5471',
    codechef: 'https://www.codechef.com/users/gautam_5471',
    email: 'mailto:'
  }
};

export const skills = [
  { group: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React'] },
  { group: 'Backend & Database', items: ['Node.js', 'Express', 'MongoDB'] },
  { group: 'Languages & Tools', items: ['C++', 'Python', 'Git', 'GitHub', 'VS Code'] }
];

export const projects = [
  {
    name: 'Weather Detector',
    description: 'A web application that displays weather information through a simple, focused interface.',
    tags: ['Frontend', 'JavaScript', 'Weather'],
    live: 'https://gautam5471.github.io/weather.com2/',
    source: 'https://github.com/Gautam5471/weather.com2'
  },
  {
    name: 'Healthcare Website',
    description: 'A healthcare-focused website built as part of my web development journey.',
    tags: ['Frontend', 'Web Design'],
    live: 'https://gautam5471.github.io/healtcare.com/',
    source: 'https://github.com/Gautam5471/healtcare.com'
  }
];

export const contributions = [
  {
    repo: 'EGC',
    title: 'Protect OpenCode Configuration Files',
    detail: 'Improved security by protecting OpenCode configuration files across supported MCP registration locations.',
    url: 'https://github.com/Fmarzochi/EGC/pull/1970',
    type: 'Security'
  },
  {
    repo: 'claude-soma-lite',
    title: 'Enqueue Configuration Validation Warning',
    detail: 'Added clear warnings and regression tests when soma.json cannot be loaded, preserving existing enqueue behavior.',
    url: 'https://github.com/techfreakworm/claude-soma-lite/pull/74',
    type: 'Bug fix · Tests'
  },
  {
    repo: 'Leavy',
    title: 'Jest Setup & Formatting Tests',
    detail: 'Set up Jest with jest-expo, added unit tests for formatting helpers and leave-time status logic, and documented verification.',
    url: 'https://github.com/langchengit/leavy/pull/7',
    type: 'Testing'
  },
  {
    repo: 'KanaDojo',
    title: 'Shoji Glow Theme',
    detail: 'Added a new community color theme.',
    url: 'https://github.com/lingdojo/kana-dojo/pull/32190',
    type: 'UI'
  },
  {
    repo: 'Project Room',
    title: 'Documentation Link Exceptions',
    detail: 'Removed obsolete exceptions for missing documentation links.',
    url: 'https://github.com/Uuriko/project-room/pull/2803',
    type: 'Maintenance'
  },
  {
    repo: 'PACT OS',
    title: 'Habit Name Validation',
    detail: 'Added a 100-character habit-name limit with boundary validation tests.',
    url: 'https://github.com/TheVicky1/Pact_OS/pull/521',
    type: 'Validation'
  }
];

export const openPullRequests = [
  ['ToolJet', 'Zoho Books marketplace plugin', 'https://github.com/Gautam5471/ToolJet/pull/1'],
  ['KanaDojo', 'Add a new Japan fact', 'https://github.com/lingdojo/kana-dojo/pull/32217'],
  ['Pipedream', 'eBay listing and offer management actions', 'https://github.com/PipedreamHQ/pipedream/pull/22194'],
  ['Rocket.Chat', 'Fix search in post attachments', 'https://github.com/RocketChat/Rocket.Chat/pull/42622'],
  ['First Contributions', 'Clarify upstream workflow', 'https://github.com/firstcontributions/first-contributions/pull/126068'],
  ['OpenFoodFacts', 'Apply price card glow-up to Price XP sections', 'https://github.com/openfoodfacts/smooth-app/pull/7822']
];
