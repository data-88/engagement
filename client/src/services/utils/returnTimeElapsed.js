// >>> https://stackoverflow.com/questions/6312993/javascript-seconds-to-time-string-with-format-hhmmss

export default dataSeconds => {
  var sec_num = parseInt(dataSeconds, 10); // don't forget the second param
  var hours = Math.floor(sec_num / 3600);
  var minutes = Math.floor((sec_num - hours * 3600) / 60);
  var seconds = sec_num - hours * 3600 - minutes * 60;

  // if (hours < 10) {
  //   hours = "0" + hours;
  // }
  // if (minutes < 10) {
  //   minutes = "0" + minutes;
  // }
  // if (seconds < 10) {
  //   seconds = "0" + seconds;
  // }
  return hours + "h " + minutes + "m " + seconds + "s";
};
