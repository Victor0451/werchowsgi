import { Werchow, SGI, Camp } from '../../libs/config'


export default async function handler(req, res) {

    const prisma = SGI

    const noti = await prisma.noticia.findFirst({
        where: {
            perfil: parseInt(req.query.per)
        },
        orderBy: {
            fecha: 'desc'
        }

    })
    res.status(200).json(noti)



}