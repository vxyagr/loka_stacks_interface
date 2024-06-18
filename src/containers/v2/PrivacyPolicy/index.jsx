import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { Row, Col, Typography } from "antd";

import "./style.css";

const { Title, Paragraph, Text } = Typography;

const PrivacyPolicy = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isExtraLargeScreen = useMediaQuery({ minWidth: 1920 });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="privacy-policy-container"
      style={{
        padding: isExtraLargeScreen
          ? "57px 250px"
          : isMobile
          ? "40px 24px"
          : "57px 124px",
      }}
    >
      <Row>
        <Col span={24}>
          <div className="privacy-policy-header">
            <p className="last-update-text">
              Last updated: September 29th, 2023
            </p>
            <p
              className="privacy-policy-title"
              style={{ fontSize: isMobile ? "36px" : "48px" }}
            >
              Privacy Policy
            </p>
          </div>
        </Col>
      </Row>

      <Row justify="center">
        <Col xs={{ span: 24 }} lg={{ span: 16 }}>
          <Paragraph>
            This Privacy Policy describes how Loka (the "Site", "we", "us", or
            "our") collects, uses, and discloses your personal information when
            you visit, use our services, or fill out the contact form from
            https://www.lokamining.com/ (the "Site") or otherwise communicate
            with us (collectively, the "Services"). For purposes of this Privacy
            Policy, "you" and "your" means you as the user of the Services,
            whether you are a customer, website visitor, or another individual
            whose information we have collected pursuant to this Privacy Policy.
          </Paragraph>
          <Paragraph>
            Please read this Privacy Policy carefully. By using and accessing
            any of the Services, you agree to the collection, use, and
            disclosure of your information as described in this Privacy Policy.
            If you do not agree to this Privacy Policy, please do not use or
            access any of the Services.
          </Paragraph>

          <Title level={5}>Changes to This Privacy Policy</Title>
          <Paragraph>
            We may update this Privacy Policy from time to time, including to
            reflect changes to our practices or for other operational, legal, or
            regulatory reasons. We will post the revised Privacy Policy on the
            Site, update the "Last updated" date and take any other steps
            required by applicable law.
          </Paragraph>

          <Title level={5}>
            How We Collect and Use Your Personal Information
          </Title>
          <Paragraph>
            To provide the Services, we collect and have collected over the past
            12 months personal information about you from a variety of sources,
            as set out below. The information that we collect and use varies
            depending on how you interact with us
          </Paragraph>
          <Paragraph>
            In addition to the specific uses set out below, we may use
            information we collect about you to communicate with you, provide
            the Services, comply with any applicable legal obligations, enforce
            any applicable terms of service, and to protect or defend the
            Services, our rights, and the rights of our users or others.
          </Paragraph>

          <Title level={5}>What Personal Information We Collect</Title>
          <Paragraph>
            The types of personal information we obtain about you depends on how
            you interact with our Site and use our Services. When we use the
            term "personal information", we are referring to information that
            identifies, relates to, describes or can be associated with you. The
            following sections describe the categories and specific types of
            personal information we collect.
          </Paragraph>

          <Title level={5}>Information We Collect Directly from You</Title>
          <Paragraph>
            Information that you directly submit to us through our Services may
            include:
            <ul>
              <li>
                Basic contact details including your name, employer name, job
                title, address, phone number, email.
              </li>
              <li>
                Account information including your username, password, security
                questions.
              </li>
              <li>
                Customer support information including the information you
                choose to include in communications with us, for example, when
                sending a message through the Services.
              </li>
            </ul>
            Some features of the Services may require you to directly provide us
            with certain information about yourself. You may elect not to
            provide this information, but doing so may prevent you from using or
            accessing these features.
          </Paragraph>

          <Title level={5}>Information We Collect through Cookies</Title>
          <Paragraph>
            We also automatically collect certain information about your
            interaction with the Services ("Usage Data"). To do this, we may use
            cookies, pixels and similar technologies ("Cookies"). Usage Data may
            include information about how you access and use our Site and your
            account, including device information, browser information,
            information about your network connection, your IP address and other
            information regarding your interaction with the Services.
          </Paragraph>

          <Title level={5}>Information We Obtain from Third Parties</Title>
          <Paragraph>
            Finally, we may obtain information about you from third parties,
            including from vendors and service providers who may collect
            information on our behalf, such as:
            <ul>
              <li>
                Companies who support our Site and Services, such as Webflow.
              </li>
              <li>
                When you visit our Site, open or click on emails we send you, or
                interact with our Services or
              </li>
            </ul>
            advertisements, we, or third parties we work with, may automatically
            collect certain information using online tracking technologies such
            as pixels, web beacons, software developer kits, third-party
            libraries, and cookies.
          </Paragraph>
          <Paragraph>
            Any information we obtain from third parties will be treated in
            accordance with this Privacy Policy. We are not responsible or
            liable for the accuracy of the information provided to us by third
            parties and are not responsible for any third party's policies or
            practices. For more information, see the section below, Third Party
            Websites and Links.
          </Paragraph>

          <Title level={5}>How We Use Your Personal Information:</Title>
          <Paragraph>
            <ul>
              <li>
                <b>Marketing and Advertising.</b> We use your personal
                information for marketing and promotional purposes, such as to
                send marketing, advertising and promotional communications by
                email, text message or postal mail, and to show you
                advertisements for products or services. This may include using
                your personal information to better tailor the Services and
                advertising on our Site and other websites.
              </li>
              <li>
                <b>Security and Fraud Prevention.</b> We use your personal
                information to detect, investigate or take action regarding
                possible fraudulent, illegal or malicious activity. If you
                choose to use the Services and register an account, you are
                responsible for keeping your account credentials safe. We highly
                recommend that you do not share your username, password, or
                other access details with anyone else. If you believe your
                account has been compromised, please contact us immediately. -
                Communicating with you. We use your personal information to
                provide you with customer support and improve our Services. This
                is in our legitimate interests in order to be responsive to you,
                to provide effective services to you, and to maintain our
                business relationship with you.
              </li>
            </ul>
          </Paragraph>

          <Title level={5}>Cookies</Title>
          <Paragraph>
            Like many websites, we use Cookies on our Site. We use Cookies to
            power and improve our Site and our Services (including to remember
            your actions and preferences), to run analytics and better
            understand user interaction with the Services (in our legitimate
            interests to administer, improve and optimize the Services). We may
            also permit third parties (such as Google Analytics) and services
            providers to use Cookies on our Site to better tailor the services,
            products and advertising on our Site and other websites.
          </Paragraph>
          <Paragraph>
            Most browsers automatically accept Cookies by default, but you can
            choose to set your browser to remove or reject Cookies through your
            browser controls. Please keep in mind that removing or blocking
            Cookies can negatively impact your user experience and may cause
            some of the Services, including certain features and general
            functionality, to work incorrectly or no longer be available.
            Additionally, blocking Cookies may not completely prevent how we
            share information with third parties such as our advertising
            partners.
          </Paragraph>

          <Title level={5}>How We Disclose Personal Information</Title>
          <Paragraph>
            We do not sell your data, but in certain circumstances we may
            disclose your personal information to third parties for legitimate
            purposes subject to this Privacy Policy. Such circumstances may
            include:
            <ul>
              <li>
                With vendors or other third parties who perform services on our
                behalf (e.g., IT management, data analytics, customer support,
                and cloud storage).
              </li>
              <li>
                With business and marketing partners to provide services and
                advertise to you. Our business and marketing partners will use
                your information in accordance with their own privacy notices.
              </li>
              <li>
                When you direct, request us or otherwise consent to our
                disclosure of certain information to third parties, such as to
                ship you products or through your use of social media widgets or
                login integrations, with your consent.
              </li>
              <li>
                With our affiliates or otherwise within our corporate group, in
                our legitimate interests to run a successful business.
              </li>
              <li>
                In connection with a business transaction such as a merger or
                bankruptcy, to comply with any applicable legal obligations
                (including to respond to subpoenas, search warrants and similar
                requests), to enforce any applicable terms of service, and to
                protect or defend the Services, our rights, and the rights of
                our users or others.
              </li>
            </ul>
          </Paragraph>
          <Paragraph>
            We have, in the past 12 months disclosed the following categories of
            personal information and sensitive personal information (denoted by
            *) about users for the purposes set out above in "How we Collect and
            Use your Personal Information" and "How we Disclose Personal
            Information":
          </Paragraph>

          <Text>Category:</Text>
          <Paragraph>
            <ul>
              <li>
                Identifiers such as basic contact details and account
                information
              </li>
              <li>
                Internet or other similar network activity, such as Usage Data
              </li>
            </ul>
          </Paragraph>

          <Text>Categories of Recipients:</Text>
          <Paragraph>
            <ul>
              <li>
                Vendors and third parties who perform services on our behalf
                (such as Internet service providers, customer support partners
                and data analytics providers)
              </li>
              <li>Business and marketing partners</li>
            </ul>
            We do not use or disclose sensitive personal information for the
            purposes of inferring characteristics about you.
          </Paragraph>

          <Title level={5}>Third Party Websites and Links</Title>
          <Paragraph>
            Our Site may provide links to websites or other online platforms
            operated by third parties. If you follow links to sites not
            affiliated or controlled by us, you should review their privacy and
            security policies and other terms and conditions. We do not
            guarantee and are not responsible for the privacy or security of
            such sites, including the accuracy, completeness, or reliability of
            information found on these sites. Information you provide on public
            or semi-public venues, including information you share on
            third-party social networking platforms may also be viewable by
            other users of the Services and/or users of those third-party
            platforms without limitation as to its use by us or by a third
            party. Our inclusion of such links does not, by itself, imply any
            endorsement of the content on such platforms or of their owners or
            operators, except as disclosed on the Services.
          </Paragraph>

          <Title level={5}>Children's Data</Title>
          <Paragraph>
            The Services are not intended to be used by children, and we do not
            knowingly collect any personal information about children. If you
            are the parent or guardian of a child who has provided us with their
            personal information, you may contact us using the contact details
            set out below to request that it be deleted.
          </Paragraph>
          <Paragraph>
            As of the Effective Date of this Privacy Policy, we do not have
            actual knowledge that we "share" or "sell" (as those terms are
            defined in applicable law) personal information of individuals under
            16 years of age.
          </Paragraph>

          <Title level={5}>Security and Retention of Your Information</Title>
          <Paragraph>
            Please be aware that no security measures are perfect or
            impenetrable, and we cannot guarantee "perfect security." In
            addition, any information you send to us may not be secure while in
            transit. We recommend that you do not use unsecure channels to
            communicate sensitive or confidential information to us.
          </Paragraph>
          <Paragraph>
            How long we retain your personal information depends on different
            factors, such as whether we need the information to maintain your
            account, to provide the Services, comply with legal obligations,
            resolve disputes or enforce other applicable contracts and policies.
          </Paragraph>

          <Title level={5}>Your Rights and Choices</Title>
          <Paragraph>
            Depending on where you live, you may have some or all of the rights
            listed below in relation to your personal information. However,
            these rights are not absolute, may apply only in certain
            circumstances and, in certain cases, we may decline your request as
            permitted by law.
          </Paragraph>

          <Paragraph>
            <ul>
              <li>
                <b>Right to Access / Know.</b> You may have a right to request
                access to personal information that we hold about you, including
                details relating to the ways in which we use and share your
                information.
              </li>
              <li>
                <b>Right to Delete.</b> You may have a right to request that we
                delete personal information we maintain about you.
              </li>
              <li>
                <b>Right to Correct.</b> You may have a right to request that we
                correct inaccurate personal information we maintain about you.
              </li>
              <li>
                <b>Right of Portability.</b> You may have a right to receive a
                copy of the personal information we hold about you and to
                request that we transfer it to a third party, in certain
                circumstances and with certain exceptions.
              </li>
              <li>
                <b>
                  Right to Limit and/or Opt out of Use and Disclosure of
                  Sensitive Personal Information.
                </b>
                may have a right to direct us to limit our use and/or disclosure
                of sensitive personal information to only what is necessary to
                perform the Services or provide the goods reasonably expected by
                an average individual.
              </li>
              <li>
                <b>Restriction of Processing.</b> You may have the right to ask
                us to stop or restrict our processing of personal information.
              </li>
              <li>
                <b>Withdrawal of Consent.</b> Where we rely on consent to
                process your personal information, you may have the right to
                withdraw this consent.
              </li>
              <li>
                <b>Appeal.</b> You may have a right to appeal our decision if we
                decline to process your request. You can do so by replying
                directly to our denial.
              </li>
              <li>
                <b>Managing Communication Preferences.</b> We may send you
                promotional emails, and you may opt out of receiving these at
                any time by using the unsubscribe option displayed in our emails
                to you. If you opt out, we may still send you non-promotional
                emails, such as those about your account or orders that you have
                made.
              </li>
              <li>
                <b>
                  Have their Personal Information deleted or otherwise removed.
                </b>
                You have the right, under certain circumstances, to obtain the
                erasure of your personal information from us. made.
              </li>
            </ul>
            You may exercise any of these rights where indicated on our Site or
            by contacting us using the contact details provided below.
          </Paragraph>

          <Paragraph>
            We will not discriminate against you for exercising any of these
            rights. We may need to collect information from you to verify your
            identity, such as your email address or account information, before
            providing a substantive response to the request. In accordance with
            applicable laws, You may designate an authorized agent to make
            requests on your behalf to exercise your rights. Before accepting
            such a request from an agent, we will require that the agent provide
            proof you have authorized them to act on your behalf, and we may
            need you to verify your identity directly with us. We will respond
            to your request in a timely manner as required under applicable law.
          </Paragraph>

          <Title level={5}>Complaints</Title>
          <Paragraph>
            If you have complaints about how we process your personal
            information, please contact us using the contact details provided
            below. If you are not satisfied with our response to your complaint,
            depending on where you live you may have the right to appeal our
            decision by contacting us using the contact details set out below,
            or lodge your complaint with your local data protection authority.
          </Paragraph>

          <Title level={5}>International Users</Title>
          <Paragraph>
            Please note that we may transfer, store and process your personal
            information outside the country you live in, including the United
            States. Your personal information is also processed by staff and
            third party service providers and partners in these countries.
          </Paragraph>
          <Paragraph>
            If we transfer your personal information out of Europe, we will rely
            on recognized transfer mechanisms like the European Commission's
            Standard Contractual Clauses, or any equivalent contracts issued by
            the relevant competent authority of the UK, as relevant, unless the
            data transfer is to a country that has been determined to provide an
            adequate level of protection.
          </Paragraph>

          <Title level={5}>How “Do Not Track” requests are handled</Title>
          <Text>This Site does not support “Do Not Track” requests.</Text>
          <Paragraph>
            To determine whether any of the third-party services it uses honor
            the “Do Not Track” requests, please read their privacy policies.
          </Paragraph>

          <Title level={5}>Contact</Title>
          <Paragraph>
            Should you have any questions about our privacy practices or this
            Privacy Policy, or if you would like to exercise any of the rights
            available to you, please email us at hello@lokamining.com
          </Paragraph>
        </Col>
      </Row>
    </div>
  );
};

export default PrivacyPolicy;
