const form = document.querySelector("#form")
const table = document.querySelector("#table-body")


form.addEventListener("submit", (event)=>{
    event.preventDefault() 
    const title = document.querySelector("#title").value
    const author = document.querySelector("#author").value
    const isbn = document.querySelector("#isbn").value

    table.innerHTML = `
    <tr>
    <td>${title}</td>
    <td>${author}</td>
    <td>${isbn}</td>
    </tr>
    `
});


