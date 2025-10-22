import { useState, useRef } from "react";
import { useEffect } from "react";

import { Copy, Check, Moon, Sun, Eye, EyeClosed } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { useTheme } from "next-themes";
import { TextEffect, textEffects } from "@/lib/text-effect";
import { cn } from "@/lib/utils";
import { CodeDialog } from "./CodeDialog";

const TextEffectsGallery = () => {
  const [headerText, setHeaderText] = useState("Text Effects Gallery");
  const [isEditingHeader, setIsEditingHeader] = useState(false);
  const [previewIdx, setPreviewIdx] = useState(0);
  const [isPreviewLocked, setIsPreviewLocked] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const categories = [
    "All",
    ...Array.from(new Set(textEffects.map((effect) => effect.category))),
  ];
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [openDialogId, setOpenDialogId] = useState<number | null>(null);
  const [previewEffect, setPreviewEffect] = useState<TextEffect | null>(null);
  const heroRef = useRef<HTMLHeadingElement>(null);
  const { theme, setTheme } = useTheme();

  const copyToClipboard = async (effect: TextEffect) => {
    try {
      let textToCopy = effect.classes;

      if (effect.customCSS) {
        textToCopy = `${effect.classes}\n\n/* Custom CSS */\n${effect.customCSS}`;
      }

      await navigator.clipboard.writeText(textToCopy);
      setCopiedId(effect.id);

      toast({
        title: effect.customCSS
          ? "Copied with custom CSS!"
          : "Copied to clipboard!",
        description: effect.customCSS
          ? "Classes and custom CSS have been copied"
          : "Tailwind classes copied successfully",
      });

      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try again",
        variant: "destructive",
      });
    }
  };

  const filteredEffects = textEffects.filter((effect) =>
    selectedCategory === "All" ? true : effect.category === selectedCategory
  );

  useEffect(() => {
    if (filteredEffects.length === 0) return;
    if (!isPreviewLocked) {
      setPreviewEffect(filteredEffects[previewIdx]);
    }
  }, [filteredEffects, previewIdx, isPreviewLocked]);

  useEffect(() => {
    if (filteredEffects.length === 0 || isPreviewLocked) return;
    const interval = setInterval(() => {
      setPreviewIdx((i) => (i + 1) % filteredEffects.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [filteredEffects.length, isPreviewLocked]);

  return (
    <div className='min-h-screen w-full relative py-12 px-4 sm:px-6 lg:px-8'>
      <div
        className='fixed inset-0 z-0 dark:hidden'
        style={{
          background:
            "radial-gradient(125% 125% at 50% 10%, #fff 40%, #7c3aed 100%)",
        }}
      />

      <div
        className='fixed inset-0 z-0 hidden dark:block'
        style={{
          // background:
          //   "radial-gradient(125% 125% at 50% 90%, #000000 40%, #0d1a36 100%)",
          background: `
            radial-gradient(
              circle at top,
              rgba(255, 255, 255, 0.08) 0%,
              rgba(255, 255, 255, 0.08) 20%,
              rgba(0, 0, 0, 0.0) 60%
            )
          `,
        }}
      />
      <div className='max-w-7xl mx-auto relative z-50'>
        {/* Theme Toggle */}
        <div className='flex justify-end mb-8'>
          <div className='flex items-center gap-2'>
            <Button
              variant='outline'
              size='icon'
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
              <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
              <span className='sr-only'>Toggle theme</span>
            </Button>
            <a
              href='https://x.com/intent/user?screen_name=unclebigbay143'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center justify-center rounded-full border border-border bg-card text-foreground hover:bg-muted transition-colors h-10 w-10'
              aria-label='Follow on X'
            >
              <svg
                className='w-[1.2rem] h-[1.2rem] text-gray-800 dark:text-white'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path d='M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z' />
              </svg>
            </a>
            <a
              href='https://x.com/unclebigbay143'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center justify-center rounded-full border border-border bg-card text-foreground hover:bg-muted transition-colors h-10 w-10'
              aria-label='Star on GitHub'
            >
              <svg
                className='w-6 h-6 text-gray-800 dark:text-white'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  fillRule='evenodd'
                  d='M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z'
                  clipRule='evenodd'
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Header */}
        <header className='text-center mb-16 flex flex-col items-center gap-4'>
          <h1
            ref={heroRef}
            className={cn(
              "text-5xl md:text-6xl cursor-pointer outline-none font-extrabold bg-clip-text text-transparent relative z-10"
            )}
            // style={{
            //   transition: "all 0.5s",
            // }}
            tabIndex={0}
            onClick={() => setIsEditingHeader(true)}
          >
            {isEditingHeader ? (
              <input
                type='text'
                value={headerText}
                autoFocus
                onChange={(e) => setHeaderText(e.target.value)}
                onBlur={() => setIsEditingHeader(false)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") setIsEditingHeader(false);
                }}
                className={cn(
                  previewEffect && previewEffect.classes,
                  "text- md:text-6xl font-extrabold bg-clip-text text-transparent w-full text-center bg-none outline-none border-none"
                )}
                style={{ background: "none" }}
              />
            ) : (
              <span
                className={previewEffect && previewEffect.classes}
                style={{
                  transition: "all 0.5s",
                }}
                data-text={headerText}
              >
                {headerText}
              </span>
            )}
          </h1>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            100 stunning text effects built with pure Tailwind CSS. Easily copy
            the code and seamlessly integrate it into your projects.
          </p>

          {/* Badges: Free, Open Source, Tailwind */}
          <div className='flex flex-wrap gap-1 xs:gap-2 sm:gap-3 justify-center mt-3'>
            <span className='inline-flex items-center rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-2.5 xs:px-3 py-0.5 xs:py-1 text-[11px] xs:text-xs font-semibold shadow-sm border border-green-200 dark:border-green-700 gap-1'>
              <svg
                className='w-3 h-3 mr-1'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                viewBox='0 0 16 16'
              >
                <path d='M8 2v12M2 8h12'></path>
              </svg>
              Free
            </span>
            <span className='inline-flex items-center rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2.5 xs:px-3 py-0.5 xs:py-1 text-[11px] xs:text-xs font-semibold shadow-sm border border-blue-200 dark:border-blue-700 gap-1'>
              <svg
                className='w-3 h-3 mr-1'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                viewBox='0 0 16 16'
              >
                <circle cx='8' cy='8' r='6'></circle>
                <path d='M8 4v4l2 2'></path>
              </svg>
              Open Source
            </span>
            <span className='inline-flex items-center rounded-full bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-200 px-2.5 xs:px-3 py-0.5 xs:py-1 text-[11px] xs:text-xs font-semibold shadow-sm border border-sky-200 dark:border-sky-700 gap-1'>
              <img
                src='/tailwindcss-mark.svg'
                alt='Tailwind CSS'
                className='w-4 h-4 mr-1'
              />
              Tailwind
            </span>
          </div>
        </header>

        {/* Category Filter Buttons and Count */}
        <div className='mb-8'>
          <div className='flex flex-wrap justify-center items-center gap-2'>
            {categories.map((cat) => {
              const count =
                cat === "All"
                  ? textEffects.length
                  : textEffects.filter((effect) => effect.category === cat)
                      .length;
              return (
                <button
                  key={cat}
                  type='button'
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium border transition-colors focus:outline-none focus:ring-2 focus:ring-black",
                    selectedCategory === cat
                      ? "text-white bg-slate-950 hover:bg-slate-900 dark:bg-white dark:text-black dark:hover:bg-gray-100"
                      : "bg-card text-foreground border-border hover:bg-muted"
                  )}
                  onClick={() => setSelectedCategory(cat)}
                  aria-pressed={selectedCategory === cat}
                >
                  {cat}
                  <span
                    className={cn(
                      "ml-1 text-xs",
                      selectedCategory === cat
                        ? "text-white dark:text-black"
                        : "text-muted-foreground"
                    )}
                  >
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>
        </div>
        {/* Effects Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredEffects.map((effect) => (
            <div
              key={effect.id}
              className={cn(
                "bg-card border border-border rounded-xl p-8 transition-all duration-500 group relative",
                previewEffect && effect.id === previewEffect?.id
                  ? "ring-4 ring-fuchsia-500 ring-offset-2 shadow-2xl scale-105 z-10"
                  : "hover:shadow-lg"
              )}
              onMouseEnter={() => setCopiedId(null)}
            >
              {/* Effect Name */}
              <div className='flex items-center justify-between mb-4'>
                <h3 className='text-sm font-semibold text-muted-foreground uppercase tracking-wider'>
                  {effect.name}
                </h3>
              </div>

              {/* Preview */}
              <div className='mb-6 flex items-center justify-center min-h-[120px] relative z-10 text-6xl'>
                <span className={effect.classes} data-text={effect.preview}>
                  {effect.preview}
                </span>
              </div>

              {/* Action Buttons: visible by default on mobile, hover overlay on desktop */}
              <div
                className='
                  absolute inset-0 flex flex-col items-baseline justify-end
                  opacity-100 transition-opacity duration-200 rounded-xl z-10
                  md:opacity-0 md:group-hover:opacity-100 md:pointer-events-none
                '
              >
                <div
                  className='
                    flex gap-2 mb-2 pointer-events-auto w-full
                    md:static md:justify-center
                    absolute bottom-4 left-0 right-0 px-4 md:px-0 md:bottom-aut
                  '
                >
                  {previewEffect &&
                  effect.id === previewEffect.id &&
                  isPreviewLocked ? (
                    <Button
                      onClick={() => {
                        setIsPreviewLocked(false);
                      }}
                      variant='secondary'
                      size='sm'
                    >
                      <EyeClosed />
                      Hide
                    </Button>
                  ) : (
                    <Button
                      onClick={() => {
                        setPreviewEffect(effect);
                        setIsPreviewLocked(true);
                        setTimeout(() => {
                          heroRef.current?.scrollIntoView({
                            behavior: "smooth",
                            block: "center",
                          });
                        }, 100);
                      }}
                      variant='secondary'
                      size='sm'
                    >
                      <Eye />
                      Preview
                    </Button>
                  )}

                  <CodeDialog
                    effect={effect}
                    open={openDialogId === effect.id}
                    setOpen={(open) => setOpenDialogId(open ? effect.id : null)}
                    toast={toast}
                  />

                  <Button
                    onClick={() => copyToClipboard(effect)}
                    variant='outline'
                    size='sm'
                  >
                    {copiedId === effect.id ? <Check /> : <Copy />}
                    <span className='hidden md:inline'>Copy Classes</span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Contribution CTA */}
        <div className='mt-16 flex flex-col items-center justify-center'>
          <div className='bg-gradient-to-r from-fuchsia-500 via-sky-400 to-emerald-400 dark:from-fuchsia-600 dark:via-sky-600 dark:to-emerald-600 p-[2px] rounded-2xl shadow-lg w-full max-w- 2xl'>
            <div className='bg-white dark:bg-slate-950 rounded-2xl px-8 py-8 flex flex-col items-center gap-4'>
              <h2 className='text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 via-sky-400 to-emerald-400 dark:from-fuchsia-400 dark:via-sky-300 dark:to-emerald-300'>
                Have a cool text effect idea?
              </h2>
              <p className='text-center text-muted-foreground max-w-xl'>
                If you have a unique text effect, gradient, or animation,{" "}
                <span className='font-semibold text-fuchsia-600 dark:text-fuchsia-400'>
                  contribute it
                </span>{" "}
                to the gallery and help the community grow.
              </p>
              <a
                href='https://github.com/unclebigbay/tailwind-text-magic'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white bg-slate-950 hover:bg-slate-900 dark:bg-white dark:text-black dark:hover:bg-gray-100 shadow transition-all duration-200'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='lucide lucide-github'
                  aria-hidden='true'
                >
                  <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4'></path>
                  <path d='M9 18c-4.51 2-5-2-7-2'></path>
                </svg>
                Contribute on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextEffectsGallery;
