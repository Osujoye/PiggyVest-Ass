const resourceOption = [
  {
    name: "Blog",
    icon: "public/imgi_8_default.png",
  },
  {
    name: "Report",
    icon: "public/imgi_9_default.png",
  },
  {
    name: "Comics",
    icon: "public/imgi_10_default.png",
  },
  {
    name: "Calculator",
    icon: "public/imgi_11_default.png",
  },
  {
    name: "Newsletter",
    icon: "public/imgi_12_default.png",
  },
  {
    name: "Ebook",
    icon: "public/imgi_13_default (1).png",
  },
];

export default function Resource() {
  return (
    <div className="relative group inline-block text-left">
      <button className="flex items-center px-4 py-2 font-medium text-gray-700 hover:text-blue-600">
        Resource
        <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
          <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.25 8.29a.75.75 0 01-.02-1.06z" />
        </svg>
      </button>

      <div className="grid grid-cols-2 absolute z-10 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200">
        {resourceOption.map((item) => (
          <div
            key={item.name}
            className="flex gap-3 p-4 hover:bg-gray-50 cursor-pointer"
          >
            <div>
              <img src={item.icon} alt="" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900">
                {item.name}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
