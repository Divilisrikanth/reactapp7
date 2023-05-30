import { Disclosure } from '@headlessui/react';
const faqs = [
  {
    id: 1,
    question: 'What is your refund policy?',
    answer: `If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.`
  },
  {
    id: 1,
    question: 'How long does it take to get my order?',
    answer: `Most customers can expect to receive their food and supplies within 1 to 3 days. Orders that require prescription approval or personalization may take longer to ship.`
  },
  {
    id: 1,
    question: 'Do you offer technical support?',
    answer: `No.`
  },
  {
    id: 1,
    question: 'How much is shipping?',
    answer: `Orders over $49 ship free! All other orders ship for a flat rate of $4.95.`
  },
  {
    id: 1,
    question: 'How do I contact support?',
    answer: `We offer support over email, and the best way to contact us is through the in-app help menu.`
  }
]

export default function App() {
  return (
    <div className="w-full h-screen px-4 pt-16 bg-green-500">
      <div className="mx-auto w-[500px] h-[500px] max-w-md rounded-2xl bg-white p-2 text-lg">
        <h1 className='text-center text-4xl py-4'>FAQ</h1>
      {faqs.map((faq) => (
        <Disclosure>
          <div className={faq.id}>
            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-green-200 px-4 py-2 mb-2 text-left font-medium text-green-600">
              {faq.question}
            </Disclosure.Button>
            <Disclosure.Panel className="text-gray-700 flex w-full justify-between rounded-lg px-4 mb-2 text-left text-sm">
              {faq.answer}
            </Disclosure.Panel>
          </div>
        </Disclosure>
        ))}
      </div>
    </div>
  )
}
