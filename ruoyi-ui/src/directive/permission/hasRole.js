 /**
 * 角色权限处理
 * Copyright (c) 2019 ruoyi
 */
 
import store from '@/store'

export default {
  //钩子函数inserted：被绑定元素插入父节点时调用
  //参数el：指令所绑定的元素
  //参数binding：一个对象
  //参数vnode：Vue 编译生成的虚拟节点
  inserted(el, binding, vnode) {
    const { value } = binding
    const super_admin = "admin";
    const roles = store.getters && store.getters.roles

    if (value && value instanceof Array && value.length > 0) {
      const roleFlag = value

      const hasRole = roles.some(role => {
        return super_admin === role || roleFlag.includes(role)
      })

      if (!hasRole) {
        el.parentNode && el.parentNode.removeChild(el)
      }
    } else {
      throw new Error(`请设置角色权限标签值"`)
    }
  }
}
