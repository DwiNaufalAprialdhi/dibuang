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

// Toggle Transaksi Proses dan Riwayat
const tProses = document.querySelector('.transaction-proses-btn')
const tRiwayat = document.querySelector('.transaction-riwayat-btn')

const tpContent = document.querySelector('.tp-content')
const trContent = document.querySelector('.tr-content')

function transactionProses() {
  console.log('Masuk Proses')
  tRiwayat.classList.remove('bg-secondary')
  tProses.classList.add('bg-secondary')
  tpContent.classList.remove('hidden')
  trContent.classList.add('hidden')
}

function transactionRiwayat() {
  console.log('Masuk Riwayat')
  tRiwayat.classList.add('bg-secondary')
  tProses.classList.remove('bg-secondary')
  tpContent.classList.add('hidden')
  trContent.classList.remove('hidden')
}

// Toggle Mutasi Proses dan Riwayat
const mProses = document.querySelector('.mutasi-proses-btn')
const mRiwayat = document.querySelector('.mutasi-riwayat-btn')

const mpContent = document.querySelector('.mp-content')
const mrContent = document.querySelector('.mr-content')

function mutasiProses() {
  console.log('Masuk Proses')
  mRiwayat.classList.remove('bg-secondary')
  mProses.classList.add('bg-secondary')
  mpContent.classList.remove('hidden')
  mrContent.classList.add('hidden')
}

function mutasiRiwayat() {
  console.log('Masuk Riwayat')
  mRiwayat.classList.add('bg-secondary')
  mProses.classList.remove('bg-secondary')
  mpContent.classList.add('hidden')
  mrContent.classList.remove('hidden')
}