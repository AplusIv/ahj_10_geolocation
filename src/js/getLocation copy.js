/* ??? Изначально хотел использовать отдельным компонентом (функция getLocation)
получение геопозиции,
 но не получается вернуть из navigator.geolocation.getCurrentPosition() данные.
 Не могу вернуть данные из колбеков, чтобы их потом подставить в новый пост.
 Попробовал это сделать в основном классе Timeline, но там тоже проблемы
 на этапе ручного ввода данных. Могу только их записать в поля классов,
 но запись происходит одновременно вместе с событием Submit и закрытием модального окна,
 и эти данные на момент подстановки undefined (записываю в this.coords класса ValidationForm)
 Как мне доработать класс Timeline или ValidtionForm, чтобы подхватить эти данные?
 В идеале, наверное просто вернуть.
 Требуется ваша поддержка и помощь:)
*/

export default function getLocation(geolocationField) {
  /* if (navigator.geolocation) {
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
  } */

  let positionCheck = {
    position: true,
    error: false,
  };

  if (navigator.geolocation) {
    (() => {
      const result = {
        // position: ,
        // error,
      };

      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          console.log(`latitude ${latitude}`);
          console.log(`longitude ${longitude}`);
          // post.querySelector('.geolocation').textContent = `[${latitude}, ${longitude}]`;
          // return `[${latitude}: ${longitude}]`;
          result.position = `[${latitude}, ${longitude}]`;
          positionCheck = result;
          console.log(positionCheck);
          // geolocationField = positionCheck.position;
          // this.container.firstElementChild.appendChild(post);
        },
        (err) => {
        // return err
          console.log(err);
          result.error = err;
          console.log(result.error);
          positionCheck = result;
          console.log(positionCheck);
          this.showModal();
        // return err;
        },
        { enableHighAccuracy: true },
      );
      // return result;
      // console.log(result);
      // positionCheck = result;
      // console.log(positionCheck);
    })();
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
