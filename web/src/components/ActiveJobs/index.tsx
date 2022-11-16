import React from "react";
import { useTab } from "../../providers/TabProvider";
import { fetchNui } from "../../utils/fetchNui";
import {
  TextContainer,
  TextSmaller,
  TextBold,
} from "../ui/Generic";
import { JobInnerContainer, JobDisplayContainer } from "../ui/Jobs";
import JobCard from "../ui/Jobs/JobCard";

interface ICurrentJobs {
  description: string;
  hourlyPay: number;
  label: string;
  rankName: string;
  currentlyActiveAmount: number;
  jobName: string;
  isActive: boolean;
  rankNumber: string;
}

export default function ActiveJobs() {
  const { activeTab } = useTab();
  const [currentJobs, setCurrentJobs] = React.useState<ICurrentJobs[]>([]);

  const handleGetClientData = () => {
    fetchNui<ICurrentJobs[]>("getCurrentPlayerJobs")
      .then((retData) => {
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

        setCurrentJobs(orderedJobs);
      })
      .catch((e) => {
        console.error("Setting mock data due to error", e);
      });
  };

  React.useEffect(() => {
    if (activeTab !== "currentjobs") return;

    handleGetClientData();
  }, [activeTab]);

  return (
    <JobInnerContainer>
      <TextContainer style={{ paddingLeft: "1rem" }}>
        <TextSmaller>CATEGORY</TextSmaller>
        <TextBold>Current Whitelisted Jobs</TextBold>
      </TextContainer>
        <JobDisplayContainer>
          {currentJobs.length > 0
            ? currentJobs.map((job, index) => (
                <JobCard
                  key={index}
                  label={job.label}
                  description={job.description}
                  hourlyPay={job.hourlyPay}
                  rankName={job.rankName}
                  currentlyActiveAmount={job.currentlyActiveAmount}
                  jobName={job.jobName}
                  isActive={job.isActive}
                  dispatchType="whitelisted"
                  rankNumber={job.rankNumber}
                  refetchJobs={handleGetClientData}
                />
              ))
            : null}
        </JobDisplayContainer>
    </JobInnerContainer>
  );
}
