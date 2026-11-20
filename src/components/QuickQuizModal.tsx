import React, { useEffect, useState } from 'react';
import {
  CheckCircle2,
  GraduationCap,
  RotateCcw,
  X,
  XCircle,
} from 'lucide-react';
import { SURAH_SAJDAH_AYAHS, VERSE_QUIZZES } from '../data';
import { AppLanguage } from '../types/tafsir';
import { pickText } from '../utils/i18n';

interface QuickQuizModalProps {
  ayahNumber: number | null;
  language: AppLanguage;
  onClose: () => void;
}

export const QuickQuizModal: React.FC<QuickQuizModalProps> = ({
  ayahNumber,
  language,
  onClose,
}) => {
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, number>
  >({});

  useEffect(() => {
    setSelectedAnswers({});
  }, [ayahNumber]);

  useEffect(() => {
    if (ayahNumber === null) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [ayahNumber, onClose]);

  if (ayahNumber === null) return null;

  const ayah =
    SURAH_SAJDAH_AYAHS.find((a) => a.number === ayahNumber) ??
    SURAH_SAJDAH_AYAHS[0];
  const questions = VERSE_QUIZZES[ayah.number] ?? VERSE_QUIZZES[1];

  const answeredCount = Object.keys(selectedAnswers).length;
  const correctCount = questions.reduce((acc, q, idx) => {
    return acc + (selectedAnswers[idx] === q.correctIndex ? 1 : 0);
  }, 0);
  const allAnswered = answeredCount === questions.length;

  const handleSelectOption = (questionIndex: number, optionIndex: number) => {
    if (selectedAnswers[questionIndex] !== undefined) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: optionIndex,
    }));
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="quick-quiz-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-xl max-h-[88vh] rounded-xl border border-[#E5DFD3] dark:border-[#2C2824] bg-[#FBF9F5] dark:bg-[#121110] shadow-xl flex flex-col overflow-hidden"
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#E5DFD3] dark:border-[#2C2824] bg-[#F5F1E8] dark:bg-[#171512] flex items-center justify-between gap-4">
          <div className="min-w-0">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#78350F] dark:text-[#D4AF37] tabular-nums">
              <GraduationCap className="w-3.5 h-3.5 shrink-0" />
              <span>
                {pickText(language, {
                  en: `Quick Quiz · Ayah 32:${ayah.number}`,
                  id: `Kuis Singkat · Ayat 32:${ayah.number}`,
                  ms: `Kuiz Ringkas · Ayat 32:${ayah.number}`,
                })}
              </span>
            </div>
            <h2
              id="quick-quiz-title"
              className="mt-1 font-display text-xl sm:text-2xl font-semibold text-[#1C1917] dark:text-[#F2EFE9]"
            >
              {pickText(language, {
                en: 'Tafsir & Historical Context Check',
                id: 'Uji Pemahaman Tafsir & Sejarah',
                ms: 'Semakan Kefahaman Tafsir & Sejarah',
              })}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close quiz modal"
            className="p-2 rounded-lg text-[#57534E] dark:text-[#A8A29E] hover:bg-[#EAE4D7] dark:hover:bg-[#23201C] shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Questions Scroll Body */}
        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-6">
          {/* Brief Verse Context */}
          <div className="p-3.5 rounded-lg bg-[#F5F1E8] dark:bg-[#171512] border border-[#E5DFD3] dark:border-[#2C2824]">
            <p
              dir="rtl"
              lang="ar"
              className="font-arabic text-lg text-right text-[#1C1917] dark:text-[#F2EFE9] leading-relaxed"
            >
              {ayah.arabic}
            </p>
            <p className="mt-1.5 text-xs text-[#57534E] dark:text-[#B8B2A8] leading-relaxed">
              {ayah.translation[language]}
            </p>
          </div>

          {questions.map((q, qIdx) => {
            const chosen = selectedAnswers[qIdx];
            const isAnswered = chosen !== undefined;
            const isCorrect = chosen === q.correctIndex;

            return (
              <div
                key={`quiz-${ayah.number}-q-${qIdx}`}
                className="space-y-2.5 pb-5 border-b border-[#E5DFD3] dark:border-[#2C2824] last:border-b-0 last:pb-0"
              >
                <p className="text-sm font-semibold text-[#1C1917] dark:text-[#F2EFE9] leading-snug">
                  <span className="text-[#1E3A8A] dark:text-[#D4AF37] tabular-nums mr-1.5">
                    {qIdx + 1}.
                  </span>
                  {q.question[language]}
                </p>

                <div className="space-y-1.5">
                  {q.options.map((opt, oIdx) => {
                    const isThisSelected = chosen === oIdx;
                    const isThisCorrect = oIdx === q.correctIndex;

                    let optionStyle =
                      'border-[#D6CEBE] dark:border-[#332E29] bg-[#FBF9F5] dark:bg-[#171512] text-[#292524] dark:text-[#E7E2D8] hover:bg-[#F3EFE6] dark:hover:bg-[#211E1A]';

                    if (isAnswered) {
                      if (isThisCorrect) {
                        optionStyle =
                          'border-emerald-700/60 dark:border-emerald-500/50 bg-emerald-50 dark:bg-emerald-950/35 text-emerald-950 dark:text-emerald-200';
                      } else if (isThisSelected) {
                        optionStyle =
                          'border-rose-700/60 dark:border-rose-500/50 bg-rose-50 dark:bg-rose-950/35 text-rose-950 dark:text-rose-200';
                      } else {
                        optionStyle =
                          'border-[#E5DFD3] dark:border-[#2C2824] bg-[#FBF9F5]/60 dark:bg-[#121110]/60 text-[#78716C] dark:text-[#78716C]';
                      }
                    }

                    const letter = String.fromCharCode(65 + oIdx);

                    return (
                      <button
                        key={`quiz-${ayah.number}-q-${qIdx}-opt-${oIdx}`}
                        type="button"
                        disabled={isAnswered}
                        onClick={() => handleSelectOption(qIdx, oIdx)}
                        className={`w-full flex items-start justify-between gap-3 px-3.5 py-2.5 rounded-lg border text-xs sm:text-[13px] leading-relaxed text-left transition-colors ${optionStyle}`}
                      >
                        <span className="flex items-start gap-2.5">
                          <span className="font-semibold tabular-nums shrink-0 mt-0.5">
                            {letter}.
                          </span>
                          <span>{opt[language]}</span>
                        </span>

                        {isAnswered && isThisCorrect && (
                          <CheckCircle2 className="w-4 h-4 text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5" />
                        )}
                        {isAnswered && isThisSelected && !isThisCorrect && (
                          <XCircle className="w-4 h-4 text-rose-700 dark:text-rose-400 shrink-0 mt-0.5" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {isAnswered && (
                  <p className="text-xs leading-relaxed text-[#57534E] dark:text-[#B8B2A8] bg-[#F5F1E8] dark:bg-[#171512] px-3 py-2 rounded-lg border border-[#E5DFD3] dark:border-[#2C2824]">
                    <span className="font-semibold text-[#1C1917] dark:text-[#F2EFE9]">
                      {isCorrect
                        ? pickText(language, {
                            en: 'Correct — ',
                            id: 'Benar — ',
                            ms: 'Betul — ',
                          })
                        : pickText(language, {
                            en: 'Tafsir Note — ',
                            id: 'Catatan Tafsir — ',
                            ms: 'Nota Tafsir — ',
                          })}
                    </span>
                    {q.explanation[language]}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer Score & Controls */}
        <div className="px-6 py-4 border-t border-[#E5DFD3] dark:border-[#2C2824] bg-[#F5F1E8] dark:bg-[#171512] flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs font-medium text-[#57534E] dark:text-[#A8A29E] tabular-nums">
            {allAnswered
              ? pickText(language, {
                  en: `Score: ${correctCount} / ${questions.length} correct`,
                  id: `Skor: ${correctCount} / ${questions.length} benar`,
                  ms: `Skor: ${correctCount} / ${questions.length} betul`,
                })
              : pickText(language, {
                  en: `Answered ${answeredCount} of ${questions.length}`,
                  id: `Dijawab ${answeredCount} dari ${questions.length}`,
                  ms: `Dijawab ${answeredCount} daripada ${questions.length}`,
                })}
          </p>

          <div className="flex items-center gap-2">
            {answeredCount > 0 && (
              <button
                type="button"
                onClick={() => setSelectedAnswers({})}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-[#D6CEBE] dark:border-[#332E29] text-[#57534E] dark:text-[#A8A29E] hover:bg-[#EAE4D7] dark:hover:bg-[#23201C] transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>
                  {pickText(language, {
                    en: 'Retry',
                    id: 'Ulangi',
                    ms: 'Cuba Lagi',
                  })}
                </span>
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg text-xs font-medium bg-[#1E3A8A] text-white hover:bg-[#172E6E] dark:bg-[#D4AF37] dark:text-[#121110] transition-colors"
            >
              {pickText(language, {
                en: 'Done',
                id: 'Selesai',
                ms: 'Selesai',
              })}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
