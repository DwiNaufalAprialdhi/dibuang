// visible Toggle Password
const visible = document.querySelector('.visible-icons')
const unvisible = document.querySelector('.unvisible-icons')
var x = document.getElementById('password')

function visibleToggle() {
    if (x.type === "password") {
      x.type = "text";
      visible.classList.toggle('hidden')
      unvisible.classList.toggle('block')

    }
  }
  
function unvisibleToggle(){
    if (x.type === "text") {
        x.type = "password";
        unvisible.classList.toggle('block')
        visible.classList.toggle('block')
        visible.classList.remove('hidden')
    } else if (x.type === "password") {
        visible.classList.add('block')
    }
}

// visible Toggle Password Confirm
const visibleConfirm = document.querySelector('.visible-confirm-icons')
const unvisibleConfirm = document.querySelector('.unvisible-confirm-icons')
var data = document.getElementById('password_confirm')

function visibleConfirmToggle() {
    if (data.type === "password") {
      data.type = "text";
      visibleConfirm.classList.toggle('hidden')
      unvisibleConfirm.classList.toggle('block')

    }
  }
  
function unvisibleConfirmToggle(){
    if (data.type === "text") {
        data.type = "password";
        unvisibleConfirm.classList.toggle('block')
        visibleConfirm.classList.toggle('block')
        visibleConfirm.classList.remove('hidden')
    } else if (data.type === "password") {
      visibleConfirm.classList.add('block')
    }
}