import { HadithEntry, HistoricalContextItem, ReciterInfo } from '../types/tafsir';

export const RECITERS: ReciterInfo[] = [
  {
    id: 'alafasy',
    name: 'Mishary Rashid Al-Afasy',
    style: 'Murattal · Clear Melodic Cadence',
    folder: 'Alafasy_128kbps',
  },
  {
    id: 'husary',
    name: 'Mahmoud Khalil Al-Husary',
    style: 'Murattal · Classical Tajwid Standard',
    folder: 'Husary_128kbps',
  },
  {
    id: 'abdul_basit',
    name: 'Abdul Basit ‘Abdus-Samad',
    style: 'Murattal · Measured Classical Recitation',
    folder: 'Abdul_Basit_Murattal_192kbps',
  },
];

export const FULL_SURAH_AUDIO_URL =
  'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/32.mp3';

export const SURAH_HADITHS: HadithEntry[] = [
  {
    id: 'friday-fajr',
    title: {
      en: 'Weekly Friday Fajr Recitation',
      id: 'Bacaan Rutin Salat Subuh Hari Jumat',
      ms: 'Bacaan Mingguan Solat Subuh Hari Jumaat',
    },
    narrator: {
      en: 'Narrated by Abu Hurayrah (may Allah be pleased with him)',
      id: 'Diriwayatkan oleh Abu Hurairah radhiyallahu ‘anhu',
      ms: 'Diriwayatkan oleh Abu Hurairah radhiyallahu ‘anhu',
    },
    source: 'Sahih al-Bukhari 891 · Sahih Muslim 880',
    grading: {
      en: 'Authentic (Muttafaq ‘Alayh)',
      id: 'Shahih (Muttafaq ‘Alaih)',
      ms: 'Sahih (Muttafaq ‘Alaih)',
    },
    relatedAyahs: [4, 7, 15, 27],
    arabic:
      'كَانَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَقْرَأُ فِي الْجُمُعَةِ فِي صَلَاةِ الْفَجْرِ: الم تَنْزِيلُ السَّجْدَةَ، وَهَلْ أَتَى عَلَى الْإِنْسَانِ حِينٌ مِنَ الدَّهْرِ',
    translation: {
      en: '“The Prophet (peace and blessings be upon him) used to recite in the Fajr prayer on Friday: Alif-Lam-Mim Tanzil (Surah As-Sajdah) in the first rak‘ah, and Hal ata ‘alal-insani hinun minad-dahr (Surah Al-Insan) in the second.”',
      id: '“Nabi shallallahu ‘alaihi wa sallam biasa membaca pada salat Subuh hari Jumat: Alif-Lam-Mim Tanzil (Surah As-Sajdah) dan Hal ata ‘alal-insani hinun minad-dahr (Surah Al-Insan).”',
      ms: '“Nabi shallallahu ‘alaihi wa sallam lazim membaca dalam solat Subuh pada hari Jumaat: Alif-Lam-Mim Tanzil (Surah As-Sajdah) pada rakaat pertama, dan Hal ata ‘alal-insani hinun minad-dahr (Surah Al-Insan) pada rakaat kedua.”',
    },
    insight: {
      en: 'Ibn al-Qayyim explains in Zad al-Ma‘ad that the Prophet chose these two surahs specifically for Friday dawn because both recount the creation of Adam, human origin, and the Resurrection—events linked to Friday—so the community begins every Friday remembering its origin, humility in prostration, and final return.',
      id: 'Ibnul Qayyim dalam Zadul Ma‘ad menjelaskan bahwa Nabi memilih dua surah ini khusus pada Subuh Jumat karena keduanya mengisahkan penciptaan Adam, asal-usul manusia, dan Hari Kebangkitan—peristiwa besar yang terkait dengan hari Jumat—agar umat memulai hari Jumat dengan mengingat asal penciptaan, ketundukan sujud, dan hari kembali.',
      ms: 'Ibn al-Qayyim dalam Zad al-Ma‘ad menjelaskan bahawa Rasulullah memilih dua surah ini khusus pada waktu Subuh Jumaat kerana kedua-duanya menceritakan penciptaan Nabi Adam, asal kejadian manusia, dan Hari Kebangkitan—peristiwa besar yang berkait dengan hari Jumaat—agar umat memulakan hari Jumaat dengan mengingati asal kejadian, sujud ketundukan, dan hari kembali kepada Allah.',
    },
  },
  {
    id: 'before-sleep',
    title: {
      en: 'The Prophet’s Nightly Recitation Before Sleep',
      id: 'Amalan Bacaan Nabi Sebelum Tidur Setiap Malam',
      ms: 'Amalan Bacaan Nabi Sebelum Tidur Setiap Malam',
    },
    narrator: {
      en: 'Narrated by Jabir ibn ‘Abdillah (may Allah be pleased with him)',
      id: 'Diriwayatkan oleh Jabir bin ‘Abdillah radhiyallahu ‘anhu',
      ms: 'Diriwayatkan oleh Jabir bin ‘Abdillah radhiyallahu ‘anhu',
    },
    source: 'Jami‘ at-Tirmidhi 2892 · Musnad Ahmad 14659',
    grading: {
      en: 'Authentic (Sahih)',
      id: 'Shahih',
      ms: 'Sahih',
    },
    relatedAyahs: [1, 2, 16, 17],
    arabic:
      'كَانَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ لَا يَنَامُ حَتَّى يَقْرَأَ الم تَنْزِيلُ، وَتَبَارَكَ الَّذِي بِيَدِهِ الْمُلْكُ',
    translation: {
      en: '“The Prophet (peace and blessings be upon him) would never go to sleep until he had recited Alif-Lam-Mim Tanzil (Surah As-Sajdah) and Tabarakalladhi bi-yadihil-Mulk (Surah Al-Mulk).”',
      id: '“Nabi shallallahu ‘alaihi wa sallam tidak pernah tidur sebelum membaca Alif-Lam-Mim Tanzil (Surah As-Sajdah) dan Tabarakalladzi bi-yadihil-Mulk (Surah Al-Mulk).”',
      ms: '“Nabi shallallahu ‘alaihi wa sallam tidak akan tidur sehinggalah baginda membaca Alif-Lam-Mim Tanzil (Surah As-Sajdah) dan Tabarakalladzi bi-yadihil-Mulk (Surah Al-Mulk).”',
    },
    insight: {
      en: 'Sleep is described in the Qur’an as the “minor death” (39:42). Reciting Surah As-Sajdah before sleep anchors the believer in trust in the One who retrieves souls (32:11) and inspires night prayer (32:16).',
      id: 'Tidur disebut dalam Al-Qur’an sebagai “wafat kecil” (QS Az-Zumar: 42). Membaca Surah As-Sajdah sebelum tidur menanamkan ketenangan tawakal kepada Dzat yang menggenggam jiwa (32:11) sekaligus menumbuhkan kerinduan bangun bermunajat di waktu malam (32:16).',
      ms: 'Tidur digambarkan dalam al-Quran sebagai “kematian kecil” (39:42). Membaca Surah As-Sajdah sebelum tidur menenangkan hati dengan tawakal kepada Tuhan yang mengambil roh (32:11) serta menyemai semangat bangun beribadah pada waktu malam (32:16).',
    },
  },
  {
    id: 'satan-weeps',
    title: {
      en: 'Satan Withdraws Weeping at Prostration',
      id: 'Setan Menangis Saat Mukmin Bersujud Tilawah',
      ms: 'Syaitan Menangis Apabila Mukmin Sujud Tilawah',
    },
    narrator: {
      en: 'Narrated by Abu Hurayrah (may Allah be pleased with him)',
      id: 'Diriwayatkan oleh Abu Hurairah radhiyallahu ‘anhu',
      ms: 'Diriwayatkan oleh Abu Hurairah radhiyallahu ‘anhu',
    },
    source: 'Sahih Muslim 81',
    grading: {
      en: 'Authentic (Sahih)',
      id: 'Shahih',
      ms: 'Sahih',
    },
    relatedAyahs: [15],
    arabic:
      'إِذَا قَرَأَ ابْنُ آدَمَ السَّجْدَةَ فَسَجَدَ، اعْتَزَلَ الشَّيْطَانُ يَبْكِي، يَقُولُ: يَا وَيْلَهُ، أُمِرَ ابْنُ آدَمَ بِالسُّجُودِ فَسَجَدَ فَلَهُ الْجَنَّةُ، وَأُمِرْتُ بِالسُّجُودِ فَأَبَيْتُ فَلِيَ النَّارُ',
    translation: {
      en: '“When the son of Adam recites a verse of prostration and prostrates, Satan withdraws weeping and says: ‘Woe is me! The son of Adam was commanded to prostrate and he prostrated, so Paradise is his; whereas I was commanded to prostrate and I refused, so the Fire is mine.’”',
      id: '“Apabila anak Adam membaca ayat sajdah lalu bersujud, setan menyingkir sambil menangis dan berkata: ‘Celaka diriku! Anak Adam diperintah bersujud lalu ia bersujud maka baginya surga, sedangkan aku diperintah bersujud namun aku menolak maka bagiku neraka.’”',
      ms: '“Apabila anak Adam membaca ayat sajdah lalu dia sujud, syaitan menjauhkan diri sambil menangis dan berkata: ‘Celakalah aku! Anak Adam diperintahkan sujud lalu dia sujud maka baginya syurga; sedangkan aku diperintahkan sujud lalu aku enggan maka bagiku neraka.’”',
    },
    insight: {
      en: 'Directly illuminates Ayah 32:15 (“they fall down in prostration... and they are not arrogant”). Prostration reverses the primordial sin of arrogance (istikbar) committed by Iblis.',
      id: 'Menjelaskan secara langsung ruh Ayat 32:15 (“mereka menyungkur sujud... dan tidak menyombongkan diri”). Sujud adalah penawar utama kesombongan (istikbar) yang dahulu menjatuhkan Iblis.',
      ms: 'Menghuraikan secara langsung roh Ayat 32:15 (“mereka segera sujud... dan mereka tidak menyombongkan diri”). Sujud mematahkan sifat takbur (istikbar) yang dahulu menjerumuskan Iblis.',
    },
  },
  {
    id: 'tahajjud-muadh',
    title: {
      en: 'The Peak of the Matter: Night Prayer in Verse 16',
      id: 'Puncak Kesempurnaan Ibadah: Qiyamul-Lail pada Ayat 16',
      ms: 'Kemuncak Kebaikan: Solat Malam dalam Ayat 16',
    },
    narrator: {
      en: 'Narrated by Mu‘adh ibn Jabal (may Allah be pleased with him)',
      id: 'Diriwayatkan oleh Mu‘adz bin Jabal radhiyallahu ‘anhu',
      ms: 'Diriwayatkan oleh Mu‘adz bin Jabal radhiyallahu ‘anhu',
    },
    source: 'Jami‘ at-Tirmidhi 2616 · Sunan Ibn Majah 3973',
    grading: {
      en: 'Authentic (Sahih)',
      id: 'Shahih',
      ms: 'Sahih',
    },
    relatedAyahs: [16],
    arabic:
      'أَلَا أَدُلُّكَ عَلَى أَبْوَابِ الْخَيْرِ؟ الصَّوْمُ جُنَّةٌ، وَالصَّدَقَةُ تُطْفِئُ الْخَطِيئَةَ كَمَا يُطْفِئُ الْمَاءُ النَّارَ، وَصَلَاةُ الرَّجُلِ مِنْ جَوْفِ اللَّيْلِ، ثُمَّ تَلَا: تَتَجَافَىٰ جُنُوبُهُمْ عَنِ الْمَضَاجِعِ',
    translation: {
      en: '“Shall I not guide you to the gates of goodness? Fasting is a shield, charity extinguishes sin just as water extinguishes fire, and a person’s prayer in the depths of the night.” Then he recited: “Their sides forsake their beds...” (32:16).',
      id: '“Maukah engkau kutunjukkan pintu-pintu kebaikan? Puasa adalah perisai, sedekah memadamkan kesalahan sebagaimana air memadamkan api, dan salat seseorang di tengah malam.” Lalu beliau membaca firman Allah: “Lambung mereka jauh dari tempat tidurnya...” (QS 32:16).',
      ms: '“Mahukah aku tunjukkan kepadamu pintu-pintu kebaikan? Puasa adalah perisai, sedekah memadamkan dosa sebagaimana air memadamkan api, dan solat seseorang pada tengah malam.” Kemudian baginda membaca ayat: “Lambung mereka renggang daripada tempat tidurnya...” (QS 32:16).',
    },
    insight: {
      en: 'The Prophet himself cited Ayah 32:16 as the Qur’anic definition of voluntary night devotion (Tahajjud), pairing secret nocturnal prayer with quiet generosity.',
      id: 'Rasulullah sendiri mengutip Ayat 32:16 sebagai landasan Al-Qur’an bagi keutamaan salat malam (Tahajud), yang dipadukan dengan sedekah yang memadamkan dosa.',
      ms: 'Rasulullah sendiri memetik Ayat 32:16 sebagai huraian al-Quran bagi kemuliaan solat malam (Tahajud), yang digandingkan dengan sedekah yang menghapuskan dosa.',
    },
  },
  {
    id: 'hidden-comfort-qudsi',
    title: {
      en: 'Hadith Qudsi on the Concealed Reward of Verse 17',
      id: 'Hadis Qudsi tentang Nikmat Tersembunyi pada Ayat 17',
      ms: 'Hadis Qudsi mengenai Nikmat Tersembunyi pada Ayat 17',
    },
    narrator: {
      en: 'Narrated by Abu Hurayrah (may Allah be pleased with him)',
      id: 'Diriwayatkan oleh Abu Hurairah radhiyallahu ‘anhu',
      ms: 'Diriwayatkan oleh Abu Hurairah radhiyallahu ‘anhu',
    },
    source: 'Sahih al-Bukhari 3244 · Sahih Muslim 2824',
    grading: {
      en: 'Authentic (Muttafaq ‘Alayh)',
      id: 'Shahih (Muttafaq ‘Alaih)',
      ms: 'Sahih (Muttafaq ‘Alaih)',
    },
    relatedAyahs: [17],
    arabic:
      'قَالَ اللَّهُ تَعَالَى: أَعْدَدْتُ لِعِبَادِي الصَّالِحِينَ مَا لَا عَيْنٌ رَأَتْ، وَلَا أُذُنٌ سَمِعَتْ، وَلَا خَطَرَ عَلَى قَلْبِ بَشَرٍ، فَاقْرَءُوا إِنْ شِئْتُمْ: فَلَا تَعْلَمُ نَفْسٌ مَّا أُخْفِيَ لَهُم مِّن قُرَّةِ أَعْيُنٍ',
    translation: {
      en: '“Allah the Exalted says: ‘I have prepared for My righteous servants what no eye has seen, no ear has heard, and what has never crossed a human heart.’ Recite if you wish: ‘And no soul knows what has been hidden for them of comfort for eyes.’” (32:17).',
      id: '“Allah Ta‘ala berfirman: ‘Aku telah menyiapkan bagi hamba-hamba-Ku yang saleh sesuatu yang belum pernah dilihat mata, belum pernah didengar telinga, dan belum pernah terlintas di hati manusia.’ Bacalah jika kalian mau: ‘Maka tidak seorang pun mengetahui apa yang disembunyikan untuk mereka yaitu penyejuk pandangan mata.’” (QS 32:17).',
      ms: '“Allah Ta‘ala berfirman: ‘Aku telah menyediakan bagi hamba-hamba-Ku yang soleh nikmat yang tidak pernah dilihat oleh mata, tidak pernah didengar oleh telinga, dan tidak pernah terlintas dalam hati manusia.’ Bacalah jika kamu mahu: ‘Maka tiada seorang pun yang mengetahui apa yang dirahsiakan untuk mereka daripada penyejuk mata.’” (QS 32:17).',
    },
    insight: {
      en: 'Establishes the direct link between unseen devotion in this world and unimaginable joy in the Hereafter: every earthly image of Paradise is only an approximation.',
      id: 'Menegaskan hubungan langsung antara ibadah yang disembunyikan di dunia dan kebahagiaan tak terlukiskan di akhirat: segala gambaran surga di dunia hanyalah pendekatan makna.',
      ms: 'Menegaskan pertalian langsung antara ibadah tersembunyi di dunia dengan kegembiraan yang tidak terbayang di akhirat: segala gambaran syurga di dunia hanyalah kiasan pendekatan.',
    },
  },
];

