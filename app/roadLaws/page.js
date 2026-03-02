"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../components/LanguageContext";
import { roadLawsResearch } from "../study/researchContent";

const kenyaLawHighlights = [
  {
    title: "Speed Limits and School Zones",
    law: "Traffic Act (Cap. 403), section 42",
    summary:
      "Sets enforceable speed limits, including 50 km/h controls in trading centers and near schools unless lawfully varied.",
    url: "https://new.kenyalaw.org/akn/ke/act/1953/39/eng@2024-04-26/source",
  },
  {
    title: "Driving Under Influence",
    law: "Traffic Act (Cap. 403), section 44",
    summary:
      "Makes impaired driving an offence, with criminal penalties and potential disqualification risk.",
    url: "https://new.kenyalaw.org/akn/ke/act/1953/39/eng@2024-04-26/source",
  },
  {
    title: "Obedience to Signs and Lawful Directions",
    law: "Traffic Act (Cap. 403), section 52",
    summary:
      "Drivers must obey traffic signs, signals, and lawful directions by police or authorized officers.",
    url: "https://new.kenyalaw.org/akn/ke/act/1953/39/eng@2024-04-26/source",
  },
  {
    title: "Duties After a Crash",
    law: "Traffic Act (Cap. 403), section 73",
    summary:
      "Requires stopping, exchanging details, and police reporting within required timelines where applicable.",
    url: "https://new.kenyalaw.org/akn/ke/act/1953/39/eng@2024-04-26/source",
  },
  {
    title: "Seat Belts, Lights, and Vehicle Condition",
    law: "Traffic Rules (revised 2022), rules 22A, 23, 18-20",
    summary:
      "Defines mandatory seat belt use, lighting obligations, and basic roadworthiness requirements.",
    url: "https://new.kenyalaw.org/akn/ke/act/gn/1953/1902/eng@2022-12-31",
  },
  {
    title: "Traffic Signal Meaning and Sequence",
    law: "Traffic Signs Rules (revised 2022), rules 10-13",
    summary:
      "Sets legal signal sequence and required driver behavior at lights and temporary controls.",
    url: "https://new.kenyalaw.org/akn/ke/act/ln/1974/310/eng@2022-12-31",
  },
];

const ntsaData = [
  {
    title: "NTSA Legal Mandate",
    summary:
      "NTSA is established as the lead government agency for road transport and safety regulation under the NTSA Act.",
    source: "NTSA Service Portal - About",
    url: "https://serviceportal.ntsa.go.ke/aboutus",
  },
  {
    title: "Core Services for Compliance",
    summary:
      "Official NTSA channels publish licensing, registration, inspection, and transport-related service pathways.",
    source: "NTSA Service Portal - Services",
    url: "https://serviceportal.ntsa.go.ke",
  },
  {
    title: "Digital Service Access",
    summary:
      "Driver and vehicle services are integrated through NTSA eCitizen workflows.",
    source: "NTSA eCitizen Portal",
    url: "https://ntsa.ecitizen.go.ke/",
  },
  {
    title: "Official Contacts and Escalation Routes",
    summary:
      "Portal-provided contacts support service access, verification, and complaint escalation.",
    source: "NTSA Service Portal - Contact",
    url: "https://serviceportal.ntsa.go.ke/contactus",
  },
];

const sourceGallery = [
  {
    title: "NTSA Service Portal",
    image:
      "https://serviceportal.ntsa.go.ke/images/content-img-5-dfeceedb842effd24214b701652f5046.png?vsn=d",
    url: "https://serviceportal.ntsa.go.ke",
  },
  {
    title: "NTSA eCitizen",
    image:
      "https://ntsa.ecitizen.go.ke/uploads/58b18100c3e365e37f63bd946faf82eaced94adc.jpg",
    url: "https://ntsa.ecitizen.go.ke/",
  },
  {
    title: "Kenya Law",
    image:
      "https://new.kenyalaw.org/static/indigo_kenyalaw/nclr_logo.0815a45cab46.jpg",
    url: "https://new.kenyalaw.org/",
  },
];

