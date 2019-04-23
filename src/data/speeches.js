const speeches = [
  {
    id: "1",
    speakerId: "1",
    category: "02,03,04",
    title: "I Have a Dream",
    date: "28 August 1963",
    url: "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/KingIHaveaDream.mp3?alt=media&token=9692df32-c8d7-4ff1-b6c0-82800f9088b2" 
  },
  {
    id: "2",
    speakerId: "2",
    category: "09,02",
    title: "Inaugural Address",
    date: "20 January 1961",
    url: "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/JFKInauguralAddress.mp3?alt=media&token=99eecbac-1440-4182-a104-c9482b7e816c"
  },
  {
    id: "3",
    speakerId: "6",
    category: "02",
    title: "A Time for Choosing",
    date: "27 October 1964",
    url: "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/ReaganATimeforChoosing.mp3?alt=media&token=93e050ce-a8f4-4dac-b443-559c948107c4"
  },
  {
    id: "4",
    speakerId: "5",
    category: "09,02",
    title: "First Inaugural Address",
    date: "20 January 2009",
    url: "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/ObamaInauguralAddress.mp3?alt=media&token=459de895-c4e3-4d3d-aa20-88b96754fa64"
  },
  {
    id: "5",
    speakerId: "7",
    category: "05",
    title: "Blood, Toil, Tears and Sweat",
    date: "13 May 1940",
    url: "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/ChurchillBloodToilTearsandSweat.mp3?alt=media&token=187da285-c70c-45c0-b838-a6c4d385d03e"
  },

  {
    id: "6",
    speakerId: "14",
    category: "02,07",
    title: "We Shall Overcome",
    date: "15 March 1965",
    url: "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/LBJWeShallOvercome.mp3?alt=media&token=3ad623e8-fe9c-4d67-b0ad-2ff6b5b07fd6"
  },
  {
    id: "7",
    speakerId: "3",
    category: "09,02",
    title: "First Inaugural Address",
    date: "4 March 1933",
    url: "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/FDRFirstInauguralAddress.mp3?alt=media&token=89e6203f-a5ee-4038-8eff-2faca78a2c08"
  },
  {
    id: "8",
    speakerId: "4",
    category: "06,05",
    title: "Gettysburg Address (Read by Sam Waterson)",
    date: "19 November 1863",
    url: "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/LincolnGettysburgAddressByWaterson.mp3?alt=media&token=e9f66bcd-3fe4-4fa0-9bc8-98df99f10e98"
  },
  {
    id: "9",
    speakerId: "11",
    category: "02",
    title: "Checkers",
    date: "23 September 1952",
    url: "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/NixonCheckers.mp3?alt=media&token=d3144e51-75a3-4a87-9014-713b8ca8e37b"
  },
  {
    id: "10",
    speakerId: "13",
    category: "07,02",
    title: "Democratic National Convention Keynote Address",
    date: "12 July 1976",
    url: "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/BarbaraJordan1976dnc.mp3?alt=media&token=5dbecfe3-eb4a-4bae-b879-68c8a24955eb"
  },
  {
    id: "11",
    speakerId: "8",
    category: "01,03",
    title: "Stanford University Speech",
    date: "12 June 2005",
    url: "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/JobsStanfordSpeech.mp3?alt=media&token=65e2c911-73c2-4c9c-a7a3-7c2a7c82fecf"
  },
  {
    id: "12",
    speakerId: "23",
    category: "06,03",
    title: "Duty, Honor, Country",
    date: "12 May 1962",
    url: "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/MacArthurDutyHonorCountry.mp3?alt=media&token=d9266624-3b57-4fc3-aeb6-791685196754"
  },
  {
    id: "13",
    speakerId: "10",
    category: "02",
    title: "Atoms for Peace",
    date: "8 December 1953",
    url: "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/EisenhowerAtomsforPeace.mp3?alt=media&token=38a00c0b-c4c3-4c72-a3b8-410e5b1f7441"
  },
  {
    id: "14",
    speakerId: "17",
    category: "10,03",
    title: "Speech Accepting the Nobel Prize in Literature",
    date: "December 10, 1950",
    url: "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/FaulknerNobelPrizeAcceptanceSpeech.mp3?alt=media&token=319bc834-e65c-4619-8f11-2be4ea1c438d"
  },
  {
    id: "15",
    speakerId: "6",
    category: "11",
    title: 'The Space Shuttle "Challenger" Tragedy Address',
    date: "28 January 1986",
    url: "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/ReaganShuttleChallenger.mp3?alt=media&token=0ad67440-b867-4051-b733-141840e82af9"
  },
  {
    id: "16",
    speakerId: "18",
    category: "07,03",
    title: "The Perils of Indifference",
    date: "12 April 1999",
    url: "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/WieselPerilsOfIndifference.mp3?alt=media&token=a56d24a9-fac5-428e-a42d-4670f4c68bf2"
  },
  {
    id: "17",
    speakerId: "26",
    category: "10,03",
    title: "Keynote Address at the 54th National Prayer Breakfast",
    date: "2 February 2006",
    url: "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/BonoPrayerBreakfastSpeech.mp3?alt=media&token=4d8644eb-d6a8-4f6a-ad93-9d750f235afc"
  },
  {
    id: "18",
    speakerId: "16",
    category: "02,07",
    title: "Women's Rights are Civil Rights",
    date: "5 September 1995",
    url: "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/HClintonWomen'sRights.mp3?alt=media&token=c774eda4-a5e8-4827-8dc6-6035671498c6"
  },
  {
    id: "19",
    speakerId: "21",
    category: "01,03",
    title: "Commencement Address at Wellesley College",
    date: "1 June 1990",
    url: "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/BBushWellesleyCommencement.mp3?alt=media&token=9ac24c7e-ffb3-4f01-a6e8-492f234b0879"
  },
  {
    id: "20",
    speakerId: "5",
    category: "02,07",
    title: "A More Perfect Union",
    date: "18 March 2008",
    url: "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/ObamaAMorePerfectUnion.mp3?alt=media&token=4034d946-6c04-4bbc-b209-1d68617708ae"
  },
  {
    id: "21",
    speakerId: "27",
    category: "10,07,03",
    title: "2018 Golden Globes Speech",
    date: "7 January 2018",
    url: "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/Oprah%20Winfrey%20Receives%20Cecil%20B.%20de%20Mille%20Award%20at%20the%202018%20Golden%20Globes.mp3?alt=media&token=500aca95-d863-43ca-8c64-b25aa3f0c890"
  },
  {
    id: "22",
    speakerId: "10",
    category: "08",
    title: "Farewell Address",
    date: "17 January 1961",
    url: "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/EisenhowerFarewellAddress.mp3?alt=media&token=6c6ef68c-4578-4014-a7ac-f709d5904dd4"
  },
  {
    id: "23",
    speakerId: "6",
    category: "02,07",
    title: "Tear Down This Wall",
    date: "12 June 1987",
    url: "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/ReaganTearDownThisWall.mp3?alt=media&token=f7fdbabe-1453-429c-a7ba-0fce29933bb5"
  },
  {
    id: "24",
    speakerId: "20",
    category: "11,06,05",
    title: "9/11 Address to the Nation",
    date: "11 September 2001",
    url: "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/Bush9-11Address.mp3?alt=media&token=75ef2975-b7b0-4e13-8b4f-3e54a6c20bc4"
  },
  {
    id: "25",
    speakerId: "15",
    category: "08",
    title: "Farewell Address",
    date: "18 January 2001",
    url: "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/ClintonFarewellAddress.mp3?alt=media&token=a9c5930f-f2f6-49c5-934e-cd3086841276"
  },
  {
    id: "26",
    speakerId: "23",
    category: "08",
    title: "Farewell Address to Congress",
    date: "19 April 1951",
    url: "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/MacArthurFarewellAddress.mp3?alt=media&token=664fa104-129b-482f-bcad-6345aea64409"
  },
  {
    id: "27",
    speakerId: "1",
    category: "02,04",
    title: "I've Been to the Mountaintop",
    date: "3 April 1968",
    url: "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/KingMountainTop.mp3?alt=media&token=e5796adf-1b7e-4a1b-8024-ef7c291c6b96"
  },
  {
    id: "28",
    speakerId: "11",
    category: "05,06,02",
    title: "The Great Silent Majority",
    date: "3 November 1969",
    url: "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/NixonSilentMajority.mp3?alt=media&token=dd4b87a2-d854-4311-ab52-e8aaa0024b35"
  },
  {
    id: "29",
    speakerId: "6",
    category: "09,02",
    title: "First Inaugural Address",
    date: "20 January 1981",
    url: "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/ReaganFirstInauguralAddress.mp3?alt=media&token=793dbb66-963d-4096-95fb-6ed4dd5ec4d5"
  },
  {
    id: "30",
    speakerId: "2",
    category: "01,03",
    title: "American University Commencement Address",
    date: "10 June 1963",
    url: "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/JFKAmericanUniversityCommencement.mp3?alt=media&token=fd1f5d96-bc55-492f-a556-076cf2f7fc84"
  },
  {
    id: "31",
    speakerId: "2",
    category: "05,02",
    title: "Cuban Missile Crisis Address to the Nation",
    date: "22 October 1962",
    url: "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/JFKAmericanUniversityCommencement.mp3?alt=media&token=fd1f5d96-bc55-492f-a556-076cf2f7fc84"
  },
  {
    id: "32",
    speakerId: "30",
    category: "08,03",
    title: "Farewell to Baseball Address",
    date: "4 July 1939",
    url: "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/GehrigFarewellSpeech.mp3?alt=media&token=01d62639-72d8-4458-a979-65a94a4e8d68"
  },
  {
    id: "33",
    speakerId: "9",
    category: "01,03",
    title: "Harvard Commencement Speech",
    date: "7 June 2007",
    url: "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/GatesHarvardCommencementSpeech.mp3?alt=media&token=5738c88d-01ed-4d9e-8c0b-e5843987745b"
  },
  {
    id: "34",
    speakerId: "22",
    category: "01,03",
    title: "University of Michigan Commencement Address",
    date: "2 May 2009",
    url: "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/PageUniversityofMichiganCommencement.mp3?alt=media&token=dccbd047-2ee1-4471-b5e1-8ebc5f4b7c5e"
  },
  {
    id: "35",
    speakerId: "28",
    category: "02,07",
    title: "Address in Support of Religious Tolerance and New York City Mosque",
    date: "3 August 2010",
    url: "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/BloombergNYMosque.mp3?alt=media&token=4e6887b0-315d-45dc-a74a-ae1df559868f"
  },
  {
    id: "36",
    speakerId: "25",
    category: "02,07",
    title: "2016 Democratic National Convention Speech",
    date: "26 Jul 2016",
    url: "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/MObama2016DNCSpeech.mp3?alt=media&token=d4d06e62-ab61-4a08-86ac-5d0ba33f3c61"
  },
  {
    id: "37",
    speakerId: "32",
    category: "01,03",
    title: "USC Commencement Speech",
    date: "16 May 2014",
    url: "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/MuskUSCCommencement2014.mp3?alt=media&token=eb6c1d9e-2f16-46fe-ab2a-19f20bc0b226"
  },
  {
    id: "38",
    speakerId: "3",
    category: "05,06",
    title: "Pearl Harbor Address to the Nation",
    date: "8 December 1941",
    url: "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/FDRPearlHarbourAddress.mp3?alt=media&token=e36ad8fb-6d25-4ef9-a3ea-44d972170cb9"
  },
  {
    id: "39",
    speakerId: "31",
    category: "01,03",
    title: "Princeton University Commencement Speech",
    date: "30 May 2010",
    url: "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/BezosPrincetonSpeech.mp3?alt=media&token=da263a98-4214-421c-a2f8-daf03db8c941"
  },
  {
    id: "40",
    speakerId: "19",
    category: "02,07",
    title: "The Arrogance of Power",
    date: "19 March 2003",
    url: "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/ByrdArroganceofPower.mp3?alt=media&token=6778b31e-ea75-4ee8-a0c3-844ff2e4f6c2"
  },
  {
    id: "41",
    speakerId: "24",
    category: "02,07",
    title: "On the Adoption of the Universal Declaration of Human Rights",
    date: "9 December 1948",
    url: "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/ERooseveltHumanRights.mp3?alt=media&token=8bef32f5-b563-458f-9f3f-d7d9c33a7aa2"
  },
  {
    id: "42",
    speakerId: "7",
    category: "05,06",
    title: "Arm Yourselves and Be Ye Men of Valour",
    date: "19 May 1940",
    url: "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/ChurchillBeYeMenofValour.mp3?alt=media&token=a9441576-6895-4dee-baeb-0f086a9b2d64"
  },
  {
    id: "43",
    speakerId: "15",
    category: "11,06",
    title: "Address at the Muhammad Ali Memorial Service",
    date: "10 June 2016",
    url: "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/ClintonMuhammadAliMemorial.mp3?alt=media&token=9875553a-1b6a-41d5-a896-d5926a89cbea"
  },
  {
    id: "44",
    speakerId: "29",
    category: "05,03",
    title: "Final Speech from The Great Dictator",
    date: "October 31, 1940",
    url: "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/ChaplinTheGreatDictatorSpeech.mp3?alt=media&token=f48120d7-6836-49b2-b39c-7a25133a8acf"
  },
  {
    id: "45",
    speakerId: "12",
    category: "09,02",
    title: "Inaugural Address",
    date: "Jan 20, 2017",
    url: "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/TrumpInaugurationSpeech.mp3?alt=media&token=0ce7c997-1b9e-44b2-8721-d89ffeadc2ff"
  },
  {
    id: "46",
    speakerId: "7",
    category: "05,06",
    title: "We Shall Never Surrender",
    date: "4 June 1940",
    url: "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/ChurchillWeShallNeverSurrender.mp3?alt=media&token=9b3b79ea-6858-4315-8624-15fe7ca428cf"
  },
  {
    id: "47",
    speakerId: "2",
    category: "02",
    title: "Ich bin ein Berliner (I am a 'Berliner')",
    date: "26 June 1963",
    url: "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/JFKIchBinEinBerliner.mp3?alt=media&token=1957cf33-34f6-4f3f-b95b-3c19d5e0c68a"
  },
  {
    id: "48",
    speakerId: "14",
    category: "02,07",
    title: "The Great Society",
    date: "22 May 1964",
    url: "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/LBJTheGreatSociety.mp3?alt=media&token=bf469517-0e09-4c7a-9700-63942b30af4a"
  }
  /*{
    id: "",
    speakerId: "",
    category: "",
    title: "",
    date: "",
    url: ""
  },
  {
    id: "",
    speakerId: "",
    category: "",
    title: "",
    date: "",
    url: ""
  } */
];

export default speeches;
