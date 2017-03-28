const MAX_VIEW_COUNT = 1000000000
const MIN_VIEW_COUNT = 100000000
const MAX_NUM_LIKES = 1000000
const MAX_NUM_DISLIKES = 30

function addCommasToInt(n) {
  number = n.toString().split("").reverse()
  i = 0
  while (i < number.length) {
    if (i % 4 == 0) {
      number.splice(i, 0, ",")
      i++
    }
    i++
  }
  number = number.reverse().slice(0, number.length - 1)
  return number.join("")
}

function generateRandomViewString() {
  var newViewsInt = Math.floor(Math.random() * (MAX_VIEW_COUNT - MIN_VIEW_COUNT) + MIN_VIEW_COUNT)
  var newViews = addCommasToInt(newViewsInt)
  newViews += " views"
  return newViews
}

function updateViewCountsForClass(className) {
  var html = document.getElementsByClassName(className)
  for (var i = 0; i < html.length; i++) {
     var newView = generateRandomViewString()
     html[i].innerHTML = newView
  }
}

function updateLikeAndDislikeCounts() {
  var likesHTML = document.getElementsByClassName("like-button-renderer-like-button")
  var newLikesInt = Math.floor(Math.random() * MAX_NUM_LIKES)
  var newLikes = addCommasToInt(newLikesInt)
  for (var i = 0; i < likesHTML.length; i++) {
     likesHTML[i].innerHTML = newLikes
  }

  var dislikesHTML = document.getElementsByClassName("like-button-renderer-dislike-button")
  var newDislikesInt = Math.floor(Math.random() * MAX_NUM_DISLIKES)
  var newDislikes = addCommasToInt(newDislikesInt)
  for (var i = 0; i < likesHTML.length; i++) {
     dislikesHTML[i].innerHTML = newDislikes
  }
}

function go() {
  updateViewCountsForClass("watch-view-count")
  updateViewCountsForClass("view-count")
  updateViewCountsForClass("yt-lockup-meta-info")

  updateLikeAndDislikeCounts()

}

(document.body || document.documentElement).addEventListener('transitionend',
  function(/*TransitionEvent*/ event) {
    if (event.propertyName === 'width' && event.target.id === 'progress') {
        go();
    }
}, true);

window.onload = go()
