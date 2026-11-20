import React from 'react';
import { Download, Trash2, X } from 'lucide-react';
import { SURAH_SAJDAH_AYAHS } from '../data';
import { AppLanguage, VerseStudyNote } from '../types/tafsir';
import { pickText } from '../utils/i18n';

interface NotesDrawerProps {
  isOpen: boolean;
  language: AppLanguage;
  studyNotes: Record<number, VerseStudyNote>;
  onClose: () => void;
  onJumpToAyah: (ayahNumber: number) => void;
  onDeleteNoteOrBookmark: (ayahNumber: number) => void;
}

export const NotesDrawer: React.FC<NotesDrawerProps> = ({
  isOpen,
  language,
  studyNotes,
  onClose,
  onJumpToAyah,
  onDeleteNoteOrBookmark,
}) => {
  if (!isOpen) return null;

  const entries = (Object.values(studyNotes) as VerseStudyNote[])
    .filter((entry) => entry.bookmarked || entry.note.trim().length > 0)
    .sort((a, b) => a.ayahNumber - b.ayahNumber);

  const handleExportMarkdown = () => {
    const lines: string[] = [
      '# Surah As-Sajdah (32) — Study Notes & Bookmarks',
      '',
    ];

    entries.forEach((entry) => {
      const ayah = SURAH_SAJDAH_AYAHS.find(
        (v) => v.number === entry.ayahNumber
      );
      if (!ayah) return;
      lines.push(`## Ayah 32:${ayah.number}`);
      lines.push(ayah.arabic);
      lines.push('');
      lines.push(ayah.translation[language]);
      if (entry.note.trim()) {
        lines.push('');
        lines.push(`**Note:** ${entry.note.trim()}`);
      }
      lines.push('');
      lines.push('---');
      lines.push('');
    });

    const blob = new Blob([lines.join('\n')], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'surah-as-sajdah-study-notes.md';
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Saved study notes and bookmarks"
      className="fixed inset-0 z-50 flex justify-end bg-black/45 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md h-full bg-[#FBF9F5] dark:bg-[#121110] border-l border-[#E5DFD3] dark:border-[#2C2824] flex flex-col"
      >
        <div className="px-6 py-5 border-b border-[#E5DFD3] dark:border-[#2C2824] flex items-center justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#1C1917] dark:text-[#F2EFE9]">
              {pickText(language, {
                en: 'Bookmarks & Study Notes',
                id: 'Penanda & Catatan Tadabur',
                ms: 'Penanda & Catatan Tadabbur',
              })}
            </h2>
            <p className="text-xs text-[#78716C] dark:text-[#A8A29E] tabular-nums">
              {entries.length}{' '}
              {pickText(language, {
                en: 'saved entries',
                id: 'catatan tersimpan',
                ms: 'catatan disimpan',
              })}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close drawer"
            className="p-2 rounded-lg text-[#57534E] dark:text-[#A8A29E] hover:bg-[#EAE4D7] dark:hover:bg-[#23201C]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-4">
          {entries.length === 0 ? (
            <div className="py-12 text-center space-y-2">
              <p className="text-sm font-medium text-[#44403C] dark:text-[#D6D0C6]">
                {pickText(language, {
                  en: 'No bookmarks or reflections yet.',
                  id: 'Belum ada penanda atau catatan pribadi.',
                  ms: 'Belum ada penanda atau catatan peribadi.',
                })}
              </p>
              <p className="text-xs text-[#78716C] dark:text-[#A8A29E] max-w-xs mx-auto leading-relaxed">
                {pickText(language, {
                  en: 'Use the bookmark or note icons on any verse card to save reflections locally in your browser.',
                  id: 'Gunakan ikon penanda atau catatan pada setiap ayat untuk menyimpan tadabur Anda secara lokal.',
                  ms: 'Gunakan ikon penanda atau catatan pada mana-mana ayat untuk menyimpan tadabbur anda secara setempat.',
                })}
              </p>
            </div>
          ) : (
            entries.map((entry) => {
              const ayah = SURAH_SAJDAH_AYAHS.find(
                (v) => v.number === entry.ayahNumber
              );
              if (!ayah) return null;

              return (
                <div
                  key={entry.ayahNumber}
                  className="p-4 rounded-xl border border-[#E5DFD3] dark:border-[#2C2824] bg-[#F5F1E8] dark:bg-[#171512] space-y-2"
                >
                  <div className="flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        onJumpToAyah(entry.ayahNumber);
                        onClose();
                      }}
                      className="text-xs font-semibold uppercase tracking-widest text-[#1E3A8A] dark:text-[#D4AF37] hover:underline tabular-nums"
                    >
                      {language === 'en'
                        ? `Ayah 32:${entry.ayahNumber}`
                        : `Ayat 32:${entry.ayahNumber}`}
                    </button>

                    <button
                      type="button"
                      onClick={() => onDeleteNoteOrBookmark(entry.ayahNumber)}
                      aria-label={`Remove saved entry for ayah ${entry.ayahNumber}`}
                      className="p-1.5 rounded-md text-[#78716C] hover:text-[#991B1B] dark:hover:text-[#FCA5A5]"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <p className="text-xs text-[#57534E] dark:text-[#B8B2A8] line-clamp-2">
                    {ayah.translation[language]}
                  </p>

                  {entry.note.trim() && (
                    <p className="pt-2 border-t border-[#E5DFD3] dark:border-[#2C2824] text-sm text-[#1C1917] dark:text-[#F2EFE9] whitespace-pre-wrap">
                      {entry.note}
                    </p>
                  )}
                </div>
              );
            })
          )}
        </div>

        {entries.length > 0 && (
          <div className="px-6 py-4 border-t border-[#E5DFD3] dark:border-[#2C2824]">
            <button
              type="button"
              onClick={handleExportMarkdown}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-medium bg-[#1E3A8A] text-white hover:bg-[#172E6E] dark:bg-[#D4AF37] dark:text-[#121110]"
            >
              <Download className="w-4 h-4" />
              <span>
                {pickText(language, {
                  en: 'Export Notes (.md)',
                  id: 'Ekspor Catatan (.md)',
                  ms: 'Eksport Catatan (.md)',
                })}
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
