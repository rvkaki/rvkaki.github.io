export default function TimelineStep({
  company,
  dateRange,
  isActive,
  role,
  onClick,
}: {
  company: string;
  role: string;
  dateRange: string;
  isActive?: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className="flex-1 flex flex-col md:flex-row py-[2px] gap-1 items-center cursor-pointer min-w-[120px] md:min-w-0"
      onClick={onClick}
    >
      <div className="md:h-full w-full md:w-auto flex flex-row md:flex-col items-center">
        <span
          className={`md:w-[2px] w-full md:h-full h-[2px] ${
            isActive
              ? "dark:bg-amber-400 bg-amber-600"
              : "dark:bg-zinc-600 bg-zinc-400"
          } flex-1`}
        ></span>
        <span
          className={`w-5 h-5 border-[2px] ${
            isActive
              ? "dark:border-amber-400 border-amber-600"
              : "dark:border-zinc-600 border-zinc-400"
          } rounded-full`}
        ></span>
      </div>
      <div className="flex flex-col px-1">
        <span className="text-xs dark:text-zinc-500 text-zinc-500">
          {dateRange}
        </span>
        <span
          className={`${
            isActive
              ? "dark:text-amber-300 text-amber-600"
              : "dark:text-zinc-300 text-zinc-800"
          } text-sm font-semibold`}
        >
          {company}
        </span>
        <span className="text-xs dark:text-zinc-400 text-zinc-600">{role}</span>
      </div>
    </div>
  );
}
