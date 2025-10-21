import { Character, Reaction } from '../types';

export const allCharacters: Character[] = [
  {
    id: 1,
    name: "Han Solo",
    species: "Human",
    birthYear: "29 BBY",
    description: "A charismatic and quick-witted smuggler, Han Solo is the legendary captain of the Millennium Falcon. Known for his daring maneuvers, sharp tongue, and unwavering loyalty to his friends, Han—alongside his Wookiee co-pilot Chewbacca—became a pivotal figure in the Rebellion, helping to topple the Empire and later supporting the Resistance.",
    imageUrl: "/images/han-solo.png",
    affiliations: ["Rebel Alliance", "Resistance", "Smugglers' Alliance"]
  },
  {
    id: 2,
    name: "Count Dooku",
    species: "Human",
    birthYear: "102 BBY",
    description: "Once a respected Jedi Master, Count Dooku fell to the dark side and assumed the title of Darth Tyranus. As a cunning strategist and master duelist, he led the Confederacy of Independent Systems during the Clone Wars, orchestrating galactic conflict while serving as a key agent of the Sith.",
    affiliations: ["Confederacy of Independent Systems", "Sith", "Jedi Order (formerly)"]
  },
  {
    id: 3,
    name: "R2-D2",
    species: "Droid",
    birthYear: "33 BBY",
    description: "An astromech droid of remarkable resourcefulness and courage, R2-D2 has been a loyal companion to C-3PO, Anakin Skywalker, and the Skywalker family across generations. His quick thinking and technical prowess have saved his friends from countless perils, making him a silent hero in the galaxy’s most critical moments.",
    imageUrl: "/images/r2d2.png",
    affiliations: ["Galactic Republic", "Rebel Alliance", "Resistance", "Skywalker Family"]
  },
  {
    id: 4,
    name: "Mace Windu",
    species: "Human",
    birthYear: "72 BBY",
    description: "A senior and formidable member of the Jedi High Council, Mace Windu is renowned for his stern demeanor, unyielding sense of justice, and mastery of the rare Vaapad lightsaber form. His wisdom and combat skills made him one of the most respected and feared Jedi of his era.",
    imageUrl: "/images/mace-windu.png",
    affiliations: ["Jedi Order", "Galactic Republic"]
  },
  {
    id: 5,
    name: "Rey",
    species: "Human",
    description: "A resilient scavenger from the desert planet Jakku, Rey’s journey from obscurity to Jedi Knight is marked by her fierce independence, compassion, and innate connection to the Force. She played a crucial role in the Resistance’s fight against the First Order, ultimately embracing her destiny as a beacon of hope for a new generation of Jedi.",
    affiliations: ["Resistance", "Jedi Order"]
  },
  {
    id: 6,
    name: "Owen Lars",
    species: "Human",
    birthYear: "52 BBY",
    imageUrl: "/images/owen-lars.png",
    affiliations: ["Lars Family"]
  },
  {
    id: 7,
    name: "Leia Organa",
    species: "Human",
    birthYear: "19 BBY",
    description: "A fearless leader, diplomat, and princess of Alderaan, Leia Organa’s intelligence, courage, and compassion made her a cornerstone of the Rebel Alliance and later the New Republic. Her unwavering resolve inspired allies and struck fear into her enemies, shaping the fate of the galaxy.",
    imageUrl: "/images/leia-organa.png",
    affiliations: ["Rebel Alliance", "New Republic", "Resistance", "Royal House of Alderaan"]
  },
  {
    id: 8,
    name: "Palpatine",
    species: "Human",
    birthYear: "82 BBY",
    description: "The enigmatic and manipulative Sith Lord known as Darth Sidious, Palpatine orchestrated the fall of the Republic and the rise of the Galactic Empire. His mastery of deception and the dark side allowed him to rule the galaxy from the shadows, shaping its destiny for decades.",
    imageUrl: "/images/palpatine.png",
    affiliations: ["Sith", "Galactic Empire", "Galactic Republic (as Senator/Chancellor)"]
  },
  {
    id: 9,
    name: "Chewbacca",
    species: "Wookiee",
    birthYear: "200 BBY",
    description: "A towering Wookiee warrior from Kashyyyk, Chewbacca is the fiercely loyal co-pilot of the Millennium Falcon and Han Solo’s closest friend. Renowned for his immense strength, technical skills, and iconic roar, Chewie’s bravery has made him a beloved hero of the Rebellion and Resistance.",
    imageUrl: "/images/chewbacca.png",
    affiliations: ["Rebel Alliance", "Resistance"]
  },
  {
    id: 10,
    name: "Padmé Amidala",
    species: "Human",
    birthYear: "46 BBY",
    description: "Once the wise and compassionate Queen of Naboo, Padmé Amidala later served as a respected Senator in the Galactic Republic. A champion of peace and justice, she was the devoted mother of Luke Skywalker and Leia Organa, whose legacy shaped the fate of the galaxy.",
    affiliations: ["Royal House of Naboo", "Galactic Senate", "Galactic Republic"]
  },
  {
    id: 11,
    name: "Darth Vader",
    species: "Human",
    birthYear: "41.9 BBY",
    description: "Once the heroic and gifted Jedi Knight Anakin Skywalker, he succumbed to the temptations of the dark side and was reborn as Darth Vader. As the Emperor’s ruthless enforcer, Vader’s presence struck terror across the galaxy, yet a spark of redemption remained within him.",
    imageUrl: "/images/darth-vader.png",
    affiliations: ["Galactic Empire", "Sith", "Jedi Order (formerly)"]
  },
  {
    id: 12,
    name: "Biggs Darklighter",
    species: "Human",
    imageUrl: "/images/biggs-darklighter.png",
    affiliations: ["Rebel Alliance"]
  },
  {
    id: 13,
    name: "Lando Calrissian",
    species: "Human",
    birthYear: "31 BBY",
    description: "A suave gambler and entrepreneur, Lando Calrissian was the original owner of the Millennium Falcon before losing it to Han Solo. His charm and resourcefulness led him from Cloud City administrator to a key general in the Rebellion and the Resistance.",
    imageUrl: "/images/lando-calrissian.png",
    affiliations: ["Rebel Alliance", "Cloud City Administration", "Resistance"]
  },
  {
    id: 14,
    name: "General Grievous",
    species: "Kalee",
    description: "A fearsome cyborg and supreme commander of the Separatist droid armies, General Grievous was infamous for his collection of lightsabers taken from defeated Jedi. His multi-limbed combat style and ruthless tactics made him a formidable foe during the Clone Wars.",
    affiliations: ["Confederacy of Independent Systems", "Separatist Droid Army"]
  },
  {
    id: 15,
    name: "Aayla Secura",
    species: "Twi'lek",
    birthYear: "48 BBY",
    description: "A graceful and formidable Twi’lek Jedi, Aayla Secura served as a general during the Clone Wars. Known for her agility and wisdom, she met a tragic end during the execution of Order 66, symbolizing the fall of the Jedi Order.",
    imageUrl: "/images/aayla-secura.png",
    affiliations: ["Jedi Order", "Galactic Republic"]
  },
  {
    id: 16,
    name: "Luke Skywalker",
    species: "Human",
    birthYear: "19 BBY",
    description: "A humble farm boy from Tatooine, Luke Skywalker rose to become one of the greatest Jedi in history. Guided by hope and compassion, he led the fight against the Galactic Empire, restored the Jedi Order, and inspired generations to come.",
    imageUrl: "/images/luke-skywalker.png",
    affiliations: ["Rebel Alliance", "Jedi Order", "New Republic"]
  },
  {
    id: 17,
    name: "Bail Prestor Organa",
    species: "Human",
    birthYear: "67 BBY",
    description: "A principled and courageous Senator of Alderaan, Bail Prestor Organa was a founding architect of the Rebel Alliance and the adoptive father of Leia Organa. His leadership and sacrifice laid the groundwork for the Rebellion’s success.",
    imageUrl: "/images/bail-organa.png",
    affiliations: ["Galactic Republic", "Rebel Alliance", "Royal House of Alderaan"]
  },
  {
    id: 18,
    name: "Yoda",
    birthYear: "896 BBY",
    description: "The wise and enigmatic Grand Master of the Jedi Order, Yoda’s centuries of experience and deep connection to the Force made him a legendary mentor. His unique speech and profound insights guided generations of Jedi through times of peace and conflict.",
    imageUrl: "/images/yoda.png",
    affiliations: ["Jedi Order", "Galactic Republic"]
  },
  {
    id: 19,
    name: "C-3PO",
    species: "Droid",
    birthYear: "112 BBY",
    description: "A golden protocol droid fluent in over six million forms of communication, C-3PO is known for his meticulous manners, anxious personality, and unwavering loyalty to his companions. Despite his worries, he often finds himself at the center of galactic adventures.",
    imageUrl: "/images/c3po.png",
    affiliations: ["Galactic Republic", "Rebel Alliance", "Resistance", "Skywalker Family"]
  },
  {
    id: 20,
    name: "Anakin Skywalker",
    species: "Human",
    birthYear: "41.9 BBY",
    description: "The prophesied Chosen One, Anakin Skywalker was a Jedi of extraordinary talent and passion. His heroic deeds and tragic fall to the dark side as Darth Vader forever altered the fate of the galaxy, leaving a legacy of both hope and warning.",
    imageUrl: "/images/anakin-skywalker.png",
    affiliations: ["Jedi Order", "Galactic Republic", "Sith (briefly)"]
  },
  {
    id: 21,
    name: "Captain Antilles",
    species: "Human",
    description: "The steadfast captain of the Tantive IV, Captain Antilles served the Royal House of Alderaan with honor. His capture and interrogation by Darth Vader marked the dramatic opening of the Galactic Civil War.",
    imageUrl: "/images/captain-antilles.png",
    affiliations: ["Rebel Alliance", "Royal Alderaanian Security Forces"]
  },
  {
    id: 22,
    name: "Finn",
    species: "Human",
    description: "Once known as FN-2187, Finn broke free from the First Order’s control and joined the Resistance. Brave and compassionate, he became a key ally to Rey and Poe Dameron, fighting for freedom and redemption.",
    affiliations: ["First Order (formerly)", "Resistance"]
  },
  {
    id: 23,
    name: "Boba Fett",
    species: "Human",
    birthYear: "31.5 BBY",
    description: "A legendary Mandalorian bounty hunter, Boba Fett is a clone of Jango Fett and is renowned for his iconic armor, silent demeanor, and relentless pursuit of his targets. His reputation strikes fear across the galaxy’s criminal underworld.",
    imageUrl: "/images/boba-fett.png",
    affiliations: ["Bounty Hunters' Guild", "Jabba's Syndicate", "The Tribe (Mandalorians)"]
  },
  {
    id: 24,
    name: "Qui-Gon Jinn",
    species: "Human",
    birthYear: "92 BBY",
    description: "A wise and unconventional Jedi Master, Qui-Gon Jinn was known for his independent spirit and deep connection to the Living Force. He discovered Anakin Skywalker and mentored Obi-Wan Kenobi, shaping the destiny of the Jedi Order.",
    affiliations: ["Jedi Order", "Galactic Republic"]
  },
  {
    id: 25,
    name: "Beru Whitesun lars",
    species: "Human",
    birthYear: "47 BBY",
    description: "The kind-hearted wife of Owen Lars and aunt to Luke Skywalker, Beru Whitesun Lars provided a nurturing and supportive home for the future Jedi, offering warmth and stability amid the harsh deserts of Tatooine.",
    imageUrl: "/images/beru-lars.png",
    affiliations: ["Lars Family"]
  },
  {
    id: 26,
    name: "Obi-Wan Kenobi",
    species: "Human",
    birthYear: "57 BBY",
    description: "A wise and powerful Jedi Master, Obi-Wan Kenobi trained both Anakin and Luke Skywalker, serving as a general during the Clone Wars. His courage, wit, and sense of duty made him a legendary figure in the galaxy’s history.",
    imageUrl: "/images/obi-wan-kenobi.png",
    affiliations: ["Jedi Order", "Galactic Republic"]
  },
  {
    id: 27,
    name: "R5-D4",
    species: "Droid",
    description: "An outdated but earnest astromech droid, R5-D4 was offered to Owen Lars by the Jawas. His malfunctioning motivator inadvertently allowed R2-D2 to fulfill his crucial mission, playing a small but pivotal role in galactic events.",
    imageUrl: "/images/r5d4.png",
    affiliations: ["Jawas"]
  },
  {
    id: 28,
    name: "Poe Dameron",
    species: "Human",
    birthYear: "2 BBY",
    description: "A fearless ace pilot and commander in the Resistance, Poe Dameron is celebrated for his daring maneuvers, quick wit, and unwavering commitment to the cause. His leadership and flying skills made him a symbol of hope against tyranny.",
    affiliations: ["Resistance"]
  },
  {
    id: 29,
    name: "Jabba Desilijic Tiure",
    species: "Hutt",
    birthYear: "600 BBY",
    description: "A notorious Hutt gangster and crime lord, Jabba Desilijic Tiure ruled a vast criminal empire from his palace on Tatooine. His greed, cunning, and ruthlessness made him one of the most feared figures in the galaxy’s underworld.",
    imageUrl: "/images/jabba-the-hutt.png",
    affiliations: ["Hutt Clan", "Criminal Underworld"]
  },
  {
    id: 30,
    name: "Ahsoka Tano",
    species: "Togruta",
    birthYear: "36 BBY",
    description: "Once the spirited Padawan of Anakin Skywalker, Ahsoka Tano left the Jedi Order to forge her own path. Her courage and sense of justice led her to become a key figure in the Rebellion, fighting for freedom and hope across the galaxy.",
    affiliations: ["Jedi Order (formerly)", "Galactic Republic (formerly)", "Rebel Alliance", "The Mandalore Resistance"]
  }
];

