import React, { useState } from "react";
import { Container } from "reactstrap";
import { Alert, Button } from "shards-react";

import "./VaccineRecordTimeline.css";

const initRecord = [
  {
    hn: "3801/56",
    lotNumber: "HBV222",
    batchNumber: "222",
    administrator: "WP",
    center: "CU",
    date: "01/01/2021",
    status: 1,
    dosage: 1,
  },
  {
    hn: "3801/56",
    lotNumber: "HBV222",
    batchNumber: "222",
    administrator: "WP",
    center: "CU",
    date: "01/02/2021",
    status: 0,
    dosage: 2,
  },
  {
    hn: "3801/56",
    lotNumber: "HBV222",
    batchNumber: "222",
    administrator: "WP",
    center: "CU",
    date: "01/03/2021",
    status: 0,
    dosage: 3,
  },
];

export default function VaccineRecordTimeline(props) {
  const [vaccineName] = useState(props.match.params.name);
  const [records] = useState(initRecord);
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
          <p>Start record : 01/01/2021</p>
          <hr />
          <h3>Vaccine timeline</h3>
          {records.map((record, index) => {
            return (
              <Alert
                key={index}
                theme={record.status === 1 ? "primary" : "danger"}
              >
                <span>ID : {index + 1}</span>
                <br />
                <span>
                  Date : {record.date} {record.status === 0 && "(next meet up)"}
                </span>
                <br />
                <span>Vaccine dosage : {record.dosage}</span>
                <br />
                <span>Administrator : {record.administrator}</span>
                <br />
                <span>Center : {record.center}</span>
                <br />
                <Button
                  disabled
                  className="status-btn"
                  theme={record.status === 1 ? "success" : "danger"}
                >
                  {record.status === 1 ? "Complete" : "Uncomplete"}
                </Button>
              </Alert>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
