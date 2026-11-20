import { SURAH_SAJDAH_PART_1 } from './surahSajdahPart1';
import { SURAH_SAJDAH_PART_2 } from './surahSajdahPart2';
import { RECITERS } from './surahSajdahContext';
import { AyahTafsir, ReciterId } from '../types/tafsir';

export { SURAH_META, THEMATIC_SECTIONS, SAJDAH_TILAWAH_GUIDE } from './surahSajdahMeta';
export {
  RECITERS,
  FULL_SURAH_AUDIO_URL,
  SURAH_HADITHS,
  HISTORICAL_CONTEXT,
} from './surahSajdahContext';
export { getWordByWordTokens } from './surahSajdahWordByWord';
export {
  DAILY_REFLECTIONS,
  getDailyAyahNumber,
} from './surahSajdahReflections';
export { VERSE_QUIZZES } from './surahSajdahQuiz';

export const SURAH_SAJDAH_AYAHS: AyahTafsir[] = [
  ...SURAH_SAJDAH_PART_1,
  ...SURAH_SAJDAH_PART_2,
];

export function getAudioUrlForAyah(
  ayahNumber: number,
  reciterId: ReciterId = 'alafasy'
): string {
  const reciter = RECITERS.find((r) => r.id === reciterId) ?? RECITERS[0];
  const paddedAyah = String(ayahNumber).padStart(3, '0');
  return `https://everyayah.com/data/${reciter.folder}/032${paddedAyah}.mp3`;
}

export function getEnglishAudioUrlForAyah(ayahNumber: number): string {
  const paddedAyah = String(ayahNumber).padStart(3, '0');
  return `https://everyayah.com/data/English/Sahih_Intnl_Ibrahim_Walk_192kbps/032${paddedAyah}.mp3`;
}
