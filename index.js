$('#click').click(function (e) {
  e.preventDefault()

  let value = $('#todo').val()
  let table = `  <tr id="${value}">
                <td>${value}</td>
                <td id="status"><i class="material-icons">not_interested</i></td>
                <td id="action"><a onclick="done(${value})" class="waves-effect waves-light btn"><i class="material-icons left">done</i>Done</a></td>
                <td><a onclick="bin(${value})" id="${value}click" class="waves-effect waves-light btn"><i class="material-icons left">delete</i>Delete</a></td>
              </tr>`

  $('#tablebody').append(table)
})

function bin (value) {
  value.remove()
}
function done (value) {
  let done = `<i class="material-icons">done</i>`
  let undone = `<a onclick="undone(${value})" class="waves-effect waves-light btn"><i class="material-icons">not_interested</i>Not Yet</a>`

  $(`#${value.id} #status`).html(done)
  $(`#${value.id} #action`).html(undone)
}

function undone (value) {
  let undone = `<i class="material-icons">not_interested</i>`
  let done = `<a onclick="done(${value})" class="waves-effect waves-light btn"><i class="material-icons left">done</i>Done</a>`

  $(`#${value.id} #status`).html(undone)
  $(`#${value.id} #action`).html(done)
}
