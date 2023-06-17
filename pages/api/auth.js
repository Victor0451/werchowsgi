import { PrismaClient as WerchowsgiClient } from '../../prisma/generated/werchowsgi'

export default async function handler(req, res) {

    const prisma = new WerchowsgiClient();

    const noti = await prisma.noticia.findFirst({
        where: {
            perfil: parseInt(req.query.per)
        },
        orderBy:{
            fecha: 'desc'
        }

    })
    res.status(200).json(noti)



}