export default function StudyPage() {
  const { t } = useLanguage();

  const mainSyllabusItems = [
    {
      title: t("introToDrivingTitle", "Introduction to Driving"),
      description: t(
        "introToDrivingDesc",
        "Basics every new driver should know",
      ),
      slug: "introduction-to-driving",
    },
    {
      title: t("fundamentalRulesTitle", "Fundamental Rules"),
      description: t(
        "fundamentalRulesDesc",
        "Core regulations governing road use",
      ),
      slug: "fundamental-rules-of-the-road",
    },
    {
      title: t("roadSignsAndSignalsTitle", "Road Signs & Signals"),
      description: t(
        "roadSignsAndSignalsDesc",
        "Understanding traffic signs and lights",
      ),
      slug: "road-signs-and-signals",
    },
    {
      title: t("modelTownBoardKnowledgeTitle", "Model Town Board Knowledge"),
      description: t(
        "modelTownBoardKnowledgeDesc",
        "Material covered on the model town board exam",
      ),
      slug: "model-town-board-knowledge",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f4fbf4] text-[#1f2937]">
      <div className="max-w-7xl mx-auto py-14 px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-green-200 bg-linear-to-br from-green-100 via-[#f4fbf4] to-yellow-100 p-8 sm:p-10 shadow-lg">
          <p className="inline-flex rounded-full bg-green-700 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
            Kenya Road Laws Hub
          </p>
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-green-900">
            {t("roadLawsStudyMaterials", "Road Laws Study Materials")}
          </h1>
          <p className="mt-4 max-w-3xl text-sm sm:text-base text-green-900/85">
            {t(
              "roadLawsStudyMaterialsDesc",
              "Find everything you need to prepare for the road laws exam.",
            )}{" "}
            This page prioritizes official Kenya Law texts and NTSA service
            channels.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="rounded-xl border border-green-200 bg-[#e8f8e8] p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-green-800">
                60% Base
              </p>
              <p className="mt-1 text-sm text-green-900">
                Calm green background and cards.
              </p>
            </div>
            <div className="rounded-xl border border-yellow-300 bg-[#fff8d8] p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-yellow-800">
                30% Support
              </p>
              <p className="mt-1 text-sm text-yellow-900">
                Yellow callouts for guidance and context.
              </p>
            </div>
            <div className="rounded-xl border border-red-300 bg-[#ffe3e3] p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-red-800">
                10% Accent
              </p>
              <p className="mt-1 text-sm text-red-900">
                Red only for high-risk legal reminders.
              </p>
            </div>
          </div>
        </div>

        <section className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {mainSyllabusItems.map((item, index) => (
            <Link
              href={`/study/${item.slug}`}
              key={item.slug}
              className="block group"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="h-full rounded-2xl border border-green-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-green-400">
                <h2 className="text-lg font-bold text-green-900">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </section>

        <section className="mt-12 rounded-2xl border border-yellow-300 bg-[#fffbea] p-6 sm:p-8 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-bold text-green-900 mb-2">
            Kenya Law: Key Traffic Duties
          </h2>
          <p className="text-sm text-gray-700 mb-6">
            Laws below are sourced from official Kenya Law publications and
            linked for direct reading.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {kenyaLawHighlights.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-green-200 bg-white p-5"
              >
                <h3 className="text-lg font-semibold text-green-900">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-red-700">
                  {item.law}
                </p>
                <p className="mt-3 text-sm text-gray-700">{item.summary}</p>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex text-sm font-semibold text-green-700 hover:underline"
                >
                  Open official source
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-green-200 bg-[#eef9ef] p-6 sm:p-8 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-bold text-green-900 mb-2">
            NTSA: Practical Compliance and Services
          </h2>
          <p className="text-sm text-gray-700 mb-6">
            These NTSA links help you apply the law in practice through official
            service channels.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ntsaData.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-green-300 bg-white p-5"
              >
                <h3 className="text-lg font-semibold text-green-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-700">{item.summary}</p>
                <p className="mt-3 text-xs uppercase tracking-wide text-yellow-700">
                  {item.source}
                </p>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex text-sm font-semibold text-green-700 hover:underline"
                >
                  Visit NTSA source
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-green-200 bg-white p-6 sm:p-8 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-bold text-green-900 mb-2">
            Official Image and Link Gallery
          </h2>
          <p className="text-sm text-gray-700 mb-6">
            Visual references from official NTSA and Kenya Law pages.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {sourceGallery.map((item) => (
              <a
                key={item.title}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="group rounded-xl border border-yellow-300 bg-[#fffdf3] p-3 hover:shadow-md transition-shadow"
              >
                <Image
                  src={item.image}
                  alt={`${item.title} official visual`}
                  width={640}
                  height={320}
                  unoptimized
                  className="h-40 w-full rounded-lg object-cover bg-gray-100"
                />
                <p className="mt-3 text-sm font-semibold text-green-900 group-hover:underline">
                  {item.title}
                </p>
              </a>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <div className="rounded-2xl border border-green-200 bg-white p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-bold text-green-900 mb-3 text-center">
              {roadLawsResearch.title}
            </h2>
            <p className="text-sm sm:text-base text-gray-700 text-center max-w-3xl mx-auto mb-8">
              {roadLawsResearch.subtitle}
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {roadLawsResearch.modules.map((module) => (
                <div
                  key={module.title}
                  className="rounded-xl border border-yellow-300 bg-[#fff9e4] p-5"
                >
                  <h3 className="text-lg font-bold text-green-900 mb-3">
                    {module.title}
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                    {module.points.map((point, pointIndex) => (
                      <li key={`${point.slice(0, 24)}-${pointIndex}`}>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-xl border border-red-300 bg-[#ffe9e9] p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-red-800 mb-2">
                High-Risk Reminder
              </p>
              <p className="text-sm text-red-900">
                Penalties and enforcement outcomes depend on exact offence
                facts, amendments, and court decisions. Always verify current
                wording on Kenya Law and complete service requirements through
                NTSA.
              </p>
            </div>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-wide text-gray-500 mb-2 text-center">
                Reference Sources
              </p>
              <ul className="space-y-1 text-sm text-center">
                {roadLawsResearch.sources.map((source) => (
                  <li key={source.id}>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-green-700 hover:underline"
                    >
                      {source.title}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="https://serviceportal.ntsa.go.ke/aboutus"
                    target="_blank"
                    rel="noreferrer"
                    className="text-green-700 hover:underline"
                  >
                    NTSA Service Portal - About and Mandate
                  </a>
                </li>
                <li>
                  <a
                    href="https://ntsa.ecitizen.go.ke/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-green-700 hover:underline"
                  >
                    NTSA eCitizen Portal - Official Services
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
