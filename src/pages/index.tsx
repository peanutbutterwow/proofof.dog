import React from "react"

import Layout from "../core/Layout"

import Main from "../components/Main"
import SectionLead from "../containers/SectionLead"
import SectionAbout from "../containers/SectionAbout"
import SectionRegistration from "../containers/SectionRegistration"
import SectionGuide from "../containers/SectionGuide"

const Home: React.FC = () => {
  return (
    <Layout>
      <Main>
        <SectionLead />
        <SectionAbout />
        <SectionRegistration />
        <SectionGuide />
      </Main>
    </Layout>
  )
}

export default Home
