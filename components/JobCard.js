import React from 'react';
import styled from 'styled-components';

const JobCard = ({ job }) => {
  return (
  <Container>
    <JobTitle>{job.title}</JobTitle>
    <CompanyName>{job.company.name}</CompanyName>
  </Container>
  )
}

export default JobCard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  max-width: 350px;
  border: 2px solid black;
  border-radius: 5px;
  margin-left: 100px;
  margin-top: 25px;
`

const JobTitle = styled.h3`
  text-decoration: underline #1cd860;
  margin-left: 10px;
  margin-bottom: 0px;
`

const CompanyName = styled.h4`
  margin-left: 10px;
`;