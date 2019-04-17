const speeches = [
  {
    id: "1",
    speakerId: "1",
    category: "01,02,03",
    title: "I Have a Dream",
    date: "28 August 1963",
    url: "http://localhost:3000/assets/KingIHaveaDream.mp3"
  },
  {
    id: "2",
    speakerId: "2",
    category: "04,02",
    title: "Inaugural Address",
    date: "20 January 1961",
    url: "http://localhost:3000/assets/JFKInauguralAddress.mp3"
  },
  {
    id: "3",
    speakerId: "6",
    category: "02",
    title: "A Time for Choosing",
    date: "27 October 1964",
    url: "http://localhost:3000/assets/ReaganATimeforChoosing.mp3"
  },
  {
    id: "4",
    speakerId: "5",
    category: "04,02",
    title: "First Inaugural Address",
    date: "20 January 2009",
    url: "http://localhost:3000/assets/ObamaInauguralAddress.mp3"
  },
  {
    id: "5",
    speakerId: "7",
    category: "05",
    title: "Blood, Toil, Tears and Sweat",
    date: "13 May 1940",
    url: "http://localhost:3000/assets/ChurchillBloodToilTearsandSweat.mp3"
  },

  {
    id: "6",
    speakerId: "14",
    category: "02,07",
    title: "We Shall Overcome",
    date: "15 March 1965",
    url: "http://localhost:3000/assets/LBJWeShallOvercome.mp3"
  },
  {
    id: "7",
    speakerId: "3",
    category: "04,02",
    title: "First Inaugural Address",
    date: "4 March 1933",
    url: "http://localhost:3000/assets/FDRFirstInauguralAddress.mp3"
  },
  {
    id: "8",
    speakerId: "4",
    category: "06,05",
    title: "Gettysburg Address (Read by Sam Waterson)",
    date: "19 November 1863",
    url: "http://localhost:3000/assets/LincolnGettysburgAddressByWaterson.mp3"
  },
  {
    id: "9",
    speakerId: "11",
    category: "02",
    title: "Checkers",
    date: "23 September 1952",
    url: "http://localhost:3000/assets/NixonCheckers.mp3"
  },
  {
    id: "10",
    speakerId: "13",
    category: "07,02",
    title: "Democratic National Convention Keynote Address",
    date: "12 July 1976",
    url: "http://localhost:3000/assets/BarbaraJordan1976dnc.mp3"
  },
  {
    id: "11",
    speakerId: "8",
    category: "03,09",
    title: "Stanford University Speech",
    date: "12 June 2005",
    url: "http://localhost:3000/assets/JobsStanfordSpeech.mp3"
  },
  {
    id: "12",
    speakerId: "23",
    category: "08,03",
    title: "Duty, Honor, Country",
    date: "12 May 1962",
    url: "http://localhost:3000/assets/MacArthurDutyHonorCountry.mp3"
  },
  {
    id: "13",
    speakerId: "10",
    category: "02",
    title: "Atoms for Peace",
    date: "8 December 1953",
    url: "http://localhost:3000/assets/EisenhowerAtomforPeace.mp3"
  },
  {
    id: "14",
    speakerId: "17",
    category: "10,03",
    title: "Speech Accepting the Nobel Prize in Literature",
    date: "December 10, 1950",
    url: "http://localhost:3000/assets/FaulknerNobelPrizeAcceptanceSpeech.mp3"
  },
  {
    id: "15",
    speakerId: "6",
    category: "11",
    title: 'The Space Shuttle "Challenger" Tragedy Address',
    date: "28 January 1986",
    url: "http://localhost:3000/assets/ReaganShuttleChallenger.mp3"
  },
  {
    id: "16",
    speakerId: "18",
    category: "07,03",
    title: "The Perils of Indifference",
    date: "12 April 1999",
    url: "http://localhost:3000/assets/WieselPerilsOfIndifference.mp3"
  },
  {
    id: "17",
    speakerId: "26",
    category: "10,03",
    title: "Keynote Address at the 54th National Prayer Breakfast",
    date: "2 February 2006",
    url: "http://localhost:3000/assets/BonoPrayerBreakfastSpeech.mp3"
  },
  {
    id: "18",
    speakerId: "16",
    category: "02,07",
    title: "Women's Rights are Civil Rights",
    date: "5 September 1995",
    url: "http://localhost:3000/assets/HClintonWomen'sRights.mp3"
  },
  {
    id: "19",
    speakerId: "21",
    category: "09,03",
    title: "Commencement Address at Wellesley College",
    date: "1 June 1990",
    url: "http://localhost:3000/assets/BBushWellesleyCommencement.mp3"
  },
  {
    id: "20",
    speakerId: "5",
    category: "02,07",
    title: "A More Perfect Union",
    date: "18 March 2008",
    url: "http://localhost:3000/assets/ObamaAMorePerfectUnion.mp3"
  },
  {
    id: "21",
    speakerId: "27",
    category: "10,07,03",
    title: "2018 Golden Globes Speech",
    date: "8 August 1942",
    url: "http://localhost:3000/assets/Winfrey2018GoldenGlobesSpeech.mp3"
  },
  {
    id: "22",
    speakerId: "10",
    category: "12",
    title: "Farewell Address",
    date: "17 January 1961",
    url: "http://localhost:3000/assets/EisenhowerFarewellAddress.mp3"
  },
  {
    id: "23",
    speakerId: "6",
    category: "02,07",
    title: "Tear Down This Wall",
    date: "12 June 1987",
    url: "http://localhost:3000/assets/ReaganTearDownThisWall.mp3"
  },
  {
    id: "24",
    speakerId: "20",
    category: "11,08,05",
    title: "9/11 Address to the Nation",
    date: "11 September 2001",
    url: "http://localhost:3000/assets/Bush9-11Address.mp3"
  },
  {
    id: "25",
    speakerId: "15",
    category: "12",
    title: "Farewell Address",
    date: "18 January 2001",
    url: "http://localhost:3000/assets/ClintonFarewellAddress.mp3"
  },
  {
    id: "26",
    speakerId: "23",
    category: "12",
    title: "Farewell Address to Congress",
    date: "19 April 1951",
    url: "http://localhost:3000/assets/MacArthurFarewellAddress.mp3"
  },
  {
    id: "27",
    speakerId: "1",
    category: "01,02",
    title: "I've Been to the Mountaintop",
    date: "3 April 1968",
    url: "http://localhost:3000/assets/KingMountainTop.mp3"
  },
  {
    id: "28",
    speakerId: "11",
    category: "05,08,02",
    title: "The Great Silent Majority",
    date: "3 November 1969",
    url: "http://localhost:3000/assets/NixonSilentMajority.mp3"
  },
  {
    id: "29",
    speakerId: "6",
    category: "04,02",
    title: "First Inaugural Address",
    date: "20 January 1981",
    url: "http://localhost:3000/assets/ReaganFirstInauguralAddress.mp3"
  },
  {
    id: "30",
    speakerId: "2",
    category: "09,03",
    title: "American University Commencement Address",
    date: "10 June 1963",
    url: "http://localhost:3000/assets/JFKAmericanUniversityCommencement.mp3"
  },
  {
    id: "31",
    speakerId: "2",
    category: "05,02",
    title: "Cuban Missile Crisis Address to the Nation",
    date: "22 October 1962",
    url: "http://localhost:3000/assets/JFKCubanMissileCrisis.mp3"
  },
  {
    id: "32",
    speakerId: "30",
    category: "12,03",
    title: "Farewell to Baseball Address",
    date: "4 July 1939",
    url: "http://localhost:3000/assets/GehrigFarewellSpeech.mp3"
  },
  {
    id: "33",
    speakerId: "9",
    category: "09,03",
    title: "Harvard Commencement Speech",
    date: "7 June 2007",
    url: "http://localhost:3000/assets/GatesHarvardCommencementSpeech.mp3"
  },
  {
    id: "34",
    speakerId: "22",
    category: "09,03",
    title: "University of Michigan Commencement Address",
    date: "2 May 2009",
    url: "http://localhost:3000/assets/PageUniversityofMichiganCommencement.mp3"
  },
  {
    id: "35",
    speakerId: "28",
    category: "02,07",
    title: "Address in Support of Religious Tolerance and New York City Mosque",
    date: "3 August 2010",
    url: "http://localhost:3000/assets/BloombergNYMosque.mp3"
  },
  {
    id: "36",
    speakerId: "25",
    category: "02,07",
    title: "2016 Democratic National Convention Speech",
    date: "26 Jul 2016",
    url: "http://localhost:3000/assets/MObama2016DNCSpeech.mp3"
  },
  {
    id: "37",
    speakerId: "32",
    category: "09,03",
    title: "USC Commencement Speech",
    date: "16 May 2014",
    url: "http://localhost:3000/assets/MuskUSCCommencement2014.mp3"
  },
  {
    id: "38",
    speakerId: "3",
    category: "05,08",
    title: "Pearl Harbor Address to the Nation",
    date: "8 December 1941",
    url: "http://localhost:3000/assets/FDRPearlHarborAddress.mp3"
  },
  {
    id: "39",
    speakerId: "31",
    category: "09,03",
    title: "Princeton University Commencement Speech",
    date: "30 May 2010",
    url: "http://localhost:3000/assets/BezosPrincetonSpeech.mp3"
  },
  {
    id: "40",
    speakerId: "19",
    category: "02,07",
    title: "The Arrogance of Power",
    date: "19 March 2003",
    url: "http://localhost:3000/assets/ByrdArroganceofPower.mp3"
  },
  {
    id: "41",
    speakerId: "24",
    category: "02,07",
    title: "On the Adoption of the Universal Declaration of Human Rights",
    date: "9 December 1948",
    url: "http://localhost:3000/assets/ERooseveltHumanRights.mp3"
  },
  {
    id: "42",
    speakerId: "7",
    category: "05,08",
    title: "Arm Yourselves and Be Ye Men of Valour",
    date: "19 May 1940",
    url: "http://localhost:3000/assets/ChurchillBeYeMenofValour.mp3"
  },
  {
    id: "43",
    speakerId: "15",
    category: "11,06",
    title: "Address at the Muhammad Ali Memorial Service",
    date: "10 June 2016",
    url: "http://localhost:3000/assets/ClintonMuhammadAliMemorial.mp3"
  },
  {
    id: "44",
    speakerId: "29",
    category: "05,03",
    title: "Final Speech from The Great Dictator",
    date: "October 31, 1940",
    url: "http://localhost:3000/assets/ChaplinTheGreatDictatorSpeech.mp3"
  },
  {
    id: "45",
    speakerId: "12",
    category: "04,02",
    title: "Inaugural Address",
    date: "Jan 20, 2017",
    url: "http://localhost:3000/assets/Trump4Speech.mp3"
  },
  {
    id: "46",
    speakerId: "7",
    category: "05,08",
    title: "We Shall Never Surrender",
    date: "4 June 1940",
    url: "http://localhost:3000/assets/ChurchillWeShallNeverSurrender.mp3"
  },
  {
    id: "47",
    speakerId: "2",
    category: "02",
    title: "Ich bin ein Berliner (I am a 'Berliner')",
    date: "26 June 1963",
    url: "http://localhost:3000/assets/JFKIchBinEinBerliner.mp3"
  },
  {
    id: "48",
    speakerId: "14",
    category: "02,07",
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
