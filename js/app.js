'use strict'

$(document).ready(function () {

  let playList = [
    {
      author: "LED ZEPPELIN",
      song: "STAIRWAY TO HEAVEN"
    }, {
      author: "QUEEN",
      song: "BOHEMIAN RHAPSODY"
    }, {
      author: "LYNYRD SKYNYRD",
      song: "FREE BIRD"
    }, {
      author: "DEEP PURPLE",
      song: "SMOKE ON THE WATER"
    }, {
      author: "JIMI HENDRIX",
      song: "ALL ALONG THE WATCHTOWER"
    }, {
      author: "AC/DC",
      song: "BACK IN BLACK"
    }, {
      author: "QUEEN",
      song: "WE WILL ROCK YOU"
    }, {
      author: "METALLICA",
      song: "ENTER SANDMAN"
    }];

  $('body').append('<ol class="ourList"></ol>')

  createList(playList)

  function createList(list) {
    for (let track of list) {
      let $track = $(`<li> ${track.author} - ${track.song} <button class="moreInfoBtn">More info</button> </li>`)
      let $moreInfoBtn = $track.find('.moreInfoBtn')
      $('.ourList').append($track)
      $moreInfoBtn.click(function () {
        $track.addClass('checked')
        modalWindow(track.author, track.song)
      })
    }
  }

  function modalWindow(author, song) {
    $('body').append(`<div class="window">
		<p class="playListSong">${author} - ${song}</p>         
		<button class="closeModalWindowBtn">Close</button>
		</div>`)
    let $closeModalWindow = $('.window').find('.closeModalWindowBtn')
    $closeModalWindow.click(function () {
      $('.window').remove()
    })
  }
})