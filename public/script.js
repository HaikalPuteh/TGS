// api url
const api_url = "https://api.thingspeak.com/channels/2057746/feeds.json?api_key=P7XRE0C72504BX4R&results=1";
// masukan url sesuai dengan format <ChannelID>, <ReadAPIKeys> yang ada di Thingspeak, tanpa menggunakan < >

setInterval(() => {
  fetch(api_url)
    .then((hasil) => hasil.json())
    .then((res) => {
      var field = JSON.stringify(res.feeds[0]);
      var obj = JSON.parse(field);
      document.getElementById("Lux").innerHTML = obj.field1;
      document.getElementById("Kelembapan").innerHTML = obj.field2;
      document.getElementById("Suhu").innerHTML = obj.field3;
    });
}, 1000);

$("#window").click(function() {
  var sa = $(this).text();
  $(this).text("");
  $(this).addClass("ball");
  setTimeout(function() {
    $("#modal").fadeIn();
    $("#close").css("width", "30px");
    $("#close").css("height", "30px");
    setTimeout(function() {
      $("#window").removeClass("ball");
      $("#window").text(sa);
    }, 500);
  }, 800);
});

$("#close").click(function() {
  $("#modal").fadeOut();
  $("#close").css("width", "0px");
  $("#close").css("height", "0px");
});