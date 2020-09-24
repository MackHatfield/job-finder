import React from 'react';
import styled from 'styled-components';

const JobCard = ({ job }) => {
  let citiesText = '';
  const applyUrl = job.applyUrl ? job.applyUrl : '';

  if (job.cities && job.cities.length > 0) {
    job.cities.forEach((city, index) => {
      citiesText += `${city.name}${index === job.cities.length - 1 ? '' : ', '}`
    });
  }

  return (
  <Container>
    <JobTitle>{job.title}</JobTitle>
    <div>
      <Label>Company:</Label>
      <Text>{job.company.name}</Text>
    </div>
    <div>
      <Label>Commitment:</Label>
      <Text>{job.commitment.title}</Text>
    </div>
    <div>
      <Label>Cities:</Label>
      <Text>{citiesText !== '' ? citiesText : 'N/A'}</Text>
    </div>
    <DescriptionContainer>
      {`${job.description.substring(0, 100)}...`}
    </DescriptionContainer>
    <ApplyButton>
      <ApplyLink href={applyUrl}>Apply Now</ApplyLink>
    </ApplyButton>
  </Container>
  )
}

export default JobCard;

const Container = styled.div`
  margin-top: 10px;
  align-items: left;
  max-width: 350px;
  max-height: 400px;
  border: 2px solid black;
  border-radius: 5px;
`

const JobTitle = styled.h3`
  text-decoration: underline #1cd860;
  margin-left: 10px;
  margin-bottom: 5px;
`
const Label = styled.h4`
  display: inline;
  margin-left: 10px;
`
const Text = styled.p`
  display: inline;
  margin-left: 5px;
  color: #a1a1a1;
`;

const DescriptionContainer = styled.div`
  width: 75%;
  border: 1.5px solid black;
  border-radius: 5px;
  margin-top: 10px;
  margin-left: 10px;
  padding-left: 5px;
  margin-bottom: 10px;
`
const ApplyLink = styled.a`
  color: white;
`;

const ApplyButton = styled.div`
  width: 40%;
  height: 30px;
  background-color: #1cd860;
  border: 2px solid white;
  border-radius: 4px;
  margin: 0 auto;
  margin-bottom: 10px;
  text-align: center;
  padding-top: 3px;
  box-sizing: border-box;
`;
