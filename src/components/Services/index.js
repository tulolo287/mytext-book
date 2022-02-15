import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements';
import Icon1 from '../../images/svg-1.svg';

const Services = () => {
  return (
    <ServicesContainer>
    <ServicesH1>sfds</ServicesH1>
    <ServicesWrapper>
    <ServicesCard>
    <ServicesIcon src={Icon1}/>
    <ServicesH2>Service 1</ServicesH2>
    <ServicesP>Bla ljljljl l ldsl </ServicesP>
    </ServicesCard>
    
<ServicesCard>
     <ServicesIcon src={Icon1}/>
    <ServicesH2>Service 2</ServicesH2>
    <ServicesP>Bla2 asf safdljljljl l ldsl </ServicesP>
    </ServicesCard>
    </ServicesWrapper>
    </ServicesContainer>
  )
}
export default Services;