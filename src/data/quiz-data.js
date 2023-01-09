import QuizModel, { DIFFICULTY_LEVEL, CATEGORIES} from "../models/quiz-model";

export const QUESTIONS = [
  new QuizModel({
    id: 1,
    question: "Who was the oldest living person recorded in the Bible?",
    answer: "Methuselah",
    options: ["Moses", "Adam", "David", "Methuselah"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.easy.difficulty,
    points: DIFFICULTY_LEVEL.easy.points
  }),
  new QuizModel({
    id: 2,
    question: "Who did God instruct to build a big boat called the ark to save them from a great flood?",
    answer: "Noah",
    options: ["Abraham", "Adam", "Noah", "Peter"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.easy.difficulty,
    points: DIFFICULTY_LEVEL.easy.points
  }),
  new QuizModel({
    id: 3,
    question: "Where did God write the 10 commandments?",
    answer: "Stone tablets",
    options: ["Papyrus", "Stone tablets", "Notepad", "Clay tablets"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.easy.difficulty,
    points: DIFFICULTY_LEVEL.easy.points
  }),
  new QuizModel({
    id: 4,
    question: "Who was the mother of all human beings?",
    answer: "Eve",
    options: ["Mary", "Eve", "Sarah", "Miriam"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.easy.difficulty,
    points: DIFFICULTY_LEVEL.easy.points
  }),
  new QuizModel({
    id: 5,
    question: "Who was the shepherd boy that defeated a giant?",
    answer: "David",
    options: ["Moses", "Joseph", "David", "Jonathan"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.easy.difficulty,
    points: DIFFICULTY_LEVEL.easy.points
  }),
  new QuizModel({
    id: 6,
    question: "Who was the man that was thrown into the lion's den but was rescued by an angel?",
    answer: "Daniel",
    options: ["Hananiah", "Mishael", "Azariah", "Daniel"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.easy.difficulty,
    points: DIFFICULTY_LEVEL.easy.points
  }),
  new QuizModel({
    id: 7,
    question: "Who was the man who was swallowed alive by a big fish?",
    answer: "Jonah",
    options: ["Jeremiah", "Jonah", "Nathaniel", "Jacob"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.easy.difficulty,
    points: DIFFICULTY_LEVEL.easy.points
  }),
  new QuizModel({
    id: 8,
    question: "What did God make on the first day of creation?",
    answer: "Light",
    options: ["Earth", "Wind", "Fire", "Light"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.easy.difficulty,
    points: DIFFICULTY_LEVEL.easy.points
  }),
  new QuizModel({
    id: 9,
    question: "Who was referred to as the father of many nations?",
    answer: "Abraham",
    options: ["Jeremiah", "Abraham", "Nathaniel", "Jacob"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.easy.difficulty,
    points: DIFFICULTY_LEVEL.easy.points
  }),
  new QuizModel({
    id: 10,
    question: "Who was the wisest man in the Bible?",
    answer: "Solomon",
    options: ["David", "Solomon", "Job", "Abel"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.easy.difficulty,
    points: DIFFICULTY_LEVEL.easy.points
  }),
  new QuizModel({
    id: 11,
    question: "What is the first book in the Old Testment",
    answer: "Genesis",
    options: ["Genesis", "Matthew", "Joshua", "Numbers"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.easy.difficulty,
    points: DIFFICULTY_LEVEL.easy.points
  }),
  new QuizModel({
    id: 12,
    question: "How many disciples did Jesus have?",
    answer: "12",
    options: ["7", "6", "12", "24"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.easy.difficulty,
    points: DIFFICULTY_LEVEL.easy.points
  }),
  new QuizModel({
    id: 13,
    question: "What was the name of the town where the baby Jesus born?",
    answer: "Bethlehem",
    options: ["Nazareth", "Gilead", "Bethlehem", "Bethsaida"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.easy.difficulty,
    points: DIFFICULTY_LEVEL.easy.points
  }),
  new QuizModel({
    id: 14,
    question: "Who tempted Eve to eat the fruit?",
    answer: "Serpent",
    options: ["Bull", "Eagle", "Lion", "Serpent"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.easy.difficulty,
    points: DIFFICULTY_LEVEL.easy.points
  }),
  new QuizModel({
    id: 15,
    question: "Who led the Israelites' exodus out of Egypt?",
    answer: "Moses",
    options: ["David", "Moses", "Aaron", "Judah"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.easy.difficulty,
    points: DIFFICULTY_LEVEL.easy.points
  }),
  new QuizModel({
    id: 16,
    question: "Who fashioned the golden calf that the Israelites worshipped?",
    answer: "Aaron",
    options: ["Abihu", "Nadab", "Aaron", "Eliezer"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.medium.difficulty,
    points: DIFFICULTY_LEVEL.medium.points
  }),
  new QuizModel({
    id: 17,
    question: "Who was the brother of Mary and Martha that Jesus resurrected?",
    answer: "Lazarus",
    options: ["Matthew", "Zaccheus", "Lazarus", "Bartimaeus"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.medium.difficulty,
    points: DIFFICULTY_LEVEL.medium.points
  }),
  new QuizModel({
    id: 18,
    question: "Who was the successor of the prophet Elijah when he ascended to heaven?",
    answer: "Elisha",
    options: ["Naaman", "Ahab", "Elisha", "Gehazi"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.medium.difficulty,
    points: DIFFICULTY_LEVEL.medium.points
  }),
  new QuizModel({
    id: 19,
    question: "Who was the king of Israel when the Kingdom of Israel split into two?",
    answer: "Rehoboam",
    options: ["Solomon", "Saul", "Rehoboam", "David"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.medium.difficulty,
    points: DIFFICULTY_LEVEL.medium.points
  }),
  new QuizModel({
    id: 20,
    question: "Where did Jesus' family went to when they fled from King Herod?",
    answer: "Egypt",
    options: ["Capernaum", "Galilee", "Egypt", "Bethlehem"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.medium.difficulty,
    points: DIFFICULTY_LEVEL.medium.points
  }),
  new QuizModel({
    id: 21,
    question: "Who was the tax collector among Jesus' disciples?",
    answer: "Matthew",
    options: ["Peter", "Andrew", "James", "Matthew"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.medium.difficulty,
    points: DIFFICULTY_LEVEL.medium.points
  }),
  new QuizModel({
    id: 22,
    question: "Who was the father of Moses?",
    answer: "Amram",
    options: ["Aaron", "Amram", "Jacob", "Elihu"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.medium.difficulty,
    points: DIFFICULTY_LEVEL.medium.points
  }),
  new QuizModel({
    id: 23,
    question: "What was the trade of the apostle Paul?",
    answer: "Tent maker",
    options: ["Tent maker", "Carpenter", "Baker", "Merchant"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.medium.difficulty,
    points: DIFFICULTY_LEVEL.medium.points
  }),
  new QuizModel({
    id: 24,
    question: "Who was the eldest son of Jacob?",
    answer: "Reuben",
    options: ["Simeon", "Reuben", "Joseph", "Levi"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.medium.difficulty,
    points: DIFFICULTY_LEVEL.medium.points
  }),
  new QuizModel({
    id: 25,
    question: "Who was the only daughter of Jacob?",
    answer: "Dinah",
    options: ["Dinah", "Rebekah", "Rachel", "Tamar"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.medium.difficulty,
    points: DIFFICULTY_LEVEL.medium.points
  }),
  new QuizModel({
    id: 26,
    question: "Who was Queen Esther's cousin?",
    answer: "Mordecai",
    options: ["Haman", "Jonathan", "Mordecai", "Daniel"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.medium.difficulty,
    points: DIFFICULTY_LEVEL.medium.points
  }),
  new QuizModel({
    id: 27,
    question: "Who was the king of Babylon who conquered Judah?",
    answer: "Nebuchadnezzar",
    options: ["Ashurbanipal", "Nebuchadnezzar", "Neco", "Rehum"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.medium.difficulty,
    points: DIFFICULTY_LEVEL.medium.points
  }),
  new QuizModel({
    id: 28,
    question: "Who was the husband of Queen Esther?",
    answer: "Ahasuerus",
    options: ["Artaxerxes", "Haman", "Mordecai", "Ahasuerus"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.medium.difficulty,
    points: DIFFICULTY_LEVEL.medium.points
  }),
  new QuizModel({
    id: 29,
    question: "What is the longest book of the Bible?",
    answer: "Psalms",
    options: ["Deuteronomy", "Psalms", "Revelation", "Isaiah"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.medium.difficulty,
    points: DIFFICULTY_LEVEL.medium.points
  }),
  new QuizModel({
    id: 30,
    question: "What did God command Peter to do when He showed him a vision of a sheet of animals?",
    answer: "Kill and eat",
    options: ["Set them free", "Take care of them", "Kill and eat", "Give them away"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.medium.difficulty,
    points: DIFFICULTY_LEVEL.medium.points
  }),
  new QuizModel({
    id: 31,
    question: "Who is the father of Moab?",
    answer: "Lot",
    options: ["Esau", "Ham", "Lot", "Jacob"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.medium.difficulty,
    points: DIFFICULTY_LEVEL.medium.points
  }),
  new QuizModel({
    id: 32,
    question: "What is the longest name in the Bible?",
    answer: "Mahershalalhashbaz",
    options: ["Mahershalalhashbaz", "Zaphnathpaaneah", "Chushanrishathaim", "Ashur-rim-nisheshu"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.difficult.difficulty,
    points: DIFFICULTY_LEVEL.difficult.points
  }),
  new QuizModel({
    id: 33,
    question: "Who was the king of the Amalekites that King Saul spared?",
    answer: "Agag",
    options: ["Neco", "Agag", "Rehum", "Ben-hadad"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.difficult.difficulty,
    points: DIFFICULTY_LEVEL.difficult.points
  }),
  new QuizModel({
    id: 34,
    question: "Who was the wife of King Agrippa?",
    answer: "Bernice",
    options: ["Eunice", "Bernice", "Lois", "Dorcas"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.difficult.difficulty,
    points: DIFFICULTY_LEVEL.difficult.points
  }),
  new QuizModel({
    id: 35,
    question: "Who was the husband of Priscilla?",
    answer: "Aquila",
    options: ["Aquila", "Barnabas", "John Mark", "Timothy"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.difficult.difficulty,
    points: DIFFICULTY_LEVEL.difficult.points
  }),
  new QuizModel({
    id: 36,
    question: "How old was Enoch when God took him away?",
    answer: "365",
    options: ["187", "360", "365", "483"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.difficult.difficulty,
    points: DIFFICULTY_LEVEL.difficult.points
  }),
  new QuizModel({
    id: 37,
    question: "How long did King Manasseh reign?",
    answer: "55 years",
    options: ["25 years", "35 years", "45 years", "55 years"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.difficult.difficulty,
    points: DIFFICULTY_LEVEL.difficult.points
  }),
  new QuizModel({
    id: 38,
    question: "Who was the Persian king who allowed the Jews to return to their homeland?",
    answer: "Cyrus the Great",
    options: ["Darius the Mede", "Cyrus the Great", "Asshurbanipal", "Nebuchadnezzar"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.difficult.difficulty,
    points: DIFFICULTY_LEVEL.difficult.points
  }),
  new QuizModel({
    id: 39,
    question: "What was the name of the Jewish ruling council that plotted Jesus' death?",
    answer: "Sanhedrin",
    options: ["Zealots", "Saducees", "Sanhedrin", "Pharisees"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.difficult.difficulty,
    points: DIFFICULTY_LEVEL.difficult.points
  }),
  new QuizModel({
    id: 40,
    question: "What was the name of the storm winds that hit the island of Crete when Paul was sailing on a boat?",
    answer: "Euroclydon",
    options: ["Gregale", "Euroclydon", "Sirocco", "Levante"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.difficult.difficulty,
    points: DIFFICULTY_LEVEL.difficult.points
  }),
  new QuizModel({
    id: 41,
    question: "When was the Passover celebrated?",
    answer: "14th day of the 1st month",
    options: ["14th day of the 1st month", "15th day of the 3rd month", "10th day of the 7th month", "30th day of the 5th month"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.difficult.difficulty,
    points: DIFFICULTY_LEVEL.difficult.points
  }),
  new QuizModel({
    id: 42,
    question: "Who was the mother of Joab, David's commander?",
    answer: "Zeruiah",
    options: ["Abigal", "Zeruiah", "Elizabeth", "Jochebed"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.difficult.difficulty,
    points: DIFFICULTY_LEVEL.difficult.points
  }),
  new QuizModel({
    id: 43,
    question: "What did Rachel steal from her father Laban when they fled?",
    answer: "Household gods",
    options: ["Household gods", "Silver cup", "Gold jewelries", "Expensive clothes"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.difficult.difficulty,
    points: DIFFICULTY_LEVEL.difficult.points
  }),
  new QuizModel({
    id: 44,
    question: "What was the original name of Bethel?",
    answer: "Luz",
    options: ["Luz", "Zeboiim", "Gennesaret", "Midian"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.difficult.difficulty,
    points: DIFFICULTY_LEVEL.difficult.points
  }),
  new QuizModel({
    id: 45,
    question: "Who was the leader of the 3 mighty warriors of David?",
    answer: "Josheb-basshebeth",
    options: ["Josheb-basshebeth", "Eleazar", "Shammah", "Joab"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.difficult.difficulty,
    points: DIFFICULTY_LEVEL.difficult.points
  }),
  new QuizModel({
    id: 46,
    question: "What are the names of the pillars in the temple that King Solomon built?",
    answer: "Jakin and Boaz",
    options: ["Jannes and Jambres", "Jakin and Boaz", "Urim and Thummim", "Gold and Silver"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.difficult.difficulty,
    points: DIFFICULTY_LEVEL.difficult.points
  }),
  new QuizModel({
    id: 47,
    question: "How many years have passed before Paul was able to return to Jerusalem?",
    answer: "14",
    options: ["3", "7", "14", "21"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.difficult.difficulty,
    points: DIFFICULTY_LEVEL.difficult.points
  }),
  new QuizModel({
    id: 48,
    question: "What is the oldest written book of the Bible?",
    answer: "Job",
    options: ["Genesis", "Deuteronomy", "Judges", "Job"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.difficult.difficulty,
    points: DIFFICULTY_LEVEL.difficult.points
  }),
  new QuizModel({
    id: 49,
    question: "Which one is not a daughter of Job?",
    answer: "Keturah",
    options: ["Jemimah", "Keziah", "Keren-happuch", "Keturah"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.difficult.difficulty,
    points: DIFFICULTY_LEVEL.difficult.points
  }),
  new QuizModel({
    id: 50,
    question: "What is the shortest book in the Old Testament?",
    answer: "Obadiah",
    options: ["Ruth", "Esther", "Song of Solomon", "Obadiah"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.difficult.difficulty,
    points: DIFFICULTY_LEVEL.difficult.points
  }),
  new QuizModel({
    id: 51,
    question: "How long did the invalid man who lay by the pool of Bethesda waited so he could get to the water when it was stirred?",
    answer: "38 years",
    options: ["5 years", "16 years", "38 years", "45 years"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.difficult.difficulty,
    points: DIFFICULTY_LEVEL.difficult.points
  }),
  new QuizModel({
    id: 52,
    question: "How many plagues did God send to Egypt?",
    answer: "10",
    options: ["7", "10", "12", "18"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.easy.difficulty,
    points: DIFFICULTY_LEVEL.easy.points
  }),
  new QuizModel({
    id: 53,
    question: "What did Jacob give his son Joseph that made his brothers jealous?",
    answer: "A coat of many colors",
    options: ["A coat of many colors", "A golden ring", "A silver bracelet", "a flock of sheep"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.easy.difficulty,
    points: DIFFICULTY_LEVEL.easy.points
  }),
  new QuizModel({
    id: 54,
    question: "What did God use to speak to Moses in the desert?",
    answer: "A burning bush",
    options: ["A serpent", "A bull", "A burning bush", "A staff"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.easy.difficulty,
    points: DIFFICULTY_LEVEL.easy.points
  }),
  new QuizModel({
    id: 55,
    question: "Where did Moses' mother hide the baby Moses to save him from getting killed?",
    answer: "Basket made of reeds",
    options: ["Under the bed", "Basket made of reeds", "Behind a palm tree", "Rooftop"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.easy.difficulty,
    points: DIFFICULTY_LEVEL.easy.points
  }),
  new QuizModel({
    id: 56,
    question: "How many sons did Jacob have?",
    answer: "12",
    options: ["3", "7", "12", "13"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.easy.difficulty,
    points: DIFFICULTY_LEVEL.easy.points
  }),
  new QuizModel({
    id: 57,
    question: "Where did God give the Israelites the 10 commandments?",
    answer: "Mt. Sinai",
    options: ["Mt. Horeb", "Mt. Sinai", "Mt. Zion", "Mt. Moriah"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.easy.difficulty,
    points: DIFFICULTY_LEVEL.easy.points
  }),
  new QuizModel({
    id: 58,
    question: "Who was the first king of Israel?",
    answer: "Saul",
    options: ["Solomon", "David", "Saul", "Samuel"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.easy.difficulty,
    points: DIFFICULTY_LEVEL.easy.points
  }),
  new QuizModel({
    id: 59,
    question: "Who baptized Jesus?",
    answer: "John",
    options: ["Simon", "John", "Andrew", "Paul"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.easy.difficulty,
    points: DIFFICULTY_LEVEL.easy.points
  }),
  new QuizModel({
    id: 60,
    question: "What was Jesus' occupation before He started His ministry?",
    answer: "Carpenter",
    options: ["Fisherman", "Carpenter", "Rabbi", "Tax collector"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.easy.difficulty,
    points: DIFFICULTY_LEVEL.easy.points
  }),
  new QuizModel({
    id: 61,
    question: "What's the name of Jesus' hometown?",
    answer: "Nazareth",
    options: ["Bethlehem", "Nazareth", "Capernaum", "Bethsaida"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.easy.difficulty,
    points: DIFFICULTY_LEVEL.easy.points
  }),
  new QuizModel({
    id: 62,
    question: "What was Abraham's former name?",
    answer: "Abram",
    options: ["Haran", "Terah", "Abram", "Ishmael"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.easy.difficulty,
    points: DIFFICULTY_LEVEL.easy.points
  }),
  new QuizModel({
    id: 63,
    question: "Who was the wife of Abraham?",
    answer: "Sarah",
    options: ["Rebekah", "Sarah", "Ruth", "Naomi"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.easy.difficulty,
    points: DIFFICULTY_LEVEL.easy.points
  }),
  new QuizModel({
    id: 64,
    question: "Who was the 'Child of Promise'?",
    answer: "Isaac",
    options: ["Israel", "Isaac", "David", "Abraham"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.easy.difficulty,
    points: DIFFICULTY_LEVEL.easy.points
  }),
  new QuizModel({
    id: 65,
    question: "God forbade Adam and Eve to eat the fruit of what tree? ",
    answer: "Tree of knowledge of good and evil",
    options: ["Tree of life", "Tree of death and destruction", "Tree of wealth and power", "Tree of knowledge of good and evil"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.easy.difficulty,
    points: DIFFICULTY_LEVEL.easy.points
  }),
  new QuizModel({
    id: 66,
    question: "The Holy Spirit is represented by which animal?",
    answer: "A dove",
    options: ["A lion", "A bull", "A dove", "A sheep"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.easy.difficulty,
    points: DIFFICULTY_LEVEL.easy.points
  }),
  new QuizModel({
    id: 67,
    question: "Who murdered Abel? ",
    answer: "Cain",
    options: ["Serpent", "Nimrod", "Cain", "Lion"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.easy.difficulty,
    points: DIFFICULTY_LEVEL.easy.points
  }),
  new QuizModel({
    id: 68,
    question: "Who was Jacob's twin brother? ",
    answer: "Esau",
    options: ["Cain", "Seth", "Esau", "Lot"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.easy.difficulty,
    points: DIFFICULTY_LEVEL.easy.points
  }),
  new QuizModel({
    id: 69,
    question: "Who was the giant that was defeated by a shepherd boy?",
    answer: "Goliath",
    options: ["Ishbi-benob", "Goliath", "Og", "Anak"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.easy.difficulty,
    points: DIFFICULTY_LEVEL.easy.points
  }),
  new QuizModel({
    id: 70,
    question: "How many years of famine did Joseph prophesy?",
    answer: "7",
    options: ["3", "7", "9", "12"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.easy.difficulty,
    points: DIFFICULTY_LEVEL.easy.points
  }),
  new QuizModel({
    id: 71,
    question: "What language was the Old Testament written in?",
    answer: "Hebrew",
    options: ["Latin", "Hebrew", "Greek", "Babylonian"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.easy.difficulty,
    points: DIFFICULTY_LEVEL.easy.points
  }),
  new QuizModel({
    id: 72,
    question: "The hometown of Philip, Andrew and Peter",
    answer: "Bethsaida",
    options: ["Bethlehem", "Nazareth", "Capernaum", "Bethsaida"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.medium.difficulty,
    points: DIFFICULTY_LEVEL.medium.points
  }),
  new QuizModel({
    id: 73,
    question: "Who cut off Samson's hair?",
    answer: "A servant",
    options: ["Delilah", "A soldier", "A servant", "Samson"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.medium.difficulty,
    points: DIFFICULTY_LEVEL.medium.points
  }),
  new QuizModel({
    id: 74,
    question: "What was Jesus' first miracle?",
    answer: "He turned water into wine",
    options: ["He turned water into wine", "He turned a clay pigeon into a live one", "He walked on water", "He multiplied the bread and fish"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.medium.difficulty,
    points: DIFFICULTY_LEVEL.medium.points
  }),
  new QuizModel({
    id: 75,
    question: "Where did Jesus walk on water?",
    answer: "Sea of Galilee",
    options: ["Red Sea", "Sea of Galilee", "Jordan River", "Nile River"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.medium.difficulty,
    points: DIFFICULTY_LEVEL.medium.points
  }),
  new QuizModel({
    id: 76,
    question: "Where was the rock that God instructed Moses to strike so that it will produce water?",
    answer: "Horeb",
    options: ["Horeb", "Nebo", "Moriah", "Sinai"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.medium.difficulty,
    points: DIFFICULTY_LEVEL.medium.points
  }),
  new QuizModel({
    id: 77,
    question: "What is the shortest book in the Bible?",
    answer: "2 John",
    options: ["Jude", "1 Peter", "2 John", "Song of Solomon"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.medium.difficulty,
    points: DIFFICULTY_LEVEL.medium.points
  }),
  new QuizModel({
    id: 78,
    question: "Who was Samuel's mother?",
    answer: "Hannah",
    options: ["Peninah", "Ruth", "Hannah", "Miriam"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.medium.difficulty,
    points: DIFFICULTY_LEVEL.medium.points
  }),
  new QuizModel({
    id: 79,
    question: "What is the only book in the Bible that does not contain the word 'God'?",
    answer: "Esther",
    options: ["Song of Solomon", "Esther", "Numbers", "Philemon"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.medium.difficulty,
    points: DIFFICULTY_LEVEL.medium.points
  }),
  new QuizModel({
    id: 80,
    question: "How many brothers did Jesus have?",
    answer: "4",
    options: ["0", "1", "4", "7"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.medium.difficulty,
    points: DIFFICULTY_LEVEL.medium.points
  }),
  new QuizModel({
    id: 81,
    question: "Samson killed 1000 Philistines using a ____?",
    answer: "Donkey's jawbone",
    options: ["Rusty sword", "Broken club", "Donkey's jawbone", "Elephant's tusk"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.medium.difficulty,
    points: DIFFICULTY_LEVEL.medium.points
  }),
  new QuizModel({
    id: 82,
    question: "What was the first bird that Noah let out of the ark?",
    answer: "Raven",
    options: ["Dove", "Falcon", "Raven", "Crow"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.medium.difficulty,
    points: DIFFICULTY_LEVEL.medium.points
  }),
  new QuizModel({
    id: 83,
    question: "God gave the Israelites Manna to eat in the wilderness. What does the word 'Manna' mean?",
    answer: "What is it?",
    options: ["Angel's bread", "What is it?", "Magic", "Heaven sent"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.medium.difficulty,
    points: DIFFICULTY_LEVEL.medium.points
  }),
  new QuizModel({
    id: 84,
    question: "Who was the prophet that was ordered by God to prophesy in the valley of dry bones?",
    answer: "Ezekiel",
    options: ["Jeremiah", "Daniel", "Ezekiel", "Elijah"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.medium.difficulty,
    points: DIFFICULTY_LEVEL.medium.points
  }),
  new QuizModel({
    id: 85,
    question: "Who was the husband of Bathsheba that King David wanted to be killed?",
    answer: "Uriah",
    options: ["Eliezer", "Jashobeam", "Uriah", "Joab"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.medium.difficulty,
    points: DIFFICULTY_LEVEL.medium.points
  }),
  new QuizModel({
    id: 86,
    question: "Which one of the churches from Revelation did not receive any rebuke from God?",
    answer: "Philadelphia",
    options: ["Ephesus", "Philadelphia", "Pergamum", "Sardis"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.difficult.difficulty,
    points: DIFFICULTY_LEVEL.difficult.points
  }),
  new QuizModel({
    id: 87,
    question: "Who was the priest that annointed Solomon as king?",
    answer: "Zadok",
    options: ["Samuel", "Abiathar", "Zadok", "Isaiah"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.difficult.difficulty,
    points: DIFFICULTY_LEVEL.difficult.points
  }),
  new QuizModel({
    id: 88,
    question: "Which Jewish festival was celebrated by the Israelites after they defeated Haman and their enemies?",
    answer: "Purim",
    options: ["Yom Kippur", "Rosh Hashanah", "Purim", "Hanukkah"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.difficult.difficulty,
    points: DIFFICULTY_LEVEL.difficult.points
  }),
  new QuizModel({
    id: 89,
    question: "Who replaced Judas Iscariot as an apostle?",
    answer: "Matthias",
    options: ["Stephen", "Matthias", "Ananias", "Simon Magus"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.difficult.difficulty,
    points: DIFFICULTY_LEVEL.difficult.points
  }),
  new QuizModel({
    id: 90,
    question: "Who was the twin who was tied with a scarlet thread in his wrist as they were being delivered?",
    answer: "Zerah",
    options: ["Perez", "Zerah", "Esau", "Jacob"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.difficult.difficulty,
    points: DIFFICULTY_LEVEL.difficult.points
  }),
  new QuizModel({
    id: 91,
    question: "Who was the third son of Adam and Eve mentioned by name?",
    answer: "Seth",
    options: ["Lamech", "Cain", "Abel", "Seth"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.easy.difficulty,
    points: DIFFICULTY_LEVEL.easy.points
  }),
  new QuizModel({
    id: 92,
    question: "Who was the father of Abraham?",
    answer: "Terah",
    options: ["Haran", "Terah", "Laban", "Lamech"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.medium.difficulty,
    points: DIFFICULTY_LEVEL.medium.points
  }),
  new QuizModel({
    id: 93,
    question: "When Jacob gave his final blessings to his sons, which of his sons did he likened to a serpent by the roadside?",
    answer: "Dan",
    options: ["Dan", "Levi", "Issachar", "Asher"],
    category: CATEGORIES.general,
    difficulty: DIFFICULTY_LEVEL.difficult.difficulty,
    points: DIFFICULTY_LEVEL.difficult.points
  })
];
