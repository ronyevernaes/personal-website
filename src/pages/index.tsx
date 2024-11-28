import { FC } from "react"
import type { PageProps } from "gatsby"
import {
  FaCloudDownloadAlt,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaTelegram,
} from "react-icons/fa";

import { MainLayout } from "../components/layouts"
import { LinkButton } from "../components/ui";

const IndexPage: FC<PageProps> = () => {
  return (
    <MainLayout title={"I'm Ronye Vernaes;"}>
      <div className="w-full md:w-1/2 flex flex-col gap-12">
        <div className="flex flex-col gap-2 text-center">
          <h2>
            Senior Front End & Full Stack Web Engineer
          </h2>
          <h3>
            Tech Lead, Remote & Agile Management
          </h3>
          <h4>
            JavaScript, TypeScript, ReactJS, NextJS, NodeJS, ExpressJS, NestJS
          </h4>
        </div>

        <div className="text-center md:text-left">
          Experienced software engineer with a proven track record in working with
          cross-functional teams, taking ownership and leading remote teams and
          products in dynamic, highly uncertain and fast-paced settings. Excellent
          communication and interpersonal skills. Ideal for positions requiring a
          blend of hands-on technical expertise and strategic leadership to guide
          product development from concept to deployment.
        </div>

        <div className="flex flex-col items-center gap-12">
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center">
            <LinkButton
              href="https://github.com/ronyevernaes/"
              target="_blank"
            >
              <FaGithub size={32} />
              My GitHub repo
            </LinkButton>

            <LinkButton
              href="https://www.linkedin.com/in/ronyevernaes/"
              target="_blank"
            >
              <FaLinkedin size={32} />
              My LinkedIn profile
            </LinkButton>

            <LinkButton
              href="https://docs.google.com/document/d/1IyFbTOlrTuN80rPMSywunAL7NW2EjrAjN9OD5zQHH14/export?format=pdf"
              target="_blank"
            >
              <FaCloudDownloadAlt size={32} />
              Download my resume
            </LinkButton>
          </div>

          <LinkButton
            href="https://cal.com/ronyevernaes/meeting"
            target="_blank"
            variant="primary"
          >
            Book meeting
          </LinkButton>

          <div className="flex gap-4">
            <LinkButton
              href="https://api.whatsapp.com/send?phone=36304070998"
              target="_blank"
            >
              <FaWhatsapp size={32} />
            </LinkButton>

            <LinkButton
              href="mailto:contact@ronyevernaes.me"
              target="_blank"
            >
              <FaEnvelope size={32} />
            </LinkButton>

            <LinkButton
              href="https://t.me/RonyeVernaes"
              target="_blank"
            >
              <FaTelegram size={32} />
            </LinkButton>
          </div>
        </div>
      </div>
    </MainLayout>
  )
};

export default IndexPage;
