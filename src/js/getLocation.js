export default function getLocation(textField) {
  if (navigator.geolocation) {
    // console.log(navigator.geolocation);
    navigator.geolocation.getCurrentPosition(
      (position) => {
      const { latitude, longitude } = position.coords;
  
      console.log('latitude ' + latitude);
      console.log('longitude ' + longitude);
      console.log(textField);
      textField = `[${latitude}: ${longitude}]`;
    }, (err) => {console.log(err);},
    { enableHighAccuracy: true})
  }
}

/* export default function getLocation() {
  // let answer = '0';

  if (navigator.geolocation) {
    // console.log(navigator.geolocation);
    let answer = '45';
    answer = navigator.geolocation.getCurrentPosition(
      (data) => {
      const { latitude, longitude } = data.coords;
  
      console.log('latitude ' + latitude);
      console.log('longitude ' + longitude);
      console.log(`[${latitude}: ${longitude}]`);
      // return { latitude, longitude };
      // return `[${latitude}: ${longitude}]`;
      answer = `[${latitude}: ${longitude}]`;
      return answer;
    }, (err) => {console.log(err);},
    { enableHighAccuracy: true,
      timeout: 1000, // под вопросом
    });
    console.log(answer);
    return answer;
  } // проверка поддержки геолокации
  // const coords = `[${latitude}: ${longitude}]`
  // return coords;
  return null;
} */

