var pin;
var pin2;
var pin3;

function getMap() {
    var map = new Microsoft.Maps.Map(document.getElementById("mapContainer"),
        {credentials:"ArlrGBeFWbEgzrXBmsiMfus-6FFWjEqObtVZqCTqwELSV2NrFH7YPE2LXJPapBod",
            zoom: 5});

    var center = map.getCenter();
    var infoboxOptions = {width :200, height :100, visible: false, offset:new Microsoft.Maps.Point(10,35), showPointer: true};

    pin = new Microsoft.Maps.Pushpin(center, {
        icon: 'images/point.png'
    });
    var pinInfobox = new Microsoft.Maps.Infobox(pin.getLocation(), infoboxOptions);
    pinInfobox.setHtmlContent('<div class="infoBox"><b class="infoboxTitle">Title 1</b><p class="textInfobox">Text of infobox</p></div>');

    pin2 = new Microsoft.Maps.Pushpin({latitude: 0.7031, longitude:2.8125}, {
        icon: 'images/point2.png'
    });
    var pinInfobox2 = new Microsoft.Maps.Infobox(pin2.getLocation(), infoboxOptions);
    pinInfobox2.setHtmlContent('<div class="infoBox"><b class="infoboxTitle">Title 2</b><img class="imageInfobox" src="images/point2.png"></div>');

    pin3 = new Microsoft.Maps.Pushpin({latitude: 0.7031, longitude:6.1525}, {
        icon: 'images/point3.png'
    });
    var pinInfobox3 = new Microsoft.Maps.Infobox(pin3.getLocation(), infoboxOptions);
    pinInfobox3.setHtmlContent('<div class="infoBox"><b class="infoboxTitle">Title 3</b><img class="imageInfobox" src="images/point3.png"><p class="textInfobox">Text of infobox</p></div>');

    Microsoft.Maps.Events.addHandler(pin, 'click', displayInfobox);
    Microsoft.Maps.Events.addHandler(pin2, 'click', displayInfobox2);
    Microsoft.Maps.Events.addHandler(pin3, 'click', displayInfobox3);

    map.entities.push(pin);
    map.entities.push(pin2);
    map.entities.push(pin3);
    map.entities.push(pinInfobox);
    map.entities.push(pinInfobox2);
    map.entities.push(pinInfobox3);

    function displayInfobox(e) {
        if (pinInfobox.getVisible()) {
            pinInfobox.setOptions({ visible:false });
        }
        else {
            pinInfobox.setOptions({ visible:true });
        }
    }

    function displayInfobox2(e) {
        if (pinInfobox2.getVisible()) {
            pinInfobox2.setOptions({ visible:false });
        }
        else {
            pinInfobox2.setOptions({ visible:true });
        }
    }

    function displayInfobox3(e) {
        if (pinInfobox3.getVisible()) {
            pinInfobox3.setOptions({ visible:false });
        }
        else {
            pinInfobox3.setOptions({ visible:true });
        }
    }
}

function visiblePoint(point) {
    if (point.getVisible()) {
        point.setOptions({visible:false});
    }
    else {
        point.setOptions({visible:true});
    }
}
