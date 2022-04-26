import React from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectHomeInfo } from "../../redux/slices/homepageSlice";
import Slider from "../generic/Swiper";
import { StyledTopJobSection } from "./topjobsStyles";
import { SwiperSlide } from "swiper/react";

type TobJobsProps = {
  title: string;
};

const TopJobs = ({ title }: TobJobsProps) => {
  const jobListArr = [
    {
      name: "JOB 1",
    },
    {
      name: "JOB 2",
    },
    {
      name: "JOB 3",
    },
    {
      name: "JOB 4",
    },
    {
      name: "JOB 5",
    },
    {
      name: "JOB 6",
    },
    {
      name: "JOB 7",
    },
    {
      name: "JOB 8",
    },
  ];

  const {
    // @ts-ignore
    BagPart: {
      ContentItems: {
        0: {
          TopJobWidget: {
            TopJobs: { Value },
          },
        },
      },
    },
  } = useSelector(selectHomeInfo);

  return (
    <StyledTopJobSection className="p-5">
      <h3>{title}</h3>
      <p>
        Wir haben interessante Stellen für Sie zusammengefasst. Entdecken Sie
        die Angebote!
      </p>
      {/* <Slider slidesPerView={Value}>
        {jobListArr.map(({ name }, idx) => {
          return (
            <SwiperSlide key={idx}>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                </Card.Body>
              </Card>
            </SwiperSlide>
          );
        })}
      </Slider> */}
    </StyledTopJobSection>
  );
};

export default TopJobs;
