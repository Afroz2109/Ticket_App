import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

const Select = () => {
    const location = useLocation();
    const navigate= useNavigate()
    const { title } = location.state;
    const [seatsMatrix, setSeatsMatrix] = useState([]);
    const [selectSeats, setSelectSeats] = useState([]);

    const CreateSeats = () => {
        let totalRows = 7;
        let numberOfSeatsInRow = 21;
        let seats = [];
        let ch = "A";

        for (let row = 0; row < totalRows; row++) {
            let rowArr = [];
            for (let col = 1; col <= numberOfSeatsInRow; col++) {
                rowArr.push({
                    seat: ch + col,
                    category: ch >= "E" ? "Gold" : "Platinum",
                });
            }
            seats.push(rowArr);
            ch = String.fromCharCode(ch.charCodeAt(0) + 1);
        }

        setSeatsMatrix(seats);
    };

    useEffect(() => {
        CreateSeats();
    }, []);

    const handleSelect = (newSeat) => {
        if (!selectSeats.some((seat) => seat.seat === newSeat.seat)) {
            setSelectSeats([...selectSeats, newSeat]);
        }
    };

    const calculateTotal = () => {
        return selectSeats.reduce((total, seat) => {
            return seat.category === "Platinum" ? total + 300 : total + 200;
        }, 0);
    };

    return (
        <div className="fullwidth">
            <div style={{ padding: "10px" }}>
                <h2 className="d-inline-block">{title}</h2>
                <div style={{ marginLeft: 200 }} className="d-inline-block">
                    <h5 style={{ color: "lightblue" }}>Select Seats here</h5>
                </div>
            </div>

            <div>
                <h5 style={{ textAlign: "center" }}>Platinum ₹300</h5>
                {seatsMatrix.slice(0, 3).map((seatArr) => (
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            marginBottom: "10px",
                        }}
                    >
                        {seatArr.map(
                            (seatObj) =>
                                seatObj.category === "Platinum" && (
                                    <Button
                                        onClick={() => handleSelect(seatObj)} 
                                        style={{
                                            margin: "5px",
                                            padding: "10px",
                                            width: "50px",
                                            height: "50px",
                                            backgroundColor: "grey",
                                            color: "black",
                                        }}
                                    >
                                        {seatObj.seat}
                                    </Button>
                                )
                        )}
                    </div>
                ))}
            </div>

            {/* Gold Seats */}
            <div>
                <h5 style={{ textAlign: "center", marginTop: "10px" }}>Gold ₹200</h5>
                {seatsMatrix.slice(3).map((seatArr, rowIndex) => (
                    <div
                        key={rowIndex}
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            marginBottom: "10px",
                        }}
                    >
                        {seatArr.map(
                            (seatObj, seatIndex) =>
                                seatObj.category === "Gold" && (
                                    <Button
                                        onClick={() => handleSelect(seatObj)} 
                                        key={seatIndex}
                                        style={{
                                            margin: "5px",
                                            padding: "10px",
                                            width: "50px",
                                            height: "50px",
                                            color: "black",
                                            backgroundColor: "gold",
                                        }}
                                    >
                                        {seatObj.seat}
                                    </Button>
                                )
                        )}
                    </div>
                ))}
            </div>

            <div style={{ marginTop: 10, marginLeft:200, width:'100%' }}>
                {selectSeats.length > 0 && (
                    <div>
                        <div>
                            {selectSeats.map((seat) => (
                                <span style={{ marginRight: 20 }}>
                                    {seat.seat}
                                </span>
                            ))}
                            <span style={{fontWeight:600}}>seats selected</span>
                        </div>
                        <div>
                            <h4>Total: ₹{calculateTotal()}</h4>
                            <Button onClick={()=> navigate('/success')}>Book Now</Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Select;
