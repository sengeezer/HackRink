double = (numbers) -> numbers.map (n) -> n * 2

class Task
  constructor: (@name, @done = false) ->

  status: -> if @done then "done" else "todo"

numbers = [1, 2, 3, 4]
task = new Task "Write CoffeeScript sample", true

console.log "Doubled numbers:", double numbers
console.log "Task status:", task.status()