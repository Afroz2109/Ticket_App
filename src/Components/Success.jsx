import React from "react";
import { Row, Col} from "react-bootstrap";

import successImg from '../assets/success.png'
import qrcodeImg from '../assets/qrcode.png'


const Success=()=> {
    return (
        <div style={{padding:'50px',display:'flex',alignItems:'center',justifyContent:'center'}}>
           <Row >
            <Col>
            <div style={{marginRight:'-9%'}}>
              <img src={successImg} height={450}/>
            </div>
            <div style={{textAlign:'center'}}>
                <h5>Booking Confirmed</h5>
                <h6>Thankyou Enjyo your movie</h6>
            </div>
            </Col>
            <Col>
            <div style={{padding:'99px',display:'flex',alignItems:'center',justifyContent:'center'}}>
              <img src={qrcodeImg} height={300}/>
            </div>
            </Col>
           </Row>
        </div>
    )
}

export default Success;