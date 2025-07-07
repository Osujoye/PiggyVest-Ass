import { LuChevronDown } from "react-icons/lu";

const faqData = [
  {
    title: "Statement of Account",
    content:
      "Can I Get a Piggyvest Statement of Account?Yes, you can!Note: This can be used as proof of funds How can I get a Piggyvest Statement of Account?To get your Piggyvest statement of account, please log into your Piggyvest app and click on 'Account', select 'Generate Account Statement' and follow the prompt. You can also send an email to contact@piggyvest.com stating your registered email address and the preferred duration of your statement of account.A well-detailed, signed, and stamped statement of account will be automatically generated to you from the app within minutes.Note: This will have your preferred start date till the exact date you initiated the request.Are there any charges when requesting for a statement of account?No! It's completely FREE.There are no charges on softcopies of a statement of account.",
  },
  {
    title: "HouseMoney",
    content:
      "How Can You Fund Your HouseMoney?To fund your House Money wallet, log into your Piggyvest app, click on savings, select HouseMoney, and then copy your account number as shown on the HouseMoney dashboard.Go to your banking app, initiate a transfer, and credit the copied account number with your preferred amount.NOTE: You can also top up your HouseMoney from your Flex Naira and Pocket Wallet.Do I Earn Interest?Yes, you do!You earn an interest of 14% per annum on your funds in this wallet. Note that interest are paid on the 1st day of every new month, and you’ll lose your interest for a certain month if you initiate a withdrawal before the 1st of a new month.",
  },
  {
    title: "Safelock Dollar",
    content:
      "Safelock Dollar is a fixed savings in dollars. Interest rates may vary.",
  },
  {
    title: "Next of Kin",
    content:
      "Your Next of Kin is the person you designated to manage your funds in the event of your passing. This could be a family member or a trusted individual.",
  },
];

export default function Question() {
  return (
    <div className="max-w-[1280px] mx-auto p-6 bg-white rounded-lg shadow">
      {faqData.map((item) => (
        <div
          key={item.title}
          className="flex gap-3 p-4 hover:bg-gray-50 cursor-pointer"
        >
          <div>
            <h4 className="text-sm flex font-semibold text-gray-900">
              {item.title}
              <LuChevronDown />
            </h4>
            <p className="text-xs text-gray-500">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
