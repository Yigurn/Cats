    setInterval(focus, 200 );
    var animate, imgObj = null;
    var focused = true;
    var time = 20;

    function cats() {
        var cat = document.createElement("img");
        cat.setAttribute("id", "cat");
        cat.setAttribute("src", "cat.gif");
        cat.setAttribute("width", "100px");
        cat.setAttribute("height", "100px");
        cat.setAttribute("style", "position: absolute; bottom: -10px; left: -100px");
        document.body.appendChild(cat);
        return cat;
    }

    function random(max, min) {
        return Math.floor((Math.random() * max) + min);
    }

    function focus() {
        if (!focused && document.hasFocus()) {
            console.log("Cat Spawned! - Focus");
            time = 20;
            setTimeout(move, random(1000 * time, (time - 5) * 1000));
            focused = true;
        }
        else if (document.hasFocus())
            focused = true;
        else
            focused = false;
        return focused;
    }

    function move() {
            var left = 0;
            var cat = cats();
            var speedy = random(10, 1);
            left = parseInt(cat.style.left, 10);
            function right() {
                if (left <= window.innerWidth) {
                    cat.style.left = left + 'px';
                    left += speedy;
                    animate = setTimeout(right, 20);
                }
                else {
                    document.body.removeChild(cat);
                }
            }
            right();
        if (focus()) {
            console.log("Cat Spawned!");
            setTimeout(move, random(1000 * time, 0));
            if (time > 3)
            {
                time-=3;
                console.log(time);
            }
        }
    }
    window.onload = setTimeout(move, random(1000 * time, (time - 5) * 1000));
