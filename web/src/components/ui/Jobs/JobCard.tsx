import { Check, CurrencyDollar, Star, User } from "phosphor-react";
import React from "react";
import {
  JobCardContainer,
  JobCardInnerContainer,
  JobCardDataDisplayContainer,
  JobCardDataDisplay,
  JobCardSelectButton,
} from ".";
import { useVisibility } from "../../../providers/VisibilityProvider";
import { fetchNui } from "../../../utils/fetchNui";
import { TextLarger, TextSmaller } from "../Generic";

interface Props {
  description: string;
  hourlyPay: number;
  label: string;
  rankName: string;
  currentlyActiveAmount: number;
  jobName: string;
  isActive: boolean;
  rankNumber: string;
  dispatchType: string;
  refetchJobs?: () => void;
  scrollToRef?: () => void | undefined;
}

export default function JobCard(props: Props) {
  const { setVisible } = useVisibility();

  const handleJobChange = (job: string, type: string, rank: string) => {
    fetchNui("setPlayerJob", { job, type, rank })
      .then((retData) => {
        props.refetchJobs && props.refetchJobs()
      })
      .catch((e) => {
        console.error("Setting mock data due to error", e);
      });
  };

  return (
    <JobCardContainer>
      <JobCardInnerContainer>
        <TextLarger style={{ fontWeight: "700" }}>{props.label}</TextLarger>
        <TextSmaller>{props.description}</TextSmaller>
        <JobCardDataDisplayContainer>
          <JobCardDataDisplay>
            <CurrencyDollar size={24} color="#e8e8e8" />
            <TextSmaller>Salary: ${props.hourlyPay}</TextSmaller>
          </JobCardDataDisplay>
          <JobCardDataDisplay>
            <Star size={24} color="#e8e8e8" />
            <TextSmaller>
              Rank: {props.rankName.substring(0, 6)}
              {props.rankName.length > 6 ? "..." : null}
            </TextSmaller>
          </JobCardDataDisplay>
          <JobCardDataDisplay>
            <User size={24} color="#e8e8e8" />
            <TextSmaller>Active: {props.currentlyActiveAmount}</TextSmaller>
          </JobCardDataDisplay>
        </JobCardDataDisplayContainer>
        {props.isActive ? (
            <JobCardSelectButton selected={true}>
              <Check size={24} color="#e8e8e8" weight="bold" />
              Selected
              </JobCardSelectButton>
        ) : (
          <JobCardSelectButton selected={false} onClick={() => {
            handleJobChange(props.jobName, props.dispatchType, props.rankNumber);
            props.scrollToRef && props.scrollToRef();
          }}>
            <Check size={24} color="#000" weight="bold" />
            Select
        </JobCardSelectButton>
        )}
      </JobCardInnerContainer>
    </JobCardContainer>
  );
}
