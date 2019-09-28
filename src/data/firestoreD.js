const firestoreData = [
  {
    id: "MqSlVZC1adt0CAnWQlis",
    speakerId: "OAFcQhBKsCrspLC16npA",
    category: ["Political", "Inspirational", "Sermon"],
    title: "I Have a Dream",
    date: "28 August 1963",
    url:
      "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/KingIHaveaDream.mp3?alt=media&token=9692df32-c8d7-4ff1-b6c0-82800f9088b2",
    categoryId: [
      "xvezf3IGEImVeDqY89kz",
      "bz4PqvxCNYjLZGmb7Am3",
      "wL0nngNM58w4b8Y2JUyi"
    ]
  },
  {
    id: "9gQG72GsxF2M49MrMSQq",
    speakerId: "OAFcQhBKsCrspLC16npA",
    category: ["Political", "Sermon"],
    title: "I've Been to the Mountaintop",
    date: "3 April 1968",
    url:
      "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/KingMountainTop.mp3?alt=media&token=e5796adf-1b7e-4a1b-8024-ef7c291c6b96",
    categoryId: ["xvezf3IGEImVeDqY89kz", "wL0nngNM58w4b8Y2JUyi"]
  },
  {
    id: "mGukb9IhEb3DruJrr6b5",
    speakerId: "dvDtkJG6tRLvf6qi8thE",
    category: ["Inauguration", "Political"],
    title: "Inaugural Address",
    date: "20 January 1961",
    url:
      "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/JFKInauguralAddress.mp3?alt=media&token=99eecbac-1440-4182-a104-c9482b7e816c",
    categoryId: ["xvezf3IGEImVeDqY89kz", "j9AReAOfD47J6ENgYDkB"]
  },
  {
    id: "SZyKYt1lpILpu5Lru1En",
    speakerId: "dvDtkJG6tRLvf6qi8thE",
    category: ["Commencement", "Inspirational"],
    title: "American University Commencement Address",
    date: "10 June 1963",
    url:
      "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/JFKAme…rsityCommencement.mp3?alt=media&token=fd1f5d96-bc55-492f-a556-076cf2f7fc84",
    categoryId: ["bz4PqvxCNYjLZGmb7Am3", "7D8zoLhsUvZlR4Wif3QG"]
  },
  {
    id: "BqcTh9DCWFbwgIhns7vd",
    speakerId: "dvDtkJG6tRLvf6qi8thE",
    category: ["War & Revolution", "Political"],
    title: "Cuban Missile Crisis Address to the Nation",
    date: "22 October 1962",
    url:
      "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/JFKAme…rsityCommencement.mp3?alt=media&token=fd1f5d96-bc55-492f-a556-076cf2f7fc84",
    categoryId: ["xvezf3IGEImVeDqY89kz", "ZE7hqwHC551Yw4v90CbC"]
  },
  {
    id: "k2t8CA1IEJXdhWpZXj5o",
    speakerId: "dvDtkJG6tRLvf6qi8thE",
    category: ["Political"],
    title: "Ich bin ein Berliner (I am a 'Berliner')",
    date: "26 June 1963",
    url:
      "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/JFKIchBinEinBerliner.mp3?alt=media&token=1957cf33-34f6-4f3f-b95b-3c19d5e0c68a",
    categoryId: ["xvezf3IGEImVeDqY89kz"]
  },
  {
    id: "DY7fZ85NjXh8nj9NAoUo",
    speakerId: "c7oGLIQkoOCTIrQzwaiC",
    category: ["Political"],
    title: "A Time for Choosing",
    date: "27 October 1964",
    url:
      "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/ReaganATimeforChoosing.mp3?alt=media&token=93e050ce-a8f4-4dac-b443-559c948107c4",
    categoryId: ["xvezf3IGEImVeDqY89kz"]
  },
  {
    id: "YRwzgMnmDku3oPnnPtfv",
    speakerId: "c7oGLIQkoOCTIrQzwaiC",
    category: ["Tributes & Eulogies"],
    title: 'The Space Shuttle "Challenger" Tragedy Address',
    date: "28 January 1986",
    url:
      "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/ReaganShuttleChallenger.mp3?alt=media&token=0ad67440-b867-4051-b733-141840e82af9",
    categoryId: ["knvJH59YPC6XDsoGU75J"]
  },
  {
    id: "O8FNBzBwrWwoznKHJSZB",
    speakerId: "c7oGLIQkoOCTIrQzwaiC",
    category: ["Political", "Social Responsibility"],
    title: "Tear Down This Wall",
    date: "12 June 1987",
    url:
      "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/ReaganTearDownThisWall.mp3?alt=media&token=f7fdbabe-1453-429c-a7ba-0fce29933bb5",
    categoryId: ["xvezf3IGEImVeDqY89kz", "8FKMQLoc3Hi6kcJqkYNz"]
  },
  {
    id: "8XhqZ4iG23ce8F7hB8Dq",
    speakerId: "c7oGLIQkoOCTIrQzwaiC",
    category: ["Inauguration", "Political"],
    title: "First Inaugural Address",
    date: "20 January 1981",
    url:
      "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/Reagan…tInauguralAddress.mp3?alt=media&token=793dbb66-963d-4096-95fb-6ed4dd5ec4d5",
    categoryId: ["xvezf3IGEImVeDqY89kz", "j9AReAOfD47J6ENgYDkB"]
  },
  {
    id: "gOJ0Uw0SjK0Yxys3LgTq",
    speakerId: "Pv5Hcfz3zBEwmD99KOML",
    category: ["Inauguration", "Political"],
    title: "First Inaugural Address",
    date: "20 January 2009",
    url:
      "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/ObamaInauguralAddress.mp3?alt=media&token=459de895-c4e3-4d3d-aa20-88b96754fa64",
    categoryId: ["xvezf3IGEImVeDqY89kz", "j9AReAOfD47J6ENgYDkB"]
  },
  {
    id: "9BVmNXIdl6a3SPvJesoO",
    speakerId: "Pv5Hcfz3zBEwmD99KOML",
    category: ["Political", "Social Responsibility"],
    title: "A More Perfect Union",
    date: "18 March 2008",
    url:
      "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/ObamaAMorePerfectUnion.mp3?alt=media&token=4034d946-6c04-4bbc-b209-1d68617708ae",
    categoryId: ["xvezf3IGEImVeDqY89kz", "8FKMQLoc3Hi6kcJqkYNz"]
  },
  {
    id: "EzWMBOKXM9tFsfcWitKY",
    speakerId: "vCICfaUQOnJYmQNCZFq6",
    category: ["War & Revolution"],
    title: "Blood, Toil, Tears and Sweat",
    date: "13 May 1940",
    url:
      "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/Church…ToilTearsandSweat.mp3?alt=media&token=187da285-c70c-45c0-b838-a6c4d385d03e",
    categoryId: ["ZE7hqwHC551Yw4v90CbC"]
  },
  {
    id: "bzw8WyVnN2QwUeVa49K5",
    speakerId: "vCICfaUQOnJYmQNCZFq6",
    category: ["War & Revolution", "Patriotic & Memorial"],
    title: "Arm Yourselves and Be Ye Men of Valour",
    date: "19 May 1940",
    url:
      "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/ChurchillBeYeMenofValour.mp3?alt=media&token=a9441576-6895-4dee-baeb-0f086a9b2d64",
    categoryId: ["ZE7hqwHC551Yw4v90CbC", "svj5APZJ8TZm5InTqKxZ"]
  },
  {
    id: "kBZftT7h1W0u1PDXL3YL",
    speakerId: "vCICfaUQOnJYmQNCZFq6",
    category: ["War & Revolution", "Patriotic & Memorial"],
    title: "We Shall Never Surrender",
    date: "4 June 1940",
    url:
      "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/Church…allNeverSurrender.mp3?alt=media&token=9b3b79ea-6858-4315-8624-15fe7ca428cf",
    categoryId: ["ZE7hqwHC551Yw4v90CbC", "svj5APZJ8TZm5InTqKxZ"]
  },
  {
    id: "RQcjKMiccvScxyzKmPyB",
    speakerId: "oIrtWzVnM2r7a60faa8z",
    category: ["Political", "Social Responsibility"],
    title: "We Shall Overcome",
    date: "15 March 1965",
    url:
      "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/LBJWeShallOvercome.mp3?alt=media&token=3ad623e8-fe9c-4d67-b0ad-2ff6b5b07fd6",
    categoryId: ["xvezf3IGEImVeDqY89kz", "8FKMQLoc3Hi6kcJqkYNz"]
  },
  {
    id: "3WQAESbtMEZ2yRmqB5nk",
    speakerId: "oIrtWzVnM2r7a60faa8z",
    category: ["Political", "Social Responsibility"],
    title: "The Great Society",
    date: "22 May 1964",
    url:
      "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/LBJTheGreatSociety.mp3?alt=media&token=bf469517-0e09-4c7a-9700-63942b30af4a",
    categoryId: ["xvezf3IGEImVeDqY89kz", "8FKMQLoc3Hi6kcJqkYNz"]
  },
  {
    id: "8nyk6Deq2Ow4drzzr75U",
    speakerId: "irYOr91XpettSKEJRArC",
    category: ["Inauguration", "Political"],
    title: "First Inaugural Address",
    date: "4 March 1933",
    url:
      "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/FDRFirstInauguralAddress.mp3?alt=media&token=89e6203f-a5ee-4038-8eff-2faca78a2c08",
    categoryId: ["xvezf3IGEImVeDqY89kz", "j9AReAOfD47J6ENgYDkB"]
  },
  {
    id: "DMsjpQNzYqB86cuZrBWB",
    speakerId: "irYOr91XpettSKEJRArC",
    category: ["War & Revolution", "Patriotic & Memorial"],
    title: "Pearl Harbor Address to the Nation",
    date: "8 December 1941",
    url:
      "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/FDRPearlHarbourAddress.mp3?alt=media&token=e36ad8fb-6d25-4ef9-a3ea-44d972170cb9",
    categoryId: ["ZE7hqwHC551Yw4v90CbC", "svj5APZJ8TZm5InTqKxZ"]
  },
  {
    id: "933kMAtgyr4ohgNq2eiM",
    speakerId: "EuafMbNpjR5dyrAKGKhj",
    category: ["Patriotic & Memorial", "War & Revolution"],
    title: "Gettysburg Address (Read by Sam Waterson)",
    date: "19 November 1863",
    url:
      "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/Lincol…AddressByWaterson.mp3?alt=media&token=e9f66bcd-3fe4-4fa0-9bc8-98df99f10e98",
    categoryId: ["ZE7hqwHC551Yw4v90CbC", "svj5APZJ8TZm5InTqKxZ"]
  },
  {
    id: "GCzlxcf81zN2y5JcpNCG",
    speakerId: "4bqWe4VlBfrdyuD2d9rr",
    category: ["Political"],
    title: "Checkers",
    date: "23 September 1952",
    url:
      "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/NixonCheckers.mp3?alt=media&token=d3144e51-75a3-4a87-9014-713b8ca8e37b",
    categoryId: ["xvezf3IGEImVeDqY89kz"]
  },
  {
    id: "kepxV9WqaAFky87NlZT1",
    speakerId: "4bqWe4VlBfrdyuD2d9rr",
    category: ["War & Revolution", "Patriotic & Memorial", "Political"],
    title: "The Great Silent Majority",
    date: "3 November 1969",
    url:
      "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/NixonSilentMajority.mp3?alt=media&token=dd4b87a2-d854-4311-ab52-e8aaa0024b35",
    categoryId: [
      "xvezf3IGEImVeDqY89kz",
      "ZE7hqwHC551Yw4v90CbC",
      "svj5APZJ8TZm5InTqKxZ"
    ]
  },
  {
    id: "ksBZ2reARU5YCaLdLbsq",
    speakerId: "arUVC2SzZQww331Hmcno",
    category: ["Social Responsibility", "Political"],
    title: "Democratic National Convention Keynote Address",
    date: "12 July 1976",
    url:
      "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/BarbaraJordan1976dnc.mp3?alt=media&token=5dbecfe3-eb4a-4bae-b879-68c8a24955eb",
    categoryId: ["xvezf3IGEImVeDqY89kz", "8FKMQLoc3Hi6kcJqkYNz"]
  },
  {
    id: "sRWF6T8gf1qRAVDAoRzG",
    speakerId: "FF5MBAbc05h7E9vUxtbM",
    category: ["Commencement", "Inspirational"],
    title: "Stanford University Speech",
    date: "12 June 2005",
    url:
      "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/JobsStanfordSpeech.mp3?alt=media&token=65e2c911-73c2-4c9c-a7a3-7c2a7c82fecf",
    categoryId: ["bz4PqvxCNYjLZGmb7Am3", "7D8zoLhsUvZlR4Wif3QG"]
  },
  {
    id: "U1FbpV7irV2dCzVgG8xr",
    speakerId: "SDHmnYB0uBcsXfbxVstE",
    category: ["Patriotic & Memorial", "Inspirational"],
    title: "Duty, Honor, Country",
    date: "12 May 1962",
    url:
      "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/MacArt…rDutyHonorCountry.mp3?alt=media&token=d9266624-3b57-4fc3-aeb6-791685196754",
    categoryId: ["bz4PqvxCNYjLZGmb7Am3", "svj5APZJ8TZm5InTqKxZ"]
  },
  {
    id: "VJMCLKU1GoRW1SxGPsWP",
    speakerId: "SDHmnYB0uBcsXfbxVstE",
    category: ["Farewell"],
    title: "Farewell Address to Congress",
    date: "19 April 1951",
    url:
      "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/MacArthurFarewellAddress.mp3?alt=media&token=664fa104-129b-482f-bcad-6345aea64409",
    categoryId: ["ph0UdwKdWRIwP0x5zUdE"]
  },
  {
    id: "DgkdxL3bPlaECOCjvBvf",
    speakerId: "NwFenhASB9QTNn5trqTn",
    category: ["Political"],
    title: "Atoms for Peace",
    date: "8 December 1953",
    url:
      "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/EisenhowerAtomsforPeace.mp3?alt=media&token=38a00c0b-c4c3-4c72-a3b8-410e5b1f7441",
    categoryId: ["xvezf3IGEImVeDqY89kz"]
  },
  {
    id: "UgXICPFlWfxpGpOMg5AA",
    speakerId: "NwFenhASB9QTNn5trqTn",
    category: ["Farewell"],
    title: "Farewell Address",
    date: "17 January 1961",
    url:
      "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/Eisenh…erFarewellAddress.mp3?alt=media&token=6c6ef68c-4578-4014-a7ac-f709d5904dd4",
    categoryId: ["ph0UdwKdWRIwP0x5zUdE"]
  },
  {
    id: "CAOy9NfileONIBl6yANX",
    speakerId: "lx2jibfQrUaPsm9Pa6mR",
    category: ["Acknowledgement", "Inspirational"],
    title: "Speech Accepting the Nobel Prize in Literature",
    date: "December 10, 1950",
    url:
      "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/Faulkn…eAcceptanceSpeech.mp3?alt=media&token=319bc834-e65c-4619-8f11-2be4ea1c438d",
    categoryId: ["bz4PqvxCNYjLZGmb7Am3", "MnrpmyPAKAZyKJaViw4a"]
  },
  {
    id: "c9LgJwbtkHmn4V1jhELk",
    speakerId: "0YhRT4Q2uh30GT4VArFT",
    category: ["Social Responsibility", "Inspirational"],
    title: "The Perils of Indifference",
    date: "12 April 1999",
    url:
      "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/Wiesel…ilsOfIndifference.mp3?alt=media&token=a56d24a9-fac5-428e-a42d-4670f4c68bf2",
    categoryId: ["bz4PqvxCNYjLZGmb7Am3", "8FKMQLoc3Hi6kcJqkYNz"]
  },
  {
    id: "bp4ZezadNKCyRyv6fv1N",
    speakerId: "yittjHoFuOQQzYRVmf2g",
    category: ["Acknowledgement", "Inspirational"],
    title: "Keynote Address at the 54th National Prayer Breakfast",
    date: "2 February 2006",
    url:
      "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/BonoPr…erBreakfastSpeech.mp3?alt=media&token=4d8644eb-d6a8-4f6a-ad93-9d750f235afc",
    categoryId: ["bz4PqvxCNYjLZGmb7Am3", "MnrpmyPAKAZyKJaViw4a"]
  },
  {
    id: "Drzh2T2uWnXTZyK9nvxL",
    speakerId: "8Hq6vvadWrJ4Eavikih7",
    category: ["Political", "Social Responsibility"],
    title: "Women's Rights are Civil Rights",
    date: "5 September 1995",
    url:
      "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/HClintonWomen'sRights.mp3?alt=media&token=c774eda4-a5e8-4827-8dc6-6035671498c6",
    categoryId: ["xvezf3IGEImVeDqY89kz", "8FKMQLoc3Hi6kcJqkYNz"]
  },
  {
    id: "7vJAKU8vBKDWH6BM5Ns4",
    speakerId: "jmLImkEBDvSt8nwvAxD6",
    category: ["Commencement", "Inspirational"],
    title: "Commencement Address at Wellesley College",
    date: "1 June 1990",
    url:
      "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/BBushW…esleyCommencement.mp3?alt=media&token=9ac24c7e-ffb3-4f01-a6e8-492f234b0879",
    categoryId: ["bz4PqvxCNYjLZGmb7Am3", "7D8zoLhsUvZlR4Wif3QG"]
  },
  {
    id: "rhaT3YSHwPCh1n7BqI0L",
    speakerId: "gYrQ9MrLEuewI3selIO7",
    category: ["Acknowledgement", "Social Responsibility", "Inspirational"],
    title: "2018 Golden Globes Speech",
    date: "7 January 2018",
    url:
      "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/Oprah%…20Golden%20Globes.mp3?alt=media&token=500aca95-d863-43ca-8c64-b25aa3f0c890",
    categoryId: [
      "bz4PqvxCNYjLZGmb7Am3",
      "8FKMQLoc3Hi6kcJqkYNz",
      "MnrpmyPAKAZyKJaViw4a"
    ]
  },
  {
    id: "RDfdVTU5zSbqBzAtBCET",
    speakerId: "1rm0Y3KoM4HbwrWkiLie",
    category: [
      "Tributes & Eulogies",
      "Patriotic & Memorial",
      "War & Revolution"
    ],
    title: "9/11 Address to the Nation",
    date: "11 September 2001",
    url:
      "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/Bush9-11Address.mp3?alt=media&token=75ef2975-b7b0-4e13-8b4f-3e54a6c20bc4",
    categoryId: [
      "ZE7hqwHC551Yw4v90CbC",
      "knvJH59YPC6XDsoGU75J",
      "svj5APZJ8TZm5InTqKxZ"
    ]
  },
  {
    id: "wtZkCuduxUScmlamHyR1",
    speakerId: "GzCV0sBCc7rNonpVopmd",
    category: ["Farewell"],
    title: "Farewell Address",
    date: "18 January 2001",
    url:
      "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/ClintonFarewellAddress.mp3?alt=media&token=a9c5930f-f2f6-49c5-934e-cd3086841276",
    categoryId: ["ph0UdwKdWRIwP0x5zUdE"]
  },
  {
    id: "ACiZJ0J7WmS23jd1qzyE",
    speakerId: "GzCV0sBCc7rNonpVopmd",
    category: ["Tributes & Eulogies", "Patriotic & Memorial"],
    title: "Address at the Muhammad Ali Memorial Service",
    date: "10 June 2016",
    url:
      "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/Clinto…hammadAliMemorial.mp3?alt=media&token=9875553a-1b6a-41d5-a896-d5926a89cbea",
    categoryId: ["knvJH59YPC6XDsoGU75J", "svj5APZJ8TZm5InTqKxZ"]
  },
  {
    id: "GIzl79siOaFOWTILkTKI",
    speakerId: "zJbcBZqpfADmMI1qSwHD",
    category: ["Farewell", "Inspirational"],
    title: "Farewell to Baseball Address",
    date: "4 July 1939",
    url:
      "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/GehrigFarewellSpeech.mp3?alt=media&token=01d62639-72d8-4458-a979-65a94a4e8d68",
    categoryId: ["bz4PqvxCNYjLZGmb7Am3", "ph0UdwKdWRIwP0x5zUdE"]
  },
  {
    id: "0IjIH7WY4DXrBitgQBOq",
    speakerId: "ZBPDxJB5Pl7zG26KdWO5",
    category: ["Commencement", "Inspirational"],
    title: "Harvard Commencement Speech",
    date: "7 June 2007",
    url:
      "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/GatesH…ommencementSpeech.mp3?alt=media&token=5738c88d-01ed-4d9e-8c0b-e5843987745b",
    categoryId: ["bz4PqvxCNYjLZGmb7Am3", "7D8zoLhsUvZlR4Wif3QG"]
  },
  {
    id: "zTN2YL5Ap2bpYtvqUe7T",
    speakerId: "Zde5xjJ1CbDbwJusrFZ8",
    category: ["Commencement", "Inspirational"],
    title: "University of Michigan Commencement Address",
    date: "2 May 2009",
    url:
      "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/PageUn…higanCommencement.mp3?alt=media&token=dccbd047-2ee1-4471-b5e1-8ebc5f4b7c5e",
    categoryId: ["bz4PqvxCNYjLZGmb7Am3", "7D8zoLhsUvZlR4Wif3QG"]
  },
  {
    id: "N2HftG9AjVA2pJppnUN6",
    speakerId: "mid1hWAqOvuRKCZdozPk",
    category: ["Political", "Social Responsibility"],
    title: "Address in Support of Religious Tolerance and New York City Mosque",
    date: "3 August 2010",
    url:
      "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/BloombergNYMosque.mp3?alt=media&token=4e6887b0-315d-45dc-a74a-ae1df559868f",
    categoryId: ["xvezf3IGEImVeDqY89kz", "8FKMQLoc3Hi6kcJqkYNz"]
  },
  {
    id: "Ic2i56aLdX5IuriZO26U",
    speakerId: "CmakHtk9PAwj4AVfI94V",
    category: ["Political", "Social Responsibility"],
    title: "2016 Democratic National Convention Speech",
    date: "26 Jul 2016",
    url:
      "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/MObama2016DNCSpeech.mp3?alt=media&token=d4d06e62-ab61-4a08-86ac-5d0ba33f3c61",
    categoryId: ["xvezf3IGEImVeDqY89kz", "8FKMQLoc3Hi6kcJqkYNz"]
  },
  {
    id: "cyWwOckBb3SAHcsaR0eH",
    speakerId: "uxdCcsZxIqGqSXbZzhuV",
    category: ["Commencement", "Inspirational"],
    title: "USC Commencement Speech",
    date: "16 May 2014",
    url:
      "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/MuskUSCCommencement2014.mp3?alt=media&token=eb6c1d9e-2f16-46fe-ab2a-19f20bc0b226",
    categoryId: ["bz4PqvxCNYjLZGmb7Am3", "7D8zoLhsUvZlR4Wif3QG"]
  },
  {
    id: "VojM1LNwNiLMbR9QvtZw",
    speakerId: "MsXNmBWwmmZ0pP1TzP7t",
    category: ["Commencement", "Inspirational"],
    title: "Princeton University Commencement Speech",
    date: "30 May 2010",
    url:
      "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/BezosPrincetonSpeech.mp3?alt=media&token=da263a98-4214-421c-a2f8-daf03db8c941",
    categoryId: ["bz4PqvxCNYjLZGmb7Am3", "7D8zoLhsUvZlR4Wif3QG"]
  },
  {
    id: "sQF2we8wHD4fvQ2eoA47",
    speakerId: "hZ1syzNzycG27yfw3sot",
    category: ["Political", "Social Responsibility"],
    title: "The Arrogance of Power",
    date: "19 March 2003",
    url:
      "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/ByrdArroganceofPower.mp3?alt=media&token=6778b31e-ea75-4ee8-a0c3-844ff2e4f6c2",
    categoryId: ["xvezf3IGEImVeDqY89kz", "8FKMQLoc3Hi6kcJqkYNz"]
  },
  {
    id: "DyJ8sKJ3W3VGh5k8sISb",
    speakerId: "vO9QwwcYI9ZSWDpAR2Xr",
    category: ["Political", "Social Responsibility"],
    title: "On the Adoption of the Universal Declaration of Human Rights",
    date: "9 December 1948",
    url:
      "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/ERooseveltHumanRights.mp3?alt=media&token=8bef32f5-b563-458f-9f3f-d7d9c33a7aa2",
    categoryId: ["xvezf3IGEImVeDqY89kz", "8FKMQLoc3Hi6kcJqkYNz"]
  },
  {
    id: "dWTGCWtEqPiRjpntbMXt",
    speakerId: "jhb2uDKNc1lUVAfjSTar",
    category: ["War & Revolution", "Inspirational"],
    title: "Final Speech from The Great Dictator",
    date: "October 31, 1940",
    url:
      "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/Chapli…eatDictatorSpeech.mp3?alt=media&token=f48120d7-6836-49b2-b39c-7a25133a8acf",
    categoryId: ["bz4PqvxCNYjLZGmb7Am3", "ZE7hqwHC551Yw4v90CbC"]
  },
  {
    id: "0svLZBnP1GRtuQLQsUFq",
    speakerId: "rygG3ru1oVQGzonz1Gyo",
    category: ["Inauguration", "Political"],
    title: "Inaugural Address",
    date: "Jan 20, 2017",
    url:
      "https://firebasestorage.googleapis.com/v0/b/speech-pwa.appspot.com/o/TrumpInaugurationSpeech.mp3?alt=media&token=0ce7c997-1b9e-44b2-8721-d89ffeadc2ff",
    categoryId: ["xvezf3IGEImVeDqY89kz", "j9AReAOfD47J6ENgYDkB"]
  }
];

export default firestoreData;
