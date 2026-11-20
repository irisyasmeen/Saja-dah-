import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  Check,
  Copy,
  ExternalLink,
  Link2,
  Share2,
} from 'lucide-react';
import { AppLanguage } from '../types/tafsir';
import { pickText } from '../utils/i18n';

interface ShareButtonProps {
  language: AppLanguage;
  title: string;
  shareText: string;
  ayahNumber?: number;
  variant?: 'header' | 'card';
}

function buildShareUrl(ayahNumber?: number): string {
  if (typeof window === 'undefined') {
    return ayahNumber ? `?ayah=${ayahNumber}#ayah-${ayahNumber}` : '';
  }
  const base = `${window.location.origin}${window.location.pathname}`;
  return ayahNumber ? `${base}?ayah=${ayahNumber}#ayah-${ayahNumber}` : base;
}

async function copyToClipboard(text: string): Promise<boolean> {
  if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Fallback below
    }
  }
  if (typeof document !== 'undefined') {
    try {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.setAttribute('readonly', '');
      textarea.className = 'fixed -left-[9999px] opacity-0 pointer-events-none';
      document.body.appendChild(textarea);
      textarea.select();
      const copied = document.execCommand('copy');
      document.body.removeChild(textarea);
      return copied;
    } catch {
      return false;
    }
  }
  return false;
}

