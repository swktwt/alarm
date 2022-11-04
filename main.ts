function random () {
    basic.showNumber(randint(0, 100))
}
radio.onReceivedString(function (receivedString) {
    random()
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("thief")
})
radio.setGroup(1)
