function produceDrivingRange(distance){
  return function(block1, block2){

    const first = block1.replace("th", "")
    const second = block2.replace("th", "")
    const arr = [first, second].sort()
    const range = arr[1] - arr[0]
    // debugger
    if(distance > range){

      return `within range by ${distance - range}`
    }
    else{
      return `${range - distance} blocks out of range`

    }
  }
}

function produceTipCalculator(percent){
  const dec = percent
  return function(num){
    return dec * num
  }
}

function createDriver(str){
  let id = 0
  return class {
    constructor(name){
      this.name = name
      this.id = ++id
    }
  }
}