export const ShareButton: React.FC<ShareButtonProps> = ({
  language,
  title,
  shareText,
  ayahNumber,
  variant = 'card',
}) => {
  const [open, setOpen] = useState(false);
  const [copiedMode, setCopiedMode] = useState<'link' | 'text' | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const shareUrl = useMemo(() => buildShareUrl(ayahNumber), [ayahNumber]);

  const canNativeShare =
    typeof navigator !== 'undefined' && typeof navigator.share === 'function';

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  useEffect(() => {
    if (!copiedMode) return;
    const timer = window.setTimeout(() => setCopiedMode(null), 2200);
    return () => window.clearTimeout(timer);
  }, [copiedMode]);

  const handleCopyLink = async () => {
    const ok = await copyToClipboard(shareUrl);
    if (ok) {
      setCopiedMode('link');
    }
  };

  const handleCopyFullText = async () => {
    const ok = await copyToClipboard(`${shareText}\n\n${shareUrl}`);
    if (ok) {
      setCopiedMode('text');
    }
  };

  const handleNativeShare = async () => {
    if (!canNativeShare) return;
    try {
      await navigator.share({
        title,
        text: shareText,
        url: shareUrl,
      });
      setOpen(false);
    } catch {
      // User cancelled native share sheet
    }
  };

  const socialPlatforms = [
    {
      name: 'WhatsApp',
      href: `https://wa.me/?text=${encodeURIComponent(`${shareText}\n\n${shareUrl}`)}`,
    },
    {
      name: 'Telegram',
      href: `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
    },
    {
      name: 'X (Twitter)',
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
    },
    {
      name: 'Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`,
    },
  ];

  const shareLabel = pickText(language, {
    en: 'Share',
    id: 'Bagikan',
    ms: 'Kongsi',
  });

  return (
    <div
      ref={containerRef}
      className="relative inline-block"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label={
          ayahNumber
            ? pickText(language, {
                en: `Share Ayah 32:${ayahNumber}`,
                id: `Bagikan Ayat 32:${ayahNumber}`,
                ms: `Kongsi Ayat 32:${ayahNumber}`,
              })
            : pickText(language, {
                en: 'Share Surah As-Sajdah',
                id: 'Bagikan Surah As-Sajdah',
                ms: 'Kongsi Surah As-Sajdah',
              })
        }
        className={
          variant === 'header'
            ? 'inline-flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-medium rounded-lg border border-[#D6CEBE] dark:border-[#332E29] text-[#1C1917] dark:text-[#F2EFE9] hover:bg-[#EAE4D7] dark:hover:bg-[#23201C] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A8A] dark:focus-visible:ring-[#D4AF37]'
            : `inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                open
                  ? 'bg-[#EAE4D7] dark:bg-[#23201C] text-[#1C1917] dark:text-[#F2EFE9]'
                  : 'text-[#57534E] dark:text-[#A8A29E] hover:bg-[#EAE4D7] dark:hover:bg-[#23201C]'
              }`
        }
      >
        <Share2 className="w-3.5 h-3.5" />
        <span>{shareLabel}</span>
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 mt-2 w-64 rounded-xl border border-[#D6CEBE] dark:border-[#332E29] bg-[#FBF9F5] dark:bg-[#171512] shadow-lg p-2 z-50"
        >
          <div className="px-2.5 py-2 border-b border-[#E5DFD3] dark:border-[#2C2824]">
            <p className="text-[11px] uppercase tracking-widest font-semibold text-[#78716C] dark:text-[#A8A29E]">
              {title}
            </p>
          </div>

          <div className="py-1.5 space-y-0.5">
            <button
              type="button"
              role="menuitem"
              onClick={handleCopyLink}
              className="w-full flex items-center justify-between gap-2 px-2.5 py-2 rounded-lg text-xs font-medium text-[#1C1917] dark:text-[#F2EFE9] hover:bg-[#EAE4D7] dark:hover:bg-[#23201C] transition-colors text-left"
            >
              <span className="inline-flex items-center gap-2">
                {copiedMode === 'link' ? (
                  <Check className="w-3.5 h-3.5 text-[#1E3A8A] dark:text-[#D4AF37]" />
                ) : (
                  <Link2 className="w-3.5 h-3.5 text-[#78716C] dark:text-[#A8A29E]" />
                )}
                <span>
                  {copiedMode === 'link'
                    ? pickText(language, {
                        en: 'Link copied!',
                        id: 'Tautan disalin!',
                        ms: 'Pautan disalin!',
                      })
                    : pickText(language, {
                        en: 'Copy Link',
                        id: 'Salin Tautan',
                        ms: 'Salin Pautan',
                      })}
                </span>
              </span>
            </button>

            {ayahNumber !== undefined && (
              <button
                type="button"
                role="menuitem"
                onClick={handleCopyFullText}
                className="w-full flex items-center justify-between gap-2 px-2.5 py-2 rounded-lg text-xs font-medium text-[#1C1917] dark:text-[#F2EFE9] hover:bg-[#EAE4D7] dark:hover:bg-[#23201C] transition-colors text-left"
              >
                <span className="inline-flex items-center gap-2">
                  {copiedMode === 'text' ? (
                    <Check className="w-3.5 h-3.5 text-[#1E3A8A] dark:text-[#D4AF37]" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-[#78716C] dark:text-[#A8A29E]" />
                  )}
                  <span>
                    {copiedMode === 'text'
                      ? pickText(language, {
                          en: 'Verse & link copied!',
                          id: 'Ayat & tautan disalin!',
                          ms: 'Ayat & pautan disalin!',
                        })
                      : pickText(language, {
                          en: 'Copy Verse & Link',
                          id: 'Salin Ayat & Tautan',
                          ms: 'Salin Ayat & Pautan',
                        })}
                  </span>
                </span>
              </button>
            )}

            {canNativeShare && (
              <button
                type="button"
                role="menuitem"
                onClick={handleNativeShare}
                className="w-full flex items-center gap-2 px-2.5 py-2 rounded-lg text-xs font-medium text-[#1E3A8A] dark:text-[#D4AF37] hover:bg-[#EAE4D7] dark:hover:bg-[#23201C] transition-colors text-left"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>
                  {pickText(language, {
                    en: 'Share via Device…',
                    id: 'Bagikan lewat Perangkat…',
                    ms: 'Kongsi melalui Peranti…',
                  })}
                </span>
              </button>
            )}
          </div>

          <div className="pt-1.5 border-t border-[#E5DFD3] dark:border-[#2C2824]">
            <p className="px-2.5 py-1 text-[10px] uppercase tracking-widest text-[#78716C] dark:text-[#A8A29E]">
              {pickText(language, {
                en: 'Share on Social Media',
                id: 'Bagikan ke Media Sosial',
                ms: 'Kongsi ke Media Sosial',
              })}
            </p>
            <div className="space-y-0.5">
              {socialPlatforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  role="menuitem"
                  onClick={() => setOpen(false)}
                  className="w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs text-[#44403C] dark:text-[#D6D0C6] hover:bg-[#EAE4D7] dark:hover:bg-[#23201C] transition-colors"
                >
                  <span>{platform.name}</span>
                  <ExternalLink className="w-3 h-3 text-[#78716C] dark:text-[#A8A29E]" />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
