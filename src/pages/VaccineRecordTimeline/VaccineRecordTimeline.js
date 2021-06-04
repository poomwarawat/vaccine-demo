import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import axios from "axios";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import moment from "moment";

import "./VaccineRecordTimeline.css";

const initRecord = [];

export default function VaccineRecordTimeline(props) {
  const [vaccineName] = useState(props.match.params.name);
  const [records, setRecords] = useState(initRecord);
  const [roles, setRoles] = useState([]);
  const [start, setStart] = useState(new Date("2021-01-01 11:42:37"));

  useEffect(() => {
    const verification = async () => {
      try {
        const res = await axios.get(
          `https://sn23o72ek5.execute-api.ap-southeast-1.amazonaws.com/v1/user/verify-vaccine?userId=7e7d8432-2219-4ed9-941c-d311d0e278f6&vaccineId=${props.match.params.name}`
        );
        const { message } = await res.data.result.msg;
        setRecords(message);
      } catch (error) {}
    };
    verification();
  }, []);

  useEffect(() => {
    const getRole = async () => {
      try {
        const res = await axios.get(
          "https://sn23o72ek5.execute-api.ap-southeast-1.amazonaws.com/v1/user/vaccine-role"
        );
        const { result } = await res.data;
        setRoles(result);
      } catch (error) {}
    };
    getRole();
  }, []);
  return (
    <div className="vaccine-record-timeline-bg">
      <Container>
        <div className="pt-4 vaccine-record-timeline">
          <h1>Vaccine name : {vaccineName}</h1>
          <hr />
          <h3>Patient information</h3>
          <p>Firstname : Warawat </p>
          <p>Lastname : Lailerd</p>
          <p>HN : 3801/56</p>
          <p>Birthday : 22/04/1999</p>
          <p>
            Start record :{" "}
            {moment(start).format("YYYY-MM-DD hh:mm:ss").toLocaleString()}
          </p>
          <hr />
          <h3>Vaccine timeline</h3>
        </div>
        <Timeline align="alternate">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot style={{ background: "#66ff33" }} />
              <TimelineConnector
                style={{ height: "150px", background: "white" }}
              />
            </TimelineSeparator>
            <TimelineContent>
              <h5>
                Start receive vaccine :{" "}
                {moment(start).format("YYYY-MM-DD").toLocaleString()}
              </h5>
            </TimelineContent>
          </TimelineItem>
          {records.length > 0 &&
            roles.length > 0 &&
            records.map((record, index) => {
              const next = roles.find(
                (role) => `${role.id}` === `${record.dose}`
              );
              if (index === records.length - 1) {
                return (
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot style={{ background: "#e62e00" }} />
                    </TimelineSeparator>
                    <TimelineContent>
                      <h5>
                        Next vaccine injection :{" "}
                        {moment(start)
                          .add(next.roleNumber, next.roleText)
                          .format("YYYY-MM-DD")
                          .toLocaleString()}
                      </h5>
                    </TimelineContent>
                  </TimelineItem>
                );
              } else {
                return (
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot style={{ background: "#e62e00" }} />
                      <TimelineConnector
                        style={{ height: "150px", background: "white" }}
                      />
                    </TimelineSeparator>
                    <TimelineContent>
                      <h5>
                        Next vaccine injection :{" "}
                        {moment(start)
                          .add(next.roleNumber, next.roleText)
                          .format("YYYY-MM-DD")
                          .toLocaleString()}
                      </h5>
                    </TimelineContent>
                  </TimelineItem>
                );
              }
            })}
        </Timeline>
      </Container>
    </div>
  );
}
