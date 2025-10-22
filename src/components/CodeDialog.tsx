import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Code, Copy } from "lucide-react";
import { TextEffect } from "@/lib/text-effect";

interface CodeDialogProps {
  effect: TextEffect;
  open: boolean;
  setOpen: (open: boolean) => void;
  toast: ({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) => void;
}

export function CodeDialog({ effect, open, setOpen, toast }: CodeDialogProps) {
  const htmlCode = `<span 
  class="${effect.classes}"
>
  ${effect.preview}
</span>`;
  const cssCode = effect.customCSS || "";

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant='secondary' size='sm'>
          <Code />
          Code
        </Button>
      </DialogTrigger>
      <DialogContent>
        <div>
          <h4 className='font-bold mb-2'>HTML Snippet</h4>
          <div className='relative mb-2'>
            <button
              onClick={async () => {
                await navigator.clipboard.writeText(
                  `<span class="${effect.classes}">${effect.preview}</span>`
                );
                toast({
                  title: "HTML snippet copied!",
                  description: "HTML code copied to clipboard.",
                });
              }}
              className='absolute right-2 top-2 p-1 rounded bg-muted z-10'
              title='Copy HTML'
            >
              <Copy className='w-4 h-4' />
            </button>
            <pre
              className='w-full max-h-64 overflow-auto rounded border bg-background text-xs p-3 font-mono whitespace-pre-wrap break-words'
              style={{ wordBreak: "break-all" }}
            >
              {htmlCode}
            </pre>
          </div>
          {effect.customCSS && (
            <>
              <h4 className='font-bold mt-6 mb-2'>Custom CSS</h4>
              <div className='relative mb-2'>
                <button
                  onClick={async () => {
                    await navigator.clipboard.writeText(effect.customCSS!);
                    toast({
                      title: "Custom CSS copied!",
                      description: "CSS code copied to clipboard.",
                    });
                  }}
                  className='absolute right-2 top-2 p-1 rounded bg-muted z-10'
                  title='Copy CSS'
                >
                  <Copy className='w-4 h-4' />
                </button>
                <pre
                  className='w-full max-h-64 overflow-auto rounded border bg-background text-xs p-3 font-mono whitespace-pre-wrap break-words'
                  style={{ wordBreak: "break-all" }}
                >
                  {cssCode}
                </pre>
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
