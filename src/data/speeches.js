const speeches = [
  {
    id: "1",
    speakerId: "1",
    category: "Sermon,Political,Inspirational",
    title: "I Have a Dream",
    date: "28 August 1963",
    url: "http://localhost:3000/assets/KingIHaveaDream.mp3"
  },
  {
    id: "2",
    speakerId: "2",
    category: "Inauguration,Political",
    title: "Inaugural Address",
    date: "20 January 1961",
    url: "http://localhost:3000/assets/JFKInauguralAddress.mp3"
  },
  {
    id: "3",
    speakerId: "6",
    category: "Political",
    title: "A Time for Choosing",
    date: "27 October 1964",
    url: "http://localhost:3000/assets/ReaganATimeforChoosing.mp3"
  },
  {
    id: "4",
    speakerId: "5",
    category: "Inauguration,Political",
    title: "First Inaugural Address",
    date: "20 January 2009",
    url: "http://localhost:3000/assets/ObamaInauguralAddress.mp3"
  },
  {
    id: "5",
    speakerId: "7",
    category: "War & Revolution",
    title: "Blood, Toil, Tears and Sweat",
    date: "13 May 1940",
    url: "http://localhost:3000/assets/ChurchillBloodToilTearsandSweat.mp3"
  },

  {
    id: "6",
    speakerId: "14",
    category: "Political,Social Responsibility",
    title: "We Shall Overcome",
    date: "15 March 1965",
    url: "http://localhost:3000/assets/LBJWeShallOvercome.mp3"
  },
  {
    id: "7",
    speakerId: "3",
    category: "Inauguration,Political",
    title: "First Inaugural Address",
    date: "4 March 1933",
    url: "http://localhost:3000/assets/FDRFirstInauguralAddress.mp3"
  },
  {
    id: "8",
    speakerId: "4",
    category: "Memorial,War & Revolution",
    title: "Gettysburg Address (Read by Sam Waterson)",
    date: "19 November 1863",
    url: "http://localhost:3000/assets/LincolnGettysburgAddressByWaterson.mp3"
  },
  {
    id: "9",
    speakerId: "11",
    category: "Political",
    title: "Checkers",
    date: "23 September 1952",
    url: "http://localhost:3000/assets/NixonCheckers.mp3"
  },
  {
    id: "10",
    speakerId: "13",
    category: "Social Responsibility,Political",
    title: "Democratic National Convention Keynote Address",
    date: "12 July 1976",
    url: "http://localhost:3000/assets/BarbaraJordan1976dnc.mp3"
  },
  {
    id: "11",
    speakerId: "8",
    category: "Inspirational,Commencement",
    title: "Stanford University Speech",
    date: "12 June 2005",
    url: "http://localhost:3000/assets/JobsStanfordSpeech.mp3"
  },
  {
    id: "12",
    speakerId: "23",
    category: "Patriotic,Inspirational",
    title: "Duty, Honor, Country",
    date: "12 May 1962",
    url: "http://localhost:3000/assets/MacArthurDutyHonorCountry.mp3"
  },
  {
    id: "13",
    speakerId: "10",
    category: "Political",
    title: "Atoms for Peace",
    date: "8 December 1953",
    url: "http://localhost:3000/assets/EisenhowerAtomforPeace.mp3"
  },
  {
    id: "14",
    speakerId: "17",
    category: "Acknowledgement,Inspirational",
    title: "Speech Accepting the Nobel Prize in Literature",
    date: "December 10, 1950",
    url: "http://localhost:3000/assets/FaulknerNobelPrizeAcceptanceSpeech.mp3"
  },
  {
    id: "15",
    speakerId: "6",
    category: "Tributes & Eulogies",
    title: 'The Space Shuttle "Challenger" Tragedy Address',
    date: "28 January 1986",
    url: "http://localhost:3000/assets/ReaganShuttleChallenger.mp3"
  },
  {
    id: "16",
    speakerId: "18",
    category: "Social Responsibility,Inspirational",
    title: "The Perils of Indifference",
    date: "12 April 1999",
    url: "http://localhost:3000/assets/WieselPerilsOfIndifference.mp3"
  },
  {
    id: "17",
    speakerId: "26",
    category: "Acknowledgement,Inspirational",
    title: "Keynote Address at the 54th National Prayer Breakfast",
    date: "2 February 2006",
    url: "http://localhost:3000/assets/BonoPrayerBreakfastSpeech.mp3"
  },
  {
    id: "18",
    speakerId: "16",
    category: "Political,Social Responsibility",
    title: "Women's Rights are Civil Rights",
    date: "5 September 1995",
    url: "http://localhost:3000/assets/HClintonWomen'sRights.mp3"
  },
  {
    id: "19",
    speakerId: "21",
    category: "Commencement,Inspirational",
    title: "Commencement Address at Wellesley College",
    date: "1 June 1990",
    url: "http://localhost:3000/assets/BBushWellesleyCommencement.mp3"
  },
  {
    id: "20",
    speakerId: "5",
    category: "Political,Social Responsibility",
    title: "A More Perfect Union",
    date: "18 March 2008",
    url: "http://localhost:3000/assets/ObamaAMorePerfectUnion.mp3"
  },
  {
    id: "21",
    speakerId: "27",
    category: "Acknowledgement,Social Responsibility,Inspirational",
    title: "2018 Golden Globes Speech",
    date: "8 August 1942",
    url: "http://localhost:3000/assets/Winfrey2018GoldenGlobesSpeech.mp3"
  },
  {
    id: "22",
    speakerId: "10",
    category: "Farewell",
    title: "Farewell Address",
    date: "17 January 1961",
    url: "http://localhost:3000/assets/EisenhowerFarewellAddress.mp3"
  },
  {
    id: "23",
    speakerId: "6",
    category: "Political,Social Responsibility",
    title: "Tear Down This Wall",
    date: "12 June 1987",
    url: "http://localhost:3000/assets/ReaganTearDownThisWall.mp3"
  },
  {
    id: "24",
    speakerId: "20",
    category: "Tributes & Eulogies,Patriotic,War & Revolution",
    title: "9/11 Address to the Nation",
    date: "11 September 2001",
    url: "http://localhost:3000/assets/Bush9-11Address.mp3"
  },
  {
    id: "25",
    speakerId: "15",
    category: "Farewell",
    title: "Farewell Address",
    date: "18 January 2001",
    url: "http://localhost:3000/assets/ClintonFarewellAddress.mp3"
  },
  {
    id: "26",
    speakerId: "23",
    category: "Farewell",
    title: "Farewell Address to Congress",
    date: "19 April 1951",
    url: "http://localhost:3000/assets/MacArthurFarewellAddress.mp3"
  },
  {
    id: "27",
    speakerId: "1",
    category: "Sermon,Political",
    title: "I've Been to the Mountaintop",
    date: "3 April 1968",
    url: "http://localhost:3000/assets/KingMountainTop.mp3"
  },
  {
    id: "28",
    speakerId: "11",
    category: "War & Revolution,Patriotic,Political",
    title: "The Great Silent Majority",
    date: "3 November 1969",
    url: "http://localhost:3000/assets/NixonSilentMajority.mp3"
  },
  {
    id: "29",
    speakerId: "6",
    category: "Inauguration,Political",
    title: "First Inaugural Address",
    date: "20 January 1981",
    url: "http://localhost:3000/assets/ReaganFirstInauguralAddress.mp3"
  },
  {
    id: "30",
    speakerId: "2",
    category: "Commencement,Inspirational",
    title: "American University Commencement Address",
    date: "10 June 1963",
    url: "http://localhost:3000/assets/JFKAmericanUniversityCommencement.mp3"
  },
  {
    id: "31",
    speakerId: "2",
    category: "War & Revolution,Political",
    title: "Cuban Missile Crisis Address to the Nation",
    date: "22 October 1962",
    url: "http://localhost:3000/assets/JFKCubanMissileCrisis.mp3"
  },
  {
    id: "32",
    speakerId: "30",
    category: "Farewell,Inspirational",
    title: "Farewell to Baseball Address",
    date: "4 July 1939",
    url: "http://localhost:3000/assets/GehrigFarewellSpeech.mp3"
  },
  {
    id: "33",
    speakerId: "9",
    category: "Commencement,Inspirational",
    title: "Harvard Commencement Speech",
    date: "7 June 2007",
    url: "http://localhost:3000/assets/GatesHarvardCommencementSpeech.mp3"
  },
  {
    id: "34",
    speakerId: "22",
    category: "Commencement,Inspirational",
    title: "University of Michigan Commencement Address",
    date: "2 May 2009",
    url: "http://localhost:3000/assets/PageUniversityofMichiganCommencement.mp3"
  },
  {
    id: "35",
    speakerId: "28",
    category: "Political,Social Responsibility",
    title: "Address in Support of Religious Tolerance and New York City Mosque",
    date: "3 August 2010",
    url: "http://localhost:3000/assets/BloombergNYMosque.mp3"
  },
  {
    id: "36",
    speakerId: "25",
    category: "Political,Social Responsibility",
    title: "2016 Democratic National Convention Speech",
    date: "26 Jul 2016",
    url: "http://localhost:3000/assets/MObama2016DNCSpeech.mp3"
  },
  {
    id: "37",
    speakerId: "32",
    category: "Commencement,Inspirational",
    title: "USC Commencement Speech",
    date: "16 May 2014",
    url: "http://localhost:3000/assets/MuskUSCCommencement2014.mp3"
  },
  {
    id: "38",
    speakerId: "3",
    category: "War & Revolution,Patriotic",
    title: "Pearl Harbor Address to the Nation",
    date: "8 December 1941",
    url: "http://localhost:3000/assets/FDRPearlHarborAddress.mp3"
  },
  {
    id: "39",
    speakerId: "31",
    category: "Commencement,Inspirational",
    title: "Princeton University Commencement Speech",
    date: "30 May 2010",
    url: "http://localhost:3000/assets/BezosPrincetonSpeech.mp3"
  },
  {
    id: "40",
    speakerId: "19",
    category: "Political,Social Responsibility",
    title: "The Arrogance of Power",
    date: "19 March 2003",
    url: "http://localhost:3000/assets/ByrdArroganceofPower.mp3"
  },
  {
    id: "41",
    speakerId: "24",
    category: "Political,Social Responsibility",
    title: "On the Adoption of the Universal Declaration of Human Rights",
    date: "9 December 1948",
    url: "http://localhost:3000/assets/ERooseveltHumanRights.mp3"
  },
  {
    id: "42",
    speakerId: "7",
    category: "War & Revolution,Patriotic",
    title: "Arm Yourselves and Be Ye Men of Valour",
    date: "19 May 1940",
    url: "http://localhost:3000/assets/ChurchillBeYeMenofValour.mp3"
  },
  {
    id: "43",
    speakerId: "15",
    category: "Tributes & Eulogies,Memorial",
    title: "Address at the Muhammad Ali Memorial Service",
    date: "10 June 2016",
    url: "http://localhost:3000/assets/ClintonMuhammadAliMemorial.mp3"
  },
  {
    id: "44",
    speakerId: "29",
    category: "War & Revolution,Inspirational",
    title: "Final Speech from The Great Dictator",
    date: "October 31, 1940",
    url: "http://localhost:3000/assets/ChaplinTheGreatDictatorSpeech.mp3"
  },
  {
    id: "45",
    speakerId: "12",
    category: "Inauguration,Political",
    title: "Inaugural Address",
    date: "Jan 20, 2017",
    url: "http://localhost:3000/assets/TrumpInaugurationSpeech.mp3"
  },
  {
    id: "46",
    speakerId: "7",
    category: "War & Revolution,Patriotic",
    title: "We Shall Never Surrender",
    date: "4 June 1940",
    url: "http://localhost:3000/assets/ChurchillWeShallNeverSurrender.mp3"
  },
  {
    id: "47",
    speakerId: "2",
    category: "Political",
    title: "Ich bin ein Berliner (I am a 'Berliner')",
    date: "26 June 1963",
    url: "http://localhost:3000/assets/JFKIchBinEinBerliner.mp3"
  },
  {
    id: "48",
    speakerId: "14",
    category: "Political,Social Responsibility",
    title: "The Great Society",
    date: "22 May 1964",
    url: "http://localhost:3000/assets/JohnsonTheGreatSociety.mp3"
  }
  /*{
    id: "",
    speakerId: "",
    category: "",
    title: "",
    date: "",
    url: "http://localhost:3000/assets/"
  },
  {
    id: "",
    speakerId: "",
    category: "",
    title: "",
    date: "",
    url: "http://localhost:3000/assets/"
  } */
];

export default speeches;
