export default function SearchBar() {
  return (
    <div className="flex items-center rounded-md bg-[#fafcfe]">
      <div className="pl-2 pr-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5 text-[#9da0a6]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>
      <input
        type="text"
        name="first-name"
        id="first-name"
        autoComplete="given-name"
        className=" w-full rounded-md py-2 bg-[#fafcfe] outline-none text-[#9da0a6] pr-4 text-sm"
        placeholder="검색어를 입력하세요"
      />
    </div>
  );
}
