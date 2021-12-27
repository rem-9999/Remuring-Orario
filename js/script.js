var images = ['https://i.imgur.com/vasZSd2.jpeg'];

$('#container').append('<style>#container, .acceptContainer:before, .logoContainer:before {background: url(' + images[Math.floor(Math.random() * images.length)] + ') center fixed }');