export const allReactions: Reaction[] = [
  { id: "9907", content: "�", characterId: 13, deleted: false },
  { id: "1302", content: "🚀", characterId: 13, deleted: false },
  { id: "9906", content: "�", characterId: 5, deleted: false },
  { id: "1003", content: "�", characterId: 10, deleted: false },
  { id: "9902", content: "�", characterId: 13, deleted: true },
  { id: "9903", content: "�", characterId: 4, deleted: false },
  { id: "1301", content: "�", characterId: 13, deleted: false },
  { id: "401", content: "😈", characterId: 4, deleted: false },
  { id: "9908", content: "💰", characterId: 17, deleted: true },
  { id: "9901", content: "⭐", characterId: 5, deleted: false },
  { id: "1001", content: "�", characterId: 10, deleted: false },
  { id: "1303", content: "👍", characterId: 13, deleted: false },
  { id: "301", content: "💙", characterId: 3, deleted: false },
  { id: "201", content: "�", characterId: 2, deleted: false },
  { id: "302", content: "⭐", characterId: 3, deleted: true },
  { id: "1002", content: "🙏", characterId: 10, deleted: true },
  { id: "1702", content: "🥶", characterId: 17, deleted: false },
  { id: "1304", content: "�", characterId: 13, deleted: false },
  { id: "407", content: "�", characterId: 4, deleted: true },
  { id: "202", content: "🤖", characterId: 2, deleted: false },
  { id: "1502", content: "�", characterId: 15, deleted: false },
  { id: "9905", content: "🤖", characterId: 3, deleted: false },
  { id: "1701", content: "💰", characterId: 17, deleted: false },
  { id: "1501", content: "🧙", characterId: 15, deleted: false },
  { id: "401", content: "�", characterId: 4, deleted: false },
  { id: "303", content: "⚡", characterId: 3, deleted: false },
  { id: "9904", content: "�", characterId: 1, deleted: false },
  { id: "2202", content: "�", characterId: 22, deleted: false },
  { id: "1503", content: "✨", characterId: 15, deleted: false },
  { id: "1202", content: "🤣", characterId: 12, deleted: false },
  { id: "405", content: "�", characterId: 4, deleted: false },
  { id: "203", content: "❓", characterId: 2, deleted: false },
  { id: "406", content: "�", characterId: 4, deleted: false },
  { id: "1504", content: "�", characterId: 15, deleted: false },
  { id: "2201", content: "🟣", characterId: 22, deleted: false },
  { id: "1802", content: "�", characterId: 18, deleted: false },
  { id: "204", content: "🤖", characterId: 2, deleted: false },
  { id: "503", content: "⭐", characterId: 5, deleted: false },
  { id: "501", content: "�", characterId: 5, deleted: false },
  { id: "1501", content: "�", characterId: 15, deleted: false },
  { id: "504", content: "👑", characterId: 5, deleted: false },
  { id: "104", content: "�", characterId: 1, deleted: false },
  { id: "1201", content: "�", characterId: 12, deleted: false },
  { id: "1801", content: "🎩", characterId: 18, deleted: false },
  { id: "303", content: "⚡", characterId: 3, deleted: false },
  { id: "102", content: "⭐", characterId: 1, deleted: false },
  { id: "502", content: "�", characterId: 5, deleted: false },
  { id: "401", content: "😈", characterId: 4, deleted: false },
  { id: "103", content: "�", characterId: 1, deleted: true },
  { id: "404", content: "😈", characterId: 4, deleted: false },
  { id: "105", content: "�", characterId: 1, deleted: false },
  { id: "106", content: "�", characterId: 1, deleted: true },
  { id: "1004", content: "�", characterId: 10, deleted: false },
];
