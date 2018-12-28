function app () {
  var input = document.querySelector('input')
  var client = new Ably.Realtime('Q9ulpA.yqqQ1w:JzyBJdWhhGDWVt_G')

  var channel = client.channels.get('hello-ably')

  channel.subscribe('slider:change', function (message) {
    input.value = message.data
  })

  input.addEventListener('change', function (event) {
    channel.publish('slider:change', event.target.value)
  })
}
