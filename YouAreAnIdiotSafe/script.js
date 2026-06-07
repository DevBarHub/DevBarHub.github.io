resizeTo(150,140);
x=0;
y=0;
i=2;
j=2;

setInterval(function() {
    if (x < 0 || x > screen.width - 150) i = -i;
    if (y < 0 || y > screen.height - 140) j = -j;
    moveTo(x += i, y += j);
}, 16.67);
