import { fetch } from './base'
export default {
    classify: {
        getClassify () {
            return fetch('get', 'sheet/list')
        },
        getList (id) {
            return fetch('get', 'sheet/list', { id: id })
        }
    }
}
