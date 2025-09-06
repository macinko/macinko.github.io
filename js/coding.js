window.onload = () => {
    const canvas = document.getElementById("coding")
    const window_screen = window.screen
    const w = (canvas.width = window_screen.width)
    const h = (canvas.height = window_screen.height)
    const fontSize = 15
    const context = canvas.getContext('2d') // 返回一个用于在画布上绘图的环境

    let col = 0 // 列数
    let drops = [] // 保存每一列当前的位置

    col = Math.floor(w / fontSize) // 得到代码雨的列数

    for (let i = 0; i < col; i++) {
        drops.push(0)
    }

    var str = 'qwertyuiopasdfghjklzxcvbnm0123456789' //代码雨中的文字

    function rain() {
        context.fillStyle = 'rgba(0, 0, 0, .1)' // 增加一个遮盖层
        context.fillRect(0, 0, w, h)
        context.fillStyle = '#00ff00' // 先为要显示的文字设置好颜色

        for (let i = 0; i < col; i++) {
            const index = Math.floor(Math.random() * str.length)
            const x = i * fontSize
            const y = drops[i] * fontSize

            context.fillText(str[index], x, y) // 把文字写到画布上去
            if (y >= canvas.height && Math.random() >= 0.99) {
                // 通过random()实现列与列位置的差别
                drops[i] = 0
            }
            drops[i]++
        }
    }

    setInterval(rain, 30)
}