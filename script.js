
//Upper-Case
document.getElementById("upper-case").addEventListener("click", function ()
{
    let str = document.querySelector("textarea").value
    document.querySelector("textarea").value = str.toUpperCase();
});

//Lower-Case
document.getElementById("lower-case").addEventListener("click", function ()
{
    let str = document.querySelector("textarea").value
    document.querySelector("textarea").value = str.toLowerCase();
});

//Proper-Case
document.getElementById("proper-case").addEventListener("click", function ()
{
    let str = document.querySelector("textarea").value.toLowerCase().split(" ");
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    document.querySelector("textarea").value= str.join(' ');
});

//Sentence-Case
document.getElementById("sentence-case").addEventListener("click", function ()
{
    let str = document.querySelector("textarea").value
    str = str.toLowerCase().split(". ").join(".").split(".");
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    document.querySelector("textarea").value = str.join(". ");
});

//Copy
document.getElementById("copy-text").addEventListener("click", function()
{
    document.querySelector("textarea").select();
    document.execCommand('copy');
});

// Download
document.getElementById("save-text-file").addEventListener("click", function()
{
    let text = document.getElementById("textarea").value;
    let filename = "text"
    download(filename, text);
});

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}






/*
document.getElementById("sentence-case").addEventListener("click", function ()
{
    let str = document.querySelector("textarea").value.toLowerCase().split(". ");
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    document.querySelector("textarea").value= str.join('. ');
});
*/






