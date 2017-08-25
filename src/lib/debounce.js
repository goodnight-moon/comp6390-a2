export default function debounce(fn, itvl = 16) {
  let timeout
  let datas = []
  return (data) => {
    datas.push(data)
    if (!timeout) {

      fn(datas[0], datas)
      datas = []

      timeout = setTimeout(() => {
        fn(datas[0], datas)
        timeout = clearTimeout(timeout)
        datas = []
      }, itvl)
      
    }
  }
}