/**
 * RoleController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    // 701 dữ liệu gửi lên không hợp lệ
    // 702 có lỗi xảy ra, không có gì được thay đổi
    // 703 không tìm thấy dữ liệu trong database

    add: async (req, res) => {
        res.status(200);
        let code = 703, message = 'error';
        try {
            let { role } = req.param('data');
            role.roles = JSON.stringify(role.roles);
            let s = await Role.create(role).fetch();
            if (s) {
                code = 200;
                message = 'success';
            } else {
                code = 702;
            }
        } catch (error) {
            code = 701;
        }
        return res.json({ code, message });
    },

    delete: async (req, res) => {
        res.status(200);
        let code = 701, message = 'error', { id } = req.param('data');
        if (id) {
            let rs = await Role.destroy({ id: id }).fetch();
            if (rs && rs.length !== 0) {
                code = 200;
                message = 'success';
            } else {
                code = 702;
            }
        }
        return res.json({ code, message });
    },

    // t
    update: async (req, res) => {
        res.status(200);
        let code = 703, message = 'error';
        try {
            let { role } = req.param('data');
            role.roles = JSON.stringify(role.roles);
            let r = await Role.update({ id: role.id }, role).fetch();
            if (r) {
                code = 200;
                message = 'success';
            } else {
                code = 702;
            }
        } catch (error) {
            code = 701;
        }
        return res.json({ code, message });
    },

    // /major/getall/:page
    getAll: async (req, res) => {
        res.status(200);
        let code = 200, message = 'success', data = undefined, { page } = req.param('data') || 1;
        let {status} = req.param('data');
        let list = await Role.find({status: status}).limit(11).skip((page - 1) * 10).populate('status');
        if (list.length > 10) {
            data = {
                list: list.slice(0, 10),
                next: true
            }
        } else {
            data = {
                list,
                next: false
            }
        }
        return res.json({ code, message, data });
    },

    // /major/getone/:id
    getOne: async (req, res) => {
        res.status(200);
        let code = 703, message = 'error', data = undefined, { id } = req.param('data') || -1;
        data = await Role.findOne({ id: id });
        if (data) {
            code = 200;
            message = 'success';
        }
        return res.json({ code, message, data });
    },

    updateStatus: async (req, res) => {
        res.status(200);
        let code = 403, message = 'error';
        try {
            let { id, status } = req.param('data');
            let s = await Role.update({ id }).set({ status }).fetch();
            if (s) {
                code = 200;
                message = 'success';
            } else {
                code = 402;
            }
        } catch (error) {
            code = 401;
        }
        return res.json({ code, message });
    }

};

