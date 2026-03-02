'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useLanguage } from '@/app/components/LanguageContext';

export default function LegalPage() {
  const [activeTab, setActiveTab] = useState('privacy');
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:to-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/" className="inline-flex items-center gap-2 text-green-600 dark:text-green-400 hover:gap-3 transition-all duration-300 mb-8">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="font-medium">{t('backToHome','Back to Home')}</span>
        </Link>

        <div className="flex gap-4 mb-8">
          <button onClick={() => setActiveTab('privacy')} className={`px-6 py-3 rounded-xl font-semibold transition-all ${activeTab === 'privacy' ? 'bg-linear-to-r from-green-600 to-blue-600 text-white' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'}`}>
            🔒 {t('privacyPolicy','Privacy Policy')}
          </button>
          <button onClick={() => setActiveTab('terms')} className={`px-6 py-3 rounded-xl font-semibold transition-all ${activeTab === 'terms' ? 'bg-linear-to-r from-blue-600 to-purple-600 text-white' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'}`}>
            📜 {t('termsOfService','Terms of Service')}
          </button>
        </div>

        {activeTab === 'privacy' ? (
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="bg-linear-to-r from-green-600 to-blue-600 px-8 py-12 text-center">
              <div className="text-5xl mb-4">🔒</div>
              <h1 className="text-4xl font-bold text-white mb-2">{t('privacyPolicy','Privacy Policy')}</h1>
              <p className="text-green-100">{t('lastUpdatedJan2024','Last updated: January 2024')}</p>
            </div>
            <div className="px-8 py-12 space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center text-green-600 dark:text-green-400">1</span>
                  {t('informationWeCollect','Information We Collect')}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  {t('collectInfoDescription','We collect information you provide directly to us, including name, email address, phone number, and learning progress data when you create an account and use our services.')}
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                  <li>Account information (name, email, phone number)</li>
                  <li>Learning progress and quiz results</li>
                  <li>Device and usage information</li>
                  <li>Payment information (processed securely)</li>
                </ul>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400">2</span>
                  {t('howWeUseYourInformation','How We Use Your Information')}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  {t('useInfoDescription','We use the information we collect to provide, maintain, and improve our services, including:')}
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                  <li>Delivering personalized learning experiences</li>
                  <li>Tracking your progress and performance</li>
                  <li>Sending important updates and notifications</li>
                  <li>Improving our platform and content</li>
                  <li>Ensuring platform security and preventing fraud</li>
                </ul>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400">3</span>
                  {t('dataSecurity','Data Security')}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {t('dataSecurityDescription','We implement industry-standard security measures to protect your personal information. Your data is encrypted in transit and at rest, and we regularly review our security practices to ensure your information remains safe.')}
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center text-yellow-600 dark:text-yellow-400">4</span>
                  {t('informationSharing','Information Sharing')}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {t('infoSharingDescription','We do not sell your personal information. We may share your information only with service providers who assist in operating our platform, or when required by law.')}
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center text-red-600 dark:text-red-400">5</span>
                  {t('yourRights','Your Rights')}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  {t('yourRightsInfo','You have the right to:')}
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Export your learning data</li>
                </ul>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-400">6</span>
                  {t('contactUs','Contact Us')}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {t('privacyQuestionsDesc','If you have questions about this Privacy Policy, please contact us at:')}
                </p>
                <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
                  <p className="text-gray-700 dark:text-gray-300">Email: privacy@rafiki.co.ke</p>
                  <p className="text-gray-700 dark:text-gray-300">Phone: +254 700 000 000</p>
                </div>
              </section>
            </div>
          </div>
        ) : (
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="bg-linear-to-r from-blue-600 to-purple-600 px-8 py-12 text-center">
              <div className="text-5xl mb-4">📜</div>
              <h1 className="text-4xl font-bold text-white mb-2">{t('termsOfService','Terms of Service')}</h1>
              <p className="text-blue-100">{t('lastUpdatedJan2024','Last updated: January 2024')}</p>
            </div>
            <div className="px-8 py-12 space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400">1</span>
                  {t('acceptanceOfTerms','Acceptance of Terms')}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {t('acceptanceOfTermsDesc','By accessing and using Rafiki Driving School platform, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.')}
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center text-green-600 dark:text-green-400">2</span>
                  {t('useOfServices','Use of Services')}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  {t('useServicesDescription','You agree to use our services only for lawful purposes and in accordance with these Terms. You must not:')}
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                  <li>Share your account credentials with others</li>
                  <li>Use the platform for any illegal activities</li>
                  <li>Attempt to hack or disrupt our services</li>
                  <li>Copy or distribute our content without permission</li>
                  <li>Create multiple accounts to abuse free trials</li>
                </ul>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400">3</span>
                  {t('userAccounts','User Accounts')}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  {t('accountsDescription','When you create an account with us, you must provide accurate and complete information. You are responsible for:')}
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                  <li>Maintaining the security of your account</li>
                  <li>All activities that occur under your account</li>
                  <li>Notifying us immediately of any unauthorized access</li>
                </ul>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center text-yellow-600 dark:text-yellow-400">4</span>
                  {t('intellectualProperty','Intellectual Property')}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {t('intellectualPropertyDesc','All content on Rafiki platform, including text, graphics, logos, videos, and software, is the property of Rafiki Driving School and protected by Kenyan and international copyright laws.')}
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center text-red-600 dark:text-red-400">5</span>
                  {t('paymentAndSubscriptions','Payment and Subscriptions')}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  {t('paymentDescription','Some features require payment. By purchasing a subscription:')}
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                  <li>You agree to pay all fees associated with your subscription</li>
                  <li>Payments are non-refundable except as required by law</li>
                  <li>Subscriptions auto-renew unless cancelled</li>
                </ul>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-400">6</span>
                  {t('contactInformation','Contact Information')}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  For questions about these Terms of Service, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
                  <p className="text-gray-700 dark:text-gray-300">Email: legal@rafiki.co.ke</p>
                  <p className="text-gray-700 dark:text-gray-300">Phone: +254 700 000 000</p>
                </div>
              </section>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
