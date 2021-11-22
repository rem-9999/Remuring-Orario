var images = ['https://i.imgur.com/mA8yda8.jpg', 'https://imgur.com/Hsw4nhm.png'];

$('#container').append('<style>#container, .acceptContainer:before, .logoContainer:before {background: url(' + images[Math.floor(Math.random() * images.length)] + ') center fixed }');