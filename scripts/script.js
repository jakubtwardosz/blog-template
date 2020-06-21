// Create a "close" button and append it to each list item

var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) 
{
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item

var close = document.getElementsByTagName("close");
var i;
for (i = 0; i < close.length; i++)
{
    close[i].onclick = function()
    {
        var div = this.parentElement;
        div.style.display = "none";
    }
    
}

// Add a "checked" symbol when clicking on a list item

var list = document.querySelector('ul');
list.addEventListener('click', function(ev)
{
   if (ev.target.tagName === 'li')
   {
       ev.target.classList.toggle('checked');
   } 
}, false );