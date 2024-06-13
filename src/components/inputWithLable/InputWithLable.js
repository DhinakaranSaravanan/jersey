import React from 'react'
import './inputWithLable.css'

function InputWithLable({
    type,
    placeholder
}) {
    function setFocus(on) {
        var element = document.activeElement;
        // console.log(element);
        if (on) {
            setTimeout(function() {
                element.parentNode.classList.add("focus");
            });
        } else {
            let box = document.querySelectorAll(".input-box");
            //   console.log(box);
            box.forEach(el => {
                el.classList.remove("focus");

            });
            //   box.classList.remove("focus");

            // $("input").each(function () {
            //   var $input = $(this);
            //   var $parent = $input.closest(".input-box");
            //   if ($input.val()) $parent.addClass("focus");
            //   else $parent.removeClass("focus");
            // });
        }
    }
    return ( <
        >
        <
        div className = "input-box active-grey" >
        <
        label className = "input-label" > {
            placeholder
        } < /label> <
        input type = {
            type
        }
        className = "input-1"
        onFocus = {
            () => setFocus(true)
        }
        onBlur = {
            () => setFocus(false)
        }
        /> <
        /div> <
        />
    )
}

export default InputWithLable