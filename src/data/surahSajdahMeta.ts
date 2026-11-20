import { ThematicSectionInfo } from '../types/tafsir';

export const SURAH_META = {
  number: 32,
  arabicTitle: 'سورة السجدة',
  transliteratedTitle: 'Surah As-Sajdah',
  englishTitle: 'The Prostration',
  indonesianTitle: 'Sujud',
  malayTitle: 'Sujud',
  revelationPeriod: {
    en: 'Makkiyah (Middle Meccan Period)',
    id: 'Makkiyah (Periode Mekah Pertengahan)',
    ms: 'Makkiyah (Tempoh Makkah Pertengahan)',
  },
  ayahCount: 30,
  rukuCount: 3,
  juz: 'Juz 21',
  sajdahAyah: 15,
  bismillah: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
  bismillahTranslit: 'Bismillāhir-Raḥmānir-Raḥīm',
  bismillahMeaning: {
    en: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.',
    id: 'Dengan nama Allah Yang Maha Pengasih, Maha Penyayang.',
    ms: 'Dengan nama Allah, Yang Maha Pemurah, lagi Maha Mengasihani.',
  },
  heroOverview: {
    en: 'Revealed in Makkah during a period of intense intellectual and spiritual resistance, Surah As-Sajdah traces a luminous arc from the origin of Revelation and the architecture of the cosmos to the humility of the human heart in night prayer and prostration.',
    id: 'Diturunkan di Mekah pada masa penolakan intelektual dan spiritual yang keras, Surah As-Sajdah membentangkan alur agung dari keaslian wahyu dan penciptaan semesta hingga ketundukan hati manusia dalam salat malam dan sujud.',
    ms: 'Diturunkan di Makkah ketika penentangan intelektual dan rohani memuncak, Surah As-Sajdah melakarkan perjalanan agung daripada kebenaran wahyu dan penciptaan alam semesta hingga ketundukan hati manusia dalam solat malam dan sujud.',
  },
  propheticTradition: {
    en: 'Abu Hurayrah (may Allah be pleased with him) reported that the Prophet Muhammad (peace and blessings be upon him) used to recite Surah As-Sajdah (32) and Surah Al-Insan (76) in the Fajr prayer every Friday morning (Sahih al-Bukhari 891, Sahih Muslim 880). Scholars note this pairing reminds the community weekly of the origin of creation, spiritual prostration, and the final return.',
    id: 'Abu Hurairah radhiyallahu ‘anhu meriwayatkan bahwa Nabi Muhammad shallallahu ‘alaihi wa sallam biasa membaca Surah As-Sajdah (32) dan Surah Al-Insan (76) pada salat Subuh setiap hari Jumat (Shahih al-Bukhari 891, Shahih Muslim 880). Para ulama menjelaskan bahwa pasangan surah ini mengingatkan umat setiap pekan tentang asal penciptaan, sujud ketundukan, dan hari kebangkitan.',
    ms: 'Abu Hurairah radhiyallahu ‘anhu meriwayatkan bahawa Nabi Muhammad shallallahu ‘alaihi wa sallam lazim membaca Surah As-Sajdah (32) dan Surah Al-Insan (76) dalam solat Subuh setiap pagi Jumaat (Sahih al-Bukhari 891, Sahih Muslim 880). Para ulama menjelaskan gandingan surah ini mengingatkan umat setiap minggu tentang asal penciptaan, ketundukan sujud, dan hari kebangkitan.',
  },
};

