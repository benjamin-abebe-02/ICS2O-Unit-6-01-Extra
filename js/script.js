// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit-6-01-Extra/sw.js", {
    scope: "/ICS2O-Unit-6-01-Extra/",
  })
}


function myButtonClicked() {
  const userAge = document.getElementById("user-age").value

  // proces
  if (userAge <= 3) {
    // Display the number
    document.getElementById("answer").innerHTML = "<p>Your to young so you can only waych G rated movies alone</p>"
  } else if (userAge <= 9){
    document.getElementById("answer").innerHTML = "<p>You can only watch G or PG rated movies alone</p>"
  } else if (userAge <= 13) {
    document.getElementById("answer").innerHTML = "<p>You can only watch PG-13 rated movies alone</p>"
  } else {
    document.getElementById("answer").innerHTML = "<p>You can only watch R rated movies alone</p>"
  }
}
