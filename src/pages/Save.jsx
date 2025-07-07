const savingsOptions = [
  {
    name: "Piggybank",
    desc: "Automated Savings",
    icon: "public/imgi_2_piggybank_icon_bd14f39497_7ef36812cd.png",
  },
  {
    name: "Safelock",
    desc: "Fixed Savings",
    icon: "public/imgi_3_safelock_icon_7595628576_b010a4fee8.png",
  },
  {
    name: "Target Savings",
    desc: "Goal-oriented Savings",
    icon: "public/imgi_4_targets_icon_a382a2df4f_10353cd31e.png",
  },
  {
    name: "Flex Naira",
    desc: "Flexible Savings",
    icon: "public/imgi_5_flex_naira_icon_1c37272848_635abfe249.png",
  },
  {
    name: "Flex Dollar",
    desc: "Dollar Savings",
    icon: "public/imgi_6_flex_dollar_icon_b180813700_8c5227fe52.png",
  },
  {
    name: "House Money",
    desc: "Semi Strict Wallet",
    icon: "public/imgi_7_house_icon_1_62b781ec0c.png",
  },
];

export default function SaveMenu() {
  return (
    <div className="relative group inline-block text-left">
      <button className="flex items-center px-4 py-2 font-medium text-gray-700 hover:text-blue-600">
        Save
        <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
          <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.25 8.29a.75.75 0 01-.02-1.06z" />
        </svg>
      </button>

      <div className="grid grid-cols-2 absolute z-10 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200">
        {savingsOptions.map((item) => (
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
              <p className="text-xs text-gray-500">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
