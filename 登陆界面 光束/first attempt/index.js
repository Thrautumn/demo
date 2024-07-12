const eyeball = document.querySelector('#eyeball')
const password = document.querySelector('#password')

eyeball.addEventListener('click' , e => {
    // 阻止按钮默认的表单提交事件
    e.preventDefault()
    // 切换body的自定义属性
    document.body.classList.toggle('show-password')
    console.log(document.body);
    // 显示密码框的密码
    password.type = password.type === 'password' ? 'text' : 'password'
    // 焦点重新聚焦到密码框上面
    password.focus()
})

const root = document.documentElement
const beam = document.querySelector('#beam')

root.addEventListener('mousemove'  , e =>  {
    let position = beam.getBoundingClientRect()
    let x = position.left + ( position.width / 2 )
    let y = position.top + ( position.height / 2)
    let rad = Math.atan2(y-e.pageY , x-e.pageX)
    let degree = (rad * (3 / Math.PI)) - 360
    
    // 向html追加degree自定义属性 
    root.style.setProperty('--degree', `${degree}deg`)
})