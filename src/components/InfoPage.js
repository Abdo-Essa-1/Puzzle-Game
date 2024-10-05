import React from 'react';

const episodeData = {
  1: { image: '/images/pegasi.webp', info: "This is the 1st Planet. \
                                            It's Called 51 Pegasi B. \
                                            It belongs to the Hot Jupiters. \
                                            It was the first planet found around a star like our Sun, and that happened in 1995. \
                                            It goes around its star really fast, it takes only about 4 days to complete one trip! \
                                            You can find it in the sky in a group of stars called Pegasus, which is about 50 light-years away." },
2: { image: '/images/Proxima.jpg', info: "This is the 2nd Planet. \
                                          Orbiting the closest star to the Sun, Proxima Centauri, this planet is located just 4.24 light-years away. \
                                          It belongs to the rocky worlds planets. \
                                          Proxima b is about 1.17 times the mass of Earth and is located within the star's habitable zone, \
                                          meaning it could potentially have liquid water on its surface. \
                                          Its proximity and potential habitability make it a prime candidate for future studies." },
3: { image: '/images/kepler.PNG', info: "This is the 3rd Planet. \
                                         Kepler-22b, It belongs to the Mini-Neptunes. \
                                         located about 600 light-years away, is about 2.4 times the size of Earth. \
                                         It lies within the habitable zone of its star, but due to its size, \
                                         it is likely a Mini-Neptune with a thick, gaseous." },
4: { image: '/images/trappist.webp', info: "This is the 4th Planet. \
                                            Its Called TRAPPIST-1d, It belongs to the ocean world exoplanets. \
                                            Part of the TRAPPIST-1 system, \
                                            TRAPPIST-1d is located 40 light-years away and is one of the seven rocky planets orbiting a cool dwarf star. \
                                            It is believed to be smaller than Earth but could potentially have a thick atmosphere and oceans. \
                                            It lies just outside the habitable zone, \
                                            which suggests the possibility of liquid water under specific conditions, \
                                            such as a warm atmosphere or geothermal heating." }
};

function InfoPage({ episode, goBackLevel }) {
  const episodeInfo = episodeData[episode];

  return (
    <div id="infoPage" style={{ display: 'flex' }}>
      <h4>About the Exoplanet</h4>
      <img id="dynamic-image" src={episodeInfo.image} alt="Dynamic Image" width="400" height="400" />
      <p id="imageInfo">{episodeInfo.info}</p>
      <button onClick={goBackLevel}>Back to Episode Selection</button>
    </div>
  );
}

export default InfoPage;
