export const KeyboardShortcuts = () => {
  return (
    <div className="hidden md:block fixed bottom-8 right-8 text-black/50 text-sm">
      <div className="flex items-center gap-2">
        <kbd className="px-2 py-1 bg-black/10 rounded text-xs md:text-sm">
          ←
        </kbd>
        <kbd className="px-2 py-1 bg-black/10 rounded text-xs md:text-sm">
          →
        </kbd>
        <span className="text-xs md:text-sm">เลื่อน slides</span>
      </div>
    </div>
  );
};
