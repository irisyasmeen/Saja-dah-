import { LocalizedText, VerseQuizQuestion } from '../types/tafsir';

const t = (en: string, id: string, ms: string): LocalizedText => ({
  en,
  id,
  ms,
});

export const VERSE_QUIZZES: Record<
  number,
  [VerseQuizQuestion, VerseQuizQuestion, VerseQuizQuestion]
> = {
  1: [
    {
      question: t(
        'According to Ibn Kathir, what do the disjoined letters (Alif-Lam-Mim) at the opening of 29 surahs signify?',
        'Menurut Ibn Katsir, apa makna huruf-huruf terpisah (Alif-Lam-Mim) di pembuka 29 surah?',
        'Menurut Ibn Kathir, apakah maksud huruf-huruf terputus (Alif-Lam-Mim) pada permulaan 29 surah?'
      ),
      options: [
        t(
          'Secret names of ancient Makkah tribes',
          'Nama rahasia kabilah Makkah kuno',
          'Nama rahsia kabilah Makkah silam'
        ),
        t(
          'The Qur’an’s inimitability (i‘jaz) despite using ordinary Arabic letters',
          'Kemukjizatan (i‘jaz) Al-Qur’an meski tersusun dari huruf Arab biasa',
          'Kemukjizatan (i‘jaz) al-Quran walaupun tersusun daripada huruf Arab biasa'
        ),
        t(
          'Numerical dates predicting future empires',
          'Angka tahun untuk meramal kerajaan masa depan',
          'Angka tarikh bagi meramalkan kerajaan masa depan'
        ),
      ],
      correctIndex: 1,
      explanation: t(
        'Though composed of the same Arabic alphabet known to every poet, no human eloquence can match the Qur’an.',
        'Meski tersusun dari huruf alfabet Arab yang akrab bagi masyarakat Quraisy, tiada manusia yang mampu menandingi Al-Qur’an.',
        'Walaupun terbina daripada huruf abjad Arab yang dikenali penyair Quraisy, tiada kefasihan manusia mampu menandinginya.'
      ),
    },
    {
      question: t(
        'What almost always follows "Alif-Lam-Mim" at the start of Qur’anic surahs?',
        'Apa yang hampir selalu mengikuti pembukaan "Alif-Lam-Mim" dalam Al-Qur’an?',
        'Apakah yang hampir sentiasa menyusuli pembukaan "Alif-Lam-Mim" dalam al-Quran?'
      ),
      options: [
        t(
          'Affirmation of the divine revelation of the Book',
          'Penegasan tentang turunnya Al-Kitab dari Allah',
          'Pengakuan tentang wahyu al-Kitab daripada Allah'
        ),
        t(
          'A list of pilgrimage rituals in Madinah',
          'Daftar tata cara ibadah haji di Madinah',
          'Senarai tatacara ibadah haji di Madinah'
        ),
        t(
          'A battle treaty from the Medinan period',
          'Perjanjian perang dari periode Madinah',
          'Perjanjian peperangan daripada zaman Madinah'
        ),
      ],
      correctIndex: 0,
      explanation: t(
        'In Surah As-Sajdah (as in Al-Baqarah and others), verse 2 immediately affirms "Tanzilul-Kitab" (revelation of the Book).',
        'Seperti pada Al-Baqarah dan lainnya, ayat 2 langsung menegaskan turunnya Al-Kitab ("Tanzilul-Kitab").',
        'Sebagaimana Surah al-Baqarah dan lainnya, ayat 2 terus menegaskan penurunan al-Kitab ("Tanzilul-Kitab").'
      ),
    },
    {
      question: t(
        'When is Surah As-Sajdah traditionally recited in full during congregational prayer according to Sahih al-Bukhari & Muslim?',
        'Kapan Surah As-Sajdah disunnahkan dibaca utuh dalam salat berjamaah menurut Shahih Bukhari & Muslim?',
        'Bilakah Surah As-Sajdah disunatkan dibaca penuh dalam solat berjemaah menurut Sahih al-Bukhari & Muslim?'
      ),
      options: [
        t(
          'Tarawih on the first night of Shawwal',
          'Salat Tarawih malam pertama Syawal',
          'Solat Tarawih malam pertama Syawal'
        ),
        t(
          'Friday Maghrib prayer',
          'Salat Maghrib malam Jumat',
          'Solat Maghrib malam Jumaat'
        ),
        t(
          'Friday Fajr prayer alongside Surah Al-Insan',
          'Salat Subuh hari Jumat bersama Surah Al-Insan',
          'Solat Subuh hari Jumaat bersama Surah al-Insan'
        ),
      ],
      correctIndex: 2,
      explanation: t(
        'Abu Hurayrah and Ibn ‘Abbas narrated that the Prophet regularly recited As-Sajdah and Al-Insan in Friday Fajr.',
        'Abu Hurairah dan Ibn Abbas meriwayatkan bahwa Nabi rutin membaca As-Sajdah dan Al-Insan pada Subuh hari Jumat.',
        'Abu Hurairah dan Ibn Abbas meriwayatkan bahawa Nabi sentiasa membaca As-Sajdah dan al-Insan pada Subuh hari Jumaat.'
      ),
    },
  ],
  2: [
    {
      question: t(
        'What nuance does the Arabic verbal noun "tanzil" carry in verse 2?',
        'Nuansa makna apa yang dikandung kata "tanzil" pada ayat 2?',
        'Apakah nuansa makna yang terkandung pada perkataan "tanzil" dalam ayat 2?'
      ),
      options: [
        t(
          'Sudden descent all in one night onto stone tablets',
          'Penurunan sekaligus dalam satu malam di atas batu',
          'Penurunan sekali gus dalam satu malam di atas batu'
        ),
        t(
          'Gradual, deliberate sending down in stages',
          'Penurunan secara berangsur-angsur dan terukur',
          'Penurunan secara beransur-ansur dan teratur'
        ),
        t(
          'Hidden transmission limited to priests',
          'Penyampaian rahasia khusus para pendeta',
          'Penyampaian rahsia khusus untuk pendeta'
        ),
      ],
      correctIndex: 1,
      explanation: t(
        'Form II verbal noun "tanzil" (from n-z-l) highlights progressive, measured revelation across 23 years.',
        'Bentuk masdar "tanzil" menekankan turunnya wahyu secara bertahap dan teratur.',
        'Bentuk kata terbitan "tanzil" menekankan penurunan wahyu secara berperingkat dan teratur.'
      ),
    },
    {
      question: t(
        'How does "rayb" differ from simple "shakk" in Qur’anic Arabic?',
        'Bagaimana perbedaan kata "rayb" dengan sekadar "syakk" dalam bahasa Al-Qur’an?',
        'Bagaimanakah perbezaan perkataan "rayb" berbanding sekadar "syak" dalam bahasa al-Quran?'
      ),
      options: [
        t(
          '"Rayb" denotes unsettling suspicion and anxious misgiving',
          '"Rayb" mengandung syak wasangka dan kegelisahan batin',
          '"Rayb" membawa maksud sangka buruk dan kebimbangan hati'
        ),
        t(
          '"Rayb" means forgetting a memorized verse',
          '"Rayb" berarti lupa terhadap hafalan ayat',
          '"Rayb" bermaksud terlupa hafalan ayat'
        ),
        t(
          '"Rayb" refers exclusively to poetic meter',
          '"Rayb" hanya merujuk pada irama syair',
          '"Rayb" hanya merujuk kepada irama syair'
        ),
      ],
      correctIndex: 0,
      explanation: t(
        '"La rayba fihi" denies any legitimate basis for anxious doubt or suspicion about the Book’s divine origin.',
        '"La rayba fihi" menafikan celah prasangka atau kegelisahan terhadap kebenaran sumber Al-Qur’an.',
        '"La rayba fihi" menafikan sebarang ruang sangka buruk atau kebimbangan terhadap sumber al-Quran.'
      ),
    },
    {
      question: t(
        'Why does As-Sa‘di emphasize the divine name "Rabb al-‘Alamin" right here?',
        'Mengapa Syaikh As-Sa‘di menyoroti penyebutan "Rabb al-‘Alamin" di ayat ini?',
        'Mengapakah Syeikh As-Sa‘di menekankan sebutan "Rabb al-‘Alamin" pada ayat ini?'
      ),
      options: [
        t(
          'Because only angels inhabit the unseen worlds',
          'Karena hanya malaikat yang menghuni alam gaib',
          'Kerana hanya malaikat yang mendiami alam ghaib'
        ),
        t(
          'Just as Allah nurtures bodies with physical sustenance, He nurtures souls with revealed guidance',
          'Sebagaimana Allah memelihara jasad dengan rezeki, Dia memelihara jiwa dengan wahyu',
          'Sebagaimana Allah memelihara jasad dengan rezeki, Dia memelihara roh dengan wahyu'
        ),
        t(
          'It marks the end of the Medinan legislative verses',
          'Menandai berakhirnya ayat-ayat hukum Madinah',
          'Menandakan penamat ayat-ayat hukum Madinah'
        ),
      ],
      correctIndex: 1,
      explanation: t(
        'Rububiyyah (Sustaining Lordship) encompasses both physical provision and spiritual guidance.',
        'Sifat Rububiyah Allah mencakup pemeliharaan fisik sekaligus bimbingan rohani melalui Al-Kitab.',
        'Sifat Rububiyyah Allah merangkumi penjagaan fizikal serta bimbingan rohani menerusi al-Kitab.'
      ),
    },
  ],
  3: [
    {
      question: t(
        'What accusation from the Quraysh leaders does verse 3 directly refute?',
        'Tuduhan kaum Quraisy manakah yang dibantah langsung oleh ayat 3?',
        'Tuduhan kaum Quraisy manakah yang ditolak secara langsung oleh ayat 3?'
      ),
      options: [
        t(
          'That the Prophet fabricated the Qur’an himself ("iftarahu")',
          'Bahwa Nabi mengada-adakan Al-Qur’an sendiri ("iftarahu")',
          'Bahawa Nabi mereka-reka al-Quran sendiri ("iftarahu")'
        ),
        t(
          'That the Qur’an was written in Syriac script',
          'Bahwa Al-Qur’an ditulis dalam aksara Suryani',
          'Bahawa al-Quran ditulis dalam tulisan Suryani'
        ),
        t(
          'That no caravan could cross to Syria',
          'Bahwa kafilah dilarang berdagang ke Syam',
          'Bahawa kafilah tidak dibenarkan berdagang ke Syam'
        ),
      ],
      correctIndex: 0,
      explanation: t(
        'Quraysh leaders knew the Prophet’s lifelong truthfulness (al-Amin) and unlettered background, refuting their charge of fabrication.',
        'Pemuka Quraisy mengenal kejujuran Nabi (al-Amin) dan sifat ummi beliau, sehingga tuduhan mengarang Al-Qur’an gugur.',
        'Pembesar Quraisy mengenali kejujuran baginda (al-Amin) dan sifat ummi baginda, sekali gus menggugurkan tuduhan mereka-reka al-Quran.'
      ),
    },
    {
      question: t(
        'What historical period does "to whom no warner has come before you" refer to?',
        'Periode sejarah apa yang dimaksud dengan "kaum yang belum pernah didatangi pemberi peringatan sebelummu"?',
        'Tempoh sejarah manakah yang dimaksudkan oleh "kaum yang belum pernah didatangi pemberi peringatan sebelummu"?'
      ),
      options: [
        t(
          'The years immediately after the Battle of Badr',
          'Tahun-tahun tepat setelah Perang Badar',
          'Tahun-tahun sejurus selepas Perang Badar'
        ),
        t(
          'The long interval (fatrah) without a messenger among the Arabs since Isma‘il',
          'Masa fatrah (kekosongan rasul) yang panjang di kalangan bangsa Arab sejak Nabi Ismail',
          'Tempoh fatrah (ketiadaan rasul) yang panjang dalam kalangan bangsa Arab sejak Nabi Ismail'
        ),
        t(
          'The migration to Abyssinia',
          'Masa hijrah ke Habasyah',
          'Zaman penghijrahan ke Habasyah'
        ),
      ],
      correctIndex: 1,
      explanation: t(
        'Ibn Kathir and Al-Jalalayn explain the Arabs had lived for centuries in a fatrah without a direct warner.',
        'Ibn Katsir dan Al-Jalalayn menjelaskan bangsa Arab lama berada dalam masa fatrah sebelum diutusnya Rasulullah.',
        'Ibn Kathir dan Al-Jalalayn menerangkan bangsa Arab lama melalui masa fatrah sebelum pengutusan Rasulullah.'
      ),
    },
    {
      question: t(
        'What is the root meaning of "iftara" (from f-r-y)?',
        'Apa makna asal kata "iftara" (akar kata f-r-y)?',
        'Apakah makna asal perkataan "iftara" (akar f-r-y)?'
      ),
      options: [
        t(
          'To recite with melody',
          'Melantunkan dengan merdu',
          'Melagukan dengan merdu'
        ),
        t(
          'To translate from memory',
          'Menerjemahkan dari hafalan',
          'Menterjemah daripada hafalan'
        ),
        t(
          'To cut or forge a falsehood out of whole cloth',
          'Menggunting atau merangkai kebohongan yang dibuat-buat',
          'Mengarang atau mereka-reka pendustaan secara sengaja'
        ),
      ],
      correctIndex: 2,
      explanation: t(
        'In classical Arabic, f-r-y denotes cutting leather—used metaphorically for inventing a deliberate lie.',
        'Dalam bahasa Arab klasik, akar f-r-y bermakna memotong kulit—dipakai sebagai kiasan mengarang kebohongan.',
        'Dalam bahasa Arab klasik, akar f-r-y bererti memotong kulit—digunakan secara kiasan bagi mereka-reka dusta.'
      ),
    },
  ],
  4: [
    {
      question: t(
        'How do classical exegetes understand "six days (ayyam)" in verse 4?',
        'Bagaimana para mufasir memahami makna "enam hari (ayyam)" pada ayat 4?',
        'Bagaimanakah para mufasir memahami maksud "enam hari (ayyam)" dalam ayat 4?'
      ),
      options: [
        t(
          'Six vast divine epochs/periods measured by Allah’s command',
          'Enam tahapan atau periode penciptaan menurut ukuran ilahi',
          'Enam peringkat atau tempoh penciptaan mengikut ukuran Ilahi'
        ),
        t(
          'Six lunar months after the Hijrah',
          'Enam bulan qamariyah setelah Hijrah',
          'Enam bulan qamariyah selepas Hijrah'
        ),
        t(
          'Six symbolic parables without real creation',
          'Enam perumpamaan simbolik tanpa penciptaan nyata',
          'Enam kiasan simbolik tanpa penciptaan hakiki'
        ),
      ],
      correctIndex: 0,
      explanation: t(
        'Solar 24-hour days did not exist prior to the heavens; "ayyam" denotes six cosmic creation stages.',
        'Hari matahari 24 jam belum ada sebelum penciptaan langit; "ayyam" merujuk pada enam tahapan waktu ilahi.',
        'Hari matahari 24 jam belum wujud sebelum langit dicipta; "ayyam" merujuk enam peringkat masa ketetapan Ilahi.'
      ),
    },
    {
      question: t(
        'How does classical Sunni tafsir affirm "thumma istawa ‘alal-‘arsh" (established above the Throne)?',
        'Bagaimana tafsir klasik memahami "thumma istawa ‘alal-‘arsh"?',
        'Bagaimanakah tafsir klasik memahami ungkapan "thumma istawa ‘alal-‘arsh"?'
      ),
      options: [
        t(
          'By comparing Allah to a seated earthly monarch',
          'Menyerupakan Allah dengan raja yang duduk di dunia',
          'Menyamakan Allah dengan raja yang duduk di dunia'
        ),
        t(
          'In a manner befitting His majesty, without anthropomorphism (tashbih) or negation (ta‘til)',
          'Sesuai keagungan-Nya tanpa menyerupakan dengan makhluk (tasybih) maupun meniadakan sifat-Nya',
          'Mengikut keagungan-Nya tanpa menyamakan dengan makhluk (tashbih) mahupun menafikan sifat-Nya'
        ),
        t(
          'As a temporary phase that ended after creation',
          'Sebagai fase sementara yang berakhir setelah penciptaan',
          'Sebagai fasa sementara yang tamat selepas penciptaan'
        ),
      ],
      correctIndex: 1,
      explanation: t(
        'Ibn Kathir affirms Allah’s istiwa’ strictly as befits divine majesty, free from human likeness.',
        'Ibn Katsir menetapkan sifat istiwa’ sesuai keagungan Allah tanpa tasybih dan tanpa ta‘thil.',
        'Ibn Kathir mengithbatkan sifat istiwa’ selaras dengan keagungan Allah tanpa tashbih mahupun ta‘til.'
      ),
    },
    {
      question: t(
        'What idolatrous assumption does "no waliyy (protector) nor shafi‘ (intercessor)" dismantle?',
        'Keyakinan keliru apa yang diruntuhkan oleh kalimat "tidak ada wali maupun pemberi syafaat selain Dia"?',
        'Kepercayaan palsu apakah yang diruntuhkan oleh "tiada pelindung mahupun pemberi syafaat selain-Nya"?'
      ),
      options: [
        t(
          'That Makkah idols could act as independent intermediaries before God',
          'Anggapan kaum musyrikin bahwa berhala dapat menjadi penolong dan perantara di sisi Allah',
          'Anggapan kaum musyrikin bahawa berhala mampu menjadi pelindung dan perantara di sisi Allah'
        ),
        t(
          'That prophets never pray for their communities',
          'Anggapan bahwa para nabi tidak pernah mendoakan umatnya',
          'Anggapan bahawa para nabi tidak pernah mendoakan umatnya'
        ),
        t(
          'That angels refuse to carry prayers',
          'Anggapan bahwa malaikat menolak menyampaikan doa',
          'Anggapan bahawa malaikat enggan menyampaikan doa'
        ),
      ],
      correctIndex: 0,
      explanation: t(
        'Because Allah alone creates and rules the cosmos, true guardianship and leave to intercede belong solely to Him.',
        'Karena Allah satu-satunya Pencipta dan Penguasa, tidak ada perlindungan atau syafaat tanpa izin-Nya.',
        'Kerana Allah satu-satunya Pencipta dan Pemerintah, tiada perlindungan atau syafaat tanpa keizinan-Nya.'
      ),
    },
  ],
  5: [
    {
      question: t(
        'What does the root verb "yudabbiru" (d-b-r) signify about Allah’s governance?',
        'Apa makna mendalam kata "yudabbiru" (akar d-b-r) terkait pengaturan Allah?',
        'Apakah maksud mendalam perkataan "yudabbiru" (akar d-b-r) tentang pentadbiran Allah?'
      ),
      options: [
        t(
          'Improvising solutions after events occur',
          'Mencari solusi setelah kejadian terlanjur terjadi',
          'Mencari penyelesaian selepas sesuatu peristiwa berlaku'
        ),
        t(
          'Looking ahead to the end of an affair and orchestrating every stage wisely',
          'Mengatur suatu urusan dengan memperhitungkan kesudahannya secara bijaksana',
          'Mengurus sesuatu urusan dengan meneliti kesudahannya secara bijaksana'
        ),
        t(
          'Delegating all governance permanently to human rulers',
          'Menyerahkan seluruh kendali alam kepada penguasa manusia',
          'Menyerahkan keseluruhan tadbir alam kepada pemerintah manusia'
        ),
      ],
      correctIndex: 1,
      explanation: t(
        'Tadbir comes from "dubur" (the back/outcome of a matter), signifying foresight across every consequence.',
        'Tadbir berasal dari kata yang berarti ujung/kesudahan, melukiskan pengaturan penuh perhitungan dan hikmah.',
        'Tadbir berkait dengan kesudahan sesuatu perkara, menggambarkan perancangan yang teliti dan berhikmah.'
      ),
    },
    {
      question: t(
        'How do classical scholars (such as Ibn ‘Abbas and Mujahid) interpret "a thousand years of what you count"?',
        'Bagaimana ulama klasik (seperti Ibn Abbas dan Mujahid) menafsirkan "seribu tahun menurut perhitunganmu"?',
        'Bagaimanakah ulama klasik (seperti Ibn Abbas dan Mujahid) mentafsirkan "seribu tahun menurut hitungan kamu"?'
      ),
      options: [
        t(
          'The exact age of the earth',
          'Usia pasti planet bumi',
          'Usia tepat planet bumi'
        ),
        t(
          'Either the immense angelic journey spanned swiftly, or the scale of Judgment Day’s reckoning',
          'Jarak luas perjalanan malaikat yang ditempuh sekejap, atau skala Hari Kiamat dibanding hitungan manusia',
          'Jarak luas perjalanan malaikat yang ditempuh sekelip mata, atau skala Hari Kiamat berbanding kiraan manusia'
        ),
        t(
          'A calendar system used only in Madinah',
          'Sistem penanggalan yang hanya dipakai di Madinah',
          'Sistem takwim yang hanya digunakan di Madinah'
        ),
      ],
      correctIndex: 1,
      explanation: t(
        'As-Sa‘di adds that time itself is a created measure subordinated to Allah, never constraining the Creator.',
        'As-Sa‘di menambahkan bahwa waktu adalah makhluk yang tunduk di bawah kekuasaan Sang Pencipta.',
        'As-Sa‘di menjelaskan bahawa masa itu sendiri ialah makhluk yang tunduk di bawah kekuasaan Pencipta.'
      ),
    },
    {
      question: t(
        'Who carries the divine decrees ("al-amr") descending from heaven to earth and ascending back?',
        'Siapa yang melaksanakan turun dan naiknya urusan ketetapan ("al-amr") dari langit ke bumi?',
        'Siapakah yang melaksanakan turun dan naiknya ketetapan ("al-amr") dari langit ke bumi?'
      ),
      options: [
        t(
          'The appointed angels',
          'Para malaikat yang ditugaskan Allah',
          'Para malaikat yang ditugaskan Allah'
        ),
        t(
          'The scholars of Makkah',
          'Para cendekiawan Makkah',
          'Para cendekiawan Makkah'
        ),
        t(
          'Migrating birds',
          'Burung-burung yang bermigrasi',
          'Burung-burung yang berhijrah'
        ),
      ],
      correctIndex: 0,
      explanation: t(
        'Al-Jalalayn notes that angels descend with decrees across every domain of life and ascend with reports.',
        'Al-Jalalayn menjelaskan para malaikat turun membawa ketetapan dan naik kembali membawa laporan urusan.',
        'Al-Jalalayn menerangkan para malaikat turun membawa perintah dan naik semula membawa laporan urusan.'
      ),
    },
  ],
  6: [
    {
      question: t(
        'Why does As-Sa‘di highlight the pairing of "Al-‘Aziz" (Almighty) and "Ar-Rahim" (Most Merciful)?',
        'Mengapa As-Sa‘di menyoroti perpaduan sifat "Al-‘Aziz" dan "Ar-Rahim"?',
        'Mengapakah As-Sa‘di menyorot gandingan sifat "Al-‘Aziz" dan "Ar-Rahim"?'
      ),
      options: [
        t(
          'Might without mercy inspires dread alone, while omnipotent mercy grants believers complete refuge',
          'Kekuatan tanpa kasih hanya menakutkan, sedangkan kasih disertai keperkasaan memberi rasa aman sejati',
          'Kekuatan tanpa rahmat hanya menggerunkan, sedangkan rahmat bersama keperkasaan memberi perlindungan sempurna'
        ),
        t(
          'They describe two separate deities in pre-Islamic poetry',
          'Keduanya merujuk dua tuhan berbeda dalam syair jahiliyah',
          'Kedua-duanya merujuk dua tuhan berbeza dalam syair jahiliah'
        ),
        t(
          'Only one applies to the unseen realm and the other to animals',
          'Satu hanya berlaku untuk alam gaib dan satunya untuk hewan',
          'Satu hanya untuk alam ghaib dan satu lagi untuk haiwan'
        ),
      ],
      correctIndex: 0,
      explanation: t(
        'Allah’s invincible strength ensures no decree fails, while His mercy ensures His rule is never tyrannical.',
        'Al-‘Aziz menjamin ketetapan-Nya tak terkalahkan, sementara Ar-Rahim menjamin kasih sayang dalam pengaturan-Nya.',
        'Al-‘Aziz menjamin ketetapan-Nya tidak tergugat, manakala Ar-Rahim memastikan pentadbiran-Nya penuh kasih sayang.'
      ),
    },
    {
      question: t(
        'What does "al-ghayb" mean in contrast to "ash-shahadah"?',
        'Apa arti "al-ghayb" dibandingkan dengan "asy-syahadah"?',
        'Apakah maksud "al-ghayb" berbanding dengan "asy-syahadah"?'
      ),
      options: [
        t(
          'Night versus winter',
          'Malam hari versus musim dingin',
          'Waktu malam berbanding musim sejuk'
        ),
        t(
          'What is hidden from human senses versus what is visible and witnessed',
          'Segala yang tersembunyi dari indra manusia versus alam nyata yang tampak',
          'Perkara tersembunyi daripada pancaindera berbanding alam nyata yang disaksikan'
        ),
        t(
          'Ancient history versus future poetry',
          'Sejarah kuno versus syair masa depan',
          'Sejarah silam berbanding syair masa hadapan'
        ),
      ],
      correctIndex: 1,
      explanation: t(
        'Allah’s knowledge encompasses both concealed realities (thoughts, angels, Hereafter) and observable creation.',
        'Ilmu Allah meliputi segala yang tersembunyi (niat, gaib, akhirat) maupun yang terlihat oleh makhluk.',
        'Ilmu Allah merangkumi segala yang tersembunyi (niat, alam ghaib, akhirat) serta yang nyata disaksikan.'
      ),
    },
    {
      question: t(
        'How does verse 6 transition structurally into verses 7–9?',
        'Bagaimana peran transisi ayat 6 menuju ayat 7–9?',
        'Bagaimanakah peranan peralihan ayat 6 menuju ayat 7–9?'
      ),
      options: [
        t(
          'It ends the surah abruptly',
          'Mengakhiri surah secara tiba-tiba',
          'Menamatkan surah secara tiba-tiba'
        ),
        t(
          'It shifts to legal rules of inheritance',
          'Beralih ke hukum pembagian warisan',
          'Beralih kepada hukum pembahagian harta pusaka'
        ),
        t(
          'It introduces the All-Knower whose artistry is then shown in perfecting creation and forming humankind',
          'Memperkenalkan Dzat Maha Mengetahui yang kemudian dibuktikan lewat kesempurnaan penciptaan manusia',
          'Memperkenalkan Tuhan Maha Mengetahui yang kemudian dibuktikan melalui kesempurnaan kejadian manusia'
        ),
      ],
      correctIndex: 2,
      explanation: t(
        'Verses 7–9 immediately unfold the attributes of "that Knower": "Who perfected everything He created..."',
        'Ayat 7–9 langsung menyambung sifat "Yang Maha Mengetahui itu": "Yang memperindah segala sesuatu yang Dia ciptakan..."',
        'Ayat 7–9 terus menyambung sifat Tuhan itu: "Yang memperelokkan segala sesuatu yang diciptakan-Nya..."'
      ),
    },
  ],
  7: [
    {
      question: t(
        'What dual nuance is conveyed by the Form IV verb "ahsana" ("perfected")?',
        'Makna ganda apa yang dikandung kata kerja "ahsana" (memperindah/menyempurnakan)?',
        'Apakah dua makna yang terkandung dalam kata kerja "ahsana"?'
      ),
      options: [
        t(
          'Both aesthetic beauty and optimal functional design',
          'Keindahan estetis sekaligus kesempurnaan fungsi sesuai tujuannya',
          'Keindahan rupa serta kesempurnaan fungsi mengikut tujuannya'
        ),
        t(
          'Speed and loudness',
          'Kecepatan dan suara keras',
          'Kepantasan dan suara lantang'
        ),
        t(
          'Secrecy and isolation',
          'Kerahasiaan dan keterasingan',
          'Kerahsiaan dan pengasingan'
        ),
      ],
      correctIndex: 0,
      explanation: t(
        'As-Sa‘di notes every creature—from stars to microscopic forms—bears optimal design ("ihsan") for its exact role.',
        'As-Sa‘di menjelaskan setiap makhluk memiliki rancangan terbaik tanpa cacat sesuai fungsinya.',
        'As-Sa‘di menerangkan setiap makhluk memiliki reka bentuk terbaik tanpa cacat selari dengan fungsinya.'
      ),
    },
    {
      question: t(
        'According to Ibn Kathir, whose creation is directly referenced by "began the creation of man from clay (tin)"?',
        'Menurut Ibn Katsir, penciptaan siapa yang dimaksud pada "memulai penciptaan manusia dari tanah (thin)"?',
        'Menurut Ibn Kathir, penciptaan siapakah yang dimaksudkan pada "memulakan kejadian manusia daripada tanah (tin)"?'
      ),
      options: [
        t(
          'Prophet Ibrahim',
          'Nabi Ibrahim',
          'Nabi Ibrahim'
        ),
        t(
          'Prophet Adam (peace be upon him)',
          'Nabi Adam ‘alaihissalam',
          'Nabi Adam ‘alaihissalam'
        ),
        t(
          'Prophet Musa',
          'Nabi Musa',
          'Nabi Musa'
        ),
      ],
      correctIndex: 1,
      explanation: t(
        'Adam’s physical archetype began from moist clay ("tin"), reminding humans of both divine craft and humility.',
        'Manusia pertama, Nabi Adam, diciptakan dari tanah liat ("thin"), mengingatkan manusia pada karya Tuhan sekaligus kerendahan asalnya.',
        'Bapa manusia, Nabi Adam, diciptakan daripada tanah liat ("tin"), mengingatkan insan kepada seni ciptaan Ilahi dan kerendahan asalnya.'
      ),
    },
    {
      question: t(
        'What does the Arabic noun "tin" literally mean?',
        'Apa arti harfiah kata Arab "thin" (طِينٍ)?',
        'Apakah maksud harfiah perkataan Arab "tin" (طِينٍ)?'
      ),
      options: [
        t(
          'Dry desert wind',
          'Angin gurun yang kering',
          'Angin padang pasir yang kering'
        ),
        t(
          'Solid mountain granite',
          'Batu granit pegunungan',
          'Batu granit pergunungan'
        ),
        t(
          'Clay (earth mixed with water)',
          'Tanah liat (tanah yang bercampur air)',
          'Tanah liat (tanah yang bercampur air)'
        ),
      ],
      correctIndex: 2,
      explanation: t(
        '"Tin" refers to malleable clay formed by mixing earth and water.',
        '"Thin" berarti tanah liat yang lembap karena bercampur air.',
        '"Tin" bermaksud tanah liat yang lembut bercampur air.'
      ),
    },
  ],
  8: [
    {
      question: t(
        'What does the noun "sulalah" (from root s-l-l) signify?',
        'Apa arti kata "sulalah" (dari akar kata s-l-l)?',
        'Apakah maksud perkataan "sulalah" (daripada akar s-l-l)?'
      ),
      options: [
        t(
          'A towering fortress',
          'Benteng yang menjulang',
          'Kubu yang tinggi menjulang'
        ),
        t(
          'A refined essence or extract gently drawn out of another substance',
          'Saripati halus yang disaring atau ditarik keluar dari campurannya',
          'Pati halus yang disaring atau ditarik keluar daripada campurannya'
        ),
        t(
          'A sudden desert storm',
          'Badai gurun mendadak',
          'Ribut padang pasir mendadak'
        ),
      ],
      correctIndex: 1,
      explanation: t(
        'As-Sa‘di notes "sulalah" highlights selective extraction of life-bearing essence from an outwardly humble fluid.',
        'As-Sa‘di menjelaskan "sulalah" menyiratkan penyaringan sari kehidupan yang halus dari cairan yang tampak remeh.',
        'As-Sa‘di menerangkan "sulalah" menunjukkan penyaringan pati kehidupan yang halus daripada cecair yang tampak lemah.'
      ),
    },
    {
      question: t(
        'Why do classical commentators emphasize the phrase "ma’ mahin" (humble/despised fluid)?',
        'Mengapa para mufasir menyoroti ungkapan "ma’ mahin" (air yang hina/remeh)?',
        'Mengapakah para mufasir menekankan ungkapan "ma’ mahin" (air yang lemah lagi hina)?'
      ),
      options: [
        t(
          'To contrast our fragile physical origin against human arrogance and pride',
          'Sebagai obat kerendahan hati untuk menundukkan kesombongan manusia',
          'Sebagai penawar kerendahan hati untuk meruntuhkan keangkuhan manusia'
        ),
        t(
          'To teach ancient agricultural irrigation',
          'Untuk mengajarkan sistem irigasi pertanian kuno',
          'Untuk mengajar sistem pengairan pertanian silam'
        ),
        t(
          'To describe ocean waves',
          'Untuk melukiskan ombak samudra',
          'Untuk menggambarkan ombak lautan'
        ),
      ],
      correctIndex: 0,
      explanation: t(
        'Remembering how human life starts from a humble drop cures vanity and invites gratitude to the Creator.',
        'Mengingat asal-usul biologis yang lemah meruntuhkan kesombongan di hadapan Sang Pencipta.',
        'Mengingati asal kejadian yang lemah menghapuskan rasa takbur terhadap Pencipta.'
      ),
    },
    {
      question: t(
        'Who does "naslahu" ("his posterity/offspring") refer back to from verse 7?',
        'Kepada siapa kata ganti "naslahu" (keturunannya) pada ayat 8 merujuk dari ayat 7?',
        'Kepada siapakah kata ganti "naslahu" (keturunannya) dalam ayat 8 merujuk daripada ayat 7?'
      ),
      options: [
        t(
          'The angels of the Throne',
          'Para malaikat pemikul ‘Arsy',
          'Para malaikat pemikul ‘Arasy'
        ),
        t(
          'Adam / humankind ("al-insan")',
          'Nabi Adam / umat manusia ("al-insan")',
          'Nabi Adam / umat manusia ("al-insan")'
        ),
        t(
          'The livestock of Quraysh',
          'Hewan ternak kaum Quraisy',
          'Binatang ternakan kaum Quraisy'
        ),
      ],
      correctIndex: 1,
      explanation: t(
        'Verse 7 describes Adam’s creation from clay; verse 8 explains how his descendants continue through nutfah.',
        'Ayat 7 mengisahkan penciptaan Adam dari tanah, dan ayat 8 menjelaskan kelanjutan keturunannya melalui nutfah.',
        'Ayat 7 menyebut penciptaan Adam daripada tanah, dan ayat 8 menjelaskan kesinambungan zuriatnya melalui nutfah.'
      ),
    },
  ],
  9: [
    {
      question: t(
        'How does Ibn Kathir explain the phrase "breathed into him of His spirit (min ruhihi)"?',
        'Bagaimana Ibn Katsir menjelaskan ungkapan "meniupkan ruh-Nya (min ruhihi)"?',
        'Bagaimanakah Ibn Kathir menjelaskan ungkapan "meniupkan roh-Nya (min ruhihi)"?'
      ),
      options: [
        t(
          'It attributes a created spirit to Allah by way of honor—just as the Ka‘bah is called Bayt Allah',
          'Penisbatan ruh ciptaan kepada Allah sebagai pemuliaan—sebagaimana Ka‘bah disebut Baitullah',
          'Penyandaran roh ciptaan kepada Allah sebagai pemuliaan—seumpama Kaabah disebut Baitullah'
        ),
        t(
          'It means human beings possess divine essence',
          'Berarti manusia memiliki zat ketuhanan',
          'Bermaksud manusia memiliki zat ketuhanan'
        ),
        t(
          'It refers only to prophets after adulthood',
          'Hanya berlaku bagi para nabi setelah dewasa',
          'Hanya berlaku kepada para nabi setelah dewasa'
        ),
      ],
      correctIndex: 0,
      explanation: t(
        'Classical Sunni tafsir distinguishes "idafat tashrif" (attribution of honor) from literal division of divine essence.',
        'Idhafah (penyandaran) di sini adalah idhafah tasyrif (pemuliaan) atas ruh yang Allah ciptakan.',
        'Sandaran ini ialah idafah tashrif (pemuliaan) terhadap roh yang diciptakan oleh Allah.'
      ),
    },
    {
      question: t(
        'Why does As-Sa‘di note that "hearing" (as-sam‘) is singular while "vision" (al-absar) and "hearts" (al-af’idah) are plural?',
        'Mengapa As-Sa‘di mencermati kata "pendengaran" berbentuk tunggal sedangkan "penglihatan" dan "hati" berbentuk jamak?',
        'Mengapakah As-Sa‘di memerhatikan "pendengaran" disebut secara mufrad sedangkan "penglihatan" dan "hati" secara jamak?'
      ),
      options: [
        t(
          'Because humans only have one ear',
          'Karena manusia hanya memiliki satu telinga',
          'Kerana manusia hanya memiliki satu telinga'
        ),
        t(
          'Revealed truth heard is one, while observed cosmic signs and inner reflections are manifold',
          'Sumber wahyu yang didengar itu satu, sedangkan tanda alam yang dilihat dan perenungan hati amat beragam',
          'Sumber wahyu yang didengari itu satu, manakala tanda alam yang dilihat dan renungan hati amat pelbagai'
        ),
        t(
          'It was a grammatical exception in Meccan dialect',
          'Sekadar pengecualian tata bahasa dialek Makkah',
          'Sekadar pengecualian nahu dialek Makkah'
        ),
      ],
      correctIndex: 1,
      explanation: t(
        'This Arabic rhetorical symmetry underscores unity of revelation alongside diversity of observed signs and reflections.',
        'Susunan bahasa ini menonjolkan kesatuan sumber wahyu sekaligus keragaman tanda kebesaran Allah.',
        'Susunan bahasa ini menonjolkan kesatuan sumber wahyu di samping kepelbagaian tanda kebesaran Allah.'
      ),
    },
    {
      question: t(
        'What are "al-af’idah" (plural of fu’ad) in verse 9?',
        'Apa yang dimaksud dengan "al-af’idah" pada ayat 9?',
        'Apakah yang dimaksudkan dengan "al-af’idah" dalam ayat 9?'
      ),
      options: [
        t(
          'Physical ribs protecting the chest',
          'Tulang rusuk pelindung dada',
          'Tulang rusuk pelindung dada'
        ),
        t(
          'Inner hearts/minds as seats of perception, conscience, and reasoning',
          'Hati nurani dan akal budi sebagai pusat pemahaman serta kesadaran moral',
          'Hati nurani dan akal fikiran sebagai pusat kefahaman dan pertimbangan moral'
        ),
        t(
          'The vocal cords for speech',
          'Pita suara untuk berbicara',
          'Pita suara untuk bertutur'
        ),
      ],
      correctIndex: 1,
      explanation: t(
        'Having received hearing, vision, and discernment, true gratitude means using all three in obedience.',
        'Dengan karunia pendengaran, penglihatan, dan hati nurani, syukur sejati diwujudkan lewat ketaatan.',
        'Dengan kurniaan pendengaran, penglihatan, dan hati nurani, syukur hakiki diwujudkan melalui ketaatan.'
      ),
    },
  ],
  10: [
    {
      question: t(
        'What does the idiom "dalalna fil-ard" ("when we are lost within the earth") signify here?',
        'Apa makna ungkapan "dhalalna fil-ardh" ("jika kami telah lenyap di dalam tanah")?',
        'Apakah maksud ungkapan "dalalna fil-ard" ("apabila kami telah lenyap di dalam tanah")?'
      ),
      options: [
        t(
          'Losing directions during a desert caravan journey',
          'Tersesat arah dalam perjalanan kafilah gurun',
          'Sesat arah ketika perjalanan kafilah padang pasir'
        ),
        t(
          'When human bodies disintegrate, scatter, and blend indistinguishably into soil',
          'Ketika jasad telah hancur, tercerai-berai, dan menyatu dengan tanah',
          'Apabila jasad telah hancur lebur, berselerak, dan sebati dengan tanah'
        ),
        t(
          'Hiding treasure underground',
          'Menyembunyikan harta di bawah tanah',
          'Menyembunyikan harta di bawah tanah'
        ),
      ],
      correctIndex: 1,
      explanation: t(
        'Though normally meaning "to lose one’s way," here it depicts bodily particles vanishing into earth.',
        'Meski akar katanya berarti tersesat/hilang, di ayat ini bermakna hancur leburnya jasad menjadi debu tanah.',
        'Walaupun asalnya bermaksud sesat atau hilang, di sini ia bermakna kehancuran jasad menjadi tanah.'
      ),
    },
    {
      question: t(
        'According to verse 10, what was the real psychological root of the disbelievers’ objection to Resurrection?',
        'Menurut ayat 10, apa akar psikologis penolakan kaum kafir terhadap hari kebangkitan?',
        'Menurut ayat 10, apakah punca psikologi sebenar penolakan golongan kafir terhadap kebangkitan?'
      ),
      options: [
        t(
          'Lack of astronomical tools',
          'Ketiadaan alat astronomi',
          'Ketiadaan alat astronomi'
        ),
        t(
          'Willful denial of accountability—the meeting with their Lord ("biliqa’i Rabbihim kafirun")',
          'Keengganan menghadapi pertanggungjawaban—"mengingkari pertemuan dengan Tuhannya"',
          'Keengganan menghadapi hisab—"mengingkari pertemuan dengan Tuhan mereka"'
        ),
        t(
          'Disagreement over inheritance rules',
          'Perselisihan soal hukum waris',
          'Pertikaian tentang hukum pusaka'
        ),
      ],
      correctIndex: 1,
      explanation: t(
        'Since the Creator already formed them from clay and a humble fluid (vv. 7–9), re-creation is effortless; denial stems from avoiding moral reckoning.',
        'Karena penciptaan awal dari ketiadaan telah terbukti (ayat 7–9), pengingkaran sebenarnya bersumber dari penolakan terhadap hisab.',
        'Oleh sebab penciptaan awal daripada tiada sudah jelas (ayat 7–9), penolakan mereka berpunca daripada keengganan berdepan dengan hisab.'
      ),
    },
    {
      question: t(
        'Which previous verses directly answer the skeptics’ question "Will we be in a new creation?"',
        'Ayat sebelumnya manakah yang langsung menjawab keheranan "apakah kami akan dibangkitkan lagi"?',
        'Ayat sebelumnya manakah yang terus menjawab kehairanan "adakah kami akan dihidupkan kembali"?'
      ),
      options: [
        t(
          'Verses 7–9, reminding them of their own original creation from clay and a drop of fluid',
          'Ayat 7–9, yang mengingatkan penciptaan awal mereka sendiri dari tanah dan setetes cairan',
          'Ayat 7–9, yang mengingatkan penciptaan awal diri mereka daripada tanah dan setitis air'
        ),
        t(
          'Only verse 30 at the end of the surah',
          'Hanya ayat 30 di penutup surah',
          'Hanya ayat 30 di penutup surah'
        ),
        t(
          'Verse 1 alone',
          'Ayat 1 saja',
          'Ayat 1 sahaja'
        ),
      ],
      correctIndex: 0,
      explanation: t(
        'As-Sa‘di notes they marvel at resurrection while ignoring the greater marvel of their initial creation.',
        'As-Sa‘di menegaskan mereka heran pada kebangkitan sambil melupakan keajaiban penciptaan pertama mereka.',
        'As-Sa‘di menerangkan mereka hairan pada kebangkitan sambil melupakan keajaiban penciptaan pertama mereka.'
      ),
    },
  ],
  11: [
    {
      question: t(
        'What does the verb "yatawaffakum" (from root w-f-y) mean regarding the Angel of Death?',
        'Apa makna kata "yatawaffakum" (akar w-f-y) terkait tugas Malaikat Maut?',
        'Apakah maksud perkataan "yatawaffakum" (akar w-f-y) berkaitan tugas Malaikat Maut?'
      ),
      options: [
        t(
          'Retrieving every soul in full without losing a single individual',
          'Mengambil nyawa setiap jiwa secara utuh sempurna tanpa ada yang terlewat',
          'Mengambil nyawa setiap jiwa secara penuh dan sempurna tanpa ada yang tercicir'
        ),
        t(
          'Recording weekly market prices',
          'Mencatat harga pasar mingguan',
          'Mencatat harga pasaran mingguan'
        ),
        t(
          'Annihilating the soul permanently',
          'Memusnahkan jiwa untuk selamanya',
          'Memusnahkan roh buat selama-lamanya'
        ),
      ],
      correctIndex: 0,
      explanation: t(
        'Ibn Kathir notes "wafa" means full retrieval—unlike bodies mingling with soil, souls are gathered intact for return to Allah.',
        'Ibn Katsir menjelaskan "wafa" berarti mengambil utuh; jasad boleh hancur di bumi, namun jiwa dijaga utuh kembali kepada Allah.',
        'Ibn Kathir menerangkan "wafa" bererti mengambil penuh; jasad kembali ke tanah tetapi roh diambil lengkap untuk kembali kepada Allah.'
      ),
    },
    {
      question: t(
        'What does "alladhi wukkila bikum" ("who has been entrusted with you") teach about death, per As-Sa‘di?',
        'Apa pelajaran dari ungkapan "yang ditugaskan mengurus kalian" menurut As-Sa‘di?',
        'Apakah pengajaran daripada ungkapan "yang ditugaskan menguruskan kamu" menurut As-Sa‘di?'
      ),
      options: [
        t(
          'Death is random and unscheduled',
          'Kematian terjadi secara acak tanpa jadwal',
          'Kematian berlaku secara rawak tanpa jadual'
        ),
        t(
          'Death is a meticulously administered transition overseen by Allah’s appointed angel, never accidental',
          'Kematian bukan kebetulan, melainkan perpindahan teratur di bawah ketetapan Allah',
          'Kematian bukan kebetulan, sebaliknya peralihan teratur di bawah ketetapan Allah'
        ),
        t(
          'Humans never leave this earth after death',
          'Manusia tidak pernah meninggalkan bumi setelah wafat',
          'Manusia tidak pernah meninggalkan bumi selepas mati'
        ),
      ],
      correctIndex: 1,
      explanation: t(
        'Subordinate angels (cf. 6:61) assist the Angel of Death so every departure occurs strictly by divine decree.',
        'Para malaikat pencabut nyawa bertugas sesuai ketentuan Allah tanpa satu pun kekeliruan atau kebetulan.',
        'Malaikat-malaikat yang bertugas melaksanakannya tepat mengikut ketentuan Allah tanpa sebarang kebetulan.'
      ),
    },
    {
      question: t(
        'How does verse 11 answer the doubt raised in verse 10 ("when we vanish in the earth")?',
        'Bagaimana ayat 11 menjawab keraguan di ayat 10 ("ketika kami lenyap di tanah")?',
        'Bagaimanakah ayat 11 menjawab keraguan dalam ayat 10 ("apabila kami lenyap di tanah")?'
      ),
      options: [
        t(
          'By affirming that while bodies return to soil, souls are preserved intact for return to Allah',
          'Menegaskan bahwa jiwa tidak lenyap bersama jasad, melainkan diambil utuh untuk kembali kepada Allah',
          'Menegaskan bahawa roh tidak lenyap bersama jasad, sebaliknya diambil sempurna untuk kembali kepada Allah'
        ),
        t(
          'By saying only martyrs have souls',
          'Dengan menyebut hanya syuhada yang memiliki jiwa',
          'Dengan menyebut hanya para syuhada yang mempunyai roh'
        ),
        t(
          'By postponing judgment indefinitely',
          'Dengan menunda hari kiamat tanpa batas waktu',
          'Dengan menangguhkan kiamat tanpa had masa'
        ),
      ],
      correctIndex: 0,
      explanation: t(
        'Commanded with "Qul" ("Say!"), it directly refutes the materialist assumption that disintegration equals annihilation.',
        'Diawali perintah "Qul" ("Katakanlah!"), ayat ini meluruskan anggapan keliru bahwa hancurnya jasad berarti sirnanya diri.',
        'Dimulakan dengan perintah "Qul" ("Katakanlah!"), ayat ini membetulkan tanggapan bahawa hancurnya jasad bermakna tamatnya kehidupan.'
      ),
    },
  ],
  12: [
    {
      question: t(
        'What striking sensory inversion appears between verse 9 and verse 12?',
        'Pembalikan urutan indra apa yang mencolok antara ayat 9 dan ayat 12?',
        'Apakah pembalikan susunan deria yang ketara antara ayat 9 dengan ayat 12?'
      ),
      options: [
        t(
          'In v.9 hearing precedes sight; here "we have seen" precedes "we have heard"',
          'Di ayat 9 pendengaran mendahului penglihatan; di sini "kami telah melihat" mendahului "kami telah mendengar"',
          'Dalam ayat 9 pendengaran mendahului penglihatan; di sini "kami telah melihat" mendahului "kami telah mendengar"'
        ),
        t(
          'Verse 12 mentions taste instead of sight',
          'Ayat 12 hanya menyebut indra perasa tanpa penglihatan',
          'Ayat 12 hanya menyebut deria rasa tanpa penglihatan'
        ),
        t(
          'Neither verse mentions human senses',
          'Kedua ayat sama sekali tidak menyebut panca indra',
          'Kedua-dua ayat langsung tidak menyebut pancaindera'
        ),
      ],
      correctIndex: 0,
      explanation: t(
        'On Judgment Day, visual terror strikes first before the eyes, forcing belated confession.',
        'Pada Hari Kiamat, kengerian langsung terpampang di depan mata sehingga penglihatan disebut lebih dulu.',
        'Pada Hari Kiamat, kedahsyatan terus terpampang di hadapan mata lalu penglihatan disebut terlebih dahulu.'
      ),
    },
    {
      question: t(
        'Why does Al-Jalalayn note that "Wa law tara..." ("If you could but see...") leaves the conclusion unspoken?',
        'Mengapa Al-Jalalayn mencatat kalimat syarat "Wa law tara..." ("Sekiranya engkau melihat...") tidak menyebut jawab syaratnya?',
        'Mengapakah Al-Jalalayn menyatakan ayat "Wa law tara..." ("Jika engkau melihat...") sengaja tidak menyebut penutupnya?'
      ),
      options: [
        t(
          'Because a verse was omitted by copyists',
          'Karena ada bagian yang terhapus oleh penyalin',
          'Kerana ada bahagian yang tertinggal oleh penyalin'
        ),
        t(
          'To convey horror and humiliation beyond what words can adequately describe',
          'Untuk menggambarkan kengerian dan kehinaan yang tak terlukiskan dengan kata-kata',
          'Untuk menggambarkan kengerian dan kehinaan yang tidak terperi dengan kata-kata'
        ),
        t(
          'To keep the verse short for poetry recitation',
          'Agar ayatnya singkat seperti syair',
          'Supaya ayatnya ringkas seperti syair'
        ),
      ],
      correctIndex: 1,
      explanation: t(
        'Leaving the apodosis ("jawabul-law") implicit intensifies the awe of the scene.',
        'Menghilangkan jawab syarat dalam balaghah Arab memberi efek kedahsyatan yang jauh lebih kuat.',
        'Meninggalkan penutup ayat syarat dalam balaghah Arab memberi kesan kedahsyatan yang lebih mendalam.'
      ),
    },
    {
      question: t(
        'Why is their declaration "Indeed, we are now certain (inna muqinun)" no longer accepted?',
        'Mengapa pengakuan mereka "sungguh kami sekarang yakin (inna muqinun)" tidak lagi diterima?',
        'Mengapakah pengakuan mereka "sesungguhnya kami kini yakin (inna muqinun)" tidak lagi diterima?'
      ),
      options: [
        t(
          'Because certainty after the unseen veil is lifted comes after the window of earthly moral trial has closed',
          'Karena keyakinan setelah tabir akhirat terbuka datang terlambat setelah masa ujian dunia berakhir',
          'Kerana keyakinan setelah tabir akhirat terbuka tiba terlalu lewat setelah tempoh ujian dunia berakhir'
        ),
        t(
          'Because they spoke in prose instead of verse',
          'Karena mereka mengucapkannya tanpa syair',
          'Kerana mereka mengucapkannya tanpa syair'
        ),
        t(
          'Because angels could not hear them',
          'Karena para malaikat tidak dapat mendengar mereka',
          'Kerana para malaikat tidak dapat mendengar mereka'
        ),
      ],
      correctIndex: 0,
      explanation: t(
        'True faith has moral worth when chosen freely in the unseen realm before death.',
        'Iman bernilai ketika dipilih dengan kesadaran semasa di dunia sebelum kematian atau Kiamat tiba.',
        'Iman bernilai apabila dipilih secara sukarela semasa di dunia sebelum ajal atau Kiamat tiba.'
      ),
    },
  ],
  13: [
    {
      question: t(
        'Why did Allah NOT compel every soul into guidance ("And if We had willed, We could have given every soul its guidance")?',
        'Mengapa Allah TIDAK memaksa seluruh jiwa untuk beriman ("Sekiranya Kami menghendaki, tentu Kami beri petunjuk tiap jiwa")?',
        'Mengapakah Allah TIDAK memaksa setiap jiwa beriman ("Kalaulah Kami menghendaki, tentulah Kami berikan petunjuk kepada setiap jiwa")?'
      ),
      options: [
        t(
          'Because coerced belief would nullify moral choice, responsibility, and genuine virtue',
          'Karena iman paksaan akan meniadakan makna ujian, kebebasan memilih, dan keutamaan amal',
          'Kerana iman secara paksaan akan meniadakan erti ujian, kebebasan memilih, dan nilai ketaatan'
        ),
        t(
          'Because human hearts could not understand Arabic',
          'Karena manusia tidak memahami bahasa Arab',
          'Kerana manusia tidak memahami bahasa Arab'
        ),
        t(
          'Because angels lacked time to guide everyone',
          'Karena malaikat tidak cukup waktu membimbing semua orang',
          'Kerana malaikat tidak sempat membimbing semua orang'
        ),
      ],
      correctIndex: 0,
      explanation: t(
        'Ibn Kathir and Al-Jalalayn explain that wisdom required moral agency and sent messengers rather than robotic compulsion.',
        'Hikmah Allah menghendaki adanya pilihan moral dan pengutusan rasul agar ujian hidup bermakna adil.',
        'Hikmah Allah menghendaki wujudnya pilihan moral dan pengutusan rasul supaya ujian hidup berlangsung secara adil.'
      ),
    },
    {
      question: t(
        'Who does "from jinn and people all together" ("minal-jinnati wan-nasi ajma‘in") refer to in classical tafsir?',
        'Siapakah yang dimaksud dengan "jin dan manusia semuanya" dalam penafsiran klasik?',
        'Siapakah yang dimaksudkan dengan "jin dan manusia kesemuanya" dalam tafsiran klasik?'
      ),
      options: [
        t(
          'Every single individual jinn and human without exception',
          'Seluruh individu jin dan manusia tanpa terkecuali',
          'Setiap individu jin dan manusia tanpa pengecualian'
        ),
        t(
          'Both categories combined—specifically those from jinn and humans who persisted in rebellion',
          'Gabungan kedua golongan tersebut, yakni mereka yang memilih kekafiran dan pembangkangan',
          'Gabungan kedua-dua golongan tersebut, iaitu mereka yang berdegil memilih kekufuran dan penderhakaan'
        ),
        t(
          'Only the ancient tribe of Thamud',
          'Hanya kaum Tsamud terdahulu',
          'Hanya kaum Thamud terdahulu'
        ),
      ],
      correctIndex: 1,
      explanation: t(
        'Righteous believers from both jinn and humankind enter Paradise; "ajma‘in" here means both species combined.',
        'Orang beriman dari jin dan manusia masuk surga; "ajma‘in" merujuk perpaduan kedua jenis makhluk yang membangkang.',
        'Golongan beriman daripada jin dan manusia masuk syurga; "ajma‘in" bermaksud gabungan kedua-dua jenis yang derhaka.'
      ),
    },
    {
      question: t(
        'What attribute of Allah does As-Sa‘di emphasize alongside "haqqal-qawlu minni" ("the word from Me has come true")?',
        'Sifat Allah apa yang ditekankan As-Sa‘di bersama kalimat "telah tetap firman dari-Ku"?',
        'Sifat Allah manakah yang ditekankan oleh As-Sa‘di bersama "telah tetap firman ketetapan daripada-Ku"?'
      ),
      options: [
        t(
          'Perfect justice and wisdom—no one is ever wronged',
          'Keadilan dan hikmah sempurna—tidak seorang pun pernah dizalimi',
          'Keadilan dan kebijaksanaan sempurna—tiada sesiapa pun dizalimi'
        ),
        t(
          'Indifference toward human actions',
          'Ketidakpedulian terhadap amal manusia',
          'Sikap tidak peduli terhadap amalan manusia'
        ),
        t(
          'Favoritism based on wealth',
          'Keberpihakan berdasarkan kekayaan',
          'Sikap pilih kasih berdasarkan kekayaan'
        ),
      ],
      correctIndex: 0,
      explanation: t(
        'Every person warned clearly with messengers and signs is held accountable solely for willful rejection.',
        'Setiap manusia telah diberi akal dan peringatan; balasan dijatuhkan semata karena keadilan atas pilihannya sendiri.',
        'Setiap insan telah dikurniakan akal dan peringatan; balasan berlaku atas keadilan terhadap pilihannya sendiri.'
      ),
    },
  ],
  14: [
    {
      question: t(
        'How does Ibn Kathir explain Allah saying "indeed We have forgotten you (inna nasinakum)"?',
        'Bagaimana Ibn Katsir menafsirkan firman "sesungguhnya Kami melupakan kamu (inna nasinakum)"?',
        'Bagaimanakah Ibn Kathir mentafsirkan firman "sesungguhnya Kami melupakan kamu (inna nasinakum)"?'
      ),
      options: [
        t(
          'Allah literally loses memory of past events',
          'Allah benar-benar lupa ingatan atas peristiwa lalu',
          'Allah benar-benar terlupa peristiwa lalu'
        ),
        t(
          'Reciprocal abandonment ("We leave you in torment just as you neglected preparing for this Day")—a figure called mushakalah',
          '"Kami membiarkan kalian dalam azab sebagaimana kalian mengabaikan hari ini" (gaya bahasa musyakalah)',
          '"Kami membiarkan kamu dalam azab sebagaimana kamu mengabaikan hari ini" (gaya bahasa musyakalah)'
        ),
        t(
          'It refers only to minor earthly mistakes',
          'Hanya merujuk pada kesalahan kecil di dunia',
          'Hanya merujuk kepada kesilapan kecil di dunia'
        ),
      ],
      correctIndex: 1,
      explanation: t(
        'Allah never forgets (19:64); the verb mirrors their own willful neglect ("nasitum") in reciprocal Arabic rhetoric.',
        'Allah mustahil lupa (QS Maryam: 64); pengulangan kata "lupa" adalah balasan setimpal atas sikap lalai mereka.',
        'Allah mustahil lupa (Surah Maryam: 64); pengulangan kata ini ialah pembalasan setimpal atas kelalaian mereka.'
      ),
    },
    {
      question: t(
        'What does the repetition of "dhuqu" ("Taste!") accomplish rhetorically in verse 14?',
        'Apa fungsi pengulangan kata perintah "dhuqu" (Rasakanlah!) pada ayat 14?',
        'Apakah kesan retorik pengulangan perkataan "dhuqu" (Rasakanlah!) dalam ayat 14?'
      ),
      options: [
        t(
          'Intensifies the inescapable immediacy and permanence ("eternal punishment") of the consequence',
          'Menegaskan kepastian, kedekatan, dan kekekalan azab ("azab yang kekal") yang tak terhindarkan',
          'Menegaskan kepastian, kehampiran, serta kekekalan azab yang tidak dapat dielakkan'
        ),
        t(
          'Invites guests to a celebratory banquet',
          'Mengundang tamu ke jamuan perayaan',
          'Menjemput tetamu ke majlis jamuan'
        ),
        t(
          'Indicates the punishment lasts only one hour',
          'Menunjukkan siksaan hanya berlangsung satu jam',
          'Menunjukkan seksaan hanya berlangsung sejam'
        ),
      ],
      correctIndex: 0,
      explanation: t(
        'Coupled with "al-khuld" (eternity), it leaves zero illusion of temporary discomfort.',
        'Dipadukan dengan kata "al-khuld" (kekekalan), pengulangan ini menegaskan beratnya balasan abadi.',
        'Digandingkan dengan kata "al-khuld" (kekekalan), ia menegaskan ketegasan balasan yang berpanjangan.'
      ),
    },
    {
      question: t(
        'What exegetical principle does As-Sa‘di draw from "because you forgot... We have forgotten you"?',
        'Kaidah tafsir apa yang dipetik As-Sa‘di dari "karena kalian melalaikan... maka Kami membiarkan kalian"?',
        'Apakah kaedah tafsir yang disimpulkan oleh As-Sa‘di daripada "kerana kamu melupakan... maka Kami membiarkan kamu"?'
      ),
      options: [
        t(
          'Recompense corresponds to the nature of the deed (al-jaza’ min jinsil-‘amal)',
          'Balasan setimpal sesuai jenis perbuatannya (al-jaza’ min jinsil-‘amal)',
          'Balasan sepadan dengan jenis perbuatan (al-jaza’ min jinsil-‘amal)'
        ),
        t(
          'All deeds are erased automatically after death',
          'Semua perbuatan otomatis terhapus setelah mati',
          'Segala amalan terhapus secara automatik selepas mati'
        ),
        t(
          'Only physical rituals matter, not remembrance of God',
          'Hanya gerakan fisik yang dihitung tanpa kesadaran hati',
          'Hanya perbuatan fizikal dikira tanpa ingatan kepada Allah'
        ),
      ],
      correctIndex: 0,
      explanation: t(
        'Willfully shutting Allah’s warning out of heart results in being shut out from divine mercy.',
        'Mengabaikan peringatan Allah di dunia berujung terhalang dari rahmat-Nya di akhirat.',
        'Mengabaikan peringatan Allah di dunia membawa akibat terhalang daripada rahmat-Nya di akhirat.'
      ),
    },
  ],
  15: [
    {
      question: t(
        'Why is Surah 32 named "As-Sajdah" after verse 15?',
        'Mengapa Surah ke-32 dinamakan "As-Sajdah" merujuk pada ayat 15?',
        'Mengapakah Surah ke-32 dinamakan "As-Sajdah" merujuk kepada ayat 15?'
      ),
      options: [
        t(
          'Because it is the surah’s central Ayat Sajdah, defining believers by immediate prostration when reminded',
          'Karena ayat inilah Ayat Sajdah inti surah yang menandai mukmin sejati dengan sujud seketika saat diingatkan',
          'Kerana ayat inilah Ayat Sajdah teras surah yang mentakrifkan mukmin dengan sujud segera apabila diperingatkan'
        ),
        t(
          'Because it mentions the construction of Madinah’s mosque',
          'Karena menyebut pembangunan masjid di Madinah',
          'Kerana menyebut pembinaan masjid di Madinah'
        ),
        t(
          'Because it commands fasting every Monday',
          'Karena memerintahkan puasa setiap hari Senin',
          'Kerana memerintahkan puasa setiap hari Isnin'
        ),
      ],
      correctIndex: 0,
      explanation: t(
        'True believers respond with immediate humility ("kharru sujjadan") and praise, contrasting with the pride of Iblis and Quraysh.',
        'Mukmin sejati segera menyungkur sujud penuh tasbih dan bersih dari kesombongan Iblis serta pemuka Quraisy.',
        'Mukmin sejati segera sujud bertasbih dan bebas daripada kesombongan Iblis serta pembesar Quraisy.'
      ),
    },
    {
      question: t(
        'What is the Sunni ruling across the four schools (Shafi‘i, Hanbali, Maliki, Hanafi) regarding Sujud al-Tilawah at 32:15?',
        'Bagaimana hukum Sujud Tilawah pada ayat 32:15 menurut empat mazhab fikih?',
        'Apakah hukum Sujud Tilawah pada ayat 32:15 menurut mazhab-mazhab fiqh?'
      ),
      options: [
        t(
          'Forbidden outside Friday prayer',
          'Terlarang di luar salat Jumat',
          'Dilarang di luar solat Jumaat'
        ),
        t(
          'Recommended (Sunnah Mu’akkadah) in Shafi‘i/Hanbali/Maliki, and Obligatory (Wajib) in the Hanafi school',
          'Sunnah Mu’akkadah (Syafi‘i, Hanbali, Maliki) dan Wajib menurut mazhab Hanafi',
          'Sunat Muakkad (Syafi‘i, Hanbali, Maliki) dan Wajib menurut mazhab Hanafi'
        ),
        t(
          'Only performed silently without bowing the head',
          'Hanya dilakukan dalam hati tanpa meletakkan dahi',
          'Hanya dilakukan dalam hati tanpa meletakkan dahi'
        ),
      ],
      correctIndex: 1,
      explanation: t(
        'All scholars agree 32:15 is an authentic Ayat Sajdah—practiced in Friday Fajr as well as during personal recitation.',
        'Seluruh ulama sepakat ayat 32:15 adalah Ayat Sajdah yang utama diamalkan saat membaca maupun mendengarkannya.',
        'Semua ulama sepakat ayat 32:15 ialah Ayat Sajdah yang utama diamalkan ketika membaca atau mendengarnya.'
      ),
    },
    {
      question: t(
        'What three combined acts characterize true believers in verse 15?',
        'Tiga tindakan terpadu apa yang menjadi ciri mukmin sejati di ayat 15?',
        'Apakah tiga amalan bersepadu yang menjadi ciri mukmin sejati dalam ayat 15?'
      ),
      options: [
        t(
          'Falling prostrate (sujud), declaring transcendence (tasbih), and praising Allah (tahmid) without arrogance',
          'Menyungkur sujud, bertasbih menyucikan Allah, dan memuji-Nya tanpa kesombongan',
          'Menyungkur sujud, bertasbih menyucikan Allah, dan memuji-Nya tanpa kesombongan'
        ),
        t(
          'Debating poets, traveling by sea, and storing silver',
          'Berdebat dengan penyair, berlayar, dan menimbun perak',
          'Berdebat dengan penyair, belayar, dan menyimpan perak'
        ),
        t(
          'Debating in silence without prayer',
          'Berdiam diri tanpa salat dan tasbih',
          'Berdiam diri tanpa solat dan tasbih'
        ),
      ],
      correctIndex: 0,
      explanation: t(
        'The restrictive particle "Innama" highlights responsive hearts ("khushu‘") expressed in humble bodily worship.',
        'Partikel pembatas "Innama" menegaskan iman sejati memadukan sujud, tasbih, tahmid, dan kerendahan hati.',
        'Kata pembatas "Innama" menegaskan iman hakiki menyatukan sujud, tasbih, tahmid, dan kerendahan diri.'
      ),
    },
  ],
  16: [
    {
      question: t(
        'What specific night worship do Mujahid, al-Hasan al-Basri, and Imam Malik link to "Their sides forsake their beds"?',
        'Ibadah apa yang dikaitkan oleh Mujahid, Hasan al-Bashri, dan Imam Malik dengan "lambung mereka menjauh dari tempat tidur"?',
        'Ibadah apakah yang dikaitkan oleh Mujahid, al-Hasan al-Basri, dan Imam Malik dengan "renggang lambung mereka daripada tempat tidur"?'
      ),
      options: [
        t(
          'Night prayer (Qiyam al-Layl / Tahajjud), plus waiting between Maghrib and ‘Isha',
          'Salat malam (Qiyamul-Lail / Tahajud) serta menanti waktu antara Maghrib dan Isya',
          'Solat malam (Qiyamullail / Tahajud) serta menanti waktu antara Maghrib dan Isyak'
        ),
        t(
          'Afternoon trade in Makkah',
          'Perdagangan siang hari di Makkah',
          'Perniagaan waktu siang di Makkah'
        ),
        t(
          'Sleeping immediately after sunrise',
          'Tidur sesudah matahari terbit',
          'Tidur sejurus selepas matahari terbit'
        ),
      ],
      correctIndex: 0,
      explanation: t(
        'The Prophet also cited this verse to Mu‘adh ibn Jabal when speaking of night prayer as a hallmark of devotion.',
        'Nabi Muhammad juga membacakan ayat ini kepada Mu‘adz bin Jabal sebagai gambaran puncak ibadah malam.',
        'Rasulullah turut membacakan ayat ini kepada Mu‘adz bin Jabal bagi menggambarkan kemuncak ibadah malam.'
      ),
    },
    {
      question: t(
        'How does As-Sa‘di explain the spiritual balance between "khawfan" (fear) and "tama‘an" (hope)?',
        'Bagaimana As-Sa‘di menjelaskan keseimbangan batin antara "khauf" (takut) dan "thama‘" (harap)?',
        'Bagaimanakah As-Sa‘di menjelaskan keseimbangan jiwa antara "khauf" (takut) dan "tama‘" (harap)?'
      ),
      options: [
        t(
          'Fear prevents spiritual complacency, while hope prevents despair—keeping devotion balanced',
          'Takut mencegah kelalaian, sementara harap mencegah putus asa sehingga ibadah seimbang',
          'Takut mencegah kelalaian, manakala harap mencegah putus asa agar ibadah kekal seimbang'
        ),
        t(
          'Believers should feel fear without any hope',
          'Mukmin hanya boleh merasa takut tanpa harapan',
          'Mukmin hanya perlu berasa takut tanpa harapan'
        ),
        t(
          'Hope applies only to angels',
          'Harapan hanya berlaku bagi malaikat',
          'Harapan hanya untuk para malaikat'
        ),
      ],
      correctIndex: 0,
      explanation: t(
        'Night worship is paired with inward equilibrium and horizontal compassion ("spending from what We provided them").',
        'Ibadah malam dipadukan dengan keseimbangan rasa takut-harap dan kepedulian sosial lewat infak.',
        'Ibadah malam digandingkan dengan keseimbangan takut-harap serta kepedulian sosial menerusi infak.'
      ),
    },
    {
      question: t(
        'What image does the Form VI verb "tatajafa" convey?',
        'Gambaran apa yang dilukiskan kata kerja "tatajafa"?',
        'Apakah gambaran yang dilukiskan oleh kata kerja "tatajafa"?'
      ),
      options: [
        t(
          'Sinking deeper into sleep',
          'Tenggelam lebih pulas dalam tidur',
          'Tenggelam lebih lena dalam tidur'
        ),
        t(
          'Gently pulling/lifting oneself away from the mattress out of yearning to pray',
          'Menjauhkan dan mengangkat diri dari pembaringan karena kerinduan bermunajat',
          'Merenggangkan dan mengangkat tubuh daripada pembaringan kerana rindu bermunajat'
        ),
        t(
          'Speaking loudly in public squares',
          'Berbicara keras di alun-alun',
          'Bercakap lantang di dataran awam'
        ),
      ],
      correctIndex: 1,
      explanation: t(
        'The form emphasizes deliberate, longing detachment from comfortable sleep.',
        'Bentuk katanya melukiskan dorongan jiwa yang mengangkat raga meninggalkan empuknya kasur.',
        'Bentuk katanya menggambarkan dorongan jiwa yang mengangkat tubuh meninggalkan lena.'
      ),
    },
  ],
  17: [
    {
      question: t(
        'Which famous Hadith Qudsi (Sahih al-Bukhari & Muslim) does Ibn Kathir connect directly to verse 17?',
        'Hadis Qudsi sahih manakah yang ditautkan langsung oleh Ibn Katsir pada ayat 17?',
        'Hadis Qudsi sahih manakah yang dihubungkan terus oleh Ibn Kathir dengan ayat 17?'
      ),
      options: [
        t(
          '"I have prepared for My righteous servants what no eye has seen, no ear has heard, nor human heart conceived"',
          '"Aku siapkan bagi hamba-Ku yang saleh apa yang tak pernah dilihat mata, didengar telinga, atau terlintas di hati"',
          '"Aku sediakan untuk hamba-Ku yang soleh nikmat yang tidak pernah dilihat mata, didengar telinga, atau terlintas di hati"'
        ),
        t(
          '"Actions are judged solely by their outward speed"',
          '"Amal hanya dinilai dari kecepatannya"',
          '"Amalan hanya dinilai mengikut kepantasannya"'
        ),
        t(
          '"Seek knowledge even on Friday afternoons"',
          '"Tuntutlah ilmu khusus di Jumat sore"',
          '"Tuntutlah ilmu khusus pada petang Jumaat"'
        ),
      ],
      correctIndex: 0,
      explanation: t(
        'Abu Hurayrah narrated this Hadith Qudsi and added: "Recite if you wish: No soul knows what has been hidden for them..."',
        'Abu Hurairah meriwayatkan Hadis Qudsi ini lalu membaca QS As-Sajdah ayat 17 sebagai penegasannya.',
        'Abu Hurairah meriwayatkan Hadis Qudsi ini lalu membacakan Surah As-Sajdah ayat 17 sebagai penguatnya.'
      ),
    },
    {
      question: t(
        'According to al-Hasan al-Basri, why is the reward described as "what has been hidden (ukhfiya)"?',
        'Menurut Hasan al-Bashri, mengapa balasannya disebut "disembunyikan (ukhfiya)"?',
        'Menurut al-Hasan al-Basri, mengapakah ganjarannya disebut "disembunyikan (ukhfiya)"?'
      ),
      options: [
        t(
          'Because they concealed their night worship in darkness, so Allah concealed an unimaginable reward for them',
          'Karena mereka menyembunyikan amal di kegelapan malam, Allah pun menyembunyikan balasan yang tak terbayangkan',
          'Kerana mereka merahsiakan ibadah pada malam hari, Allah merahsiakan ganjaran yang tidak tercapai akal'
        ),
        t(
          'Because angels lost the scroll of deeds',
          'Karena malaikat kehilangan catatan amal',
          'Kerana malaikat kehilangan catatan amalan'
        ),
        t(
          'Because only poets can describe Paradise',
          'Karena hanya penyair yang boleh menggambarkan surga',
          'Kerana hanya penyair dibenarkan menggambarkan syurga'
        ),
      ],
      correctIndex: 0,
      explanation: t(
        'The passive verb "ukhfiya" mirrors their private sincerity in verse 16.',
        'Kata pasif "ukhfiya" berpadanan indah dengan keikhlasan ibadah mereka yang tersembunyi di ayat 16.',
        'Kata kerja pasif "ukhfiya" sepadan dengan keikhlasan ibadah malam mereka yang dirahsiakan pada ayat 16.'
      ),
    },
    {
      question: t(
        'In classical Arabic, what does the idiom "qurrat a‘yun" (coolness of the eyes) signify?',
        'Dalam ungkapan Arab klasik, apa arti "qurrati a‘yun" (kesejukan mata)?',
        'Dalam sastera Arab klasik, apakah maksud ungkapan "qurrat a‘yun" (penyejuk mata)?'
      ),
      options: [
        t(
          'Winter frost on desert tents',
          'Embun beku musim dingin di tenda gurun',
          'Embun dingin pada khemah padang pasir'
        ),
        t(
          'Complete contentment, serenity, and utter joy (in contrast to hot tears of grief)',
          'Ketenteraman batin, kepuasan, dan kebahagiaan paripurna (lawan air mata duka yang panas)',
          'Ketenangan jiwa, kepuasan, dan kegembiraan mutlak (berlawanan dengan air mata duka yang panas)'
        ),
        t(
          'Sleeping through midday heat',
          'Tidur siang saat terik matahari',
          'Tidur tengah hari ketika terik mentari'
        ),
      ],
      correctIndex: 1,
      explanation: t(
        'As-Sa‘di contrasts "warm tears" of sorrow with "cool eyes" of deep peace and fulfillment.',
        'As-Sa‘di menjelaskan budaya bahasa Arab memandang mata yang sejuk sebagai lambang ketenangan paripurna.',
        'As-Sa‘di menerangkan ungkapan Arab memandang mata yang sejuk sebagai lambang kebahagiaan sejati.'
      ),
    },
  ],
  18: [
    {
      question: t(
        'What is the literal origin of the word "fasiq" (from root f-s-q)?',
        'Apa makna asal kata "fasiq" (dari akar f-s-q)?',
        'Apakah asal makna perkataan "fasik" (daripada akar f-s-q)?'
      ),
      options: [
        t(
          'A ripe date bursting out of its outer skin—symbolizing stepping outside moral bounds',
          'Buah kurma yang keluar mengoyak kulitnya—melambangkan sikap keluar dari batas ketaatan',
          'Buah kurma yang terkeluar menembusi kulitnya—melambangkan sikap melampaui batas ketaatan'
        ),
        t(
          'A traveler crossing a mountain pass',
          'Musafir yang melintasi celah gunung',
          'Musafir yang merentasi genting gunung'
        ),
        t(
          'An archer hitting a distant target',
          'Pemanah yang tepat mengenai sasaran jauh',
          'Pemanah yang tepat mengenai sasaran'
        ),
      ],
      correctIndex: 0,
      explanation: t(
        'Breaking out of Allah’s moral boundaries parallels a fruit breaking out of its protective skin.',
        'Fasiq menggambarkan keluarnya seseorang dari batas hukum dan ketaatan kepada Allah.',
        'Fasik menggambarkan seseorang yang keluar daripada sempadan ketaatan kepada Allah.'
      ),
    },
    {
      question: t(
        'Which historical contrast do narrations cited by Ibn Kathir associate with verse 18?',
        'Kontras sejarah apa yang diriwayatkan terkait ayat 18 menurut kutipan Ibn Katsir?',
        'Perbandingan sejarah apakah yang disebut dalam riwayat yang dinukil Ibn Kathir tentang ayat 18?'
      ),
      options: [
        t(
          'Loyal believers like ‘Ali ibn Abi Talib versus arrogant opponents like al-Walid ibn ‘Uqbah',
          'Mukmin sejati seperti Ali bin Abi Thalib berbanding penentang sombong seperti al-Walid bin ‘Uqbah',
          'Mukmin sejati seperti Ali bin Abi Talib berbanding penentang angkuh seperti al-Walid bin ‘Uqbah'
        ),
        t(
          'Roman emperors versus Persian poets',
          'Kaisar Romawi berbanding penyair Persia',
          'Maharaja Rom berbanding penyair Parsi'
        ),
        t(
          'Merchants of Yemen versus sailors of Oman',
          'Pedagang Yaman berbanding pelaut Oman',
          'Pedagang Yaman berbanding pelayar Oman'
        ),
      ],
      correctIndex: 0,
      explanation: t(
        'While rooted in a specific confrontation, the verse states a universal principle: faith and defiance are never equal.',
        'Meski turun terkait peristiwa tertentu, prinsipnya berlaku universal bahwa iman dan kefasikan tidak pernah setara.',
        'Walaupun berkait dengan peristiwa tertentu, prinsipnya kekal sejagat bahawa iman dan kefasikan tidak pernah sama.'
      ),
    },
    {
      question: t(
        'What do verses 19 and 20 immediately do after declaring "They are not equal"?',
        'Apa yang langsung dirinci ayat 19 dan 20 setelah pernyataan "Mereka tidak sama"?',
        'Apakah yang terus dihuraikan oleh ayat 19 dan 20 selepas penyataan "Mereka tidak sama"?'
      ),
      options: [
        t(
          'They detail the divergent final abodes (Jannat al-Ma’wa vs. the Fire) of the two groups',
          'Merinci perbedaan tempat tinggal akhir kedua golongan (Jannat al-Ma’wa vs Neraka)',
          'Memerincikan perbezaan tempat kembali kedua-dua golongan (Jannat al-Ma’wa vs Neraka)'
        ),
        t(
          'They list five historical battles',
          'Menyebutkan lima peperangan sejarah',
          'Menyenaraikan lima peperangan sejarah'
        ),
        t(
          'They shift to laws of fasting',
          'Beralih membahas hukum puasa',
          'Beralih membincangkan hukum berpuasa'
        ),
      ],
      correctIndex: 0,
      explanation: t(
        'As-Sa‘di notes how divine justice visibly unfolds the divergence between obedience and rebellion.',
        'As-Sa‘di menyoroti rincian nasib akhir kedua kelompok tersebut pada dua ayat berikutnya.',
        'As-Sa‘di menyorot perincian nasib akhir kedua-dua golongan itu pada dua ayat seterusnya.'
      ),
    },
  ],
  19: [
    {
      question: t(
        'What does the Paradise name "Jannat al-Ma’wa" mean?',
        'Apa arti nama surga "Jannat al-Ma’wa"?',
        'Apakah maksud nama syurga "Jannat al-Ma’wa"?'
      ),
      options: [
        t(
          'Gardens of Refuge / Sheltering Abode',
          'Surga Tempat Berlindung / Kediaman yang Tenteram',
          'Syurga Tempat Perlindungan / Kediaman yang Damai'
        ),
        t(
          'Gardens of Desert Winds',
          'Taman Angin Gurun',
          'Taman Angin Padang Pasir'
        ),
        t(
          'Gardens of Passing Clouds',
          'Taman Awan yang Berlalu',
          'Taman Awan yang Berlalu'
        ),
      ],
      correctIndex: 0,
      explanation: t(
        'From root ’-w-y (to seek shelter), "al-ma’wa" signifies a secure, restful home.',
        'Dari akar ’-w-y (berlindung/menetap), "ma’wa" melukiskan kediaman penuh kedamaian abadi.',
        'Daripada akar ’-w-y (berlindung), "ma’wa" menggambarkan tempat tinggal yang tenang abadi.'
      ),
    },
    {
      question: t(
        'What does the word "nuzulan" literally signify in classical Arabic?',
        'Apa arti harfiah kata "nuzulan" dalam bahasa Arab klasik?',
        'Apakah maksud harfiah perkataan "nuzulan" dalam bahasa Arab klasik?'
      ),
      options: [
        t(
          'A heavy tax paid at city gates',
          'Pajak berat di gerbang kota',
          'Cukai berat di pintu kota'
        ),
        t(
          'The honored welcome feast prepared for an arriving guest',
          'Jamuan kehormatan yang disiapkan untuk menyambut tamu agung yang tiba',
          'Sajian persinggahan mulia untuk menyambut ketibaan tetamu kehormat'
        ),
        t(
          'A solitary desert journey',
          'Perjalanan gurun seorang diri',
          'Perjalanan padang pasir bersendirian'
        ),
      ],
      correctIndex: 1,
      explanation: t(
        'Al-Jalalayn notes "nuzul" means eternal Paradise begins with immediate honor upon arrival.',
        'Al-Jalalayn menjelaskan "nuzul" menunjukkan kemuliaan sejak langkah pertama memasuki surga.',
        'Al-Jalalayn menerangkan "nuzul" menandakan kemuliaan sejak saat pertama melangkah ke syurga.'
      ),
    },
    {
      question: t(
        'What two conditions are paired together in verse 19 for receiving Jannat al-Ma’wa?',
        'Dua syarat apa yang dipadukan di ayat 19 bagi peraih Jannat al-Ma’wa?',
        'Apakah dua syarat yang digandingkan dalam ayat 19 bagi penerima Jannat al-Ma’wa?'
      ),
      options: [
        t(
          'High lineage and large wealth',
          'Nasab tinggi dan kekayaan melimpah',
          'Keturunan mulia dan harta melimpah'
        ),
        t(
          'Belief (amanu) coupled with righteous deeds (‘amilus-salihat)',
          'Iman di hati ("amanu") yang dibuktikan dengan amal saleh ("‘amilush-shalihat")',
          'Keimanan ("amanu") yang disertai amal soleh ("‘amilus-salihat")'
        ),
        t(
          'Eloquence in debate alone',
          'Kefasihan berdebat semata',
          'Kefasihan berdebat semata-mata'
        ),
      ],
      correctIndex: 1,
      explanation: t(
        'Faith and righteous action consistently appear together in the Qur’an as inseparable.',
        'Iman dan amal saleh selalu beriringan sebagai satu kesatuan yang tak terpisahkan.',
        'Iman dan amal soleh sentiasa bergandingan sebagai kesatuan yang tidak terpisah.'
      ),
    },
  ],
  20: [
    {
      question: t(
        'Why is using "ma’wahum" ("their refuge/abode") for the Fire rhetorically ironic in parallel with verse 19?',
        'Mengapa pemakaian kata "ma’wahum" (tempat kediaman mereka) bagi neraka mengandung ironi kontras dengan ayat 19?',
        'Mengapakah penggunaan "ma’wahum" (tempat kediaman mereka) bagi neraka membawa nada sindiran berbanding ayat 19?'
      ),
      options: [
        t(
          '"Ma’wa" normally means a comforting shelter, yet here it contrasts as an inescapable prison of torment',
          '"Ma’wa" lazimnya tempat berteduh yang nyaman, namun di sini menjadi kontras tajam sebagai penjara siksa tanpa jalan keluar',
          '"Ma’wa" lazimnya tempat berteduh yang selesa, tetapi di sini menjadi kontras tajam sebagai penjara azab tanpa jalan keluar'
        ),
        t(
          'It implies the Fire is cool like shade',
          'Menyiratkan api neraka terasa sejuk seperti teduhan',
          'Menyiratkan api neraka sejuk seperti teduhan'
        ),
        t(
          'It refers to seasonal travel camps',
          'Merujuk pada perkemahan musafir musiman',
          'Merujuk kepada khemah pengembara bermusim'
        ),
      ],
      correctIndex: 0,
      explanation: t(
        'Every soul reaches a final "ma’wa"; faith determines whether it is peaceful sanctuary or inescapable Fire.',
        'Setiap jiwa menuju "tempat pulang" akhir, dan iman menentukan apakah itu kedamaian atau azab.',
        'Setiap jiwa menuju "tempat kembali" terakhir, dan iman menentukan sama ada ia kedamaian atau seksaan.'
      ),
    },
    {
      question: t(
        'What happens whenever the inhabitants of the Fire wish to emerge from it, per Ibn Kathir?',
        'Apa yang terjadi setiap kali penghuni neraka hendak keluar darinya menurut Ibn Katsir?',
        'Apakah yang berlaku setiap kali penghuni neraka mahu keluar daripadanya menurut Ibn Kathir?'
      ),
      options: [
        t(
          'Surging flames raise them near the brink, only for them to be thrust back inside ("u‘idu fiha")',
          'Gejolak api mengangkat mereka ke tepian, lalu mereka dikembalikan lagi ke dasarnya ("u‘idu fiha")',
          'Gejolak api menolak mereka ke tebing, lalu mereka dikembalikan semula ke dasarnya ("u‘idu fiha")'
        ),
        t(
          'They are permitted to rest on weekends',
          'Mereka diizinkan beristirahat di akhir pekan',
          'Mereka dibenarkan berehat pada hujung minggu'
        ),
        t(
          'They cross a bridge into another continent',
          'Mereka menyeberangi jembatan menuju benua lain',
          'Mereka menyeberangi jambatan ke benua lain'
        ),
      ],
      correctIndex: 0,
      explanation: t(
        'They are simultaneously reminded of the warning they once mocked: "which you used to deny."',
        'Sekaligus diingatkan bahwa dahulu mereka terus mendustakan ancaman neraka ketika di dunia.',
        'Pada masa yang sama mereka diingatkan tentang pendustaan mereka terhadap neraka ketika di dunia.'
      ),
    },
    {
      question: t(
        'What does As-Sa‘di note about the closing phrase "which you used to deny"?',
        'Apa catatan As-Sa‘di tentang penutup ayat "yang dahulu kalian dustakan"?',
        'Apakah ulasan As-Sa‘di mengenai penutup ayat "yang dahulu kamu dustakan"?'
      ),
      options: [
        t(
          'It proves they were never left unwarned, underscoring complete divine justice',
          'Membuktikan mereka tidak pernah dibiarkan tanpa peringatan, menegaskan keadilan penuh',
          'Membuktikan mereka tidak pernah dibiarkan tanpa amaran, menegaskan keadilan sempurna'
        ),
        t(
          'It shows they were punished for forgetting grammar',
          'Menunjukkan mereka dihukum karena lupa tata bahasa',
          'Menunjukkan mereka dihukum kerana terlupa nahu'
        ),
        t(
          'It means denial happened only after death',
          'Berarti pendustaan baru dimulai setelah kematian',
          'Bermaksud pendustaan hanya bermula selepas mati'
        ),
      ],
      correctIndex: 0,
      explanation: t(
        'Clear warnings had been delivered; persistent rejection brought full accountability.',
        'Peringatan telah disampaikan dengan terang semasa di dunia.',
        'Amaran telah disampaikan dengan jelas semasa mereka hidup di dunia.'
      ),
    },
  ],
  21: [
    {
      question: t(
        'How do Ibn ‘Abbas, Mujahid, and Ibn Mas‘ud interpret "the nearer punishment" ("al-‘adhab al-adna")?',
        'Bagaimana Ibn Abbas, Mujahid, dan Ibn Mas‘ud menafsirkan "azab yang dekat" ("al-‘adzab al-adna")?',
        'Bagaimanakah Ibn Abbas, Mujahid, dan Ibn Mas‘ud mentafsirkan "azab yang dekat" ("al-‘adhab al-adna")?'
      ),
      options: [
        t(
          'Worldly trials and calamities (drought, illness, hardship, defeats like Badr) prior to the Hereafter',
          'Musibah dan ujian dunia (paceklik, penyakit, kesempitan, kekalahan seperti Badar) sebelum azab akhirat',
          'Dugaan dan musibah dunia (kemarau, penyakit, kesempitan, kekalahan seperti Badar) sebelum azab akhirat'
        ),
        t(
          'A gentle breeze in Paradise',
          'Angin sepoi-sepoi di surga',
          'Bayu lembut di dalam syurga'
        ),
        t(
          'Only minor fines in trade',
          'Sekadar denda kecil dalam perdagangan',
          'Sekadar denda kecil dalam perniagaan'
        ),
      ],
      correctIndex: 0,
      explanation: t(
        '"Al-adna" means both nearer in time (this world) and lesser in severity compared to the Greater Punishment.',
        '"Al-adna" memadukan makna lebih dekat waktunya (dunia) dan lebih ringan dibanding azab akhirat.',
        '"Al-adna" menghimpunkan makna lebih dekat masanya (dunia) dan lebih ringan tahapnya berbanding azab akhirat.'
      ),
    },
    {
      question: t(
        'What redemptive purpose does verse 21 give for sending these nearer worldly trials?',
        'Apa tujuan penuh rahmat di balik ditimpakannya ujian dunia pada ayat 21?',
        'Apakah tujuan penuh rahmat di sebalik ujian dunia dalam ayat 21?'
      ),
      options: [
        t(
          'So that perhaps they will return in repentance ("la‘allahum yarji‘un")',
          'Agar mereka sadar dan kembali bertaubat ("la‘allahum yarji‘un")',
          'Supaya mereka insaf dan kembali bertaubat ("la‘allahum yarji‘un")'
        ),
        t(
          'To prove human effort is pointless',
          'Untuk membuktikan usaha manusia sia-sia',
          'Untuk membuktikan usaha manusia sia-sia'
        ),
        t(
          'To delay trade caravans permanently',
          'Untuk menghentikan kafilah dagang selamanya',
          'Untuk menghentikan kafilah dagang selama-lamanya'
        ),
      ],
      correctIndex: 0,
      explanation: t(
        'As-Sa‘di sees deep mercy here: Allah shakes comfortable illusions now while the door of tawbah remains open.',
        'As-Sa‘di melihat kasih sayang ilahi yang menyentak kelalaian manusia selagi pintu taubat masih terbuka.',
        'As-Sa‘di melihat kasih sayang Allah yang menyedarkan insan daripada lena selagi pintu taubat masih terbuka.'
      ),
    },
    {
      question: t(
        'What does the root verb "yarji‘un" (r-j-‘) mean in this spiritual context?',
        'Apa makna kata "yarji‘un" (akar r-j-‘) dalam konteks spiritual ayat ini?',
        'Apakah maksud perkataan "yarji‘un" (akar r-j-‘) dalam konteks rohani ayat ini?'
      ),
      options: [
        t(
          'Turn back in repentance to faith and obedience',
          'Kembali bertaubat kepada iman dan ketaatan',
          'Kembali bertaubat kepada keimanan dan ketaatan'
        ),
        t(
          'Travel back to Yemen',
          'Pulang berdagang ke Yaman',
          'Pulang berdagang ke Yaman'
        ),
        t(
          'Repeat an old argument',
          'Mengulang perdebatan lama',
          'Mengulang perdebatan lama'
        ),
      ],
      correctIndex: 0,
      explanation: t(
        'In Qur’anic usage, "returning" signifies tawbah—turning the heart back toward Allah.',
        'Dalam bahasa Al-Qur’an, kembali berarti bertaubat meniti jalan kebenaran.',
        'Dalam bahasa al-Quran, kembali bermaksud bertaubat pulang ke jalan kebenaran.'
      ),
    },
  ],
  22: [
    {
      question: t(
        'Which earlier verse in Surah As-Sajdah directly mirrors verse 22 as its exact opposite?',
        'Ayat sebelumnya manakah yang menjadi cerminan kebalikan langsung dari ayat 22?',
        'Ayat sebelumnya manakah yang menjadi cerminan bertentangan secara langsung dengan ayat 22?'
      ),
      options: [
        t(
          'Verse 15: believers fall in prostration when reminded ("idhā dhukkirū bihā"), whereas here the unjust turn away after being reminded',
          'Ayat 15: mukmin langsung sujud saat diperingatkan ("idza dzukkiru"), sedangkan di sini orang paling zalim justru berpaling',
          'Ayat 15: mukmin terus sujud apabila diperingatkan ("idha dhukkiru"), sedangkan di sini orang paling zalim berpaling'
        ),
        t(
          'Verse 1 only',
          'Hanya ayat 1',
          'Hanya ayat 1'
        ),
        t(
          'Verse 8 about human lineage',
          'Ayat 8 tentang keturunan manusia',
          'Ayat 8 tentang zuriat manusia'
        ),
      ],
      correctIndex: 0,
      explanation: t(
        'Ibn Kathir notes both verses share the exact verb "dhukkira" ("was reminded of Allah’s signs"), contrasting humility with stubborn turning away.',
        'Ibn Katsir menyoroti kesamaan kata "dzukkiru/dzukkira" yang membandingkan sujudnya mukmin dengan berpalingnya pendosa.',
        'Ibn Kathir menyorot persamaan kata "dhukkiru/dhukkira" yang membezakan sujud mukmin dengan sikap berpaling golongan zalim.'
      ),
    },
    {
      question: t(
        'How does As-Sa‘di define "zulm" (injustice) in explaining "who is more unjust"?',
        'Bagaimana As-Sa‘di mendefinisikan "kezaliman" dalam menjelaskan "siapakah yang lebih zalim"?',
        'Bagaimanakah As-Sa‘di mentakrifkan "kezaliman" ketika menghuraikan "siapakah yang lebih zalim"?'
      ),
      options: [
        t(
          'Misplacing something outside its rightful place—turning away from guidance meant to be embraced with gratitude',
          'Meletakkan sesuatu bukan pada tempatnya—berpaling dari petunjuk Tuhan yang seharusnya disambut syukur',
          'Meletakkan sesuatu bukan pada tempatnya—berpaling daripada petunjuk Tuhan yang sepatutnya disambut dengan syukur'
        ),
        t(
          'Speaking quietly in prayer',
          'Berdoa dengan suara pelan',
          'Berdoa dengan suara perlahan'
        ),
        t(
          'Traveling during rainy seasons',
          'Bepergian di musim hujan',
          'Mengembara pada musim hujan'
        ),
      ],
      correctIndex: 0,
      explanation: t(
        'Turning one’s back on one’s own Sustainer’s clear reminder is the gravest self-harm.',
        'Menolak petunjuk Sang Pemelihara sendiri merupakan bentuk penganiayaan diri terbesar.',
        'Menolak petunjuk Pentadbir diri sendiri ialah bentuk penganiayaan terbesar terhadap diri.'
      ),
    },
    {
      question: t(
        'What imagery does the verb "a‘rada" ("turned away") evoke?',
        'Gambaran sikap apa yang dilukiskan kata kerja "a‘radha" ("berpaling")?',
        'Apakah gambaran sikap yang dilukiskan oleh kata kerja "a‘rada" ("berpaling")?'
      ),
      options: [
        t(
          'Intentional, stubborn turning of the face and shoulder away from truth',
          'Sikap sengaja memalingkan wajah dan bahu secara keras kepala dari kebenaran',
          'Sikap sengaja memalingkan muka dan bahu secara degil daripada kebenaran'
        ),
        t(
          'Accidental stumbling in the dark',
          'Tersandung tanpa sengaja di kegelapan',
          'Tersadung tanpa sengaja dalam gelap'
        ),
        t(
          'Sitting attentively in study',
          'Duduk menyimak pelajaran dengan tekun',
          'Duduk mendengar ilmu dengan tekun'
        ),
      ],
      correctIndex: 0,
      explanation: t(
        'From root ‘-r-d (side), it depicts deliberately presenting one’s back or shoulder instead of listening.',
        'Dari akar kata yang berarti sisi/samping, menggambarkan penolakan yang disengaja.',
        'Daripada akar yang bermaksud sisi, ia menggambarkan penolakan yang disengajakan.'
      ),
    },
  ],
  23: [
    {
      question: t(
        'What two complementary interpretations do classical scholars give for "so do not be in doubt over meeting him / receiving it (min liqa’ihi)"?',
        'Dua penafsiran saling melengkapi apa yang dicatat ulama pada "janganlah ragu tentang pertemuannya (min liqa’ihi)"?',
        'Apakah dua tafsiran saling melengkapi yang dicatat ulama pada ungkapan "janganlah ragu tentang pertemuannya (min liqa’ihi)"?'
      ),
      options: [
        t(
          '(1) The Prophet meeting Musa on the Night Journey (Isra’ & Mi‘raj), and (2) certainty in receiving the Qur’an just as Musa received the Torah',
          '(1) Pertemuan Nabi Muhammad dengan Musa pada malam Isra’ Mi‘raj, dan (2) kemantapan menerima Al-Qur’an sebagaimana Musa menerima Taurat',
          '(1) Pertemuan Nabi Muhammad dengan Nabi Musa pada malam Isra’ dan Mikraj, serta (2) keyakinan menerima al-Quran sebagaimana Musa menerima Taurat'
        ),
        t(
          'A sea voyage to Egypt or an alliance with Rome',
          'Pelayaran ke Mesir atau aliansi dengan Romawi',
          'Pelayaran ke Mesir atau perikatan dengan Rom'
        ),
        t(
          'Building a library or naming a tribe',
          'Membangun perpustakaan atau menamai kabilah',
          'Membina perpustakaan atau menamakan kabilah'
        ),
      ],
      correctIndex: 0,
      explanation: t(
        'Qatadah and Ibn Kathir explain both readings unite to comfort the Prophet amid Meccan rejection.',
        'Qatadah dan Ibn Katsir memadukan kedua makna tersebut sebagai penguat hati Rasulullah menghadapi penolakan Quraisy.',
        'Qatadah dan Ibn Kathir menghimpunkan kedua-dua maksud ini sebagai penguat jiwa Rasulullah mendepani penentangan Quraisy.'
      ),
    },
    {
      question: t(
        'Why does As-Sa‘di say mentioning Prophet Musa consoles the Prophet and believers?',
        'Mengapa menurut As-Sa‘di penyebutan kisah Nabi Musa menghibur Nabi dan kaum mukminin?',
        'Mengapakah menurut As-Sa‘di kisah Nabi Musa menghiburkan Nabi dan orang beriman?'
      ),
      options: [
        t(
          'Because fierce opposition from one’s own community is a historic pattern of prophetic missions, not a sign of failure',
          'Karena penentangan keras bukan tanda kegagalan, melainkan sunnatullah perjalanan dakwah para nabi',
          'Kerana tentangan hebat bukan tanda kegagalan, sebaliknya sunnatullah perjuangan para nabi'
        ),
        t(
          'Because Musa never faced any opposition from Pharaoh',
          'Karena Musa tidak pernah ditentang oleh Fir‘aun',
          'Kerana Musa tidak pernah ditentang oleh Firaun'
        ),
        t(
          'Because the Torah was revealed in Makkah',
          'Karena Taurat diturunkan di kota Makkah',
          'Kerana Taurat diturunkan di kota Makkah'
        ),
      ],
      correctIndex: 0,
      explanation: t(
        'Situating the Qur’an in the unbroken lineage of revealed scripture reassures believers during hardship.',
        'Menempatkan risalah dalam mata rantai kenabian menguatkan ketabahan di masa sulit.',
        'Meletakkan risalah dalam rantaian sejarah kenabian menguatkan ketabahan ketika diuji.'
      ),
    },
    {
      question: t(
        'What does the noun "miryah" (from root m-r-y) denote?',
        'Apa arti kata "miryah" (akar m-r-y)?',
        'Apakah maksud perkataan "miryah" (akar m-r-y)?'
      ),
      options: [
        t(
          'Argumentative doubt or lingering hesitation',
          'Keraguan atau kebimbangan hati',
          'Keraguan atau kebimbangan hati'
        ),
        t(
          'A desert mirror',
          'Cermin di padang pasir',
          'Cermin di padang pasir'
        ),
        t(
          'Rainwater in valleys',
          'Air hujan di lembah',
          'Air hujan di lembah'
        ),
      ],
      correctIndex: 0,
      explanation: t(
        'The Qur’an addresses "do not be in doubt" rhetorically to establish unwavering certainty for the entire community.',
        'Larangan ragu ini menanamkan kemantapan hati bagi umat dalam menerima kebenaran wahyu.',
        'Larangan ragu ini menanamkan keyakinan teguh kepada seluruh umat terhadap wahyu.'
      ),
    },
  ],
  24: [
    {
      question: t(
        'Which famous scholarly maxim did Sufyan ath-Thawri and Ibn Taymiyyah derive directly from verse 24?',
        'Kaidah masyhur apa yang disimpulkan Sufyan ats-Tsauri dan Ibn Taimiyah langsung dari ayat 24?',
        'Apakah ungkapan masyhur yang disimpulkan oleh Sufyan al-Thawri dan Ibn Taymiyyah terus daripada ayat 24?'
      ),
      options: [
        t(
          '"By patience (sabr) and certainty (yaqin), leadership (imamah) in religion is attained"',
          '"Dengan kesabaran (shabr) dan keyakinan (yaqin), dicapailah kepemimpinan (imamah) dalam agama"',
          '"Dengan kesabaran (sabar) dan keyakinan (yaqin), dicapailah kepimpinan (imamah) dalam agama"'
        ),
        t(
          '"By wealth and lineage alone, kingdoms are built"',
          '"Dengan harta dan nasab semata, kerajaan dibangun"',
          '"Dengan harta dan keturunan semata-mata, kerajaan dibina"'
        ),
        t(
          '"Silence removes the need for certainty"',
          '"Diam meniadakan kebutuhan akan keyakinan"',
          '"Diam meniadakan keperluan kepada keyakinan"'
        ),
      ],
      correctIndex: 0,
      explanation: t(
        'Verse 24 links guiding leadership ("a’immah yahduna bi-amrina") directly to "when they were patient" and "were certain of Our signs."',
        'Ayat 24 menautkan kepemimpinan pembimbing umat dengan dua syarat utama: sabar dan yaqin.',
        'Ayat 24 mengaitkan kepimpinan pembimbing umat dengan dua syarat utama: sabar dan yaqin.'
      ),
    },
    {
      question: t(
        'According to As-Sa‘di, how do patience (sabr) and certainty (yaqin) complement each other?',
        'Menurut As-Sa‘di, bagaimana sabar dan yaqin saling melengkapi?',
        'Menurut As-Sa‘di, bagaimanakah sabar dan yaqin saling melengkapi?'
      ),
      options: [
        t(
          'Patience restrains destructive desires and panic during trials, while certainty dispels intellectual doubts',
          'Sabar menahan gejolak nafsu dan kepanikan saat ujian, sedangkan yakin menyingkirkan keraguan akal',
          'Sabar mengawal nafsu dan kegelisahan ketika diuji, manakala yakin menghapuskan keraguan akal'
        ),
        t(
          'Patience replaces prayer, while certainty replaces charity',
          'Sabar menggantikan salat dan yakin menggantikan sedekah',
          'Sabar menggantikan solat dan yakin menggantikan sedekah'
        ),
        t(
          'They apply only to military commanders',
          'Keduanya hanya berlaku bagi panglima perang',
          'Kedua-duanya hanya untuk panglima perang'
        ),
      ],
      correctIndex: 0,
      explanation: t(
        'Together, emotional resilience (sabr) and intellectual clarity (yaqin) forge authentic moral authority.',
        'Perpaduan ketabahan hati dan kejernihan keyakinan melahirkan keteladanan sejati.',
        'Gandingan ketabahan jiwa dan kejernihan keyakinan melahirkan kewibawaan teladan sejati.'
      ),
    },
    {
      question: t(
        'What does the temporal conjunction "lamma" ("when they were patient") emphasize grammatically?',
        'Apa penekanan kata penghubung "lamma" ("tatkala mereka bersabar")?',
        'Apakah penekanan kata hubung "lamma" ("apabila mereka bersabar")?'
      ),
      options: [
        t(
          'That guiding leadership came as a causal fruit after proving steadfastness',
          'Bahwa kepemimpinan lahir sebagai buah sebab dari terujinya kesabaran mereka',
          'Bahawa kepimpinan hadir sebagai hasil kesabaran mereka yang teruji'
        ),
        t(
          'That patience lasted only one hour',
          'Bahwa kesabaran hanya berlangsung satu jam',
          'Bahawa kesabaran hanya bertahan satu jam'
        ),
        t(
          'That patience prevented leadership',
          'Bahwa kesabaran menghalangi kepemimpinan',
          'Bahawa kesabaran menghalang kepimpinan'
        ),
      ],
      correctIndex: 0,
      explanation: t(
        '"A’immah" (plural of imam) means exemplary role models whose lives point others to truth.',
        '"A’immah" berarti para teladan kebaikan yang membimbing orang lain menuju kebenaran.',
        '"A’immah" bermaksud para teladan yang membimbing orang lain ke arah kebenaran.'
      ),
    },
  ],
  25: [
    {
      question: t(
        'What does the root verb "yafsilu" (from f-s-l) mean in verse 25?',
        'Apa makna kata kerja "yafshilu" (akar f-s-l) pada ayat 25?',
        'Apakah maksud kata kerja "yafsilu" (akar f-s-l) dalam ayat 25?'
      ),
      options: [
        t(
          'To weave garments together',
          'Menenun pakaian bersama',
          'Menenun pakaian bersama'
        ),
        t(
          'To judge decisively and separate truth from falsehood—giving rise to "Yawm al-Fasl"',
          'Memutuskan secara tegas dan memisahkan benar dari salah—asal nama "Yaumul-Fashl" (Hari Keputusan)',
          'Memutuskan secara tegas dan memisahkan benar daripada salah—asal nama "Yawm al-Fasl" (Hari Keputusan)'
        ),
        t(
          'To postpone a dispute indefinitely',
          'Menunda perselisihan tanpa batas waktu',
          'Menangguhkan pertikaian tanpa had masa'
        ),
      ],
      correctIndex: 1,
      explanation: t(
        'Every doctrinal dispute among communities will receive transparent, final adjudication on Resurrection Day.',
        'Seluruh perselisihan akidah dan tafsir akan dituntaskan secara adil pada Hari Kiamat.',
        'Segala pertikaian akidah dan sejarah akan diselesaikan secara adil pada Hari Kiamat.'
      ),
    },
    {
      question: t(
        'What practical lesson does As-Sa‘di draw from verse 25 for callers to truth?',
        'Pelajaran praktis apa yang dipetik As-Sa‘di dari ayat 25 bagi para pendakwah?',
        'Apakah pengajaran praktikal yang dirumuskan oleh As-Sa‘di daripada ayat 25 buat pendakwah?'
      ),
      options: [
        t(
          'Our duty is clear conveyance ("balagh") and patience, not forcing immediate consensus—divine adjudication settles disputes',
          'Tugas manusia adalah menyampaikan risalah dengan jernih dan sabar, bukan memaksa kesepakatan instan',
          'Tugas kita ialah menyampaikan kebenaran secara jelas dan sabar, bukan memaksa persetujuan segera'
        ),
        t(
          'Never speak about differences in history',
          'Tidak pernah membahas perbedaan sejarah',
          'Jangan sesekali membincangkan perbezaan sejarah'
        ),
        t(
          'Debate opponents day and night without rest',
          'Berdebat siang malam tanpa henti',
          'Berdebat siang dan malam tanpa henti'
        ),
      ],
      correctIndex: 0,
      explanation: t(
        'This relieves the Prophet and believers from carrying the emotional weight of unresolved arguments.',
        'Ayat ini menenangkan hati pembawa kebenaran agar bersandar pada pengadilan Allah.',
        'Ayat ini menenangkan hati pendakwah agar bersandar kepada pengadilan Ilahi.'
      ),
    },
    {
      question: t(
        'Why is the pronoun "Huwa" ("He [Himself]") added in "Inna Rabbaka Huwa yafsilu"?',
        'Mengapa kata ganti penegas "Huwa" ("Dialah") disertakan pada "Inna Rabbaka Huwa yafshilu"?',
        'Mengapakah kata ganti penegas "Huwa" ("Dialah") disertakan pada "Inna Rabbaka Huwa yafsilu"?'
      ),
      options: [
        t(
          'To emphasize that final judgment belongs exclusively to Allah alone',
          'Untuk menegaskan bahwa keputusan mutlak hanya milik Allah semata',
          'Untuk menegaskan bahawa keputusan muktamad hanya milik Allah semata-mata'
        ),
        t(
          'To refer to an unnamed earthly arbitrator',
          'Untuk merujuk seorang hakim duniawi',
          'Untuk merujuk seorang hakim di dunia'
        ),
        t(
          'To mark a shift to Arabic poetry',
          'Untuk menandai peralihan ke syair Arab',
          'Untuk menandakan peralihan kepada syair Arab'
        ),
      ],
      correctIndex: 0,
      explanation: t(
        'Al-Jalalayn renders this as "Your Lord alone will separate truth from falsehood among them."',
        'Al-Jalalayn menafsirkannya: Tuhanmu sendirilah yang kelak memisahkan hak dan batil di antara mereka.',
        'Al-Jalalayn mentafsirkannya: Tuhanmu jualah yang kelak memisahkan kebenaran daripada kebatilan.'
      ),
    },
  ],
  26: [
    {
      question: t(
        'Which historic ruins did Quraysh merchant caravans literally walk past, according to Ibn Kathir?',
        'Reruntuhan umat manakah yang secara nyata dilewati kafilah dagang Quraisy menurut Ibn Katsir?',
        'Runtuhan kaum manakah yang kerap dilintasi kafilah dagang Quraisy menurut Ibn Kathir?'
      ),
      options: [
        t(
          'The desolate dwellings of ‘Ad, Thamud, and Madyan along trade routes to Yemen and Syria',
          'Bekas permukiman kaum ‘Ad, Tsamud, dan Madyan di jalur dagang menuju Yaman dan Syam',
          'Bekas petempatan kaum ‘Ad, Thamud, dan Madyan di laluan dagang ke Yaman dan Syam'
        ),
        t(
          'Pyramids in distant northern Europe',
          'Piramida di Eropa Utara',
          'Piramid di Eropah Utara'
        ),
        t(
          'Uninhabited islands in the Pacific',
          'Pulau tak berpenghuni di Samudra Pasifik',
          'Pulau tidak berpenghuni di Lautan Pasifik'
        ),
      ],
      correctIndex: 0,
      explanation: t(
        'Walking right past those silent dwellings ("yamshuna fi masakinihim") made history an eyewitness warning.',
        'Melewati bekas tempat tinggal mereka secara langsung menjadikan sejarah saksi nyata bagi Quraisy.',
        'Melintasi bekas petempatan kaum itu secara langsung menjadikan sejarah saksi nyata kepada Quraisy.'
      ),
    },
    {
      question: t(
        'What kind of hearing is meant by the closing question "Do they not hear?" ("afala yasma‘un")?',
        'Pendengaran seperti apa yang dimaksud pada pertanyaan penutup "apakah mereka tidak mendengar?"?',
        'Pendengaran bagaimanakah yang dimaksudkan pada soalan penutup "tidakkah mereka mahu mendengar?"?'
      ),
      options: [
        t(
          'Physical ear volume alone',
          'Sekadar ketajaman suara secara fisik',
          'Sekadar ketajaman bunyi secara fizikal'
        ),
        t(
          'Hearing with reflection, humility, and acceptance of moral warning',
          'Mendengar dengan perenungan hati dan kesediaan menerima pelajaran sejarah',
          'Mendengar dengan keinsafan hati serta kesediaan menerima pengajaran sejarah'
        ),
        t(
          'Listening to trade negotiations',
          'Menyimak negosiasi harga dagangan',
          'Mendengar rundingan harga dagangan'
        ),
      ],
      correctIndex: 1,
      explanation: t(
        'As-Sa‘di notes historical ruins are moral lessons warning against repeating past arrogance.',
        'As-Sa‘di menekankan reruntuhan silam adalah cermin peringatan agar kita tidak mengulang kesombongan masa lalu.',
        'As-Sa‘di menekankan runtuhan silam ialah cermin amaran agar kita tidak mengulangi keangkuhan tamadun lalu.'
      ),
    },
    {
      question: t(
        'What does the Arabic plural "al-qurun" mean in verse 26?',
        'Apa arti kata jamak "al-qurun" pada ayat 26?',
        'Apakah maksud perkataan jamak "al-qurun" dalam ayat 26?'
      ),
      options: [
        t(
          'Successive generations or civilizations sharing an era',
          'Generasi demi generasi atau peradaban pada kurun masa terdahulu',
          'Generasi demi generasi atau tamadun pada sesuatu zaman'
        ),
        t(
          'Horned desert cattle',
          'Ternak bertanduk di gurun',
          'Ternakan bertanduk di gurun'
        ),
        t(
          'Silver coins',
          'Koin perak kuno',
          'Syiling perak silam'
        ),
      ],
      correctIndex: 0,
      explanation: t(
        'Qarn refers to a generation or people living across an epoch.',
        'Qarn merujuk pada suatu umat atau generasi yang hidup dalam satu kurun zaman.',
        'Qarn merujuk sesuatu umat atau generasi yang hidup pada satu kurun zaman.'
      ),
    },
  ],
  27: [
    {
      question: t(
        'How does verse 27 pair rhetorically with verse 26?',
        'Bagaimana keterkaitan retoris ayat 27 dengan ayat 26?',
        'Bagaimanakah pertalian retorik antara ayat 27 dengan ayat 26?'
      ),
      options: [
        t(
          'Verse 26 asks "Do they not hear?" about history; verse 27 asks "Do they not see?" about living ecology reviving dead soil',
          'Ayat 26 bertanya "tidakkah mereka mendengar?" tentang sejarah; ayat 27 bertanya "tidakkah mereka melihat?" tentang alam yang menghidupkan tanah mati',
          'Ayat 26 bertanya "tidakkah mereka mendengar?" mengenai sejarah; ayat 27 bertanya "tidakkah mereka melihat?" mengenai alam yang menghidupkan tanah gersang'
        ),
        t(
          'Both verses discuss desert architecture',
          'Keduanya membahas arsitektur gurun',
          'Kedua-duanya membincangkan seni bina gurun'
        ),
        t(
          'Verse 27 repeats verse 1 word for word',
          'Ayat 27 mengulang ayat 1 kata demi kata',
          'Ayat 27 mengulang ayat 1 kata demi kata'
        ),
      ],
      correctIndex: 0,
      explanation: t(
        'Rain reviving parched "al-ard al-juruz" is a daily visual proof of Allah’s power to resurrect the dead.',
        'Hujan yang menyuburkan tanah tandus menjadi peragaan visual harian akan kuasa kebangkitan.',
        'Hujan yang menyuburkan tanah gersang menjadi bukti visual harian tentang kuasa kebangkitan.'
      ),
    },
    {
      question: t(
        'What vivid metaphor is carried by the verb "nasuqu" ("We drive [water]")?',
        'Metafora hidup apa yang dibawa kata "nasuqu" ("Kami menggiring air")?',
        'Apakah gambaran metafora yang dibawa oleh perkataan "nasuqu" ("Kami mengarahkan air")?'
      ),
      options: [
        t(
          'Steers clouds with purposeful precision, like a shepherd herding flocks to dry valleys',
          'Menggiring awan hujan secara terarah dan presisi, laksana penggembala menuntun ternak ke lembah kering',
          'Memandu awan hujan secara teratur dan tepat, seumpama penggembala menuntun ternakan ke lembah kering'
        ),
        t(
          'Digging deep marble wells',
          'Menggali sumur marmer yang dalam',
          'Menggali perigi marmar yang dalam'
        ),
        t(
          'Freezing mountain rivers',
          'Membekukan sungai pegunungan',
          'Membekukan sungai pergunungan'
        ),
      ],
      correctIndex: 0,
      explanation: t(
        'Clouds are steered across continents to revive "al-juruz" (barren, vegetation-stripped soil).',
        'Awan hujan digerakkan melintasi benua menuju tanah tandus ("al-juruz") yang membutuhkan kehidupan.',
        'Awan hujan dipandu merentasi benua ke tanah gersang ("al-juruz") yang kontang tanpa tumbuhan.'
      ),
    },
    {
      question: t(
        'Why does As-Sa‘di highlight the phrase "their livestock eat and [they] themselves"?',
        'Mengapa As-Sa‘di menyoroti ungkapan "hewan ternak mereka dan diri mereka sendiri makan darinya"?',
        'Mengapakah As-Sa‘di menekankan ungkapan "dimakan oleh binatang ternak mereka dan mereka sendiri"?'
      ),
      options: [
        t(
          'It demonstrates how divine mercy sustains the entire food chain from barren dust, inviting gratitude',
          'Menunjukkan rahmat Allah memelihara seluruh rantai kehidupan dari tanah gersang sehingga mengajak bersyukur',
          'Menunjukkan rahmat Allah memelihara keseluruhan rantaian makanan daripada tanah gersang lalu menyeru kesyukuran'
        ),
        t(
          'It restricts farming to cattle owners',
          'Membatasi pertanian hanya bagi pemilik ternak',
          'Mengehadkan pertanian hanya kepada pemilik ternakan'
        ),
        t(
          'It explains meat preservation methods',
          'Menjelaskan cara mengawetkan daging',
          'Menjelaskan cara mengawet daging'
        ),
      ],
      correctIndex: 0,
      explanation: t(
        'Fodder for livestock and grain/fruit for humans both emerge from rain falling on lifeless ground.',
        'Pakan ternak dan pangan manusia sama-sama tumbuh berkat curahan rahmat hujan ke tanah mati.',
        'Makanan ternakan dan rezeki manusia sama-sama tumbuh hasil curahan hujan ke bumi yang mati.'
      ),
    },
  ],
  28: [
    {
      question: t(
        'What does "al-fath" mean in the skeptics’ taunt: "When will be this conquest/verdict (al-fath)?"',
        'Apa makna "al-fath" dalam tantangan kaum pengingkar: "Kapankah kemenangan/keputusan (al-fath) itu tiba?"',
        'Apakah maksud "al-fath" dalam cabaran golongan ingkar: "Bilakah datangnya kemenangan/keputusan (al-fath) itu?"'
      ),
      options: [
        t(
          'The decisive judgment/victory that breaks the deadlock and separates truth from falsehood',
          'Keputusan pemenang atau hari keputusan tegas yang mengakhiri sengketa',
          'Keputusan muktamad atau kemenangan yang menamatkan pertikaian'
        ),
        t(
          'Opening the doors of the Ka‘bah at dawn',
          'Membuka pintu Ka‘bah waktu fajar',
          'Membuka pintu Kaabah pada waktu subuh'
        ),
        t(
          'Signing a commercial caravan lease',
          'Menandatangani sewa kafilah dagang',
          'Menandatangani sewaan kafilah dagang'
        ),
      ],
      correctIndex: 0,
      explanation: t(
        'Growing impatient, Quraysh mocked the believers by demanding an exact timetable for Allah’s promised verdict.',
        'Kaum Quraisy menanyakan hal itu secara sinis untuk meremehkan janji Allah yang tampak tertunda.',
        'Kaum Quraisy menanyakan hal itu secara sindiran bagi meremehkan janji Allah.'
      ),
    },
    {
      question: t(
        'Why does As-Sa‘di call demanding to hasten "al-fath" foolish?',
        'Mengapa As-Sa‘di menilai tuntutan menyegerakan datangnya "al-fath" sebagai ketidaksadaran?',
        'Mengapakah As-Sa‘di menyifatkan tuntutan menyegerakan "al-fath" sebagai tanda kejahilan?'
      ),
      options: [
        t(
          'Because once that decisive Day arrives, the opportunity to repent closes forever',
          'Karena begitu hari keputusan itu datang, pintu taubat akan tertutup selamanya',
          'Kerana sebaik hari keputusan itu tiba, peluang bertaubat tertutup buat selama-lamanya'
        ),
        t(
          'Because nobody remembers calendar dates',
          'Karena tak seorang pun mengingat tanggal kalender',
          'Kerana tiada sesiapa mengingati tarikh kalendar'
        ),
        t(
          'Because victory was scheduled before creation',
          'Karena kemenangan terjadi sebelum penciptaan',
          'Kerana kemenangan berlaku sebelum penciptaan'
        ),
      ],
      correctIndex: 0,
      explanation: t(
        'The delay they mocked was actually a merciful window allowing time for reflection and repentance.',
        'Penangguhan waktu di dunia sejatinya adalah kesempatan berharga untuk kembali kepada iman.',
        'Tempoh penangguhan di dunia hakikatnya ialah peluang berharga untuk kembali beriman.'
      ),
    },
    {
      question: t(
        'What is the core root sense of f-t-h ("al-fath")?',
        'Apa makna dasar akar kata f-t-h ("al-fath")?',
        'Apakah makna asas akar f-t-h ("al-fath")?'
      ),
      options: [
        t(
          'Opening or breaking a deadlock—hence a decisive verdict',
          'Membuka kebuntuan atau memutus perkara secara tegas',
          'Membuka jalan keluar atau memutus pertikaian dengan tegas'
        ),
        t(
          'Closing a scroll quietly',
          'Menutup gulungan kitab dengan tenang',
          'Menutup gulungan kitab secara senyap'
        ),
        t(
          'Measuring desert wells',
          'Mengukur kedalaman sumur gurun',
          'Mengukur kedalaman perigi gurun'
        ),
      ],
      correctIndex: 0,
      explanation: t(
        'Just as a judge opens/settles a contested case, Allah’s "fath" settles the conflict between believers and deniers.',
        'Sebagaimana hakim memutuskan sengketa, "fath" Allah menuntaskan pertikaian antara iman dan pengingkaran.',
        'Sebagaimana hakim memutuskan kes, "fath" Allah menyelesaikan pertikaian antara iman dan penafian.'
      ),
    },
  ],
  29: [
    {
      question: t(
        'Why does Ibn Kathir stress that "Yawm al-Fath" here refers primarily to Judgment Day rather than the Conquest of Makkah?',
        'Mengapa Ibn Katsir menegaskan "Yaumul-Fath" di ayat 29 terutama merujuk Hari Keputusan/Kiamat bukan Fathu Makkah?',
        'Mengapakah Ibn Kathir menegaskan "Yawm al-Fath" dalam ayat 29 merujuk Hari Keputusan/Kiamat bukan Pembukaan Makkah?'
      ),
      options: [
        t(
          'Because on that Day "their faith will not benefit them"—whereas at the Conquest of Makkah, many embraced Islam and were accepted',
          'Karena pada hari itu "keimanan mereka tidak berguna lagi"—sedangkan saat Fathu Makkah banyak yang masuk Islam dan diterima taubatnya',
          'Kerana pada hari itu "keimanan mereka tidak berguna lagi"—sedangkan ketika Pembukaan Makkah ramai memeluk Islam dan diterima taubat mereka'
        ),
        t(
          'Because Makkah had no gates',
          'Karena kota Makkah tidak punya gerbang',
          'Kerana kota Makkah tiada pintu gerbang'
        ),
        t(
          'Because the verse was revealed in Jerusalem',
          'Karena ayat ini turun di Yerusalem',
          'Kerana ayat ini turun di Baitulmaqdis'
        ),
      ],
      correctIndex: 0,
      explanation: t(
        'Once the final Hour or death arrives, belated declarations of faith under duress carry no salvific merit.',
        'Saat Kiamat atau ajal tiba dengan azab yang tampak nyata, iman mendadak tidak lagi bernilai.',
        'Apabila Kiamat atau ajal tiba bersama azab yang nyata, pengakuan iman ketika itu tidak lagi diterima.'
      ),
    },
    {
      question: t(
        'What does the passive verb "yunzarun" (from n-z-r) mean in verse 29?',
        'Apa makna kata pasif "yunzharun" (akar n-z-r) pada ayat 29?',
        'Apakah maksud kata kerja pasif "yunzarun" (akar n-z-r) dalam ayat 29?'
      ),
      options: [
        t(
          'Looked at from afar',
          'Dipandang dari kejauhan',
          'Dipandang dari jauh'
        ),
        t(
          'Granted respite, reprieved, or given extra time',
          'Diberi penangguhan atau perpanjangan waktu',
          'Diberi tempoh penangguhan atau masa tambahan'
        ),
        t(
          'Invited to speak first',
          'Dipersilakan berbicara lebih dulu',
          'Dipelawa bercakap terlebih dahulu'
        ),
      ],
      correctIndex: 1,
      explanation: t(
        'In this grammatical form, n-z-r denotes granting delay/respite rather than visual looking.',
        'Dalam konteks ini, "yunzharun" bermakna diberi tenggang waktu tambahan untuk bertaubat.',
        'Dalam konteks ini, "yunzarun" bermaksud diberi tempoh tangguhan tambahan untuk bertaubat.'
      ),
    },
    {
      question: t(
        'How does As-Sa‘di characterize the Qur’an’s teaching strategy between verses 28 and 29?',
        'Bagaimana As-Sa‘di menilai cara Al-Qur’an menjawab pertanyaan kaum kafir antara ayat 28 dan 29?',
        'Bagaimanakah As-Sa‘di menyifatkan kaedah didikan al-Quran antara ayat 28 dan 29?'
      ),
      options: [
        t(
          'Instead of feeding idle curiosity about timing ("when?"), it redirects attention to urgent readiness ("what happens then?")',
          'Alih-alih meladeni rasa ingin tahu kosong tentang tanggal ("kapan?"), Al-Qur’an mengarahkan pada kesiapan menghadapi akibatnya',
          'Daripada melayan persoalan sia-sia tentang tarikh ("bilakah?"), al-Quran mengalihkan tumpuan kepada persediaan menghadapinya'
        ),
        t(
          'It lists solar eclipse dates',
          'Menyebutkan tanggal gerhana matahari',
          'Menyenaraikan tarikh gerhana matahari'
        ),
        t(
          'It refuses to answer completely',
          'Menolak menjawab sama sekali',
          'Enggan menjawab langsung'
        ),
      ],
      correctIndex: 0,
      explanation: t(
        'What matters most is not knowing the date of reckoning, but believing sincerely before that date arrives.',
        'Hal terpenting bukanlah mengetahui tanggalnya, melainkan beriman dengan tulus sebelum waktu itu tiba.',
        'Perkara terpenting bukanlah mengetahui tarikhnya, tetapi beriman secara ikhlas sebelum saat itu tiba.'
      ),
    },
  ],
  30: [
    {
      question: t(
        'What dignified stance does the final verse command the Prophet to adopt toward stubborn mockers?',
        'Sikap berwibawa apa yang diperintahkan ayat penutup ini kepada Nabi terhadap para pengejek yang keras kepala?',
        'Apakah pendirian bermaruah yang diperintahkan ayat penutup ini kepada Nabi terhadap golongan pengejek yang degil?'
      ),
      options: [
        t(
          'Turn away gracefully from fruitless hostility and wait patiently for Allah’s promised vindication',
          'Berpalinglah secara terhormat dari cemoohan yang sia-sia dan nantikan ketetapan Allah dengan sabar',
          'Berpalinglah secara terhormat daripada ejekan sia-sia dan nantikanlah ketentuan Allah dengan sabar'
        ),
        t(
          'Engage in endless public shouting matches',
          'Terlibat perdebatan keras tanpa henti di depan umum',
          'Terlibat pertengkaran lantang tanpa henti di khalayak ramai'
        ),
        t(
          'Abandon conveying the message altogether',
          'Berhenti menyampaikan risalah sama sekali',
          'Berhenti menyampaikan risalah sama sekali'
        ),
      ],
      correctIndex: 0,
      explanation: t(
        'Al-Jalalayn notes this comes *after* conveying the message clearly: do not exhaust your heart in futile arguments.',
        'Al-Jalalayn mencatat perintah berpaling berlaku setelah risalah tersampaikan jelas, agar hati tetap tenang.',
        'Al-Jalalayn menerangkan perintah berpaling ini berlaku setelah risalah disampaikan dengan jelas agar hati kekal tenang.'
      ),
    },
    {
      question: t(
        'What literary device (balaghah) appears in "wantazir innahum muntazirun" ("wait; indeed they are waiting")?',
        'Perangkat sastra (balaghah) apa yang tampak pada "wantazhir innahum muntazhirun"?',
        'Apakah gaya bahasa (balaghah) yang terdapat pada "wantazir innahum muntazirun"?'
      ),
      options: [
        t(
          'Paronomasia (jinas) pairing imperative and active participle from the same root (n-z-r) to contrast patient faith vs. hostile anticipation',
          'Jinas yang memadukan kata perintah dan isim fa‘il dari akar kata yang sama (n-z-r), mengontraskan kesabaran mukmin dan penantian sinis lawan',
          'Jinas yang menggandingkan kata perintah dan isim fa‘il daripada akar sama (n-z-r), membezakan kesabaran mukmin dengan penantian sinis musuh'
        ),
        t(
          'Silent omission of all verbs',
          'Penghilangan seluruh kata kerja',
          'Pengguguran semua kata kerja'
        ),
        t(
          'Borrowing foreign Greek terms',
          'Meminjam istilah Yunani kuno',
          'Meminjam istilah Yunani silam'
        ),
      ],
      correctIndex: 0,
      explanation: t(
        'Both wait—the believer in dignified hope, the denier hoping for failure—until Allah decides between them.',
        'Keduanya sama-sama menunggu: mukmin menanti pertolongan dengan mulia, sedangkan lawan menanti kejatuhan dakwah.',
        'Kedua-duanya menunggu: mukmin menunggu pertolongan dengan mulia, manakala penentang menunggu kejatuhan dakwah.'
      ),
    },
    {
      question: t(
        'How does As-Sa‘di describe the thematic unity between verse 1 and verse 30?',
        'Bagaimana As-Sa‘di menggambarkan kesatuan tema antara ayat 1 dan ayat 30?',
        'Bagaimanakah As-Sa‘di menggambarkan kesatuan tema antara ayat 1 dengan ayat 30?'
      ),
      options: [
        t(
          'The surah ends where it began—anchored in unshakeable certainty of Allah’s revealed word and promise',
          'Surah berakhir kokoh sebagaimana dimulainya—bertumpu pada kepastian firman dan janji Allah',
          'Surah berakhir kukuh sebagaimana permulaannya—berpaksikan kepastian firman dan janji Allah'
        ),
        t(
          'The surah ends without any connection to revelation',
          'Surah berakhir tanpa kaitan dengan wahyu',
          'Surah berakhir tanpa kaitan dengan wahyu'
        ),
        t(
          'Verse 30 cancels all previous 29 verses',
          'Ayat 30 membatalkan 29 ayat sebelumnya',
          'Ayat 30 membatalkan 29 ayat sebelumnya'
        ),
      ],
      correctIndex: 0,
      explanation: t(
        'From "no doubt in this Book" (v. 2) to calm assurance awaiting Allah’s decree (v. 30), the surah completes a full arc of certainty.',
        'Dari "tidak ada keraguan padanya" (ayat 2) hingga ketenangan menanti janji Allah (ayat 30), seluruh surah berporos pada keyakinan.',
        'Daripada "tiada keraguan padanya" (ayat 2) hingga ketenangan menanti ketentuan Allah (ayat 30), keseluruhan surah berpaksikan keyakinan.'
      ),
    },
  ],
};
