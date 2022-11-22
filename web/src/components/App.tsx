import { Briefcase, ListDashes, Wrench } from "phosphor-react";
import React, { useState } from "react";
import { useTab } from "../providers/TabProvider";
import { useTheme } from "../providers/ThemeProvider";
import { useVisibility } from "../providers/VisibilityProvider";
import { debugData } from "../utils/debugData";
import { fetchNui } from "../utils/fetchNui";
import ActiveJobs from "./ActiveJobs";
import Settings from "./Settings";
import { TextBold, TextContainer, TextSmaller } from "./ui/Generic";
import {
  JobDisplayContainer,
  JobInnerContainer,
  JobsContainer,
} from "./ui/Jobs";
import JobCard from "./ui/Jobs/JobCard";
import { NUIContainer } from "./ui/NUI";
import {
  SidebarContainer,
  SidebarInnerContainer,
  SidebarTabContainer,
  SidebarTabsContainer,
  SidebarTabSelectedContainer,
} from "./ui/Sidebar";

// This will set the NUI to visible if we are
// developing in browser
debugData([
  {
    action: "setVisible",
    data: true,
  },
]);

interface INWJobs {
  description: string;
  hourlyPay: number;
  label: string;
  rankName: string;
  currentlyActiveAmount: number;
  jobName: string;
  isActive: boolean;
}

const App: React.FC = () => {
  const [nonWhitelistedJobs, setNonWhitelistedJobs] = useState<INWJobs[]>([]);
  const { activeTab, setActiveTab } = useTab();
  const { visible } = useVisibility();
  const { theme } = useTheme();

  const scrollToRef = React.useRef<HTMLDivElement>(null);
  const executeScroll = () => scrollToRef.current?.scrollIntoView();

  const handleGetClientData = () => {
    fetchNui<INWJobs[]>("getAllSharedJobs")
      .then((retData) => {
        // put active jobs at the top
        const activeJobs = retData.filter((job) => job.isActive);
        const inactiveJobs = retData.filter((job) => !job.isActive);

        // sort inactive jobs alphabetically
        const orderedInactiveJobs = inactiveJobs.sort((a, b) => {
          if (a.label < b.label) {
            return -1;
          }
          if (a.label > b.label) {
            return 1;
          }
          return 0;
        });

        // combine the two arrays
        const orderedJobs = [...activeJobs, ...orderedInactiveJobs];

        setNonWhitelistedJobs(orderedJobs);
      })
      .catch((e) => {
        console.error("Setting mock data due to error", e);
      });
  };

  React.useEffect(() => {
    if (!visible || !activeTab) return;

    handleGetClientData();
  }, [visible, activeTab]);

  return (
    <NUIContainer theme={theme}>
      <SidebarContainer theme={theme}>
        <SidebarInnerContainer>
            <img src="https://cdn.discordapp.com/attachments/1041867720880304269/1044468486757425152/Redline_Logo_nobg.png" alt="redline studios logo" style={{ 
              width: "64px",
              height: "64px",
            }} />
          <SidebarTabsContainer>
            {activeTab === "alljobs" ? (
              <SidebarTabSelectedContainer theme={theme}>
                <ListDashes size={24} color="#e8e8e8" />
              </SidebarTabSelectedContainer>
            ) : (
              <SidebarTabContainer theme={theme} onClick={() => setActiveTab("alljobs")}>
                <ListDashes size={24} color="#757575" />
              </SidebarTabContainer>
            )}
            {activeTab === "currentjobs" ? (
              <SidebarTabSelectedContainer theme={theme}>
                <Briefcase size={24} color="#e8e8e8" />
              </SidebarTabSelectedContainer>
            ) : (
              <SidebarTabContainer theme={theme} onClick={() => setActiveTab("currentjobs")}>
                <Briefcase size={24} color="#757575" />
              </SidebarTabContainer>
            )}
            {activeTab === "settings" ? (
              <SidebarTabSelectedContainer theme={theme}>
                <Wrench size={24} color="#e8e8e8" />
              </SidebarTabSelectedContainer>
            ) : (
              <SidebarTabContainer theme={theme} onClick={() => setActiveTab("settings")}>
                <Wrench size={24} color="#757575" />
              </SidebarTabContainer>
            )}
          </SidebarTabsContainer>
        </SidebarInnerContainer>
      </SidebarContainer>
      <JobsContainer ref={scrollToRef}>
        {activeTab === "alljobs" && (
          <JobInnerContainer>
            <TextContainer style={{ paddingLeft: "1rem" }}>
              <TextSmaller>CATEGORY</TextSmaller>
              <TextBold>All Non-Whitelisted Jobs</TextBold>
            </TextContainer>
            <JobDisplayContainer theme={theme}>
              {nonWhitelistedJobs.map((job, index) => (
                <JobCard
                  key={index}
                  label={job.label}
                  description={job.description}
                  hourlyPay={job.hourlyPay}
                  rankName={job.rankName}
                  currentlyActiveAmount={job.currentlyActiveAmount}
                  jobName={job.jobName}
                  isActive={job.isActive}
                  rankNumber="0"
                  dispatchType="nonWhitelisted"
                  refetchJobs={handleGetClientData}
                  scrollToRef={executeScroll}
                />
              ))}
            </JobDisplayContainer>
          </JobInnerContainer>
        )}
        {activeTab === "currentjobs" && <ActiveJobs />}
        {activeTab === "settings" && <Settings />}
      </JobsContainer>
    </NUIContainer>
  );
};

export default App;