export const HISTORICAL_CONTEXT: HistoricalContextItem[] = [
  {
    id: 'makkan-chronology',
    indexLabel: '01',
    eraLabel: {
      en: 'Middle Meccan Period · c. 615–617 CE',
      id: 'Periode Mekah Pertengahan · Sekitar 615–617 M',
      ms: 'Tempoh Makkah Pertengahan · Sekitar 615–617 M',
    },
    title: {
      en: 'Revelation Amid Quraysh Intellectual Resistance',
      id: 'Turunnya Wahyu di Tengah Penolakan Kaum Quraisy',
      ms: 'Penurunan Wahyu di Tengah Tentangan Kaum Quraisy',
    },
    relatedAyahs: [1, 2, 3, 10],
    narrative: {
      en: 'Surah As-Sajdah was revealed in Makkah immediately following Surah Luqman (31) and prior to Surah At-Tur (52) in the classical chronological sequence. By this middle Meccan phase, opposition from Quraysh notables had shifted from mere dismissal to organized ideological ridicule: claiming Muhammad fabricated the Qur’an (32:3), mocking bodily resurrection after decay into earth (32:10), and taunting believers to produce an immediate worldly reckoning (32:28).',
      id: 'Surah As-Sajdah diturunkan di Mekah tepat setelah Surah Luqman (31) dan sebelum Surah Ath-Thur (52) menurut urutan kronologis klasik. Pada fase pertengahan dakwah Mekah ini, perlawanan pemuka Quraisy beralih menjadi olok-olok ideologis yang terstruktur: menuduh Nabi mengarang Al-Qur’an (32:3), mencemooh kebangkitan jasad dari tanah (32:10), dan menantang agar azab atau kemenangan segera datang (32:28).',
      ms: 'Surah As-Sajdah diturunkan di Makkah sejurus selepas Surah Luqman (31) dan sebelum Surah At-Tur (52) menurut susunan kronologi klasik. Pada fasa pertengahan dakwah Makkah ini, tentangan pembesar Quraisy bertukar kepada sindiran ideologi yang terancang: menuduh Nabi mengada-adakan al-Quran (32:3), mempersendakan kebangkitan jasad daripada tanah (32:10), dan mencabar agar balasan segera diturunkan (32:28).',
    },
    scholarlyNote: {
      en: 'Its opening ("Alif-Lam-Mim. The revelation of the Book about which there is no doubt") mirrors Surah Luqman and Ar-Rum, forming a cohesive Meccan cluster centered on cosmic signs and resurrection.',
      id: 'Pembukaannya ("Alif-Lam-Mim. Turunnya Al-Kitab yang tidak ada keraguan di dalamnya") beriringan dengan Surah Luqman dan Ar-Rum, membentuk rangkaian surah Makkiyah yang berporos pada tanda kosmik dan hari kebangkitan.',
      ms: 'Pembukaannya ("Alif-Lam-Mim. Turunnya al-Kitab yang tidak ada keraguan padanya") seiring dengan Surah Luqman dan Ar-Rum, membentuk kelompok surah Makkiyah yang berpusat pada tanda-tanda alam dan kebangkitan.',
    },
  },
  {
    id: 'asbab-verse-18',
    indexLabel: '02',
    eraLabel: {
      en: 'Asbabun Nuzul & Makkan-Medinan Discussion',
      id: 'Asbabun Nuzul & Diskusi Makkiyah-Madaniyah',
      ms: 'Asbabun Nuzul & Perbincangan Makkiyah-Madaniyah',
    },
    title: {
      en: 'The Moral Contrast of Verse 18 & Early Narrations',
      id: 'Riwayat Turunnya Ayat 18 dan Kontras Iman vs Kefasikan',
      ms: 'Riwayat Penurunan Ayat 18 & Perbezaan Iman dengan Kefasikan',
    },
    relatedAyahs: [16, 18, 19, 20],
    narrative: {
      en: 'Classical exegetes such as al-Wahidi, al-Tabari, and Ibn Kathir preserve a narration from Ibn ‘Abbas and ‘Ata’ concerning an exchange between ‘Ali ibn Abi Talib (RA) and al-Walid ibn ‘Uqbah (or ‘Uqbah ibn Abi Mu‘ayt). When al-Walid boasted of his eloquence and physical stature over ‘Ali, the verses “Is one who was a believer like one who was defiantly disobedient? They are not equal” (32:18–20) highlighted that true nobility is measured solely by faith and righteousness, not tribal prestige.',
      id: 'Para mufasir klasik seperti al-Wahidi, ath-Thabari, dan Ibn Katsir mencatat riwayat dari Ibn Abbas dan ‘Atha tentang perdebatan antara Ali bin Abi Thalib dan al-Walid bin ‘Uqbah (atau ‘Uqbah bin Abi Mu‘aith). Ketika al-Walid menyombongkan kefasihan dan kedudukannya di hadapan Ali, ayat “Apakah orang beriman sama dengan orang fasik? Mereka tidak sama” (32:18–20) menegaskan bahwa kemuliaan sejati diukur dengan iman dan amal saleh, bukan kebanggaan kabilah.',
      ms: 'Para mufasir klasik seperti al-Wahidi, al-Tabari, dan Ibn Kathir merekodkan riwayat daripada Ibn Abbas dan ‘Ata’ mengenai pertikaian antara Ali bin Abi Talib (RA) dengan al-Walid bin ‘Uqbah (atau ‘Uqbah bin Abi Mu‘ayt). Apabila al-Walid membanggakan kefasihan dan kedudukannya di hadapan Ali, ayat “Adakah orang yang beriman sama seperti orang yang fasik? Mereka tidak sama” (32:18–20) menegaskan kemuliaan sebenar diukur dengan iman dan amal soleh.',
    },
    scholarlyNote: {
      en: 'While some scholars (cited in al-Suyuti’s al-Itqan) viewed Ayat 16–20 as Medinan based on this incident, Ibn Kathir and Ibn ‘Ashur note that the wording fits seamlessly into the Meccan theme contrasting the prostrating believers (v. 15) with defiant deniers.',
      id: 'Sebagian ulama (dinukil dalam al-Itqan karya as-Suyuthi) menilai Ayat 16–20 turun di Madinah berdasarkan riwayat tersebut, sementara Ibn Katsir dan Ibn ‘Asyur menegaskan susunannya menyatu erat dengan konteks Makkiyah setelah Ayat 15.',
      ms: 'Walaupun sebahagian ulama (dinukilkan dalam al-Itqan oleh al-Suyuti) berpandangan Ayat 16–20 bersifat Madaniyah berdasarkan riwayat ini, Ibn Kathir dan Ibn ‘Asyur menjelaskan susunan ayatnya menyatu rapi dengan tema Makkiyah selepas Ayat 15.',
    },
  },
  {
    id: 'caravan-geography',
    indexLabel: '03',
    eraLabel: {
      en: 'Arabian Trade Geography · Ayat 26',
      id: 'Geografi Kafilah Arab · Ayat 26',
      ms: 'Geografi Kafilah Arab · Ayat 26',
    },
    title: {
      en: 'Walking Among the Ruins of Thamud and ‘Ad',
      id: 'Melintasi Reruntuhan Kaum Tsamud dan ‘Ad di Jalur Dagang',
      ms: 'Berjalan di Runtuhan Kaum Thamud dan ‘Ad di Laluan Dagang',
    },
    relatedAyahs: [26, 27],
    narrative: {
      en: 'Ayah 32:26 asks: “Has it not become clear to them how many generations We destroyed before them, as they walk among their dwellings?” This was not an abstract historical reference. Quraysh merchants led annual winter caravans south toward Yemen (passing the legacy of ‘Ad in al-Ahqaf) and summer caravans north toward Gaza and Damascus—passing straight through the rock-carved ruins of Thamud at al-Hijr (Mada’in Salih) and the Dead Sea plain.',
      id: 'Ayat 32:26 bertanya: “Tidakkah menjadi petunjuk bagi mereka betapa banyak umat sebelum mereka yang Kami binasakan, sedangkan mereka sendiri berjalan di tempat kediaman umat itu?” Ini merujuk pada pengalaman langsung bangsa Quraisy: kafilah musim dingin mereka menuju Yaman melintasi jejak kaum ‘Ad, dan kafilah musim panas menuju Syam melewati langsung reruntuhan batu kaum Tsamud di Al-Hijr (Mada’in Shalih).',
      ms: 'Ayat 32:26 mempersoalkan: “Tidakkah menjadi petunjuk bagi mereka betapa banyak generasi sebelum mereka yang telah Kami binasakan, sedangkan mereka sendiri berjalan di tempat kediaman kaum itu?” Hal ini merujuk pengalaman nyata kafilah Quraisy: perjalanan musim sejuk ke Yaman merentasi wilayah kaum ‘Ad, manakala kafilah musim panas ke Syam melalui terus runtuhan batu kaum Thamud di al-Hijr (Mada’in Salih).',
    },
    scholarlyNote: {
      en: 'The Qur’an pairs physical geography with moral inquiry: seeing silent monuments should awaken “hearing” (v. 26) just as witnessing seasonal rainfall on arid Arabian valleys should awaken “sight” (v. 27).',
      id: 'Al-Qur’an memadukan geografi nyata dengan kesadaran moral: melihat reruntuhan sunyi semestinya membuka “pendengaran” hati (ayat 26), sebagaimana melihat hujan menghidupkan lembah gersang membuka “penglihatan” (ayat 27).',
      ms: 'Al-Quran menggandingkan geografi nyata dengan keinsafan moral: menyaksikan runtuhan sepi sepatutnya membangkitkan “pendengaran” hati (ayat 26), sebagaimana melihat hujan menyuburkan lembah gersang membangkitkan “penglihatan” (ayat 27).',
    },
  },
  {
    id: 'al-fath-context',
    indexLabel: '04',
    eraLabel: {
      en: 'Prophetic Steadfastness · Ayat 23–30',
      id: 'Ketabahan Dakwah · Ayat 23–30',
      ms: 'Keteguhan Dakwah · Ayat 23–30',
    },
    title: {
      en: 'The Promise of Al-Fath & Waiting with Dignity',
      id: 'Tantangan “Kapan Kemenangan?” & Sikap Menunggu Penuh Wibawa',
      ms: 'Cabaran “Bilakah Kemenangan?” & Menanti dengan Penuh Maruah',
    },
    relatedAyahs: [23, 24, 28, 29, 30],
    narrative: {
      en: 'During the difficult Meccan years—before the migration to Medina, Badr (624 CE), or the Conquest of Makkah (630 CE)—disbelievers taunted the small Muslim community: “When will this victory/judgment (al-fath) arrive if you are truthful?” (32:28). The surah draws strength from the precedent of Prophet Musa (32:23–24), teaching that leadership comes only after patience and certainty, and instructs the Prophet to step back from fruitless polemics and wait with composed dignity (32:30).',
      id: 'Pada masa sulit di Mekah—jauh sebelum Hijrah, Perang Badr (624 M), maupun Fathu Makkah (630 M)—kaum kafir mengejek komunitas Muslim yang masih lemah: “Kapankah kemenangan atau keputusan (al-fath) itu tiba jika kalian benar?” (32:28). Surah ini menguatkan hati Nabi lewat keteladanan Nabi Musa (32:23–24) bahwa kepemimpinan lahir dari sabar dan yakin, lalu menutup dengan perintah berpaling secara bermartabat (32:30).',
      ms: 'Pada zaman sukar di Makkah—jauh sebelum Hijrah, Perang Badar (624 M), mahupun Pembukaan Makkah (630 M)—golongan kafir mencemuh umat Islam yang masih kecil: “Bilakah kemenangan atau keputusan (al-fath) ini akan tiba jika kamu benar?” (32:28). Surah ini memperkukuh jiwa Nabi melalui teladan Nabi Musa (32:23–24) bahawa kepimpinan lahir daripada sabar dan yakin, lalu ditutup dengan perintah berpaling secara terhormat (32:30).',
    },
    scholarlyNote: {
      en: 'Within roughly eight years of this revelation, the believers moved from Meccan persecution to entering Makkah peacefully—while verse 29 reminds every generation that the ultimate Day of Decision leaves no respite for delayed repentance.',
      id: 'Sekitar delapan tahun setelah wahyu ini, kaum beriman beralih dari penindasan menuju Fathu Makkah—sementara ayat 29 mengingatkan setiap generasi bahwa pada Hari Keputusan akhir, taubat yang ditunda tidak lagi berguna.',
      ms: 'Dalam tempoh sekitar lapan tahun selepas wahyu ini, kaum beriman beralih daripada penindasan kepada Pembukaan Makkah secara aman—manakala ayat 29 mengingatkan setiap generasi bahawa pada Hari Keputusan kelak, taubat yang ditangguh tidak lagi berguna.',
    },
  },
];
