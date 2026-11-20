import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Header } from './components/Header';
import { HeroOverview } from './components/HeroOverview';
import { RecitationStudioSection } from './components/RecitationStudioSection';
import { StudyToolbar } from './components/StudyToolbar';
import { VerseCard } from './components/VerseCard';
import { MarginCompanion } from './components/MarginCompanion';
import { HadithAndHistorySection } from './components/HadithAndHistorySection';
import { ThematicArcSection } from './components/ThematicArcSection';
import { SajdahGuideSection } from './components/SajdahGuideSection';
import { NotesDrawer } from './components/NotesDrawer';
import { AudioPlayerBar } from './components/AudioPlayerBar';
import {
  getAudioUrlForAyah,
  getEnglishAudioUrlForAyah,
  SURAH_SAJDAH_AYAHS,
  THEMATIC_SECTIONS,
} from './data';
import {
  AppLanguage,
  PlaybackMode,
  ReciterId,
  TafsirLens,
  ThematicSectionId,
  VerseStudyNote,
} from './types/tafsir';
import { pickText } from './utils/i18n';

const STORAGE_NOTES_KEY = 'tafsir_sajdah_notes_v1';
const STORAGE_PREFS_KEY = 'tafsir_sajdah_prefs_v1';

export default function App() {
  const [language, setLanguage] = useState<AppLanguage>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_PREFS_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (
          parsed.language === 'en' ||
          parsed.language === 'id' ||
          parsed.language === 'ms'
        ) {
          return parsed.language;
        }
      }
    } catch {
      // Ignore storage read error
    }
    return 'en';
  });

  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_PREFS_KEY);
      if (saved) {
        return Boolean(JSON.parse(saved).isDark);
      }
    } catch {
      // Ignore
    }
    return false;
  });

  const [activeSection, setActiveSection] = useState<ThematicSectionId>('all');
  const [tafsirLens, setTafsirLens] = useState<TafsirLens>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showTransliteration, setShowTransliteration] = useState(true);
  const [arabicSize, setArabicSize] = useState<'md' | 'lg' | 'xl'>('lg');
  const [activeAyahNumber, setActiveAyahNumber] = useState<number>(1);
  const [isNotesOpen, setIsNotesOpen] = useState(false);

  const [studyNotes, setStudyNotes] = useState<Record<number, VerseStudyNote>>(
    () => {
      try {
        const raw = localStorage.getItem(STORAGE_NOTES_KEY);
        if (raw) return JSON.parse(raw);
      } catch {
        // Ignore
      }
      return {};
    }
  );

  // Audio playback state
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [reciterId, setReciterId] = useState<ReciterId>('alafasy');
  const [playbackMode, setPlaybackMode] =
    useState<PlaybackMode>('bilingual_ar_en');
  const [activeTrackPhase, setActiveTrackPhase] = useState<'arabic' | 'english'>(
    'arabic'
  );
  const [playingAyah, setPlayingAyah] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [continuousMode, setContinuousMode] = useState(false);
  const [audioError, setAudioError] = useState<string | null>(null);

  // Sync dark mode class on <html>
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  // Persist user preferences
  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_PREFS_KEY,
        JSON.stringify({ language, isDark })
      );
    } catch {
      // Ignore
    }
  }, [language, isDark]);

  // Persist notes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_NOTES_KEY, JSON.stringify(studyNotes));
    } catch {
      // Ignore
    }
  }, [studyNotes]);

  const stopAudio = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setPlayingAyah(null);
    setIsPlaying(false);
    setContinuousMode(false);
    setActiveTrackPhase('arabic');
    setAudioError(null);
  }, []);

  const startTrack = useCallback(
    (
      ayahNumber: number,
      phase: 'arabic' | 'english',
      continuous: boolean,
      reciterOverride?: ReciterId
    ) => {
      setAudioError(null);
      if (!audioRef.current) {
        audioRef.current = new Audio();
      }
      const audio = audioRef.current;
      const chosenReciter = reciterOverride ?? reciterId;
      audio.src =
        phase === 'english'
          ? getEnglishAudioUrlForAyah(ayahNumber)
          : getAudioUrlForAyah(ayahNumber, chosenReciter);

      setPlayingAyah(ayahNumber);
      setActiveAyahNumber(ayahNumber);
      setActiveTrackPhase(phase);
      setContinuousMode(continuous);

      audio
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          setIsPlaying(false);
          setAudioError(
            pickText(language, {
              en: 'Audio stream could not be reached in this network environment.',
              id: 'Audio murotal tidak dapat dimuat pada koneksi saat ini.',
              ms: 'Strim audio bacaan tidak dapat dicapai pada rangkaian semasa.',
            })
          );
        });
    },
    [language, reciterId]
  );

  const playAyahInMode = useCallback(
    (ayahNumber: number, continuous: boolean, modeOverride?: PlaybackMode) => {
      const mode = modeOverride ?? playbackMode;
      const initialPhase: 'arabic' | 'english' =
        mode === 'english_only' ? 'english' : 'arabic';
      startTrack(ayahNumber, initialPhase, continuous);
    },
    [playbackMode, startTrack]
  );

  // Wire audio ended / error listeners
  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
    }
    const audio = audioRef.current;

    const handleEnded = () => {
      if (playingAyah === null) {
        setIsPlaying(false);
        return;
      }

      if (playbackMode === 'bilingual_ar_en' && activeTrackPhase === 'arabic') {
        startTrack(playingAyah, 'english', continuousMode);
        return;
      }

      if (continuousMode && playingAyah < 30) {
        const nextPhase: 'arabic' | 'english' =
          playbackMode === 'english_only' ? 'english' : 'arabic';
        startTrack(playingAyah + 1, nextPhase, true);
      } else {
        setIsPlaying(false);
      }
    };

    const handleError = () => {
      setIsPlaying(false);
      setAudioError(
        pickText(language, {
          en: 'Unable to load recitation audio for this verse.',
          id: 'Gagal memuat audio bacaan untuk ayat ini.',
          ms: 'Gagal memuatkan audio bacaan untuk ayat ini.',
        })
      );
    };

    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
    };
  }, [
    continuousMode,
    playingAyah,
    playbackMode,
    activeTrackPhase,
    startTrack,
    language,
  ]);

  // Cleanup audio on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const handlePlaySingleAyah = (ayahNumber: number) => {
    if (playingAyah === ayahNumber && isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
      return;
    }
    if (playingAyah === ayahNumber && !isPlaying && !audioError) {
      audioRef.current?.play().then(() => setIsPlaying(true)).catch(() => {});
      return;
    }
    playAyahInMode(ayahNumber, false);
  };

  const handlePlaySurah = () => {
    if (continuousMode && isPlaying) {
      stopAudio();
      return;
    }
    playAyahInMode(1, true);
  };

  const handleTogglePlayPause = () => {
    if (!audioRef.current || playingAyah === null) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setAudioError(null);
        })
        .catch(() => {
          setAudioError(
            pickText(language, {
              en: 'Playback could not resume.',
              id: 'Pemutaran tidak dapat dilanjutkan.',
              ms: 'Main balik tidak dapat disambung.',
            })
          );
        });
    }
  };

  const handleChangeReciter = (newReciter: ReciterId) => {
    setReciterId(newReciter);
    if (playingAyah !== null && isPlaying && activeTrackPhase === 'arabic') {
      startTrack(playingAyah, 'arabic', continuousMode, newReciter);
    }
  };

  const handleChangePlaybackMode = (newMode: PlaybackMode) => {
    setPlaybackMode(newMode);
    if (playingAyah !== null && isPlaying) {
      playAyahInMode(playingAyah, continuousMode, newMode);
    }
  };

  const handleJumpToAyah = useCallback((ayahNumber: number) => {
    setActiveSection('all');
    setSearchQuery('');
    setActiveAyahNumber(ayahNumber);
    requestAnimationFrame(() => {
      const el = document.getElementById(`ayah-${ayahNumber}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }, []);

  const handleSelectSectionFromArc = (
    section: Exclude<ThematicSectionId, 'all'>
  ) => {
    setActiveSection(section);
    setSearchQuery('');
    const firstInSection = SURAH_SAJDAH_AYAHS.find(
      (a) => a.section === section
    );
    if (firstInSection) {
      setActiveAyahNumber(firstInSection.number);
    }
    requestAnimationFrame(() => {
      const el = document.getElementById('verse-tafsir');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  };

  const handleJumpToSajdahGuide = () => {
    const el = document.getElementById('sajdah-guide');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleToggleBookmark = (ayahNumber: number) => {
    setStudyNotes((prev) => {
      const existing = prev[ayahNumber];
      const nextBookmarked = !existing?.bookmarked;
      return {
        ...prev,
        [ayahNumber]: {
          ayahNumber,
          bookmarked: nextBookmarked,
          note: existing?.note ?? '',
          updatedAt: new Date().toISOString(),
        },
      };
    });
  };

  const handleSaveNote = (ayahNumber: number, noteText: string) => {
    setStudyNotes((prev) => {
      const existing = prev[ayahNumber];
      return {
        ...prev,
        [ayahNumber]: {
          ayahNumber,
          bookmarked: existing?.bookmarked ?? false,
          note: noteText,
          updatedAt: new Date().toISOString(),
        },
      };
    });
  };

  const handleDeleteNoteOrBookmark = (ayahNumber: number) => {
    setStudyNotes((prev) => {
      const copy = { ...prev };
      delete copy[ayahNumber];
      return copy;
    });
  };

  const filteredAyahs = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return SURAH_SAJDAH_AYAHS.filter((ayah) => {
      if (activeSection !== 'all' && ayah.section !== activeSection) {
        return false;
      }
      if (!query) return true;

      if (String(ayah.number) === query || `32:${ayah.number}` === query) {
        return true;
      }

      const haystack = [
        ayah.arabic,
        ayah.transliteration,
        ayah.translation.en,
        ayah.translation.id,
        ayah.translation.ms,
        ayah.summary.en,
        ayah.summary.id,
        ayah.summary.ms,
        ayah.tafsir.ibn_kathir.en,
        ayah.tafsir.ibn_kathir.id,
        ayah.tafsir.ibn_kathir.ms,
        ayah.tafsir.jalalayn.en,
        ayah.tafsir.jalalayn.id,
        ayah.tafsir.jalalayn.ms,
        ayah.tafsir.sadi.en,
        ayah.tafsir.sadi.id,
        ayah.tafsir.sadi.ms,
        ...ayah.roots.map((r) => `${r.arabic} ${r.transliteration} ${r.root}`),
      ]
        .join(' ')
        .toLowerCase();

      return haystack.includes(query);
    });
  }, [activeSection, searchQuery]);

  const activeAyah = useMemo(() => {
    return (
      SURAH_SAJDAH_AYAHS.find((a) => a.number === activeAyahNumber) ??
      SURAH_SAJDAH_AYAHS[0]
    );
  }, [activeAyahNumber]);

  const savedEntriesCount = useMemo(() => {
    return (Object.values(studyNotes) as VerseStudyNote[]).filter(
      (n) => n.bookmarked || n.note.trim().length > 0
    ).length;
  }, [studyNotes]);

  const activeSectionMeta =
    activeSection === 'all'
      ? null
      : THEMATIC_SECTIONS.find((s) => s.id === activeSection) ?? null;

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#1C1917] dark:bg-[#121110] dark:text-[#F2EFE9]">
      <Header
        language={language}
        notesCount={savedEntriesCount}
        onOpenNotes={() => setIsNotesOpen(true)}
      />

      <main className="flex-1">
        <HeroOverview
          language={language}
          isPlayingSurah={continuousMode && isPlaying}
          onPlaySurah={handlePlaySurah}
          onJumpToAyah={handleJumpToAyah}
        />

        <RecitationStudioSection
          language={language}
          reciterId={reciterId}
          onChangeReciter={handleChangeReciter}
          playbackMode={playbackMode}
          onChangePlaybackMode={handleChangePlaybackMode}
          playingAyah={playingAyah}
          activeTrackPhase={activeTrackPhase}
          isPlaying={isPlaying}
          audioError={audioError}
          onPlayAyahInMode={(num, cont) => playAyahInMode(num, cont)}
          onTogglePlayPause={handleTogglePlayPause}
          onJumpToAyah={handleJumpToAyah}
        />

        <StudyToolbar
          language={language}
          onChangeLanguage={setLanguage}
          activeSection={activeSection}
          onChangeSection={setActiveSection}
          tafsirLens={tafsirLens}
          onChangeTafsirLens={setTafsirLens}
          searchQuery={searchQuery}
          onChangeSearchQuery={setSearchQuery}
          showTransliteration={showTransliteration}
          onToggleTransliteration={() =>
            setShowTransliteration((prev) => !prev)
          }
          arabicSize={arabicSize}
          onChangeArabicSize={setArabicSize}
          isDark={isDark}
          onToggleDark={() => setIsDark((prev) => !prev)}
        />

        {/* Asymmetric 2-Column Reading Canvas */}
        <section
          id="verse-tafsir"
          className="max-w-[1280px] mx-auto px-4 sm:px-8 py-10 lg:py-12 scroll-mt-8"
        >
          {activeSectionMeta && (
            <div className="mb-8 pb-6 border-b border-[#E5DFD3] dark:border-[#2C2824]">
              <p className="text-xs uppercase tracking-widest text-[#78350F] dark:text-[#D4AF37] tabular-nums">
                {pickText(language, {
                  en: `Movement ${activeSectionMeta.roman} · Ayat ${activeSectionMeta.ayahRange}`,
                  id: `Bagian ${activeSectionMeta.roman} · Ayat ${activeSectionMeta.ayahRange}`,
                  ms: `Bahagian ${activeSectionMeta.roman} · Ayat ${activeSectionMeta.ayahRange}`,
                })}
              </p>
              <h2 className="mt-1.5 font-display text-2xl sm:text-3xl font-semibold text-[#1C1917] dark:text-[#F2EFE9]">
                {activeSectionMeta.title[language]}
              </h2>
              <p className="mt-2 text-sm text-[#57534E] dark:text-[#B8B2A8] max-w-[68ch] leading-relaxed">
                {activeSectionMeta.coreTheme[language]}
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Main 70% Exegesis Reading Column */}
            <div className="lg:col-span-8">
              {filteredAyahs.length === 0 ? (
                <div className="py-16 text-center rounded-xl border border-[#E5DFD3] dark:border-[#2C2824] bg-[#F5F1E8] dark:bg-[#171512]">
                  <p className="font-display text-2xl text-[#1C1917] dark:text-[#F2EFE9]">
                    {pickText(language, {
                      en: 'No matching verses found',
                      id: 'Tidak ada ayat yang sesuai',
                      ms: 'Tiada ayat yang sepadan ditemui',
                    })}
                  </p>
                  <p className="mt-2 text-sm text-[#78716C] dark:text-[#A8A29E]">
                    {pickText(language, {
                      en: 'Try clearing your search query or switching to All Ayat.',
                      id: 'Coba hapus kata kunci pencarian atau tampilkan Semua Ayat.',
                      ms: 'Cuba padam kata kunci carian atau paparkan Semua Ayat.',
                    })}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery('');
                      setActiveSection('all');
                    }}
                    className="mt-5 px-4 py-2 text-xs font-medium rounded-lg bg-[#1E3A8A] text-white dark:bg-[#D4AF37] dark:text-[#121110]"
                  >
                    {pickText(language, {
                      en: 'Reset Filters',
                      id: 'Atur Ulang Filter',
                      ms: 'Tetapkan Semula Penapis',
                    })}
                  </button>
                </div>
              ) : (
                <div>
                  {filteredAyahs.map((ayah) => (
                    <VerseCard
                      key={ayah.number}
                      ayah={ayah}
                      language={language}
                      tafsirLens={tafsirLens}
                      showTransliteration={showTransliteration}
                      arabicSize={arabicSize}
                      isActive={activeAyahNumber === ayah.number}
                      isCurrentlyPlaying={
                        playingAyah === ayah.number && isPlaying
                      }
                      studyNote={studyNotes[ayah.number]}
                      onFocusAyah={setActiveAyahNumber}
                      onPlayAyah={handlePlaySingleAyah}
                      onToggleBookmark={handleToggleBookmark}
                      onSaveNote={handleSaveNote}
                      onJumpToSajdahGuide={handleJumpToSajdahGuide}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Right 30% Margin Companion */}
            <div className="lg:col-span-4">
              <MarginCompanion
                language={language}
                activeAyah={activeAyah}
                studyNotes={studyNotes}
                onJumpToAyah={handleJumpToAyah}
              />
            </div>
          </div>
        </section>

        <HadithAndHistorySection
          language={language}
          onJumpToAyah={handleJumpToAyah}
        />

        <ThematicArcSection
          language={language}
          onSelectSection={handleSelectSectionFromArc}
        />

        <SajdahGuideSection language={language} />
      </main>

      <footer
        className={`border-t border-[#E5DFD3] dark:border-[#2C2824] bg-[#F5F1E8] dark:bg-[#171512] py-8 ${
          playingAyah !== null ? 'pb-24' : ''
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#78716C] dark:text-[#A8A29E]">
          <p>
            {pickText(language, {
              en: 'Tafsir Surah As-Sajdah (32:1–30) · Sources: Ibn Kathir, Al-Jalalayn, As-Sa‘di, Sahih al-Bukhari & Sahih Muslim',
              id: 'Tafsir Surah As-Sajdah (32:1–30) · Rujukan: Ibn Katsir, Al-Jalalayn, As-Sa‘di, Shahih Bukhari & Shahih Muslim',
              ms: 'Tafsir Surah As-Sajdah (32:1–30) · Rujukan: Ibn Kathir, Al-Jalalayn, As-Sa‘di, Sahih al-Bukhari & Sahih Muslim',
            })}
          </p>
          <div className="flex items-center gap-5">
            <a
              href="#overview"
              className="hover:text-[#1C1917] dark:hover:text-[#F2EFE9]"
            >
              {pickText(language, {
                en: 'Back to Top',
                id: 'Kembali ke Atas',
                ms: 'Kembali ke Atas',
              })}
            </a>
            <button
              type="button"
              onClick={() => setIsNotesOpen(true)}
              className="hover:text-[#1C1917] dark:hover:text-[#F2EFE9]"
            >
              {pickText(language, {
                en: 'Export Notes',
                id: 'Ekspor Catatan',
                ms: 'Eksport Catatan',
              })}
            </button>
          </div>
        </div>
      </footer>

      <AudioPlayerBar
        language={language}
        playingAyah={playingAyah}
        isPlaying={isPlaying}
        reciterId={reciterId}
        playbackMode={playbackMode}
        activeTrackPhase={activeTrackPhase}
        audioError={audioError}
        onTogglePlayPause={handleTogglePlayPause}
        onPrevAyah={() => {
          if (playingAyah && playingAyah > 1) {
            playAyahInMode(playingAyah - 1, continuousMode);
          }
        }}
        onNextAyah={() => {
          if (playingAyah && playingAyah < 30) {
            playAyahInMode(playingAyah + 1, continuousMode);
          }
        }}
        onClose={stopAudio}
      />

      <NotesDrawer
        isOpen={isNotesOpen}
        language={language}
        studyNotes={studyNotes}
        onClose={() => setIsNotesOpen(false)}
        onJumpToAyah={handleJumpToAyah}
        onDeleteNoteOrBookmark={handleDeleteNoteOrBookmark}
      />
    </div>
  );
}
