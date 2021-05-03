import React, { useState } from "react";
import { Container, Alert } from "reactstrap";
import { Link } from "react-router-dom";

import "./VaccineRecord.css";

const initVaccineList = [
  { vaccineName: "Hepatis B vaccine: Standard course", short: "HBV-Standard" },
  { vaccineName: "Hepatis B vaccine: Rapid schedule", short: "HBV-Rapid" },
  {
    vaccineName: "Hepatis A vaccine: Standard schedule",
    short: "HAV-Stadard-Schedule",
  },
  {
    vaccineName: "Twinrix vaccine: Standard course",
    short: "HAV-Stadard-course",
  },
  {
    vaccineName: "Mump- measle- rubella vaccine: Standard course",
    short: "MMR-Standard-course",
  },
  {
    vaccineName: "Mump- measle- rubella vaccine: Booster dose",
    short: "MMR-Booster",
  },
  { vaccineName: "Varicella vaccine: Standard course", short: "VZV" },
  { vaccineName: "Yellow fever vaccine", short: "YF" },
  {
    vaccineName: "Japanese Encephalitis vaccine: Standard course",
    short: "JE",
  },
  { vaccineName: "Influenza vaccine", short: "FLU" },
  { vaccineName: "Pre-exposure prophylaxis", short: "PrEP" },
  { vaccineName: "Post-exposure prophylaxis : Booster", short: "PrEP-Booster" },
  { vaccineName: "Post-exposure prophylaxis : TRC-IM", short: "PrEP-TRC-IM" },
  { vaccineName: "Post-exposure prophylaxis : TRC-ID", short: "PrEP-TRC-ID" },
  { vaccineName: "Post-exposure prophylaxis : WHO-IM", short: "PrEP-WHO-IM" },
];

export default function VaccineRecord() {
  const [vaccineList] = useState(initVaccineList);

  return (
    <div className="vaccine-record-bg">
      <Container>
        <div className="vaccine-record pt-4">
          <h1>Vaccine record</h1>
          <p>In list below, is all your received vaccine list</p>
          <p>and you can check the vaccine history by click at vaccine name</p>
          <hr />
          <div className="vaccine-list">
            {vaccineList.map((vaccine, index) => {
              return (
                <Link
                  key={index}
                  to={`/vaccine-record/${vaccine.short}`}
                  className="link"
                >
                  <Alert color="info" className="vaccine-item box-shadow">
                    {index + 1} : {vaccine.vaccineName}
                  </Alert>
                </Link>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}