export const THEMATIC_SECTIONS: ThematicSectionInfo[] = [
  {
    id: 'revelation',
    roman: 'I',
    ayahRange: '1–9',
    title: {
      en: 'Revelation, Cosmic Order & Human Origin',
      id: 'Wahyu, Tata Semesta & Asal Penciptaan Manusia',
      ms: 'Wahyu, Aturan Semesta & Asal Kejadian Manusia',
    },
    subtitle: {
      en: 'From the Undoubted Book to the Breathing of the Spirit',
      id: 'Dari Kitab Tanpa Keraguan hingga Peniupan Ruh',
      ms: 'Daripada Kitab Tanpa Keraguan hingga Peniupan Roh',
    },
    coreTheme: {
      en: 'Establishes the divine source of the Qur’an and anchors monotheism in two observable realities: the governance of the heavens and the intricate, multi-stage creation of the human being from clay to discerning faculties.',
      id: 'Meneguhkan sumber ilahi Al-Qur’an dan menambatkan tauhid pada dua realitas nyata: pengaturan langit-bumi serta penciptaan manusia secara bertahap dari tanah hingga dianugerahi pendengaran, penglihatan, dan hati nurani.',
      ms: 'Meneguhkan sumber Ilahi al-Quran dan memautkan tauhid kepada dua hakikat nyata: pentadbiran langit dan bumi serta penciptaan manusia secara berperingkat daripada tanah hingga dikurniakan pendengaran, penglihatan, dan hati.',
    },
    keyTakeaway: {
      en: 'Gratitude (shukr) is the proper intellectual and spiritual response to the gifts of hearing, sight, and heart.',
      id: 'Syukur adalah respons intelektual dan spiritual yang semestinya atas anugerah pendengaran, penglihatan, dan hati.',
      ms: 'Syukur ialah tindak balas akal dan rohani yang wajar terhadap nikmat pendengaran, penglihatan, dan hati.',
    },
  },
  {
    id: 'resurrection',
    roman: 'II',
    ayahRange: '10–14',
    title: {
      en: 'The Denial & Reality of Resurrection',
      id: 'Pengingkaran & Kepastian Hari Kebangkitan',
      ms: 'Penafian & Kepastian Hari Kebangkitan',
    },
    subtitle: {
      en: 'When Skepticism Meets the Angel of Death',
      id: 'Ketika Keraguan Berjumpa Malaikat Maut',
      ms: 'Apabila Keraguan Bertemu Malaikat Maut',
    },
    coreTheme: {
      en: 'Addresses the Meccan skeptics who mocked bodily resurrection, contrasting their worldly doubt with the certainty of death’s appointed angel and the remorseful awakening on the Day of Judgment.',
      id: 'Menjawab kaum musyrik Mekah yang meragukan kebangkitan jasad, mempertentangkan keraguan mereka dengan kepastian tugas Malaikat Maut dan penyesalan terlambat di Hari Kiamat.',
      ms: 'Menjawab golongan musyrik Makkah yang mempersendakan kebangkitan semula, dengan mempertentangkan keraguan mereka terhadap kepastian tugas Malaikat Maut serta penyesalan pada Hari Pembalasan.',
    },
    keyTakeaway: {
      en: 'Certainty acquired after death comes too late; true insight must precede the meeting with the Lord.',
      id: 'Keyakinan yang baru hadir setelah kematian datang terlambat; kesadaran hakiki harus tumbuh sebelum berjumpa dengan Allah.',
      ms: 'Keyakinan yang hanya muncul selepas kematian sudah terlewat; kesedaran hakiki mesti dibina sebelum bertemu Tuhan.',
    },
  },
  {
    id: 'prostration',
    roman: 'III',
    ayahRange: '15–22',
    title: {
      en: 'The Prostrating Believers & Moral Contrast',
      id: 'Orang Beriman yang Bersujud & Kontras Takdir',
      ms: 'Golongan Mukmin yang Bersujud & Perbezaan Balasan',
    },
    subtitle: {
      en: 'The Heart of the Surah: Sujud, Tahajjud & Hidden Joy',
      id: 'Inti Surah: Sujud, Salat Malam & Kebahagiaan Tersembunyi',
      ms: 'Teras Surah: Sujud, Tahajud & Nikmat Tersembunyi',
    },
    coreTheme: {
      en: 'Presents the defining portrait of genuine faith: immediate prostration without arrogance upon hearing divine signs, forsaking beds in quiet night supplication, and receiving a concealed reward beyond human imagination, contrasted against the consequence of persistence in transgression.',
      id: 'Menampilkan potret iman sejati: segera bersujud tanpa kesombongan ketika diingatkan ayat-ayat-Nya, menjauhkan lambung dari tempat tidur di waktu malam, dan menerima balasan penyejuk mata yang dirahasiakan, berbanding terbalik dengan akibat kefasikan.',
      ms: 'Memaparkan gambaran iman sejati: segera sujud tanpa keangkuhan apabila diperingatkan ayat-ayat-Nya, merenggangkan diri daripada tempat tidur pada waktu malam, dan dikurniakan ganjaran tersembunyi di luar bayangan manusia, berbanding akibat kefasikan.',
    },
    keyTakeaway: {
      en: 'Humility in prostration and sincerity in the quiet hours of night distinguish the believer from the arrogant.',
      id: 'Kerendahan hati dalam sujud dan keikhlasan di keheningan malam membedakan mukmin dari orang yang sombong.',
      ms: 'Kerendahan hati ketika sujud dan keikhlasan di hening malam membezakan mukmin daripada golongan yang takbur.',
    },
  },
  {
    id: 'patience',
    roman: 'IV',
    ayahRange: '23–30',
    title: {
      en: 'Prophetic Steadfastness, History & Renewal of Earth',
      id: 'Keteguhan Kenabian, Sejarah & Penghidupan Bumi',
      ms: 'Keteguhan Kenabian, Sejarah & Penghidupan Bumi',
    },
    subtitle: {
      en: 'Leadership Through Patience and Certainty',
      id: 'Kepemimpinan yang Lahir dari Sabar dan Yakin',
      ms: 'Kepimpinan Melalui Kesabaran dan Keyakinan',
    },
    coreTheme: {
      en: 'Consoles the Prophet by linking his mission to Prophet Musa (Moses), stating the twin pillars of spiritual leadership (patience and certainty), and offering two final proofs of resurrection: ruined civilizations and rain reviving barren land.',
      id: 'Meneguhkan hati Nabi dengan menautkan risalahnya kepada Nabi Musa, merumuskan dua pilar kepemimpinan spiritual (sabar dan yakin), serta menghadirkan dua bukti terakhir: jejak bangsa-bangsa binasa dan hujan yang menghidupkan tanah tandus.',
      ms: 'Menenangkan hati Nabi dengan mengaitkan risalah baginda kepada Nabi Musa, merumuskan dua tunggak kepimpinan rohani (sabar dan yakin), serta mengemukakan dua bukti kebangkitan: kesan tamadun terdahulu dan hujan yang menyuburkan bumi gersang.',
    },
    keyTakeaway: {
      en: 'Patient endurance paired with unwavering certainty (yaqin) qualifies a community for guidance and leadership.',
      id: 'Kesabaran yang dipadukan dengan keyakinan kokoh (yaqin) melahirkan kepemimpinan yang memberi petunjuk.',
      ms: 'Kesabaran yang digandingkan dengan keyakinan teguh (yaqin) melayakkan umat menjadi pemimpin yang memberi petunjuk.',
    },
  },
];

