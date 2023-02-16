const form = document.querySelector("#form")
const table = document.querySelector("#table-body")

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const alert = (message, type) => {
  let wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}


form.addEventListener("submit", (event) => {
   
    event.preventDefault()
    let title = document.querySelector("#title").value
    let author = document.querySelector("#author").value
    let isbn = document.querySelector("#isbn").value

    table.innerHTML += `
    <tr>
    <td>${title}</td>
    <td>${author}</td>
    <td>${isbn}</td>
    <td><i class="fa-solid fa-trash"></i></td>
    </tr>
    `
    form.reset()
    alert('You have submitted a book!', 'success')


    
    

});


