import ThemeToggle from "@/components/common/ThemeToggle";

interface Props {
  onAddWidget: () => void;
}

export default function Header({ onAddWidget }: Props) {
  return (
    <header className="w-full bg-gradient-to-r from-[#0f172a] via-[#111827] to-[#0f172a] border-b border-white/10
      dark:from-[#0f172a] dark:via-[#111827] dark:to-[#0f172a] dark:border-white/10
      bg-white border-gray-200 transition-colors duration-200">
      <div className="flex items-center justify-between px-6 py-4">
        
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-400
            dark:bg-emerald-500/15 dark:text-emerald-400">
            📊
          </div>
          <div>
            <h1 className="text-lg font-semibold text-white dark:text-white text-gray-900">
              Finance Dashboard
            </h1>
            <p className="text-sm text-gray-400 dark:text-gray-400 text-gray-600">
              1 active widget · Real-time data
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={onAddWidget}
            className="flex items-center gap-2 rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-600
              dark:bg-emerald-500 dark:hover:bg-emerald-600 transition-colors"
          >
            + Add Widget
          </button>
        </div>

      </div>
    </header>
  );
}
