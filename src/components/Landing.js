import React, { useState, useEffect } from 'react';
import './Landing.css'; // Import the CSS file

function Landing() {
  const [timeLeft, setTimeLeft] = useState(60); // 60 seconds countdown
  const [featuredItems, setFeaturedItems] = useState([
    { id: 1, name: 'BMW', image: 'https://www.bmw-special-sales.com/content/dam/bmw/marketBMWCOM/bmw-special-sales_com/common/protection/7-protection/bmw-css-7-series-protection-ms-new-standard.jpg', description: 'Sheer Driving Pleasure.' },
    { id: 2, name: 'Sports Car', image: 'https://www.topgear.com/sites/default/files/2021/12/8.%20Lotus%20Evija.jpeg', description: 'Built For The Fast Lane.' },
    { id: 3, name: 'THAR', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Mahindra_Thar_Photoshoot_At_Perupalem_Beach_%28West_Godavari_District%2CAP%2CIndia_%29_Djdavid.jpg/800px-Mahindra_Thar_Photoshoot_At_Perupalem_Beach_%28West_Godavari_District%2CAP%2CIndia_%29_Djdavid.jpg', description: 'A Classic Mahndra THAR In Mint Condition.' },
    { id: 4, name: 'Mercedes', image: 'https://img.etimg.com/thumb/width-420,height-315,imgsize-149359,resizemode-75,msid-65039294/industry/auto/cars-uvs/from-dharwad-to-jalgaon-mercedes-benz-wants-to-capture-indias-hinterland/mercedes-.jpg', description: 'Keep Calm And Drive On.' },
    { id: 5, name: 'Porsche', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThvLHSQNGAB1RJVNtDavx0XhhXMKA-rTnPUw&s', description: 'Driving Is The Most Beautiful Form.' },
    { id: 6, name: 'Lamborghini', image: 'https://cdn-thumbs.ohmyprints.net/1/a1259dccc226b6708addc96fd539a1c0/817x600/thumbnail/fit.jpg', description: 'Expect The Unexpected.' },
    { id: 8, name: 'Rolls-Royce', image: 'https://mediapool.bmwgroup.com/cache/P9/202110/P90442352/P90442352-rolls-royce-announces-black-badge-ghost-the-purest-black-badge-yet-2249px.jpg', description: 'Strive For Perfection In Everything You Do.' },
    { id: 8, name: 'Range Rover', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJZ244ZG2cdSzBHZ8FPes0Y0o0lM_18d1Jug&s', description: 'Always Above and Beyond.' },
    { id: 9, name: 'Fortuner', image: 'https://media.zigcdn.com/media/content/2020/Nov/zw-toyota-fortuner-2020-3_lead.jpg?tr=w-1200', description: 'Style Plays Rough.' }

  ]);

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

      return () => clearInterval(timerId);
    }
  }, [timeLeft]);

  return (
    <>
      <div className='content'>
        <main>
          <section className='hero'>
            <div className='hero-content'>
              <h2>Welcome </h2>
              <div className='timer'>
                <h3>Auction starts in: <span>{timeLeft}</span> seconds</h3>
              </div>
            </div>
          </section>
          <section className='featured-items'>
            <h3>Available Brands</h3>
            <div className='items'>
              {featuredItems.map(item => (
                <div key={item.id} className='item'>
                  <img src={item.image} alt={item.name} />
                  <div className='item-info'>
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default Landing;