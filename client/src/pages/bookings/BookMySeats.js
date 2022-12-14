import React, {useState , useEffect} from 'react';
import Seats from './Seats';
import axios from 'axios'


const BookMySeats = ({response}) => {
  const { availableStalls , bookedStalls , bookStatus , data} = response
  const normalSeats = data;
  const [availableSeats, setAvailableSeats] = useState(availableStalls);
  const [bookedSeats, setBookedSeats] = useState(bookedStalls);
  const [bookedStatus, setBookedStatus] = useState(bookStatus);


  useEffect(() => {
    const script = document.createElement('script');
  
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
  
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    }
  }, []);


  const addSeat = (ev) => {
      if(numberOfSeats && !ev.target.className.includes('disabled')) {
          const seatsToBook = parseInt(numberOfSeats, 20);
        if(bookedSeats.length <= seatsToBook) {
            if (bookedSeats.includes(ev.target.innerText)) {
                const newAvailable = bookedSeats.filter(seat => seat !== ev.target.innerText);
                setBookedSeats(newAvailable);
            } else if(bookedSeats.length < numberOfSeats) {
                setBookedSeats([...bookedSeats, ev.target.innerText]);

            } else if (bookedSeats.length === seatsToBook) {
                bookedSeats.shift();
                setBookedSeats([...bookedSeats, ev.target.innerText]);
            }
        }
      }
    };

    const initPayment = (data) => {
    let bookedStats = bookedSeats.toString()
       const options = { 
        key:"rzp_live_IJpSrM5UHhwXp7",
        amount:data.amount,
        currency:data.currency,
        order_id:data.id,
        bookedSeats:bookedStats,
        description:"live",
        handler:async(response) =>{
            try {
                const verifyUrl = "/verify";
                const {data} = await axios.post(verifyUrl,response)
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        },
        theme:{
            color:"#3399cc"
        }
       };
       const rzp = new window.Razorpay(options);
        rzp.open();

    }  
    const confirmBooking = async() => {
      setBookedStatus('You have successfully booked following seats:');
      bookedSeats.forEach(seat => {
           setBookedStatus(prevState => {
               return prevState + seat + ' ';
           })
      });

      try {
        const orderUrl = "/orders";
        const {data} = await axios.post(orderUrl,{amount:stallPrice*bookedSeats.length})
        console.log(data)
        initPayment(data.data)
      } catch (error) {
        console.log(error)
      }

      const newAvailableSeats = availableSeats.filter(seat => !bookedSeats.includes(seat));
      setAvailableSeats(newAvailableSeats);
      setBookedSeats([]);
      setNumberOfSeats(0);
  };
  const [numberOfSeats, setNumberOfSeats] = useState(0);

  return (
        <React.Fragment>
            <p>How Many Stalls Would You Like to Book?</p>
            <input value={numberOfSeats} onChange={(ev) => setNumberOfSeats(ev.target.value)}/>

            <div>
              <br></br>
            </div>
            {/* <Seats values={normalSeats}
                   availableSeats={availableSeats}
                   bookedSeats={bookedSeats}
                   addSeat={addSeat}/> */}
              {/* <div className='stallrows'>
                <div className='arow'>
                  <Seats  values={["Advert-ising","Fruits","Tarkari","Snacks","Tarkari","Tarkari","Exotic","Tarkari","Tarkari","Onion- Potato","Tarkari","Tarkari","SHG","Tarkari","SHG","Leafy"]}
                  availableSeats={[]}
                  bookedSeats={[]}
                  addSeat={addSeat}/>
                  </div>
                <div className='midrow'>
                  <Seats  values={["Flower- Kobi"]}
                  availableSeats={[]}
                  bookedSeats={[]}
                  addSeat={addSeat}/>
                  </div>
                  <div className='midrow'>
                  <Seats  values={["Tarkari"]}
                  availableSeats={[]}
                  bookedSeats={[]}
                  addSeat={addSeat}/>
                  </div>
                  <div className='brow'>
                  <Seats  values={["Advert-ising","Leafy","Tarkari","Tarkari","Masala", "Tarkari","Tarkari","Antioc","Tarkari","Tarkari","Dry- Fruits","Tarkari","SHG","Onion-Potatos","SHG","Fruits"]}
                  availableSeats={[]}
                  bookedSeats={[]}
                  addSeat={addSeat}/>
                  </div>
                  <br></br>
                  <div className='bookeda' >
                    <div className='bookedseat'> Stalls</div>
                    <h4>Booked</h4>
                  </div>
                  <div className='availa'>
                    <div className='availseat'> Stalls</div>
                    <h4>Available</h4>
                  </div>

                 
                </div>
                

                   <button onClick={confirmBooking}>Book Stalls</button> */}
            <p>{bookedStatus}</p>
        </React.Fragment>

    );
}

export default BookMySeats;