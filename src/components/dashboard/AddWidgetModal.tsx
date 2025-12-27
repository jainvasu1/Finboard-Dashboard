interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddWidgetModal({ isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-md rounded-xl border border-white/10 bg-[#020617] p-6 shadow-xl">
        
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">
            Add New Widget
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <div className="space-y-4">
          <div>
            <label className="mb-1 block text-sm text-gray-400">
              Widget Name
            </label>
            <input
              type="text"
              placeholder="e.g. Bitcoin Price Tracker"
              className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none focus:border-emerald-500"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm text-gray-400">
              API URL
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="https://api.coinbase.com/..."
                className="flex-1 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none focus:border-emerald-500"
              />
              <button className="rounded-md bg-white/10 px-3 text-sm text-white hover:bg-white/20">
                Test
              </button>
            </div>
          </div>

          <div>
            <label className="mb-1 block text-sm text-gray-400">
              Refresh Interval (seconds)
            </label>
            <input
              type="number"
              defaultValue={30}
              className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none focus:border-emerald-500"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="rounded-md px-4 py-2 text-sm text-gray-300 hover:text-white"
          >
            Cancel
          </button>
          <button className="rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-600">
            Add Widget
          </button>
        </div>
      </div>
    </div>
  );
}
