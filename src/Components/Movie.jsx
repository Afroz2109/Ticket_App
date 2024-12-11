import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const IMAGE_API = 'https://image.tmdb.org/t/p/w500/';

const Movie = () => {
    const location = useLocation();
    const navigate= useNavigate()
    const { poster_path, title, overview } = location.state;
    const [latLng, setLatLng] = useState({});
    const [theaters, setTheaters] = useState([]); 
    const TIMINGS = ["7:30 AM", "11:00 AM", "2:30 PM", "6:30 PM", "9:30 PM"];

    // Fetch user location
    useEffect(() => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(position => {
                setLatLng({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                });
            });
        }
    }, []);

    useEffect(() => {
        if (Object.keys(latLng).length > 0) {
            const API_KEY = `https://api.geoapify.com/v2/places?categories=entertainment.cinema&filter=circle:${latLng.lng},${latLng.lat},5000&bias=proximity:78.3892797196446,17.438893711699976&lang=en&limit=20&apiKey=a704e637e8424c6995f205f35d9f6536
`;
            axios.get(API_KEY)
                .then(res => {
                    const featuresArr = res.data.features;
                    const names = featuresArr.map(feature => feature.properties.name);
                    setTheaters(names); 
                })
                .catch(error => {
                    console.error("Error fetching theaters:", error);
                });
        }
    }, [latLng]);

    return (
        <div>
            <Row>
                <Col style={{ padding: '70px' }}>
                    <div>
                        <img 
                            src={IMAGE_API+poster_path} 
                            height={300} 
                            width={250} 
                            style={{ marginBottom: '10px', borderRadius: '8px' }} 
                            alt="Movie Poster" 
                        />
                        <h4>{title}</h4>
                        <div>
                            <p>{overview}</p>
                        </div>
                    </div>
                </Col>
                <Col style={{padding:'40px'}}>
                <div>
                    {theaters.map((theater, index) => {
                        return (
                            <div>
                                <div  key={index} ><h5>{theater}</h5></div>
                                {TIMINGS.map((time, index) =>  {
                                    return <Button  onClick={()=> {
                                        navigate('/select', {state: {title: title}})
                                    }} key={time}  style={{marginRight:'0.7rem',marginBottom:'15px'}}>{time}</Button>;
                                })}
                            </div>
                        );
                    })}
</div>

                </Col>
            </Row>
        </div>
    );
};

export default Movie;
