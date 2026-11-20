import { LocalizedText } from '../types/tafsir';

export interface DailyReflectionPrompt {
  ayahNumber: number;
  themeLabel: LocalizedText;
  question: LocalizedText;
  practiceCue: LocalizedText;
}

export const DAILY_REFLECTIONS: DailyReflectionPrompt[] = [
  {
    ayahNumber: 1,
    themeLabel: {
      en: 'Miraculous Speech',
      id: 'Kemukjizatan Kalam',
      ms: 'Kemukjizatan Kalam',
    },
    question: {
      en: 'The Qur’an begins with ordinary Arabic letters—Alif, Lam, Mim—yet forms speech no human can match. When you read familiar verses today, how can you listen with fresh awe rather than routine habit?',
      id: 'Al-Qur’an dibuka dengan huruf-huruf biasa—Alif, Lam, Mim—namun menyusun kalam yang tak tertandingi manusia. Saat membaca ayat yang sudah akrab hari ini, bagaimana cara Anda menyimaknya dengan rasa takjub yang baru, bukan sekadar rutinitas?',
      ms: 'Al-Quran dimulakan dengan huruf abjad biasa—Alif, Lam, Mim—namun membentuk kalam yang tidak tertandingi manusia. Apabila membaca ayat yang sudah biasa hari ini, bagaimanakah anda boleh menghayatinya dengan rasa kagum yang segar?',
    },
    practiceCue: {
      en: 'Recite one page slowly today, pausing at the end of each verse to reflect before moving on.',
      id: 'Bacalah satu halaman Al-Qur’an dengan perlahan hari ini dan berhenti sejenak di setiap akhir ayat untuk merenung.',
      ms: 'Bacalah satu halaman al-Quran secara perlahan hari ini dan berhenti sejenak pada hujung setiap ayat untuk bertadabbur.',
    },
  },
  {
    ayahNumber: 2,
    themeLabel: {
      en: 'Certainty in Revelation',
      id: 'Keyakinan pada Wahyu',
      ms: 'Keyakinan terhadap Wahyu',
    },
    question: {
      en: 'Allah declares this Book "free of doubt" and sent from the Sustainer of all worlds. Where in your current decisions are you letting anxiety or hesitation overshadow the clear guidance you already know?',
      id: 'Allah menegaskan Kitab ini "tidak ada keraguan di dalamnya" dan berasal dari Pemelihara seluruh alam. Dalam keputusan hidup mana Anda masih membiarkan kegelisahan mengaburkan petunjuk yang sudah jelas Anda ketahui?',
      ms: 'Allah menegaskan Kitab ini "tiada keraguan padanya" daripada Pentadbir sekalian alam. Dalam keputusan hidup yang manakah anda masih membiarkan kerisauan mengatasi panduan jelas yang telah anda ketahui?',
    },
    practiceCue: {
      en: 'Bring one unsettled decision before the Qur’an’s ethical principles of honesty, patience, and trust.',
      id: 'Hadapkan satu persoalan yang masih bimbang pada prinsip Al-Qur’an tentang kejujuran, kesabaran, dan tawakal.',
      ms: 'Timbangkan satu keputusan yang masih kabur berpandukan prinsip al-Quran tentang kejujuran, sabar, dan tawakal.',
    },
  },
  {
    ayahNumber: 3,
    themeLabel: {
      en: 'Mercy of Guidance',
      id: 'Rahmat Petunjuk',
      ms: 'Rahmat Hidayah',
    },
    question: {
      en: 'Revelation arrived as mercy for a community long without a warner. What spiritual blessings or teachers have entered your life undeserved, and how can you pass that care onward to someone around you?',
      id: 'Wahyu datang sebagai rahmat bagi kaum yang lama hidup tanpa pemberi peringatan. Karunia hidayah atau guru apa yang Allah hadirkan dalam hidup Anda, dan bagaimana Anda dapat menyalurkannya kepada orang sekitar?',
      ms: 'Wahyu turun sebagai rahmat kepada kaum yang lama terputus daripada pembimbing. Nikmat hidayah atau guru apakah yang hadir dalam hidup anda, dan bagaimanakah anda boleh berkongsi kebaikannya dengan orang sekeliling?',
    },
    practiceCue: {
      en: 'Share one beneficial insight or sincere word of encouragement with a friend or family member today.',
      id: 'Bagikan satu faedah ilmu atau nasihat lembut yang menguatkan kepada keluarga atau sahabat hari ini.',
      ms: 'Kongsikan satu mutiara ilmu atau kata-kata semangat yang ikhlas kepada keluarga atau sahabat hari ini.',
    },
  },
  {
    ayahNumber: 4,
    themeLabel: {
      en: 'Sole Protector',
      id: 'Pelindung Tunggal',
      ms: 'Pelindung Tunggal',
    },
    question: {
      en: '"You have besides Him no protector or intercessor." Which fragile worldly supports—status, approval, wealth, or control—have you quietly treated as your real source of security instead of Allah?',
      id: '"Tidak ada bagimu penolong maupun pemberi syafaat selain Dia." Sandaran duniawi mana—jabatan, pengakuan orang, harta, atau kendali diri—yang tanpa sadar lebih Anda andalkan daripada Allah?',
      ms: '"Tiada bagi kamu selain-Nya sebarang pelindung mahupun pemberi syafaat." Sandaran dunia manakah—kedudukan, pujian manusia, harta, atau kawalan diri—yang secara diam-diam lebih anda harapkan berbanding Allah?',
    },
    practiceCue: {
      en: 'Begin your next task with "Hasbunallahu wa ni‘mal-wakil" (Allah is sufficient for us, and He is the best Disposer of affairs).',
      id: 'Awali pekerjaan Anda berikutnya dengan dzikir "Hasbunallahu wa ni‘mal-wakil" disertai ketenangan hati.',
      ms: 'Mulakan tugasan anda yang seterusnya dengan zikir "Hasbunallahu wa ni‘mal-wakil" penuh kebergantungan kepada-Nya.',
    },
  },
  {
    ayahNumber: 5,
    themeLabel: {
      en: 'Divine Orchestration',
      id: 'Pengaturan Ilahi (Tadbir)',
      ms: 'Pentadbiran Ilahi (Tadbir)',
    },
    question: {
      en: 'Allah governs every affair across cosmic scales where a single day measures a thousand human years. How might your impatience soften if you remembered that delays in your timeline may be precision in His?',
      id: 'Allah mengatur segala urusan dalam ukuran waktu kosmik yang seribu tahun menurut hitungan manusia. Bagaimana ketidaksabaran Anda dapat melunak jika menyadari bahwa penundaan menurut jadwal kita sering kali merupakan ketepatan dalam rencana-Nya?',
      ms: 'Allah mentadbir setiap urusan merentasi skala masa yang seribu tahun menurut hitungan manusia. Bagaimanakah ketidaksabaran anda boleh reda apabila menyedari bahawa kelewatan pada jadual kita mungkin ketepatan pada perancangan-Nya?',
    },
    practiceCue: {
      en: 'Release one timeline you have been forcing and entrust its outcome to Allah’s timing.',
      id: 'Lepaskan satu target waktu yang terlalu Anda paksakan, lalu serahkan hasilnya kepada waktu terbaik dari Allah.',
      ms: 'Lepaskan satu tempoh masa yang terlalu anda paksakan dan serahkan kesudahannya kepada ketentuan masa Allah.',
    },
  },
  {
    ayahNumber: 6,
    themeLabel: {
      en: 'Unseen & Witnessed',
      id: 'Maha Mengetahui yang Gaib & Nyata',
      ms: 'Mengetahui yang Ghaib & Nyata',
    },
    question: {
      en: 'He is "Knower of the unseen and the witnessed, Mighty yet Merciful." Does remembering that Allah sees your hidden struggles bring you comfort—and does remembering He sees your hidden intentions invite greater sincerity?',
      id: 'Dia "Mengetahui yang gaib dan yang nyata, Mahaperkasa lagi Maha Penyayang." Apakah kesadaran bahwa Allah melihat perjuangan tersembunyi Anda memberi ketenangan, sekaligus mengajak niat batin Anda lebih jujur?',
      ms: 'Dia "Mengetahui yang ghaib dan yang nyata, Maha Perkasa lagi Maha Mengasihani." Adakah kesedaran bahawa Allah melihat kesukaran tersembunyi anda memberi ketenangan, di samping mengajak niat hati menjadi lebih ikhlas?',
    },
    practiceCue: {
      en: 'Pause before one ordinary action today and renew your intention solely for Allah’s pleasure.',
      id: 'Berhentilah sejenak sebelum satu aktivitas rutin hari ini untuk meluruskan niat semata-mata karena Allah.',
      ms: 'Berhenti seketika sebelum satu rutin harian hari ini untuk memperbaharui niat semata-mata kerana Allah.',
    },
  },
  {
    ayahNumber: 7,
    themeLabel: {
      en: 'Excellence & Humility',
      id: 'Kesempurnaan & Kerendahan Diri',
      ms: 'Kesempurnaan & Kerendahan Hati',
    },
    question: {
      en: 'Allah perfected every detail of creation, yet reminds us our physical origin is humble clay. How can you hold both truths together today: dignity as Allah’s crafted work and humility before Him and others?',
      id: 'Allah memperindah setiap ciptaan-Nya, namun mengingatkan asal fisik kita dari tanah. Bagaimana Anda menjaga keseimbangan dua kesadaran ini hari ini: mulia sebagai karya terbaik-Nya sekaligus rendah hati di hadapan sesama?',
      ms: 'Allah memperelokkan setiap ciptaan-Nya, namun mengingatkan asal kejadian kita daripada tanah. Bagaimanakah anda menggabungkan kedua-dua hakikat ini hari ini: kemuliaan sebagai ciptaan terbaik-Nya serta kerendahan hati sesama insan?',
    },
    practiceCue: {
      en: 'Look closely at one detail of nature today—a leaf, sky, or heartbeat—and say "SubhanAllah."',
      id: 'Perhatikan satu tanda ciptaan Allah di sekitar Anda hari ini—daun, langit, atau detak jantung—lalu ucapkan "SubhanAllah".',
      ms: 'Perhatikan satu keajaiban ciptaan Allah di sekeliling anda hari ini—daun, langit, atau degupan jantung—dan ucapkan "SubhanAllah".',
    },
  },
  {
    ayahNumber: 8,
    themeLabel: {
      en: 'Curing Arrogance',
      id: 'Penawar Kesombongan',
      ms: 'Penawar Sifat Takbur',
    },
    question: {
      en: 'Why does the Qur’an repeatedly remind humankind of its fragile biological beginnings? Is there any area—knowledge, piety, or status—where quiet superiority has crept into how you view others?',
      id: 'Mengapa Al-Qur’an berulang kali mengingatkan manusia tentang awal penciptaannya yang lemah? Adakah bidang—ilmu, ibadah, atau kedudukan—yang diam-diam menumbuhkan rasa lebih unggul atas orang lain?',
      ms: 'Mengapakah al-Quran berulang kali mengingatkan manusia tentang asal kejadiannya yang lemah? Adakah ruang—ilmu, ibadah, atau darjat—yang secara halus menyuburkan rasa lebih tinggi daripada orang lain?',
    },
    practiceCue: {
      en: 'Practice humility today by listening attentively without interrupting or rushing to prove yourself right.',
      id: 'Latih kerendahan hati hari ini dengan menyimak lawan bicara secara utuh tanpa menyela atau merasa paling benar.',
      ms: 'Latih sifat tawaduk hari ini dengan mendengar percakapan orang lain sepenuhnya tanpa memotong atau tergesa-gesa membuktikan diri benar.',
    },
  },
  {
    ayahNumber: 9,
    themeLabel: {
      en: 'Gratitude of the Senses',
      id: 'Syukur atas Indra & Hati',
      ms: 'Syukur atas Deria & Hati',
    },
    question: {
      en: '"He gave you hearing, sight, and hearts; little are you grateful." Which of these three gifts—what you listen to, what you look at, or what your heart dwells on—needs the gentlest purification today?',
      id: '"Dia menjadikan bagimu pendengaran, penglihatan, dan hati; sedikit sekali kamu bersyukur." Dari tiga amanah itu—apa yang Anda dengar, lihat, dan simpan di hati—mana yang paling perlu dijaga dan disyukuri hari ini?',
      ms: '"Dia mengurniakan kepada kamu pendengaran, penglihatan, dan hati; amat sedikit kamu bersyukur." Antara tiga amanah ini—apa yang anda dengar, lihat, dan fikirkan—manakah yang paling perlu dipelihara hari ini?',
    },
    practiceCue: {
      en: 'Fast from one unbeneficial feed or idle conversation for the rest of today in gratitude for your eyes and ears.',
      id: 'Puasakan mata atau telinga dari satu tontonan atau obrolan yang sia-sia hari ini sebagai wujud syukur.',
      ms: 'Peliharalah mata atau telinga daripada satu tontonan atau perbualan sia-sia sepanjang hari ini sebagai tanda syukur.',
    },
  },
  {
    ayahNumber: 10,
    themeLabel: {
      en: 'Meeting Our Lord',
      id: 'Pertemuan dengan Tuhan',
      ms: 'Pertemuan dengan Tuhan',
    },
    question: {
      en: 'Denial of resurrection often masks avoidance of accountability ("meeting their Lord"). If you truly lived today expecting that noble meeting, what one habit or conversation would you change before nightfall?',
      id: 'Pengingkaran terhadap kebangkitan sering kali berakar dari keengganan menghadapi pertanggungjawaban ("pertemuan dengan Tuhan"). Jika hari ini Anda hidup dengan kesadaran penuh akan perjumpaan itu, satu kebiasaan apa yang ingin segera Anda perbaiki?',
      ms: 'Penafian terhadap kebangkitan sering berpunca daripada keengganan menghadapi hisab ("pertemuan dengan Tuhan"). Jika anda menghayati pertemuan itu hari ini, apakah satu amalan atau tutur kata yang ingin anda perbaiki sebelum malam?',
    },
    practiceCue: {
      en: 'Seek forgiveness for any overdue wrong and mend one strained relationship if within your reach.',
      id: 'Ucapkan istighfar dengan tulus dan perbaiki satu hubungan atau janji yang sempat tertunda.',
      ms: 'Beristighfarlah dengan tulus dan pulihkan satu hubungan atau janji yang mungkin terabai.',
    },
  },
  {
    ayahNumber: 11,
    themeLabel: {
      en: 'The Appointed Return',
      id: 'Kepulangan yang Pasti',
      ms: 'Kepulangan yang Pasti',
    },
    question: {
      en: 'Every soul is gathered in full by an appointed angel and returned to its Lord. Rather than stirring fear alone, how can remembering your return clarify what deserves your energy—and what is merely noise?',
      id: 'Setiap jiwa diambil secara utuh oleh Malaikat Maut dan dikembalikan kepada Tuhannya. Selain menumbuhkan rasa takut, bagaimana ingatan akan kepulangan ini menjernihkan prioritas tentang hal apa yang benar-benar bernilai abadi?',
      ms: 'Setiap nyawa diambil secara sempurna oleh Malaikat Maut lalu dikembalikan kepada Tuhannya. Selain rasa gerun, bagaimanakah ingatan tentang kepulangan ini menjelaskan perkara yang benar-benar bernilai kekal?',
    },
    practiceCue: {
      en: 'Identify one petty worry consuming your focus today and set it aside in favor of something lasting.',
      id: 'Kenali satu kekhawatiran remeh yang menguras pikiran Anda hari ini dan gantikan dengan satu amal kebaikan yang kekal.',
      ms: 'Kenal pasti satu kerisauan kecil yang membebankan fikiran hari ini dan alihkan tenaga kepada amal yang berkekalan.',
    },
  },
  {
    ayahNumber: 12,
    themeLabel: {
      en: 'Acting Before Too Late',
      id: 'Beramal Sebelum Terlambat',
      ms: 'Beramal Sebelum Terlewat',
    },
    question: {
      en: 'Those pleading to return to earth say: "Send us back so we may do righteous deeds—now we are certain." What good deed are you postponing for "later" that you already have the strength to begin right now?',
      id: 'Mereka yang memohon kembali ke dunia berkata: "Kembalikanlah kami agar kami beramal saleh—kini kami yakin." Amal baik apa yang terus Anda tunda untuk "nanti", padahal Anda mampu memulainya hari ini juga?',
      ms: 'Mereka yang merayu kembali ke dunia berkata: "Kembalikanlah kami agar kami beramal soleh—kini kami yakin." Apakah kebaikan yang sering anda tangguhkan untuk "nanti", sedangkan anda mampu memulakannya sekarang?',
    },
    practiceCue: {
      en: 'Complete one postponed act of obedience, charity, or kindness within the next two hours.',
      id: 'Tunaikan satu amal kebaikan, sedekah, atau silaturahmi yang tertunda dalam waktu dekat hari ini.',
      ms: 'Laksanakan satu amal ketaatan, sedekah, atau kebajikan yang tertunda pada hari ini juga.',
    },
  },
  {
    ayahNumber: 13,
    themeLabel: {
      en: 'Gift of Moral Choice',
      id: 'Amanah Pilihan Moral',
      ms: 'Amanah Pilihan Moral',
    },
    question: {
      en: 'Allah could have compelled every soul into belief, yet honored us with genuine moral choice. How are you using your freedom today—choosing the easier impulse of ego, or the nobler path of conscience?',
      id: 'Allah mampu memaksa seluruh jiwa beriman, tetapi Dia memuliakan manusia dengan kebebasan memilih. Bagaimana Anda menggunakan pilihan itu hari ini: mengikuti dorongan ego sesaat atau suara nurani yang taat?',
      ms: 'Allah berkuasa memaksa setiap jiwa beriman, namun Dia memuliakan manusia dengan kebebasan memilih. Bagaimanakah anda menggunakan kebebasan itu hari ini: mengikut kehendak nafsu atau suara hati yang taat?',
    },
    practiceCue: {
      en: 'The next time you feel tempted toward anger or carelessness, pause three seconds and consciously choose restraint.',
      id: 'Saat terdorong marah atau lalai hari ini, jedalah tiga detik dan pilihlah ketenangan dengan sadar.',
      ms: 'Apabila tercetus dorongan marah atau lalai hari ini, berhenti sejenak dan pilihlah kesabaran secara sedar.',
    },
  },
  {
    ayahNumber: 14,
    themeLabel: {
      en: 'Wakefulness vs. Forgetfulness',
      id: 'Kesadaran vs Kelalaian',
      ms: 'Kewaspadaan vs Kelalaian',
    },
    question: {
      en: 'Hereafter estrangement mirrors worldly forgetfulness ("because you forgot the meeting of this Day"). What simple daily anchor keeps Allah present in your ordinary workdays so busyness never turns into heedlessness?',
      id: 'Keterasingan di akhirat berawal dari sikap sengaja melupakan-Nya di dunia. Jangkar harian sederhana apa yang paling menjaga hati Anda tetap ingat kepada Allah di tengah kesibukan kerja?',
      ms: 'Keterpinggiran di akhirat berpunca daripada kelalaian yang disengajakan di dunia. Apakah amalan harian ringkas yang paling membantu anda mengingati Allah ketika sibuk bekerja?',
    },
    practiceCue: {
      en: 'Attach brief remembrance (dhikr) to a routine transition today—before opening your laptop, commuting, or meals.',
      id: 'Tautkan dzikir singkat pada satu jeda rutinitas hari ini—saat memulai kerja, di perjalanan, atau sebelum makan.',
      ms: 'Ikatkan zikir ringkas pada satu peralihan rutin harian anda—sebelum memulakan kerja, memandu, atau makan.',
    },
  },
  {
    ayahNumber: 15,
    themeLabel: {
      en: 'Heartfelt Prostration',
      id: 'Sujud Penuh Ketundukan',
      ms: 'Sujud Penuh Kehambaan',
    },
    question: {
      en: 'True believers respond to divine reminders not with defensive pride, but by falling in prostration and praise. When corrected by scripture or sincere counsel, is your first instinct self-defense or humble surrender?',
      id: 'Mukmin sejati menyambut peringatan ayat Allah bukan dengan pembelaan diri yang angkuh, melainkan sujud dan tasbih. Saat ditegur kebenaran atau nasihat tulus, mana yang lebih cepat muncul: membela ego atau merendahkan hati?',
      ms: 'Mukmin sejati menyambut peringatan ayat Allah bukan dengan ego yang membantah, tetapi sujud dan tasbih. Apabila ditegur oleh kebenaran atau nasihat ikhlas, apakah reaksi pertama anda: mempertahankan ego atau tunduk insaf?',
    },
    practiceCue: {
      en: 'In your next prayer, lengthen your sujud slightly and whisper: "Subhana Rabbiyal-A‘la" with conscious humility.',
      id: 'Pada salat Anda berikutnya, panjangkan sedikit sujud Anda dan hayati tasbih "Subhana Rabbiyal-A‘la" dengan penuh kerendahan hati.',
      ms: 'Dalam solat anda yang berikutnya, panjangkan sedikit sujud dan hayati tasbih "Subhana Rabbiyal-A‘la" penuh keinsafan.',
    },
  },
  {
    ayahNumber: 16,
    themeLabel: {
      en: 'Night Prayer & Quiet Charity',
      id: 'Tahajud & Infak Sunyi',
      ms: 'Qiamullail & Infak Rahsia',
    },
    question: {
      en: 'Their sides forsake warm beds to supplicate between awe and hope, paired with quiet generosity. What small sacrifice of comfort—rising earlier for Fajr or giving quietly—can strengthen your private sincerity tonight?',
      id: 'Lambung mereka menjauh dari kasur untuk berdoa di antara rasa takut dan harap, disertai infak yang tulus. Pengorbanan kenyamanan kecil apa—bangun lebih awal sebelum Subuh atau sedekah tersembunyi—yang dapat menjaga keikhlasan Anda?',
      ms: 'Lambung mereka renggang daripada tempat tidur untuk bermunajat antara takut dan harap, disusuli sifat pemurah. Apakah pengorbanan keselesaan kecil—bangun lebih awal sebelum Subuh atau sedekah tersembunyi—yang mampu menguatkan keikhlasan anda?',
    },
    practiceCue: {
      en: 'Set an alarm 15 minutes earlier before Fajr for two quiet rak‘ahs of Tahajjud or sincere du‘a.',
      id: 'Pasang pengingat 15 menit lebih awal sebelum Subuh untuk dua rakaat Tahajud atau munajat hening.',
      ms: 'Tetapkan penggera 15 minit lebih awal sebelum Subuh untuk dua rakaat Tahajud atau doa yang sunyi.',
    },
  },
  {
    ayahNumber: 17,
    themeLabel: {
      en: 'Hidden Rewards',
      id: 'Balasan yang Dirahasiakan',
      ms: 'Ganjaran yang Dirahsiakan',
    },
    question: {
      en: 'Because their devotion was hidden in the night, Allah concealed a joy beyond imagination ("coolness of the eyes"). What good deed can you do today that nobody else will ever know about?',
      id: 'Karena amal mereka dirahasiakan dalam sunyi malam, Allah pun merahasiakan nikmat penyejuk mata bagi mereka. Kebaikan apa yang bisa Anda lakukan hari ini tanpa seorang pun mengetahuinya?',
      ms: 'Kerana amal mereka dirahsiakan pada malam hari, Allah merahsiakan nikmat penyejuk mata buat mereka. Apakah satu kebaikan yang boleh anda lakukan hari ini tanpa pengetahuan sesiapa pun?',
    },
    practiceCue: {
      en: 'Perform one completely anonymous act of kindness or unseen worship before the day ends.',
      id: 'Lakukan satu kebaikan atau ibadah rahasia hari ini yang hanya diketahui oleh Allah.',
      ms: 'Lakukan satu kebaikan rahsia atau ibadah tersembunyi hari ini yang hanya diketahui oleh Allah.',
    },
  },
  {
    ayahNumber: 18,
    themeLabel: {
      en: 'Moral Distinction',
      id: 'Ketegasan Nilai Iman',
      ms: 'Kemuliaan Iman',
    },
    question: {
      en: '"Is the believer like the defiant transgressor? They are not equal." In moments when integrity feels inconvenient or unpopular, how does trusting Allah’s measure steady you against compromising your values?',
      id: '"Apakah orang beriman sama seperti orang fasik? Mereka tidak sama." Saat menjaga integritas terasa berat atau kurang populer, bagaimana keyakinan akan penilaian Allah menguatkan Anda agar tidak mengorbankan prinsip?',
      ms: '"Adakah orang beriman sama seperti orang fasik? Mereka tidak sama." Ketika menjaga integriti terasa sukar atau tidak popular, bagaimanakah keyakinan pada nilaian Allah meneguhkan anda agar tidak menggadaikan prinsip?',
    },
    practiceCue: {
      en: 'Uphold truthfulness in one small detail today even when a shortcut would go unnoticed.',
      id: 'Tegakkan kejujuran dalam satu hal kecil hari ini meski jalan pintas tampak aman dari pandangan orang.',
      ms: 'Pertahankan kejujuran dalam satu perkara kecil hari ini walaupun jalan pintas tidak disedari sesiapa.',
    },
  },
  {
    ayahNumber: 19,
    themeLabel: {
      en: 'Sanctuary of Peace',
      id: 'Taman Perlindungan Abadi',
      ms: 'Taman Perlindungan Abadi',
    },
    question: {
      en: 'Paradise is called "Gardens of Refuge" (Jannat al-Ma’wa)—the ultimate home where restless hearts find shelter. What makes your heart feel most genuinely at peace with Allah right now, and what disturbs that sanctuary?',
      id: 'Surga disebut "Jannat al-Ma’wa"—tempat pulang sejati bagi jiwa yang letih. Hal apa yang membuat hati Anda paling tenteram bersama Allah saat ini, dan apa yang paling sering mengganggu ketenangan itu?',
      ms: 'Syurga digelar "Jannat al-Ma’wa"—kediaman abadi yang menenangkan jiwa. Apakah yang menjadikan hati anda paling damai bersama Allah ketika ini, dan apakah yang paling kerap menggugat ketenangan itu?',
    },
    practiceCue: {
      en: 'Spend five unhurried minutes in stillness after prayer, letting your heart rest in Allah’s presence.',
      id: 'Luangkan lima menit tenang seusai salat tanpa tergesa-gesa berdiri, biarkan hati beristirahat dalam zikir.',
      ms: 'Luangkan lima minit yang tenang selepas solat tanpa tergesa-gesa bangkit, membiarkan hati berehat dalam ingatan kepada-Nya.',
    },
  },
  {
    ayahNumber: 20,
    themeLabel: {
      en: 'Weight of Persistent Denial',
      id: 'Akibat Pengingkaran Terus-Menerus',
      ms: 'Akibat Pendustaan Berterusan',
    },
    question: {
      en: 'Notice the warning against "what you used to deny" persistently. Are there small, repeated rationalizations in daily life where we ignore clear inner reminders until the heart grows numb?',
      id: 'Ayat ini memperingatkan bahaya "terus-menerus mendustakan." Adakah pembenaran kecil yang berulang dalam keseharian saat kita mengabaikan bisikan nurani hingga hati perlahan mengeras?',
      ms: 'Ayat ini mengingatkan bahaya "pendustaan yang berterusan." Adakah alasan-alasan kecil yang berulang apabila kita memekakkan telinga terhadap suara hati sehingga jiwa menjadi keras?',
    },
    practiceCue: {
      en: 'Respond promptly to the very next pang of conscience today instead of negotiating with it.',
      id: 'Segera ikuti dorongan nurani baik yang pertama muncul hari ini tanpa berlama-lama menawarinya.',
      ms: 'Sambutlah segera bisikan hati yang menyeru kepada kebaikan hari ini tanpa berdolak-dalih.',
    },
  },
  {
    ayahNumber: 21,
    themeLabel: {
      en: 'Mercy Inside Hardship',
      id: 'Rahmat di Balik Ujian',
      ms: 'Rahmat di Sebalik Dugaan',
    },
    question: {
      en: 'Worldly trials are sent "so that perhaps they may return" before the greater reckoning. Looking back on a past difficulty, how did hardship soften you, redirect you, or draw your prayers closer to Allah?',
      id: 'Ujian dunia ditimpakan "agar mereka kembali" sebelum datang hari perhitungan besar. Saat menengok kesulitan di masa lalu, bagaimana ujian itu melembutkan hati dan mendekatkan doa Anda kepada Allah?',
      ms: 'Dugaan dunia dikirimkan "mudah-mudahan mereka kembali" sebelum hisab terbesar. Apabila mengimbau kesukaran lalu, bagaimanakah ujian itu melembutkan jiwa dan mendekatkan doa anda kepada Allah?',
    },
    practiceCue: {
      en: 'Reflect on a current frustration and ask quietly: "What is Allah inviting me to return toward through this?"',
      id: 'Renungkan satu kegelisahan saat ini lalu tanyakan dengan lembut: "Ke arah kebaikan apa Allah sedang memanggilku kembali?"',
      ms: 'Renungi satu kekecewaan semasa dan tanyakan secara tenang: "Ke arah kebaikan apakah Allah sedang mengajakku kembali?"',
    },
  },
  {
    ayahNumber: 22,
    themeLabel: {
      en: 'Honoring Reminders',
      id: 'Memuliakan Peringatan',
      ms: 'Menghormati Peringatan',
    },
    question: {
      en: 'Verse 15 showed believers falling in prostration when reminded; Verse 22 warns of turning away after being reminded. What makes our hearts receptive to reminders rather than annoyed by them?',
      id: 'Ayat 15 melukiskan mukmin bersujud saat diingatkan, sedangkan Ayat 22 memperingatkan sikap berpaling setelah diingatkan. Apa yang membuat hati kita lapang menerima nasihat dibanding merasa terganggu?',
      ms: 'Ayat 15 menggambarkan mukmin sujud apabila diperingatkan, manakala Ayat 22 memberi amaran tentang berpaling setelah diberi peringatan. Apakah yang menjadikan hati kita terbuka menerima teguran berbanding berasa terganggu?',
    },
    practiceCue: {
      en: 'Thank the next person who offers you constructive feedback or a gentle spiritual reminder.',
      id: 'Ucapkan terima kasih dengan tulus kepada orang yang memberi masukan atau nasihat kebaikan kepada Anda.',
      ms: 'Ucapkan terima kasih secara ikhlas kepada individu yang menyampaikan teguran membina atau peringatan baik kepada anda.',
    },
  },
  {
    ayahNumber: 23,
    themeLabel: {
      en: 'Unbroken Prophetic Lineage',
      id: 'Mata Rantai Kenabian',
      ms: 'Kesinambungan Risalah Nabi',
    },
    question: {
      en: 'Allah consoled Muhammad (peace be upon him) by recalling Musa and the Torah. How does knowing that prophets and righteous communities before us faced similar struggles give you steadiness in your own path?',
      id: 'Allah menguatkan Nabi Muhammad dengan mengingatkan kisah Nabi Musa dan Taurat. Bagaimana kesadaran bahwa para nabi dan orang saleh terdahulu juga menghadapi ujian serupa memberi keteguhan bagi langkah Anda?',
      ms: 'Allah menenangkan Nabi Muhammad dengan mengimbas kisah Nabi Musa dan Taurat. Bagaimanakah kesedaran bahawa para nabi dan umat terdahulu juga melalui ujian serupa memberi ketenangan pada perjalanan anda?',
    },
    practiceCue: {
      en: 'Read a brief reflection from the life of a prophet or companion today for spiritual companionship.',
      id: 'Bacalah sejenak kisah ketabahan salah satu nabi atau sahabat hari ini sebagai teman penguat jiwa.',
      ms: 'Bacalah sejenak kisah ketabahan seorang nabi atau sahabat hari ini sebagai sumber kekuatan rohani.',
    },
  },
  {
    ayahNumber: 24,
    themeLabel: {
      en: 'Patience & Certainty',
      id: 'Sabar & Keyakinan (Yaqin)',
      ms: 'Sabar & Keyakinan (Yaqin)',
    },
    question: {
      en: 'Spiritual leadership emerges from two pillars: patience (sabr) and certainty (yaqin). Between steadiness under hardship and clarity of conviction, which pillar needs more deliberate cultivation in your life right now?',
      id: 'Kepemimpinan yang memberi petunjuk bertumpu pada dua pilar: kesabaran (shabr) dan keyakinan (yaqin). Antara ketabahan menghadapi ujian dan kejernihan keyakinan, pilar mana yang paling perlu Anda rawat saat ini?',
      ms: 'Kepimpinan rohani terbina di atas dua tunggak: kesabaran (sabar) dan keyakinan (yaqin). Antara ketabahan menanggung dugaan dengan keteguhan keyakinan, tunggak manakah yang paling perlu anda suburkan sekarang?',
    },
    practiceCue: {
      en: 'Practice sabr in one frustrating delay today and reinforce yaqin by recalling Allah’s promises in the Qur’an.',
      id: 'Latih kesabaran pada satu keterlambatan hari ini, lalu kuatkan yaqin dengan mengingat janji pertolongan Allah.',
      ms: 'Latih kesabaran apabila berdepan satu kelewatan hari ini dan teguhkan yaqin dengan mengingati janji Allah.',
    },
  },
  {
    ayahNumber: 25,
    themeLabel: {
      en: 'Leaving Final Judgment to God',
      id: 'Menyerahkan Keputusan Akhir kepada Allah',
      ms: 'Menyerahkan Keputusan kepada Allah',
    },
    question: {
      en: '"Your Lord will judge between them concerning what they used to differ." Where are you carrying emotional exhaustion from trying to win every argument instead of speaking truth gently and leaving judgment to Allah?',
      id: '"Tuhanmu akan memberi keputusan di antara mereka tentang apa yang mereka perselisihkan." Di perdebatan mana Anda merasa lelah karena ingin selalu menang, padahal tugas kita hanyalah menyampaikan dengan santun dan menyerahkan vonis akhir kepada Allah?',
      ms: '"Tuhanmu akan memutuskan antara mereka mengenai apa yang mereka perselisihkan." Dalam pertikaian manakah anda berasa letih kerana mahu sentiasa menang, sedangkan tugas kita hanyalah menyampaikan kebenaran secara beradab dan menyerahkan keputusan kepada Allah?',
    },
    practiceCue: {
      en: 'Step back gracefully from one unproductive debate today, prioritizing peace and clarity over winning.',
      id: 'Mundurlah dengan terhormat dari satu perdebatan yang tidak produktif hari ini demi menjaga kejernihan hati.',
      ms: 'Undurlah secara berhemah daripada satu perdebatan yang tidak membawa manfaat hari ini demi ketenangan jiwa.',
    },
  },
  {
    ayahNumber: 26,
    themeLabel: {
      en: 'Listening to History',
      id: 'Mendengar Pelajaran Sejarah',
      ms: 'Mendengar Pengajaran Sejarah',
    },
    question: {
      en: 'Travelers passed ancient ruins daily yet missed their message ("Do they not hear?"). As time passes swiftly in our own lives, what enduring legacy of faith and service do you want to leave behind?',
      id: 'Para musafir melewati reruntuhan umat silam namun luput menangkap pesannya ("Tidakkah mereka mendengar?"). Di tengah cepatnya waktu berlalu, warisan iman dan kemanfaatan apa yang ingin Anda tinggalkan?',
      ms: 'Musafir melintasi runtuhan kaum silam namun terlepas pengajarannya ("Tidakkah mereka mendengar?"). Dengan masa yang pantas berlalu, apakah legasi iman dan kebajikan yang ingin anda tinggalkan?',
    },
    practiceCue: {
      en: 'Invest 15 minutes today in an act that outlives the day—teaching, charitable giving, or making du‘a for future generations.',
      id: 'Luangkan 15 menit hari ini untuk amal yang melampaui hari ini—mengajar, berbagi, atau mendoakan generasi mendatang.',
      ms: 'Luangkan 15 minit hari ini untuk amal yang melangkaui hari ini—mengajar, bersedekah, atau mendoakan generasi akan datang.',
    },
  },
  {
    ayahNumber: 27,
    themeLabel: {
      en: 'Reviving Barren Hearts',
      id: 'Menghidupkan Tanah & Hati yang Gersang',
      ms: 'Menyuburkan Hati yang Gersang',
    },
    question: {
      en: 'Allah drives rain clouds across continents to revive parched, lifeless soil ("Do they not see?"). If your heart ever feels spiritually dry, what "rain" of revelation, prayer, or righteous company brings it back to life?',
      id: 'Allah menggiring awan hujan ke tanah gersang hingga menumbuhkan kehidupan ("Tidakkah mereka melihat?"). Ketika hati terasa kering secara spiritual, "hujan" apa—tilawah, doa malam, atau teman saleh—yang paling menghidupkannya kembali?',
      ms: 'Allah memandu awan hujan ke tanah kontang hingga menumbuhkan kehidupan ("Tidakkah mereka melihat?"). Apabila jiwa terasa kering secara rohani, apakah "hujan" yang paling menyuburkannya kembali—tilawah, doa, atau sahabat soleh?',
    },
    practiceCue: {
      en: 'Seek out one nourishing source today: listen to serene recitation, attend a gathering of knowledge, or reconnect with a pious friend.',
      id: 'Hadiri atau simak satu sumber penyegar jiwa hari ini: murotal yang tenang, majelis ilmu, atau menyapa sahabat yang mengingatkan pada kebaikan.',
      ms: 'Dekati satu sumber penyubur jiwa hari ini: mendengar bacaan al-Quran, majlis ilmu, atau menghubungi sahabat yang mengingatkan kepada Allah.',
    },
  },
  {
    ayahNumber: 28,
    themeLabel: {
      en: 'Trusting Beyond Impatience',
      id: 'Percaya Melampaui Ketidaksabaran',
      ms: 'Percaya Melangkaui Ketidaksabaran',
    },
    question: {
      en: 'Skeptics mocked, "When will this triumph arrive?" When good efforts seem slow to bear visible fruit, how do you distinguish between Allah’s unseen unfolding and the illusion of delay?',
      id: 'Kaum pengingkar mengejek, "Kapankah kemenangan itu datang?" Ketika ikhtiar baik tampak lambat membuahkan hasil, bagaimana Anda menjaga keyakinan pada kerja tersembunyi Allah?',
      ms: 'Golongan pengingkar mencabar, "Bilakah kemenangan itu tiba?" Apabila usaha kebaikan nampak lambat menampakkan hasil, bagaimanakah anda mengekalkan keyakinan terhadap percaturan Allah yang tidak terlihat?',
    },
    practiceCue: {
      en: 'Keep watering one quiet, faithful habit today even without immediate visible results.',
      id: 'Terus rawat satu kebiasaan baik yang konsisten hari ini meski hasilnya belum terlihat seketika.',
      ms: 'Teruskan menjaga satu amalan baik secara istiqamah hari ini walaupun hasilnya belum kelihatan serta-merta.',
    },
  },
  {
    ayahNumber: 29,
    themeLabel: {
      en: 'Value of Present Faith',
      id: 'Nilai Iman Selagi Ada Waktu',
      ms: 'Nilai Iman Selagi Berpeluang',
    },
    question: {
      en: 'When the decisive Day arrives, forced faith will no longer avail and no respite remains. What makes freely chosen faith right now—while outcomes are still unseen—so precious in the sight of Allah?',
      id: 'Ketika Hari Keputusan tiba, iman yang terpaksa tidak lagi berguna dan tiada penundaan. Apa yang membuat iman yang dipilih dengan bebas hari ini—saat yang gaib belum terbuka—begitu bernilai di sisi Allah?',
      ms: 'Apabila Hari Keputusan tiba, iman yang terpaksa tidak lagi berguna dan tiada tangguhan. Mengapakah iman yang dipilih secara sukarela sekarang—ketika alam ghaib masih terhijab—begitu mahal nilainya di sisi Allah?',
    },
    practiceCue: {
      en: 'Pause to thank Allah for granting you another day where the door of tawbah and sincere worship stands wide open.',
      id: 'Ucapkan Alhamdulillah atas kesempatan hari ini ketika pintu taubat dan amal tulus masih terbuka lebar.',
      ms: 'Ucapkan Alhamdulillah atas peluang hari ini tatkala pintu taubat dan ibadah ikhlas masih terbuka luas.',
    },
  },
  {
    ayahNumber: 30,
    themeLabel: {
      en: 'Dignified Serenity',
      id: 'Ketenangan yang Berwibawa',
      ms: 'Ketenangan yang Bermaruah',
    },
    question: {
      en: 'The surah ends with serene dignity: "Turn away from them and wait." Where in your life would stepping back calmly from provocation preserve your peace, dignity, and focus on what Allah asks of you?',
      id: 'Surah ini ditutup dengan wibawa yang tenang: "Berpalinglah dari mereka dan tunggulah." Di situasi mana Anda perlu melangkah mundur dengan elegan dari provokasi agar ketenangan hati dan fokus amal tetap terjaga?',
      ms: 'Surah ini diakhiri dengan ketenangan bermaruah: "Berpalinglah daripada mereka dan tunggulah." Dalam situasi manakah berundur dengan tenang daripada provokasi dapat memelihara maruah, kedamaian, dan tumpuan amal anda?',
    },
    practiceCue: {
      en: 'Choose calm composure over reactive reply in one challenging interaction today, trusting Allah with the outcome.',
      id: 'Pilih ketenangan yang berwibawa dibanding reaksi emosional dalam satu interaksi sulit hari ini, sambil bersandar penuh kepada Allah.',
      ms: 'Pilih ketenangan yang berhemah berbanding tindak balas emosi dalam satu situasi mencabar hari ini sambil bertawakal kepada Allah.',
    },
  },
];

/**
 * Deterministic daily index (0..29) seeded by the calendar date (YYYY-MM-DD)
 * so each day consistently highlights a varied verse from Surah As-Sajdah.
 */
export function getDailyAyahNumber(date: Date = new Date()): number {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const dateKey = `${year}-${month}-${day}`;

  // FNV-1a 32-bit hash for uniform daily distribution across 1..30
  let hash = 2166136261;
  for (let i = 0; i < dateKey.length; i++) {
    hash ^= dateKey.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return ((hash >>> 0) % 30) + 1;
}
