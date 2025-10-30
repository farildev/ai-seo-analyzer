import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-dvh">
      <div className="siteContainer">
        <div className="pt-[120px]">
          {/* Breadcrumb */}
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Privacy Policy</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Header */}
          <div className="flex flex-col items-center">
            <h2 className="md:text-6xl text-4xl text-center font-semibold mt-10">
              Privacy & Policy
            </h2>
            <p className="text-sm text-center font-normal max-w-[576px] mt-3">
              Learn how we collect, use, and protect your personal information
              while using the Noelceta application.
            </p>
            <span className="text-sm mt-3 font-semibold">
              Last update: 23 Oct, 2025
            </span>

            {/* Main Content */}
            <div className="max-w-[968px] mt-12 md:text-lg text-md font-normal pb-20 space-y-10">
              {/* Intro */}
              <section>
                <p>
                  This Privacy Policy applies to the <strong>Noelceta</strong>{' '}
                  application (&quot;Application&quot;), developed and published
                  by <strong>[Apollo Digital]</strong>. This policy explains how
                  we collect, use, share, and protect users’ personal
                  information.
                </p>
                <p className="mt-3">
                  Please read this policy carefully before using our
                  Application.
                </p>
              </section>

              {/* Collection and Use */}
              <section>
                <h3 className="md:text-2xl text-xl font-semibold mb-3">
                  1. Collection and Use of Personal Information
                </h3>
                <p>
                  We may collect and use users’ personal information for the
                  following purposes:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-2">
                  <li>
                    <strong>User Identification:</strong> We may collect login
                    information (such as email, phone number, or username) to
                    identify and distinguish users.
                  </li>
                  <li>
                    <strong>Order Information:</strong> Data related to orders
                    placed through the Application, necessary for processing and
                    delivery.
                  </li>
                  <li>
                    <strong>Location Data:</strong> With user permission,
                    location data may be collected to enhance delivery and
                    service functionality.
                  </li>
                  <li>
                    <strong>Contact Information:</strong> Used for communication
                    purposes, such as sending updates or notifications.
                  </li>
                </ul>
              </section>

              {/* Third-party services */}
              <section>
                <h3 className="md:text-2xl text-xl font-semibold mb-3">
                  2. Third-Party Services
                </h3>
                <p>
                  Our Application integrates the following third-party services:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-2">
                  <li>
                    <strong>Facebook SDK:</strong> For app performance
                    monitoring, analytics, and advertising.
                  </li>
                  <li>
                    <strong>Sentry:</strong> For error tracking and identifying
                    performance issues.
                  </li>
                  <li>
                    <strong>Google Analytics:</strong> For tracking and
                    analyzing user interactions.
                  </li>
                </ul>
              </section>

              {/* Payment Services */}
              <section>
                <h3 className="md:text-2xl text-xl font-semibold mb-3">
                  3. Payment Services
                </h3>
                <p>
                  Payments are processed by third-party providers. Any
                  payment-related issues fall under their responsibility.
                </p>
              </section>

              {/* Sharing */}
              <section>
                <h3 className="md:text-2xl text-xl font-semibold mb-3">
                  4. Sharing of Personal Information
                </h3>
                <p>
                  We do not share personal information with third parties except
                  when required by law or for legitimate business needs, such
                  as:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-2">
                  <li>Processing orders and payments</li>
                  <li>Maintaining Application functionality</li>
                  <li>Complying with legal obligations</li>
                </ul>
              </section>

              {/* Security */}
              <section>
                <h3 className="md:text-2xl text-xl font-semibold mb-3">
                  5. Security
                </h3>
                <p>
                  We apply appropriate measures to protect your data. However,
                  no method of transmission over the Internet is completely
                  secure, and we cannot guarantee absolute safety.
                </p>
              </section>

              {/* Changes */}
              <section>
                <h3 className="md:text-2xl text-xl font-semibold mb-3">
                  6. Changes to This Policy
                </h3>
                <p>
                  This Privacy Policy may be updated periodically. Updates will
                  be published here, and users will be notified when changes
                  take effect.
                </p>
              </section>

              {/* Contact */}
              <section>
                <h3 className="md:text-2xl text-xl font-semibold mb-3">
                  7. Contact Us
                </h3>
                <p>
                  If you have any questions or need more information, please
                  contact us at:
                  <a
                    href="mailto:we@noelceta.com"
                    className="text-blue-600 underline ml-1"
                  >
                    we@noelceta.com
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
