$(document).ready(function () {
    var urls = [
        "https://media.istockphoto.com/photos/sunset-with-pebbles-on-beach-in-nice-france-picture-id1157205177?k=20&m=1157205177&s=612x612&w=0&h=bmCFFtaLRtF_eYhjZ3FkhPXU3X-yrdvr85xvl2CmQ9g=",
        "https://media.istockphoto.com/photos/val-disre-city-picture-id538277557?k=20&m=538277557&s=612x612&w=0&h=ip9Ztogv_H9datl67Ev2QorhMmdzBv2R3G0FUPNZpRg=",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzfu-RneBib0ETYhWnCWz7M3AqzRB0k7jo5Q&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSub7Lup0Y_mzeHOw43Px2outIDVfSEei4iUVo1q3RfKVsGWIt9PKljhATyfZSLMeakIW4&usqp=CAU",
        "https://media.istockphoto.com/photos/villefranche-on-sea-in-evening-picture-id1145618475?k=20&m=1145618475&s=612x612&w=0&h=_mC6OZt_eWENYUAZz3tLCBTU23uvx5beulDEZHFLsxI=",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLYV7DtcRkDaxiJV-v8k448P8tY5YIkr80lJMiq-G63VeeY15ymNI_FmmRjg6qBxUPxg0&usqp=CAU",
    ];
  
    var cout = 1;
    $("body").css("background-image", 'url("' + urls[0] + '")');
    setInterval(function () {
      $("body").css("background-image", 'url("' + urls[cout] + '")');
      cout == urls.length - 1 ? (cout = 0) : cout++;
    }, 6000);
  });