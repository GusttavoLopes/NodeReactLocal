const { UsuarioModel } = require("../models");
const { generateToken, getToken } = require("../middlewares");

class UsuarioController {
    asynclogin(req, res) {
        let { mail, senha } = req.body;
        mail = (mail  "").toString().trim();
        senha = (senha  "").toString().trim();

        return await UsuarioModel.findOne({
            where: { mail },
        })
            .then(async (usuario) => {
                if (usuario) {
                    if (usuario.comparePassword(senha, usuario.senha)) {
                        // inclui no token o id e e-mail do usuário
                        const token = await generateToken({
                            idusuario: usuario.idusuario,
                            mail: usuario.mail
                        });
                        // envia para o cliente o token, idusuario e mail
                        return res.json({
                            token,
                            idusuario: usuario.idusuario,
                            mail: usuario.mail
                        });
                    } else
                        return res
                            .status(400)
                            .json({ error: "Dados de login não conferem" });
                } else return res
                    .status(400).json({ error: "Usuário não identificado" });

            })
            .catch((e) => {
                return res.status(400).json({ error: e.message });
            });
    }
    async create(req, res) {
        let { mail, senha } = req.body;
        senha = (senha || "").toString().trim();
        return await UsuarioModel.create({ mail, senha })
            .then(async (r) => {
                const { idusuario, mail } = r.get();
                return res.status(200).json({ idusuario, mail });
            })
            .catch((err) => {
                // pega os erros de validação emitidos pelo modelo do Sequelize
                if (err.errors.length > 0) {
                    return res.status(400).json({ error: err.errors[0].message });
                }
                else {
                    return res.status(400).json({ error: err.message });
                }
            });
    } async updatemail(req, res) {
        // obtém o idusuario que está no token
        const { idusuario } = awaitgetToken(req);
        let { mail } = req.body;
        return await UsuarioModel.findOne({ where: { idusuario } })
            .then(async (usuario) => {
                if (usuario) {
                    awaitusuario.update({ mail });
                    return res.json({ mail });
                } return res.status(400).json({ error: "Usuário não identificado" });
            }).catch((err) => {
                if (err.errors.length > 0) {
                    return res.status(400).json({ error: err.errors[0].message });
                }
                else {
                    return res.status(400).json({ error: err.message });
                }
            });
        }