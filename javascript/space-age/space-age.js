// Given an age in seconds, calculate how old someone would be on:

// - Mercury: orbital period 0.2408467 Earth years
// - Venus: orbital period 0.61519726 Earth years
// - Earth: orbital period 1.0 Earth years, 365.25 Earth days, or 31,557,600 seconds
// - Mars: orbital period 1.8808158 Earth years
// - Jupiter: orbital period 11.862615 Earth years
// - Saturn: orbital period 29.447498 Earth years
// - Uranus: orbital period 84.016846 Earth years
// - Neptune: orbital period 164.79132 Earth years

export const age = (planet, sec) => {
  const orbitalPeriods = {
    mercury: 7600543.82,
    venus: 19414149.05,
    earth: 31557600.0,
    mars: 59354032.69,
    jupiter: 374355659.12,
    saturn: 929292362.88,
    uranus: 2651370019.33,
    neptune: 5200418560.03
  };

  return Number((sec / orbitalPeriods[planet.toLowerCase()]).toFixed(2));
};
