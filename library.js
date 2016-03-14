var lib = _ || {};

function _(selector) {
    
    _.selector = selector;
    _.element = document.querySelector(_.selector);
    
    _.css = function(property, value)
    {
        return _.element.style[property] = value;
    }
    
    _.bgColor = function(color)
    {
        return _.element.style.backgroundColor = color;
    }
    
    _.bgImg = function(img_path, img_id, bg_position, bg_size, bg_repeat)
    {
        var new_bg_img = document.createElement("div");
        new_bg_img.className = "bg-img-lib";
        new_bg_img.style.backgroundImage = "url('"+img_path+"')";
        if (img_id != null && img_id != "") new_bg_img.id = img_id;
        if (bg_position != null && bg_position != "") new_bg_img.style.backgroundPosition = bg_position;
        if (bg_size != null && bg_size != "") new_bg_img.style.backgroundSize = bg_size;
        if (bg_repeat != null && bg_repeat != "") new_bg_img.style.backgroundRepeat = bg_repeat;
        return _.element.appendChild(new_bg_img);
    };
    
    return _;
}