export const SAJDAH_TILAWAH_GUIDE = {
  title: {
    en: 'The Prostration of Recitation (Sujud al-Tilawah)',
    id: 'Panduan Sujud Tilawah (Ayat ke-15)',
    ms: 'Panduan Sujud Tilawah (Ayat ke-15)',
  },
  intro: {
    en: 'Verse 15 of Surah As-Sajdah is one of the 14 (or 15) places in the Qur’an marked with the prostration symbol (۩), and one of the few unanimously agreed upon by all major Sunni legal schools. When reciting or listening attentively to this verse, it is prescribed to perform a single prostration.',
    id: 'Ayat ke-15 dalam Surah As-Sajdah adalah salah satu ayat sajdah yang disepakati (muttafaq ‘alaih) oleh seluruh mazhab fikih utama. Ketika membaca atau menyimak bacaan ayat ini dengan penuh perhatian, disyariatkan untuk melaksanakan satu kali sujud tilawah.',
    ms: 'Ayat ke-15 dalam Surah As-Sajdah merupakan antara ayat sajdah yang disepakati (muttafaq ‘alaih) oleh semua mazhab fiqh utama. Apabila membaca atau mendengar bacaan ayat ini dengan penuh perhatian, disyariatkan melakukan satu kali sujud tilawah.',
  },
  duaArabic: 'سَجَدَ وَجْهِيَ لِلَّذِي خَلَقَهُ وَصَوَّرَهُ وَشَقَّ سَمْعَهُ وَبَصَرَهُ بِحَوْلِهِ وَقُوَّتِهِ فَتَبَارَكَ اللَّهُ أَحْسَنُ الْخَالِقِينَ',
  duaTransliteration:
    'Sajada wajhiya lilladhī khalaqahu wa ṣawwarahu wa shaqqa sam‘ahu wa baṣarahu biḥawlihi wa quwwatihi, fatabārakallāhu aḥsanul-khāliqīn.',
  duaMeaning: {
    en: 'My face prostrates to the One who created it, fashioned it, and brought forth its hearing and sight by His might and power; blessed is Allah, the Best of Creators. (Reported in Sunan Abi Dawud 1414, Jami‘ at-Tirmidhi 580)',
    id: 'Wajahku bersujud kepada Dzat yang menciptakannya, membentuk rupanya, serta membukakan pendengaran dan penglihatannya dengan daya dan kekuatan-Nya. Mahasuci Allah, sebaik-baik Pencipta. (HR. Abu Dawud 1414, Tirmidzi 580)',
    ms: 'Wajahku sujud kepada Tuhan yang menciptakannya, membentuk rupanya, serta membukakan pendengaran dan penglihatannya dengan daya dan kekuasaan-Nya; Maha Berkat Allah, sebaik-baik Pencipta. (Riwayat Abu Dawud 1414, at-Tirmizi 580)',
  },
  altDuaArabic: 'اللَّهُمَّ اكْتُبْ لِي بِهَا عِنْدَكَ أَجْرًا وَضَعْ عَنِّي بِهَا وِزْرًا وَاجْعَلْهَا لِي عِنْدَكَ ذُخْرًا وَتَقَبَّلْهَا مِنِّي كَمَا تَقَبَّلْتَهَا مِنْ عَبْدِكَ دَاوُدَ',
  altDuaTranslit:
    'Allāhummaktub lī bihā ‘indaka ajran, wa ḍa‘ ‘annī bihā wizran, waj‘alhā lī ‘indaka dhukhran, wa taqabbalhā minnī kamā taqabbaltahā min ‘abdika Dāwūd.',
  altDuaMeaning: {
    en: 'O Allah, record for me a reward by it with You, remove a burden from me by it, make it a stored treasure for me with You, and accept it from me just as You accepted it from Your servant Dawud. (At-Tirmidhi 579)',
    id: 'Ya Allah, tulislah bagiku dengannya pahala di sisi-Mu, hapuskanlah dariku dosa dengannya, jadikanlah ia simpanan bagiku di sisi-Mu, dan terimalah ia dariku sebagaimana Engkau menerimanya dari hamba-Mu Dawud. (HR. Tirmidzi 579)',
    ms: 'Ya Allah, tulislah bagiku dengan sujud ini pahala di sisi-Mu, hapuskanlah daripadaku dosa dengannya, jadikanlah ia simpanan bagiku di sisi-Mu, dan terimalah ia daripadaku sebagaimana Engkau menerimanya daripada hamba-Mu Dawud. (Riwayat at-Tirmizi 579)',
  },
  steps: {
    en: [
      'Maintain ritual purity (wudu) and face the Qiblah according to the majority of jurists, saying "Allahu Akbar" before going down.',
      'Perform one prostration (sujud) on the seven bodily points (forehead/nose, palms, knees, toes), without sitting for Tashahhud afterwards.',
      'Recite "Subhana Rabbiyal-A‘la" and the prophetic Sujud Tilawah supplication above.',
      'Rise from prostration (saying "Allahu Akbar" if inside Salah, or rising quietly/with takbir outside Salah); no Salam is required outside prayer according to the majority.',
    ],
    id: [
      'Menjaga kesucian (berwudu) dan menghadap kiblat menurut jumhur ulama, lalu bertakbir "Allahu Akbar" sebelum turun bersujud.',
      'Melakukan satu kali sujud di atas tujuh anggota sujud (dahi/hidung, kedua telapak tangan, kedua lutut, dan ujung jari kaki) tanpa duduk tasyahud.',
      'Membaca tasbih ("Subhana Rabbiyal-A‘la") serta doa sujud tilawah yang diajarkan Nabi di atas.',
      'Bangkit dari sujud (dengan takbir apabila di dalam salat, atau bangkit di luar salat); menurut mayoritas ulama tidak disyariatkan salam apabila sujud dilakukan di luar salat.',
    ],
    ms: [
      'Berkeadaan suci (berwuduk) dan menghadap kiblat menurut jumhur ulama, sambil bertakbir "Allahu Akbar" sebelum turun sujud.',
      'Melakukan satu kali sujud di atas tujuh anggota sujud (dahi/hidung, dua tapak tangan, dua lutut, dan hujung jari kaki) tanpa duduk tahiyat selepasnya.',
      'Membaca tasbih ("Subhana Rabbiyal-A‘la") serta doa sujud tilawah yang diajarkan oleh Nabi di atas.',
      'Bangun daripada sujud (dengan takbir jika di dalam solat, atau bangun di luar solat); menurut mazhab Syafi‘i, sunat memberi salam apabila dilakukan di luar solat manakala sebahagian ulama tidak mensyaratkannya.',
    ],
  },
  madhhabRulings: [
    {
      school: 'Shafi‘i & Maliki & Hanbali',
      ruling: {
        en: 'Confirmed Sunnah (Sunnah Mu’akkadah) both inside and outside Salah; rewarding to perform, not sinful if omitted.',
        id: 'Sunnah Muakkadah baik di dalam maupun di luar salat; berpahala besar bila dikerjakan dan tidak berdosa jika ditinggalkan.',
        ms: 'Sunat Muakkadah sama ada di dalam mahupun di luar solat; amat digalakkan dan diberi ganjaran besar, namun tidak berdosa jika ditinggalkan.',
      },
    },
    {
      school: 'Hanafi',
      ruling: {
        en: 'Obligatory (Wajib) upon the reciter and the attentive listener once the verse is completed.',
        id: 'Wajib bagi pembaca dan pendengar yang menyimak secara langsung setelah ayat selesai dibaca.',
        ms: 'Wajib ke atas pembaca dan pendengar yang mendengar bacaan tersebut sebaik sahaja ayat selesai dibaca.',
      },
    },
  ],
};
