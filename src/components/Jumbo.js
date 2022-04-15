import React from 'react';
import bike from './bike.jpg';
import styled from 'styled-components';

const Styles = styled.div `
.jumbo{
    background: url(${bike}) no-repeat fixed bottom;
    background-size: cover;
    color:#efefef;
    height: 400px;
    position: relative;
    z-index: -2;
}`;



const Jumbo = () => {
return (
    <>
   {/* <Jumbo fluid className="jumbo">
       <div className='overlay'></div>
       <Container>
           <h1>DLFLFL</h1>
           <p>fkfkkfkf</p>
       </Container>
   </Jumbo> */}

<Styles>

</Styles>
  </>)}

export default Jumbo;