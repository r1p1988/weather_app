import styled from "styled-components";

export const StyledWeatherCardContainer = styled.div`
  margin: 20px auto 0 auto;
  padding: 0 10px 10px 10px;
  border-radius: 5px;
  width: 300px;
  background-color: #333;
  color: #fff;
`;

export const StyledWeatherCardHeader = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
  justify-content: space-between;
  align-items: center;

  img {
    width: 100px;
  }
`;

export const StyledWeatherCardCity = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 1;
  margin: 0;
  letter-spacing: 1px;
`;

export const StyledWeatherCardDescription = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1;
  margin: 0;
`;

export const StyledWeatherCardBody = styled.div`
  margin: 0 10px 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-weight: 600;
    font-size: 70px;
    width: auto;
    letter-spacing: -5px;
    margin: 10px 0;
  }
`;

export const StyledWeatherCardDetails = styled.div`
  width: 100%;
  padding-left: 20px;
`;

export const StyledWeatherCardParameters = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledWeatherCardParamsLabel = styled.span`
  text-align: left;
  font-weight: 400;
  font-size: 12px;
`;

export const StyledWeatherCardParamsVal = styled.span`
  text-align: right;
  font-weight: 600;
  font-size: 12px;
`;
