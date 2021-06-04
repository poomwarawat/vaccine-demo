import React, { useState, useEffect } from "react";
import { Container, Alert } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";

import "./VaccineRecord.css";

export default function VaccineRecord() {
  const [vaccineList, setVaccineList] = useState([]);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const getVaccineRecord = async () => {
      try {
        const res = await axios.get(
          "https://sn23o72ek5.execute-api.ap-southeast-1.amazonaws.com/v1/user/vaccine-injected?userId=7e7d8432-2219-4ed9-941c-d311d0e278f6"
        );
        const { result } = await res.data;
        setRecords(result);
      } catch (error) {}
    };
    getVaccineRecord();
  }, []);

  useEffect(() => {
    const getAllVaccine = async () => {
      try {
        const res = await axios.get(
          "https://sn23o72ek5.execute-api.ap-southeast-1.amazonaws.com/v1/user/vaccine-name"
        );
        const { result } = await res.data;
        // console.log(result);
        setVaccineList(result);
      } catch (error) {}
    };
    getAllVaccine();
  }, []);

  return (
    <div className="vaccine-record-bg">
      <Container>
        <div className="vaccine-record pt-4">
          <h1>Vaccine record</h1>
          <p>In list below, is all your received vaccine list</p>
          <p>and you can check the vaccine history by click at vaccine name</p>
          <hr />
          <div className="vaccine-list">
            {vaccineList.length > 0 &&
              records.length > 0 &&
              records.map((record, index) => {
                return (
                  <Link
                    key={index}
                    to={`/vaccine-record/${record.vaccineID}`}
                    className="link"
                  >
                    <Alert color="info" className="vaccine-item box-shadow">
                      {index + 1} :{" "}
                      {
                        vaccineList.find(
                          (item) => `${item.id}` === `${record.vaccineID}`
                        ).vaccineName
                      }
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

// {vaccineList.map((vaccine, index) => {
//   return (
// <Link
//   key={index}
//   to={`/vaccine-record/${vaccine.vaccineShortName}`}
//   className="link"
// >
//   <Alert color="info" className="vaccine-item box-shadow">
//     {index + 1} : {vaccine.vaccineName}
//   </Alert>
// </Link>
//   );
// })}
