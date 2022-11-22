import { CurrencyDollar, Star, User } from "phosphor-react";
import React from "react";
import {
  JobCardContainer,
  JobCardInnerContainer,
  JobCardDataDisplayContainer,
  JobCardDataDisplay,
  JobCardSelectButton,
} from ".";
import { useTheme } from "../../../providers/ThemeProvider";
import { fetchNui } from "../../../utils/fetchNui";
import { TextFlexContainer, TextLarger, TextSmaller } from "../Generic";

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

  const { theme } = useTheme();

  const handleJobChange = (job: string, type: string, rank: string) => {
    fetchNui("setPlayerJob", { job, type, rank })
      .then((retData) => {
        props.refetchJobs && props.refetchJobs();
      })
      .catch((e) => {
        console.error("Setting mock data due to error", e);
      });
  };

  return (
    <JobCardContainer theme={theme}>
      <JobCardInnerContainer>
        <TextLarger style={{ fontWeight: "700" }}>{props.label}</TextLarger>
        <TextSmaller>{props.description}</TextSmaller>
        <JobCardDataDisplayContainer>
          <JobCardDataDisplay theme={theme}>
            <CurrencyDollar size={24} color="#e8e8e8" />
            <TextSmaller>
              <TextFlexContainer>
                <span>Salary:</span>
                <span>${props.hourlyPay}</span>
              </TextFlexContainer>
            </TextSmaller>
          </JobCardDataDisplay>
          <JobCardDataDisplay theme={theme}>
            <Star size={24} color="#e8e8e8" />
            <TextSmaller>
              <TextFlexContainer>
                <span>Rank:</span>
                <span>
                  {props.rankName.substring(0, 6)}
                  {props.rankName.length > 6 ? "..." : null}
                </span>
              </TextFlexContainer>
            </TextSmaller>
          </JobCardDataDisplay>
          <JobCardDataDisplay theme={theme}>
            <User size={24} color="#e8e8e8" />
            <TextSmaller>
              <TextFlexContainer>
                <span>Active:</span>
                <span>{props.currentlyActiveAmount}</span>
              </TextFlexContainer>
            </TextSmaller>
          </JobCardDataDisplay>
        </JobCardDataDisplayContainer>
        {props.isActive ? (
          <JobCardSelectButton selected={true} theme={theme}>
            Selected
          </JobCardSelectButton>
        ) : (
          <JobCardSelectButton
            theme={theme}
            selected={false}
            onClick={() => {
              handleJobChange(
                props.jobName,
                props.dispatchType,
                props.rankNumber
              );
              props.scrollToRef && props.scrollToRef();
            }}
          >
            Select
          </JobCardSelectButton>
        )}
      </JobCardInnerContainer>
    </JobCardContainer>
  );
}
