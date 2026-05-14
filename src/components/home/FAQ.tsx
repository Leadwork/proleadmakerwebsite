"use client";

import { useState } from "react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeader from "@/components/shared/SectionHeader";

const faqs = [
  {
    q: "What makes Pro Lead Maker different from other lead-list vendors?",
    a: "Most vendors scrape databases and resell the same lists everyone else has. We hand-build every list, layer real buying signals (funding, hiring, tech stack) on every contact, and triple-verify each email before delivery. The result: lists that book 4–6x more meetings than generic scrapes.",
  },
  {
    q: "Can I really get free sample leads before ordering?",
    a: "Yes — and you should. Tell us your target niche and we'll deliver 20–50 hand-picked sample leads within 24 hours, completely free. That way you can verify our data quality with your own eyes before spending a dollar.",
  },
  {
    q: "How fast can you deliver a full lead list?",
    a: "Standard turnaround is 24–48 hours for most orders under 1,000 contacts. Larger lists (5,000+) typically deliver in 3–5 business days. Need it faster? Rush delivery is available for projects under 500 contacts.",
  },
  {
    q: "What if some of the contacts are invalid or bounce?",
    a: "We back every delivery with a free replacement guarantee. If any contact bounces or is incorrect, just send us the row and we'll replace it free of charge. No quibbles, no support tickets. Our 98%+ accuracy rate means this rarely happens.",
  },
  {
    q: "What format do you deliver in?",
    a: "Excel (.xlsx), CSV, or Google Sheets — your choice. Every record includes the contact's first name, last name, title, company, verified email, LinkedIn URL, and the buying-signal hook our researcher noticed.",
  },
  {
    q: "Do you work with my niche?",
    a: "We've delivered lists for 150+ industries — SaaS, marketing agencies, fintech, healthcare, real estate, legal services, e-commerce, local trades, and many more. If you can describe your ICP, we can build the list.",
  },
  {
    q: "How is pricing structured?",
    a: "Per-lead pricing with volume discounts. No setup fees, no monthly minimums. You pay only for the verified contacts we deliver. Book a strategy call or message us on WhatsApp for a custom quote based on your specific niche and volume.",
  },
  {
    q: "Can you help with cold email infrastructure and warmup too?",
    a: "Absolutely. We offer full email infrastructure setup (domains, inboxes, SPF/DKIM/DMARC) and warmup as a separate service. If you want to skip the headache of building a sending stack yourself, we can hand you a fully-warmed, ready-to-send setup in 30 days.",
  },
];

function FAQItem({
  q,
  a,
  open,
  onToggle,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`card transition-all duration-300 ${
        open ? "shadow-lg shadow-brand-purple/15 border-brand-purple/30" : ""
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4"
      >
        <span className="font-bold text-ink-950 text-sm sm:text-base font-display">
          {q}
        </span>
        <span
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
            open
              ? "bg-gradient-to-br from-brand-purple to-brand-pink text-white rotate-45"
              : "bg-ink-100 text-ink-700"
          }`}
          aria-hidden="true"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-400 ease-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm text-ink-700 leading-relaxed">
          {a}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 relative bg-white" id="faq">
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <ScrollReveal>
          <SectionHeader
            label="Common Questions"
            title="Everything You Need to Know"
            subtitle="Quick answers to the questions we get most often. Still curious about something? WhatsApp us — we usually reply within an hour."
          />
        </ScrollReveal>

        <div className="space-y-3 mt-12">
          {faqs.map((f, i) => (
            <ScrollReveal key={i} delay={i * 60}>
              <FAQItem
                q={f.q}
                a={f.a}
                open={open === i}
                onToggle={() => setOpen(open === i ? null : i)}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
