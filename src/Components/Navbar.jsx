import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { TbCloudSearch } from "react-icons/tb";
import { useEffect, useState } from 'react'
import React from 'react'
import Content from './Content';

function NavScrollExample() {

  
  const [place, setplace] = useState("delhi")

  const handleChange=(e)=>{
    setplace(e.target.value)
    console.log(place)
  }

  useEffect(() => {
    return () => {
      getData();
    }
  }, [])
  

  const  getData=async()=> {

    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${place}?unitGroup=us&key=HHFTWYRNKS4VYZFY63FETDKHL&contentType=json`;
    const options = {
        method: 'GET',
        headers: {

        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();

        temperature.innerHTML=Math.floor((result.days[0].temp-32)*(5/9))+" °C";
        sunrise.innerHTML=" "+result.days[0].sunrise;
        sunset.innerHTML=" "+result.days[0].sunset;
        humidity.innerHTML=" "+result.days[0].humidity+" %";
        visibility.innerHTML=" "+result.days[0].visibility+" Km";
        pressure.innerHTML=" "+result.days[0].pressure+" mb";
        day.innerHTML=" "+result.days[0].conditions;
        highest.innerHTML=" "+Math.floor((result.days[0].tempmax-32)*(5/9))+" °C";
        lowest.innerHTML=" "+Math.floor((result.days[0].tempmin-32)*(5/9))+" °C";

        temp10.innerHTML=Math.floor((result.days[0].hours[11].temp-32)*(5/9))+" °C";
        temp2.innerHTML=Math.floor((result.days[0].hours[14].temp-32)*(5/9))+" °C";
        temp5.innerHTML=Math.floor((result.days[0].hours[17].temp-32)*(5/9))+" °C";

        humidity10.innerHTML=result.days[0].hours[11].humidity;
        humidity2.innerHTML=result.days[0].hours[14].humidity;;
        humidity5.innerHTML=result.days[0].hours[17].humidity;;

        forcast10.innerHTML=result.days[0].hours[11].conditions;
        forcast2.innerHTML=result.days[0].hours[14].conditions;;
        forcast5.innerHTML=result.days[0].hours[17].conditions;;

    } catch (error) {
        console.error(error);
    }
  }

  return (
    <Navbar expand="lg" className="backdrop-blur-md">
      <Container fluid>
        <Navbar.Brand className="text-white" style={{fontWeight:'bold',marginLeft:'93px',fontSize:'25px'}}>Weathery !</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              className="h-7"
              aria-label="Search"
              border="2px"
              border-radius="10px"
              border-color="black"
              value={place}
              onChange={handleChange}
            />
          </Form>
        </Navbar.Collapse>
        <button onClick={getData} className='w-9 h-7 mr-10 ml-5'><TbCloudSearch className='w-8 h-6 text-white active:h-4'/></button>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;