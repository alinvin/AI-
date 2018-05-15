import Vue from 'vue';
import Vuex from 'vuex';
// 导入子功能
import mutations from '@/store/mutations'
import actions from '@/store/actions'
import getters from '@/store/getters'

Vue.use(Vuex);

// 完善vuex部分
export default new Vuex.Store({
    strict: false, // 开发中启用严格模式
    state: {
        nav_state: 'mini', // 导航
        user: {}, // 用户信息存储
        user_token: '', // 用户toke菜单状态
        user_role: {}, // 用户权限存储
        user_menu: {}, // 用户权限菜单存储
        message_list: [],
        unReade_message: 0, // 未读消息条数
        password_reset: false, // 密码是否需要重置

    },
    getters,
    mutations,
    actions,
    modules: {

    }
})
