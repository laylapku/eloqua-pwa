const speeches = [
  {
    id: "1",
    speakerId: "1",
    theme: "Civil Rights",
    title: "I Have a Dream",
    date: "28 August 1963",
    url: "http://localhost:3000/assets/KingIHaveaDream.mp3"
  },
  {
    id: "2",
    speakerId: "2",
    theme: "Inauguration",
    title: "Presidential Inaugural Address",
    date: "20 January 1961",
    url: "http://localhost:3000/assets/JFKInauguralAddress.mp3"
  },
  {
    id: "3",
    speakerId: "8",
    theme: "Motivation,Commencement",
    title: "Stanford Speech",
    date: "12 June 2005",
    url: "http://localhost:3000/assets/JobsStanfordSpeech.mp3"
  },
  {
    id: "4",
    speakerId: "5",
    theme: "Inauguration",
    title: "Presidential Inaugural Address",
    date: "20 January 2009",
    url: "http://localhost:3000/assets/ObamaInauguralAddress.mp3"
  },
  {
    id: "5",
    speakerId: "7",
    theme: "War",
    title: "Blood, Toil, Tears and Sweat",
    date: "13 May 1940",
    url: "http://localhost:3000/assets/ChurchillBloodToilTearsandSweat.mp3"
  },
  {
    id: "6",
    speakerId: "14",
    theme: "Civil Rights",
    title: "We Shall Overcome",
    date: "15 March 1965",
    url: "http://localhost:3000/assets/LBJWeShallOvercome.mp3"
  },
  {
    id: "7",
    speakerId: "3",
    theme: "Inauguration",
    title: "First Inaugural Address",
    date: "4 March 1933",
    url: "http://localhost:3000/assets/FDRFirstInauguralAddress.mp3"
  },
  {
    id: "8",
    speakerId: "4",
    theme: "War",
    title: "Gettysburg Address(Read by Sam Waterson)",
    date: "19 November 1863",
    url: "http://localhost:3000/assets/LincolnGettysburgAddressByWaterson.mp3"
  },
  {
    id: "9",
    speakerId: "11",
    theme: "Politics",
    title: "Checkers",
    date: "23 September 1952",
    url: "http://localhost:3000/assets/NixonCheckers.mp3"
  },
  {
    id: "10",
    speakerId: "13",
    theme: "Civil Rights",
    title: "Democratic National Convention Keynote Address",
    date: "12 July 1976",
    url: "http://localhost:3000/assets/BarbaraJordan1976dnc.mp3"
  },
  {
    id: "11",
    speakerId: "6",
    theme: "Politics",
    title: "A Time for Choosing",
    date: "27 October 1964",
    url: "http://localhost:3000/assets/ReaganATimeforChoosing.mp3"
  },
  {
    id: "12",
    speakerId: "23",
    theme: "Motivation",
    title: "Duty, Honor, Country",
    date: "12 May 1962",
    url: "http://localhost:3000/assets/"
  },
  {
    id: "13",
    speakerId: "10",
    theme: "Politics",
    title: "Atoms for Peace",
    date: "8 December 1953",
    url: "http://localhost:3000/assets/EisenhowerAtomforPeace.mp3"
  },
  {
    id: "14",
    speakerId: "17",
    theme: "Acknowledgement",
    title: "Speech Accepting the Nobel Prize in Literature",
    date: "December 10, 1950",
    url: "http://localhost:3000/assets/"
  },
  {
    id: "15",
    speakerId: "6",
    theme: "Science",
    title: 'The Space Shuttle "Challenger" Tragedy Address',
    date: "28 January 1986",
    url: "http://localhost:3000/assets/"
  },
  {
    id: "16",
    speakerId: "18",
    theme: "War,Civil Rights",
    title: "The Perils of Indifference",
    date: "12 April 1999",
    url: "http://localhost:3000/assets/"
  },
  {
    id: "17",
    speakerId: "26",
    theme: "Acknowledgement",
    title: "Keynote Address at the 54th National Prayer Breakfast",
    date: "2 February 2006",
    url: "http://localhost:3000/assets/BonoPrayerBreakfastSpeech.mp3"
  },
  {
    id: "18",
    speakerId: "16",
    theme: "Civil Rights,Women",
    title: "Women's Rights are Civil Rights",
    date: "5 September 1995",
    url: "http://localhost:3000/assets/"
  },
  {
    id: "19",
    speakerId: "21",
    theme: "Commencement",
    title: "Commencement Address at Wellesley College",
    date: "1 June 1990",
    url: "http://localhost:3000/assets/"
  },
  {
    id: "20",
    speakerId: "5",
    theme: "Civil Rights",
    title: "A More Perfect Union",
    date: "18 March 2008",
    url: "http://localhost:3000/assets/"
  },
  {
    id: "21",
    speakerId: "27",
    theme: "Civil Rights",
    title: "Quit India",
    date: "8 August 1942",
    url: "http://localhost:3000/assets/"
  },
  {
    id: "22",
    speakerId: "10",
    theme: "Farewell",
    title: "Farewell Address",
    date: "17 January 1961",
    url: "http://localhost:3000/assets/EisenhowerFarewellAddress.mp3"
  },
  {
    id: "23",
    speakerId: "6",
    theme: "Politics",
    title: "Tear Down This Wall",
    date: "12 June 1987",
    url: "http://localhost:3000/assets/ReaganTearDownThisWall.mp3"
  },
  {
    id: "24",
    speakerId: "20",
    theme: "Politics",
    title: "9/11 Address to the Nation",
    date: "11 September 2001",
    url: "http://localhost:3000/assets/"
  },
  {
    id: "25",
    speakerId: "15",
    theme: "Farewell",
    title: "Farewell Address",
    date: "18 January 2001",
    url: "http://localhost:3000/assets/"
  },
  {
    id: "26",
    speakerId: "23",
    theme: "Farewell",
    title: "Farewell Address to Congress",
    date: "19 April 1951",
    url: "http://localhost:3000/assets/MacArthurFarewellAddress.mp3"
  },
  {
    id: "27",
    speakerId: "1",
    theme: "Civil Rights,Motivation",
    title: "I've Been to the Mountaintop",
    date: "3 April 1968",
    url: "http://localhost:3000/assets/KingMountainTop.mp3"
  },
  {
    id: "28",
    speakerId: "11",
    theme: "War",
    title: "The Great Silent Majority",
    date: "3 November 1969",
    url: "http://localhost:3000/assets/NixonSilentMajority.mp3"
  },
  {
    id: "29",
    speakerId: "6",
    theme: "Inauguration",
    title: "First Inaugural Address",
    date: "20 January 1981",
    url: "http://localhost:3000/assets/ReaganFirstInauguralAddress.mp3"
  },
  {
    id: "30",
    speakerId: "2",
    theme: "Commencement,Motivation",
    title: "American University Commencement Address",
    date: "10 June 1963",
    url: "http://localhost:3000/assets/JFKAmericanUniversityCommencement.mp3"
  },
  {
    id: "31",
    speakerId: "2",
    theme: "War",
    title: "Cuban Missile Crisis Address to the Nation",
    date: "22 October 1962",
    url: "http://localhost:3000/assets/JFKCubanMissileCrisis.mp3"
  },
  {
    id: "32",
    speakerId: "12",
    theme: "Farewell",
    title: "Farewell to Baseball Address",
    date: "4 July 1939",
    url: "http://localhost:3000/assets/"
  },
  {
    id: "33",
    speakerId: "9",
    theme: "Commencement,Motivation",
    title: "Harvard Commencement Speech",
    date: "7 June 2007",
    url: "http://localhost:3000/assets/GatesHarvardCommencementSpeech.mp3"
  },
  {
    id: "34",
    speakerId: "22",
    theme: "Commencement,Motivation",
    title: "University of Michigan Commencement Address",
    date: "2 May 2009",
    url: "http://localhost:3000/assets/"
  },
  {
    id: "35",
    speakerId: "28",
    theme: "Religion",
    title: "Address in Support of Religious Tolerance and New York City Mosque",
    date: "3 August 2010",
    url: "http://localhost:3000/assets/BloombergNYMosque.mp3"
  },
  {
    id: "36",
    speakerId: "25",
    theme: "Campaign",
    title: "2016 Democratic National Convention Speech",
    date: "26 Jul 2016",
    url: "http://localhost:3000/assets/"
  },
  {
    id: "37",
    speakerId: "30",
    theme: "Commencement",
    title: "USC Commencement Speech",
    date: "16 May 2014",
    url: "http://localhost:3000/assets/"
  },
  {
    id: "38",
    speakerId: "3",
    theme: "War",
    title: "Pearl Harbor Address to the Nation",
    date: "8 December 1941",
    url: "http://localhost:3000/assets/FDRPearlHarborAddress.mp3"
  },
  {
    id: "39",
    speakerId: "29",
    theme: "Commencement,Motivation",
    title: "Princeton University Commencement Speech",
    date: "30 May 2010",
    url: "http://localhost:3000/assets/BezosPrincetonSpeech.mp3"
  },
  {
    id: "40",
    speakerId: "19",
    theme: "Politics",
    title: "The Arrogance of Power",
    date: "19 March 2003",
    url: "http://localhost:3000/assets/ByrdArroganceofPower.mp3"
  },
  {
    id: "41",
    speakerId: "24",
    theme: "Civil Rights",
    title: "On the Adoption of the Universal Declaration of Human Rights",
    date: "9 December 1948",
    url: "http://localhost:3000/assets/ERooseveltHumanRights.mp3"
  },
  {
    id: "42",
    speakerId: "7",
    theme: "War",
    title: "We Shall Fight on the Beaches",
    date: "4 June 1940",
    url: "http://localhost:3000/assets/"
  },
  {
    id: "",
    speakerId: "",
    theme: "",
    title: "",
    date: "",
    url: ""
  },
  {
    id: "",
    speakerId: "",
    theme: "",
    title: "",
    date: "",
    url: ""
  },
  {
    id: "",
    speakerId: "",
    theme: "",
    title: "",
    date: "",
    url: ""
  },
  {
    id: "",
    speakerId: "",
    theme: "",
    title: "",
    date: "",
    url: ""
  },
  {
    id: "",
    speakerId: "",
    theme: "",
    title: "",
    date: "",
    url: ""
  }
];

export default speeches;
